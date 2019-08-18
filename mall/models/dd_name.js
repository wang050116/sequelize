/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dd_name', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		xs_name: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		xs_author: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		category: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		name_id: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'dd_name'
	});
};
