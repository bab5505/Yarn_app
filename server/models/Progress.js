const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Progress = sequelize.define('Progress', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  description: { type: DataTypes.TEXT },
  date_completed: { type: DataTypes.DATE },
});

module.exports = Progress;
