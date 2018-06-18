var express = require('express');
var sanPhamRepo = require('../repos/DauGiaRepo');
var router = express.Router();

router.post('/themgiaodich', (req, res) => {
    sanPhamRepo.insertRecord(req.body)
        .then(poco => {
            var poco={
                Email: req.body.Email,
                MaSP: req.body.MaSP,
                GiaDau: req.body.GiaDau
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

router.post('/capnhatgiahientai', (req, res) => {
    sanPhamRepo.updateCurPrice(req.body)
        .then(poco => {
            var poco={
                MaSP: req.body.MaSP,
                GiaDau: req.body.GiaDau
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

router.get('/bidlog/:id', (req, res) => {
    if (req.params.id) {
        var id = req.params.id;

        if (isNaN(id)) {
            res.statusCode = 400;
            res.end();
            return;
        }

        sanPhamRepo.BidLog(id).then(rows => {
            if (rows.length > 0) {
                res.json(rows);
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

module.exports = router;