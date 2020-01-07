const Sequelize = require('sequelize');

const sequelize = new Sequelize("tweeter_clone",'root','chinonxo',{
  host: '127.0.0.1',
  dialect: "mysql",
  operatorsAliases: false
});

module.exports = sequelize;
global.sequelize = sequelize;  // With this last line, I can use the variable 'sequelize' accross  the project without having to import it into every file.