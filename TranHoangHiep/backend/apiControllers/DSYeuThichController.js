var express = require('express');
var userRepo = require('../repos/DSYeuThichRepo');
var router = express.Router();

router.post('/themsp', (req, res) => {
    userRepo.addItemToWishList(req.body)
        .then(poco => {
            var poco={
                Email: req.body.Email,
                MaSP: req.body.MaSP
            };
            res.statusCode = 201;
            res.json(req.body);
        })
        .catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.end();
        });
});

router.get('/getlist/:email', (req, res) => {
    if (req.params.email) {
        var email = req.params.email;
    }
    userRepo.getWishList(email).then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

module.exports = router;