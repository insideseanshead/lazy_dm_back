module.exports = function(sequelize, DataTypes) {
    var Reward = sequelize.define('Reward', {
        name: DataTypes.STRING
    })

    Reward.associate = function(models) {
        Reward.belongsTo(models.Session)
    }

    return Reward
}