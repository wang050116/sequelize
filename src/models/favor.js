/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('favor', {
		nid: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		caption: {
			type: DataTypes.STRING(50),
			allowNull: true,
			unique: true
		}
	}, {
		tableName: 'favor'
	});
};
