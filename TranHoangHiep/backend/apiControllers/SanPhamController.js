var express = require('express');
var sanPhamRepo = require('../repos/SanPhamRepo');
var router = express.Router();


router.get('/', (req, res) => {
    sanPhamRepo.loadAll().then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

router.get('/top5', (req, res) => {
    sanPhamRepo.loadByBiddedCount().then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

//
// categories/5

router.get('/:id', (req, res) => {
    if (req.params.id) {
        var id = req.params.id;

        if (isNaN(id)) {
            res.statusCode = 400;
            res.end();
            return;
        }

        sanPhamRepo.load(id).then(rows => {
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

router.post('/', (req, res) => {
    sanPhamRepo.add(req.body)
        .then(insertId => {
            var poco = {
                MaSP: insertId,
                TenSP: req.body.TenSP
            };
            res.statusCode = 201;
            res.json(poco);
        })
        .catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.end();
        });
});


router.delete('/:id', (req, res) => {
    if (req.params.id) {
        var id = req.params.id;

        if (isNaN(id)) {
            res.statusCode = 400;
            res.end();
            return;
        }

        sanPhamRepo.delete(id).then(affectedRows => {
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