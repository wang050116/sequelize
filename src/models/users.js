/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('users', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		extra: {
			type: DataTypes.STRING(16),
			allowNull: true
		}
	}, {
		tableName: 'users'
	});
};
