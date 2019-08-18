/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('notices', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		content: {
			type: DataTypes.STRING(9000),
			allowNull: false
		},
		title: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		startDate: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		expireDate: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		gmId: {
			type: DataTypes.INTEGER(10),
			allowNull: false
		},
		createAt: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		updateAt: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		version: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
		status: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'notices'
	});
};
