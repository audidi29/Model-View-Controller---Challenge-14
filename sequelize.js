const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'mysql', // or 'sqlite' for SQLite
  storage: 'path/to/database.sqlite', // only for SQLite
});

const Sequelize = require('sequelize');
const sequelize = require('./sequelize');

module.exports = sequelize;
