module.exports = function(sequelize, DataTypes) {
    var Scene = sequelize.define('Scene', {
        scene: DataTypes.STRING
    })

    Scene.associate = function(models) {
        Scene.belongsTo(models.Session)
    }

    return Scene
}