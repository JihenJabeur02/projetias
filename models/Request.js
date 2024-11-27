// models/Admin.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/index');

const request = sequelize.define('request', {
  Id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  
  Date: DataTypes.TEXT,
  Price: DataTypes.TEXT,
  PaymentType: DataTypes.TEXT, 
  Status: DataTypes.TEXT,
  Requester: DataTypes.TEXT,
  Fulfiller: DataTypes.TEXT
}, 
{
  tableName: 'request',
  timestamps: false,
});

module.exports = request;