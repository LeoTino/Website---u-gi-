var express = require('express');
var sanPhamRepo = require('../repos/ChiTietSanPhamRepo');
var router = express.Router();

router.get('/ttsp/:query', (req, res) => {
    if (req.params.query) {
        var query = req.params.query;

        if (isNaN(query)) {
            res.statusCode = 400;
            res.end();
            return;
        }

        sanPhamRepo.loadThongTinSP(query).then(rows => {
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

router.get('/giugiamax/:query', (req, res) => {
    if (req.params.query) {
        var query = req.params.query;

        if (isNaN(query)) {
            res.statusCode = 400;
            res.end();
            return;
        }

        sanPhamRepo.loadNguoiGiuGiaMax(query).then(rows => {
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

router.get('/mota/:query', (req, res) => {
    if (req.params.query) {
        var query = req.params.query;

        if (isNaN(query)) {
            res.statusCode = 400;
            res.end();
            return;
        }

        sanPhamRepo.loadMotaSP(query).then(rows => {
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

router.get('/hinhanh/:query', (req, res) => {
    if (req.params.query) {
        var query = req.params.query;

        if (isNaN(query)) {
            res.statusCode = 400;
            res.end();
            return;
        }

        sanPhamRepo.loadHinhAnhSP(query).then(rows => {
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

router.get('/emailnguoiban/:query', (req, res) => {
    if (req.params.query) {
        var query = req.params.query;

        if (isNaN(query)) {
            res.statusCode = 400;
            res.end();
            return;
        }

        sanPhamRepo.loadEmailNguoiBan(query).then(rows => {
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


module.exports = router;