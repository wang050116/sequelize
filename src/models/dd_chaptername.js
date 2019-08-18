/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dd_chaptername', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		xs_chaptername: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		xs_content: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		id_name: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		num_id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		url: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'dd_chaptername'
	});
};
