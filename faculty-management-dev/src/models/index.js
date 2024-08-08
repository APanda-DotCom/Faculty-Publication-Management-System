import  Sequelize  from "sequelize";
import config from "../config";
import fs from "fs";
import path from "path";


const dbConfig=config.database.mysql

const db={};
 const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host:dbConfig.host,
    port:dbConfig.port,
    timezone:dbConfig.timezone,
    dialect:"mysql",
  });

  fs.readdirSync(__dirname)
  .filter((file) => file.indexOf('.') !== 0 && file !== 'index.js')
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes,
    );
    db[model.name] = model;
  });

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
    if (db[modelName].seedData) {
      db[modelName].seedData(config);
    }
    if (db[modelName].loadScopes) {
      db[modelName].loadScopes(db);
    }
  });
 


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

  