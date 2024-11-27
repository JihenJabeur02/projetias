// models/Admin.js
const { DataTypes } = require('sequelize');
const sequelize = require('../db/index');

const Cart = sequelize.define('Cart', {
    Id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  
  Road: DataTypes.TEXT,
  DepartureDate: DataTypes.DATE,
  ArrivelDate: DataTypes.TEXT,
  CartStatus: DataTypes.TEXT,
  IndStatus: DataTypes.TEXT,
}, {
  tableName: 'Cart',
  timestamps: false,
});

module.exports = Cart;