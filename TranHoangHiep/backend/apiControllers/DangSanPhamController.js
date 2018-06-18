var express = require('express');
var sanPhamRepo = require('../repos/DangSanPhamRepo');
var router = express.Router();

router.post('/themSP', (req, res) => {
    sanPhamRepo.ThemSP(req.body)
        .then(poco => {
            var poco={
                TenSP: req.body.TenSP,
                GiaMuaNgay: req.body.GiaMuaNgay,
                GiaKD: req.body.GiaKD,
                ThoiGianDangSP: req.body.ThoiGianDangSP,
                Hinh1: req.body.Hinh1,
                Hinh2: req.body.Hinh2,
                Hinh3: req.body.Hinh3,
                Email: req.body.Email,
                BuocGia: req.body.BuocGia,
                isAuto: req.body.isAuto
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

router.post('/themMoTa', (req, res) => {
    sanPhamRepo.ThemMoTa(req.body)
        .then(poco => {
            var poco={
                TenSP: req.body.TenSP,
                MoTa: req.body.MoTa
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

//them bang ma sp va mota
router.post('/themMoTa2', (req, res) => {
    sanPhamRepo.ThemMoTa2(req.body)
        .then(poco => {
            var poco={
                MaSP: req.body.MaSP,
                MoTa: req.body.MoTa
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

module.exports=router;