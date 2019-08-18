/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('person', {
		nid: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		favor_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'favor',
				key: 'nid'
			}
		}
	}, {
		tableName: 'person'
	});
};
