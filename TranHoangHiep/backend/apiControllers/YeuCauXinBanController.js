var express = require('express');
var sanPhamRepo = require('../repos/YeuCauXinBanRepo');
var router = express.Router();

router.get('/loadyeucau', (req, res) => {
    sanPhamRepo.loadYeuCau().then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

router.get('/duyetyeucau/:id', (req, res) => {
    if (req.params.id) {
        var id = req.params.id;

        if (isNaN(id)) {
            res.statusCode = 400;
            res.end();
            return;
        }

        sanPhamRepo.duyetYeuCau(id).then(rows => {
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

router.get('/capnhatquyen/:id', (req, res) => {
    if (req.params.id) {
        var id = req.params.id;

        if (isNaN(id)) {
            res.statusCode = 400;
            res.end();
            return;
        }

        sanPhamRepo.udQuyenBan(id).then(rows => {
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