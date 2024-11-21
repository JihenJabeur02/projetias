// models/Admin.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/index');

const Industies = sequelize.define('Industies', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  code: DataTypes.TEXT,
  email: DataTypes.TEXT,
  password: DataTypes.TEXT,
  location: DataTypes.TEXT,
}, {
  tableName: 'Industies',
  timestamps: false,
});

module.exports = Industies;