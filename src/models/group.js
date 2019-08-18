/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('group', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(64),
			allowNull: false,
			unique: true
		},
		port: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'group'
	});
};
