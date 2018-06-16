var express = require('express');
var sanPhamRepo = require('../repos/QuyenDangBanRepo');
var router = express.Router();

router.get('/get/:email', (req, res) => {
    if (req.params.email) {
        var email = req.params.email;


        sanPhamRepo.getQuyenDangBan(email).then(rows => {
            if (rows.length > 0) {
                res.json(rows[0]);
            } else {
                res.statusCode = 204;
                res.end();
            }
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

router.post('/themdangky', (req, res) => {
    sanPhamRepo.dangKyDangBan(req.body)
        .then(poco => {
            var poco={
                MaND: req.body.MaND
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

router.get('/getycdb/:email', (req, res) => {
    if (req.params.email) {
        var email = req.params.email;


        sanPhamRepo.getYeuCauDB(email).then(rows => {
            if (rows.length > 0) {
                res.json(rows[0]);
            } else {
                res.statusCode = 204;
                res.end();
            }
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

module.exports=router;