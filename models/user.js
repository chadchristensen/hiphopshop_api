const { sequelize, Sequelize } = require('../db');

class User extends Sequelize.Model {}

User.init({}, sequelize);
