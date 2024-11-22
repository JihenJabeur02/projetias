// models/Admin.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/index');

const products = sequelize.define('products', {
  ProductId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  ProductName: DataTypes.TEXT,
  ProductCode: DataTypes.TEXT,
  description: DataTypes.TEXT
}, 
{
  tableName: 'products',
  timestamps: false,
});

module.exports = products;