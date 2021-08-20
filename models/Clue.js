module.exports = function(sequelize, DataTypes) {
    var Clue = sequelize.define('Clue', {
        clue: DataTypes.STRING
    })

    Clue.associate = function(models) {
        Clue.belongsTo(models.Session)
    }

    return Clue
}