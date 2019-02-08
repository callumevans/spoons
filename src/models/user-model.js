module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        name: { type: DataTypes.TEXT, notNull: true }
    }, {
        timestamps: false
    })
};
