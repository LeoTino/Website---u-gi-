var md5 = require('md5');
var db = require('../fn/mysql-db');

exports.addNguoiDung = function (poco) {

    var md5_password = md5(poco.Password);

    var sql = `insert into nguoidung(TenNguoiDung, TenDangNhap, MatKhau, DiaChi, Email, isDelete, LoaiNguoiDung) values('${poco.HoTen}','${poco.Username}', '${md5_password}', '${poco.DiaChi}', '${poco.Email}', 'no','mua')`;
    return db.insert(sql);
}