var express = require('express');

var userRepo = require('../repos/LoginRepo');

var router = express.Router();

router.post('/logindata', (req, res) => {
    userRepo.loadLoginData().then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

router.get('/setlogin/:email', (req, res) => {
    if (req.params.email) {
        var email = req.params.email;
        userRepo.setLogin(email).then(affectedRows => {
            res.json({
                affectedRows: affectedRows
            });
        }).catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.json('error');
        });
    } else {
        res.statusCode = 400;
        res.json('error');
    }
});
module.exports = router;