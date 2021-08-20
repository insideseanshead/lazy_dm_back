module.exports = function(sequelize, DataTypes) {
    var Character = sequelize.define('Character', {
        name: DataTypes.STRING
    })

    Character.associate = function(models) {
        Character.belongsTo(models.Session)
    }

    return Character
}