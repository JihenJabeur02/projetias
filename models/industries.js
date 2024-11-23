// models/Admin.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/index');

const industies = sequelize.define('industies', {
  IndustryId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  IndustryName: DataTypes.TEXT,
  IndustryCode: DataTypes.TEXT,
  Email: DataTypes.TEXT,
  Password: DataTypes.TEXT,
  IndustryLocation: DataTypes.TEXT,
}, {
  tableName: 'industies',
  timestamps: false,
});

module.exports = industies;