var db = require('../fn/mysql-db');

exports.loadDS = function() {
    var sql = `select MaNguoiDung, TenNguoiDung, Email, isDelete from nguoidung where LoaiNguoiDung <> 'admin' `;
    return db.load(sql);
}

exports.resetMK = function(id) {
    var sql = `update nguoidung set MatKhau='000000' where MaNguoiDung=${id}`;
    return db.load(sql);
}

exports.xoaTK = function(id) {
    var sql = `update nguoidung set isDelete='yes' where MaNguoiDung=${id}`;
    return db.load(sql);
}
