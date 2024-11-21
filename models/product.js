// models/Admin.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/index');

const products = sequelize.define('products', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  prodcode: DataTypes.TEXT,
  code: DataTypes.TEXT,
  prodid: DataTypes.TEXT,
  description: DataTypes.TEXT,
}, {
  tableName: 'products',
  timestamps: false,
});

module.exports = products;