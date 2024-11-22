// models/Admin.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/index');

const request = sequelize.define('request', {
  OrderId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  IndustryCode_Requester: DataTypes.TEXT,
  IndustryId_Requester: DataTypes.TEXT,
  IndustryId_FullFiller: DataTypes.TEXT,
  Productid: DataTypes.TEXT,
  QuantityRequested: DataTypes.TEXT,
  Date_of_the_command: DataTypes.TEXT,
  TotalPrice: DataTypes.TEXT,
  PaymentType: DataTypes.TEXT,
  
}, 
{
  tableName: 'request',
  timestamps: false,
});

module.exports = request;