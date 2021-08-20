module.exports = function(sequelize, DataTypes) {
    var NPC = sequelize.define('NPC', {
        name: DataTypes.STRING,
        description: DataTypes.STRING
    })

    NPC.associate = function(models) {
        NPC.belongsTo(models.Session)
    }

    return NPC
}