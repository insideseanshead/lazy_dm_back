module.exports = function(sequelize, DataTypes) {
    var Session = sequelize.define('Session', {
        name: DataTypes.string,
        strongStart: DataTypes.Text
    });

    Session.associate = function(models) {
        Session.hasMany(models.Character);
        Session.hasMany(models.Scene);
        Session.hasMany(models.Clue);
        Session.hasMany(models.Location);
        Session.hasMany(models.Npc);
        Session.hasMany(models.Monster);
        Session.hasMany(models.Reward);
        Session.belongsTo(models.User);
    }

    return Session;
}