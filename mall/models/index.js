'use strict';
 
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/db');
 
if(process.env.NODE_ENV == 'production') config['logging'] = false;
 
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db = {};
 
fs.readdirSync(__dirname)
  .filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
  })
  .forEach((file) => {
    var model = sequelize.import(path.join(__dirname, file));
    db[_.upperFirst(model.name)] = model;
  });
 
db.sequelize = sequelize;
 
module.exports = db;
