const db = require('../db');

module.exports = (app) => {
    app.get('/users', (req, res) => {
        db.user.findAll().then((users) => {
            res.render('users', { users: users })
        })
    });
};
