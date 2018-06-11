var db = require('../fn/mysql-db');
var md5 = require('md5');

exports.loadLoginData = function(query) {
    var sql = `select Email, MatKhau, isDelete, LoaiNguoiDung from nguoidung`;
    return db.load(sql);
}

exports.setLogin = function (email) {
    var sql = `update nguoidung set isLogin='yes' where Email='${email}'`;
    return db.insert(sql);
}

