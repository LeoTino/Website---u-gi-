var express = require('express'),
    bodyParser = require('body-parser')
    morgan = require('morgan')
    cors = require('cors');

var sanphamCtrl = require('./apiControllers/SanPhamController');
var timkiemCtrl = require('./apiControllers/TimKiemController');
var chitietspCtrl = require('./apiControllers/ChiTietSanPhamController');
var dangkyCtrl = require('./apiControllers/DangKyController');
var loginCtrl=require('./apiControllers/LoginController');
var changeinfoCtrl=require('./apiControllers/QuanLiThongTinController');
var dsyeuthichCtrl=require('./apiControllers/DSYeuThichController');
var daugiaCtrl=require('./apiControllers/DauGiaController');
var quyendangbanCtrl=require('./apiControllers/QuyenDangBanController');

var app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    // res.end('hello from nodejs');
    var ret = {
        msg: 'hello from nodejs api'
    };
    res.json(ret);
});

app.use('/sanpham', sanphamCtrl);
app.use('/timkiem', timkiemCtrl);
app.use('/chitiet', chitietspCtrl);
app.use('/dangky', dangkyCtrl);
app.use('/login', loginCtrl);
app.use('/changeinfo', changeinfoCtrl);
app.use('/wishlist',dsyeuthichCtrl);
app.use('/daugia',daugiaCtrl);
app.use('/quyendangban',quyendangbanCtrl);

app.listen(3000, () => {
    console.log('API running on port 3000');
});