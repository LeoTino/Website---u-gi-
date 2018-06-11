var db = require('../fn/mysql-db');

exports.addItemToWishList = function(poco) {
    var sql = `insert into danhsachyeuthich(MaSP,MaNguoiDung) VALUES (${poco.MaSP}, (SELECT nguoidung.MaNguoiDung FROM nguoidung WHERE nguoidung.Email='${poco.Email}'))`;
    return db.insert(sql);
}

exports.getWishList = function(Email) {
    var sql = `SELECT ds.MaSP from danhsachyeuthich ds WHERE ds.MaNguoiDung=(SELECT nd.MaNguoiDung FROM nguoidung nd where nd.Email='${Email}' LIMIT 1)`;
    return db.load(sql);
}

