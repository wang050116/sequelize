var SequelizeAuto = require('sequelize-auto')
var auto = new SequelizeAuto('mason', 'root', '050116');

// // With options:
// var auto = new SequelizeAuto('mason', 'root', '050116', {
//   host: 'localhost',
//   // dialect: 'mysql' | 'mariadb' | 'sqlite' | 'postgres' | 'mssql',
//   dialect:'mysql',
//   directory: 'models', // prevents the program from writing to disk
//   port: '3306',
//   path:'/models',
//   additional: {
//     timestamps: false
//   },
//   // tables: ['pets', 'users', 'server'],  
//   output:'models'
// })


auto.run(function (err) {
  if (err) throw err;

  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});
