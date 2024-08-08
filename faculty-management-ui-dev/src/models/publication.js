

module.exports = (sequelize, DataTypes) => {
  const Publication = sequelize.define("publication", {
    author: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    journal: {
      type: DataTypes.STRING,
    },
    visibility: {
      type: DataTypes.STRING,
    },
    volume: {
      type: DataTypes.STRING,
    },
    number: {
      type: DataTypes.STRING,
    },
    issue: {
      type: DataTypes.STRING,
    },
    pageNumber: {
      type: DataTypes.STRING,
    },
    year: {
      type: DataTypes.STRING,
    },
    issnNumber: {
      type: DataTypes.STRING,
    },

    indexing: {
      type: DataTypes.STRING,
    },
    
    impactFactor :{
      type: DataTypes.STRING,
   
    },

    doi: {
      type: DataTypes.STRING,
    },

  });
  Publication.associate = (models) => {
    Publication.belongsTo(models.user, {
      foreignKey: 'userId',
      onDelete: 'cascade',
    });
  };

  return Publication;
};
