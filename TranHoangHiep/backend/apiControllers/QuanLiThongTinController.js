var express = require('express');
var sanPhamRepo = require('../repos/QuanLiThongTinRepo');
var router = express.Router();

router.get('/get/:email', (req, res) => {
    if (req.params.email) {
        var email = req.params.email;


        sanPhamRepo.loadNguoiDung(email).then(rows => {
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

router.post('/setinfo', (req, res) => {
    sanPhamRepo.setNguoiDung(req.body)
        .then(poco => {
            var poco={
                NewEmail: req.body.NewEmail,
                Password: req.body.Password,
                Email: req.body.Email,
                HoTen: req.body.HoTen
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

router.get('/diemdanhgia/:email', (req, res) => {
    if (req.params.email) {
        var email = req.params.email;
    }
    sanPhamRepo.getDiemDanhGia(email).then(rows => {
        res.json(rows[0]);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

router.get('/nhanxet/:email', (req, res) => {
    if (req.params.email) {
        var email = req.params.email;
    }
    sanPhamRepo.getNhanXetNguoiMua(email).then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

router.get('/wishlist/:email', (req, res) => {
    if (req.params.email) {
        var email = req.params.email;
    }
    sanPhamRepo.getWishList(email).then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

router.get('/spdangdg/:email', (req, res) => {
    if (req.params.email) {
        var email = req.params.email;
    }
    sanPhamRepo.getSPDangDauGia(email).then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

router.get('/spdangban/:email', (req, res) => {
    if (req.params.email) {
        var email = req.params.email;
    }
    sanPhamRepo.getSPDangBan(email).then(rows => {
        res.json(rows);
    }).catch(err => {
        console.log(err);
        res.statusCode = 500;
        res.end('View error log on console.');
    });
});

module.exports = router;

