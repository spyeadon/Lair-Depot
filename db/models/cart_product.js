const db = require('../index.js');
const Sequelize = require('sequelize');

const cart_product = db.define('cart_product', {
  quantity: {
    type: Sequelize.INTEGER
  }
});

module.exports = cart_product;
