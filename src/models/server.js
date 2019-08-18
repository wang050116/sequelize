/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('server', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		hostname: {
			type: DataTypes.STRING(64),
			allowNull: false,
			unique: true
		}
	}, {
		tableName: 'server'
	});
};
