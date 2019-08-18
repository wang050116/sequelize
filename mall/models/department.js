
"use strict";
 
const T = require('sequelize');
const department = {
	id:{type:T.INTEGER.UNSIGNED,primaryKey:true,autoIncrement:true},
	name:{type:T.STRING,allowNull:false,defaultValue:''}
};
module.exports = function(sequelize){
	return sequelize.define('department',department,{
		'timestamps':false
	});
}
