/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('servertogroup', {
		nid: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		server_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'server',
				key: 'id'
			}
		},
		group_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'group',
				key: 'id'
			}
		}
	}, {
		tableName: 'servertogroup'
	});
};
