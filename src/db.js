const Sequelize = require('sequelize');

const sequelize  = new Sequelize('database', '', '', {
    dialect: 'sqlite',
    pool: {
        max: 1,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    storage: 'src/database.db'
});

const db = {};

db.user = sequelize.import('./models/user-model');

sequelize.sync();

module.exports = db;
