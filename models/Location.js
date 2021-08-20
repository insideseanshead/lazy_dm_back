module.exports = function(sequelize, DataTypes) {
    var Location = sequelize.define('Location', {
        name: DataTypes.STRING,
        description: DataTypes.STRING
    })

    Location.associate = function(models) {
        Location.belongsTo(models.Session)
    }

    return Location
}