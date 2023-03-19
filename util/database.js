const Sequelize = require("sequelize");

const sequelize = new Sequelize("candyshop", "root", "rootuser", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
