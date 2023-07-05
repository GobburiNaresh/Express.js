//connecting sequelize database to node.js server
const Sequelize = require('sequelize');

const sequelize = new Sequelize ('node-complete','root','NAResh@123',{
    dialect:'mysql',
    host :'localHost'
});

module.exports = sequelize;