'use strict';
 
const T=require('sequelize');
 
const employee = {
	id:{type:T.INTEGER.UNSIGNED,primaryKey:true,autoIncrement:true},
   name:{type:T.STRING(20),allowNull:false},
   age:{type:T.INTEGER,allowNull:false,defaultValue:1},
   email:{type:T.STRING(20),allowNull:false},
   depart_id:{type:T.INTEGER.UNSIGNED,allowNull:false}
};
 
module.exports = function(sequelize){
	return sequelize.define('employee',employee,{
		'timestamps': false,
		'indexes':[{name:'idx_employee',fields:['name'],uniq:true}]
	});
};
