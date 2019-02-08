module.exports = function (sequelize, DataTypes) {
    return sequelize.define('admin', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        email: { type: DataTypes.TEXT, unique: true },
        password: { type: DataTypes.TEXT, notNull: true }
    }, {
        timestamps: false
    })
};
