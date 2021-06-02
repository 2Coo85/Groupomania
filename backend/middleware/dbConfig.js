const Sequelize = require("sequelize");
module.exports = new Sequelize("sa","GroupoMania","Mania01",{
    host:"localhost", 
    dialect:"mssql"
});