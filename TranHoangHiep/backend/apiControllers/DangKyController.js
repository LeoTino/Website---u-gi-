var express = require('express'),
    axios = require('axios');

var userRepo = require('../repos/DangKyRepo');

var router = express.Router();

router.post('/', (req, res) => {
    userRepo.addNguoiDung(req.body)
        .then(poco => {
            var poco={
                Username: req.body.Username,
                Password: req.body.Password,
                DiaChi:req.body.DiaChi,
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

router.post('/captcha', (req, res) => {
    var secret = '6LchEV0UAAAAAJnodGqHGn3TCkli4dY8lWRjyCWJ';
    var captcha_response = req.body.captcha_response;

    var url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${captcha_response}`;
    axios.post(url, {
        //secret: secret,
        //response: captcha_response
    }, {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
        }
    })
        .then(function(response) {
            //console.log(response.data);
            //res.end('ok');
            res.json(response.data);
        })
        .catch(function(error) {
            res.end('fail');
        });
});

module.exports = router;