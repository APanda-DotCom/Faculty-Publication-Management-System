'use strict';

const bcrypt = require('bcrypt');
const table = "users";

const listArray = [
  {
    name: "admin",
    email: "admin@gmail.com",
    password: "admin@123",
    role: "admin"
  }
];

const hashPassword = async (password) => {
  const salt = bcrypt.genSaltSync(10);
  const hashPassword = await bcrypt.hash(password, salt);
  return hashPassword;
};

const createData = async (listArray) => {
  const data = await Promise.all(listArray.map(async (element, index) => ({
    userName: element.name,
    email: element.email,
    password: await hashPassword(element.password),
    role: element.role,
    createdAt: new Date(),
    updatedAt: new Date(),
  })));
  return data;
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    try {
      const data = await createData(listArray);
      await queryInterface.bulkInsert(table, data, {});
    } catch (error) {
      console.error('Bulk insert error:', error);
    }
  },

  down: async (queryInterface, Sequelize) => {
    try {
      await queryInterface.bulkDelete(table, { email: "admin@gmail.com" }, {});
    } catch (error) {
      console.error('Bulk delete error:', error);
    }
  }
};
