module.exports = function(sequelize, DataTypes) {
    var Monster = sequelize.define('Monster', {
        name: DataTypes.STRING
    })

    Monster.associate = function(models) {
        Monster.belongsTo(models.Session)
    }

    return Monster
}