var db = require('../fn/mysql-db');

exports.getQuyenDangBan = function(email) {
    var sql = `select MaNguoiDung, QuyenDangBan from nguoidung where Email='${email}' `;
    return db.load(sql);
}

exports.dangKyDangBan = function(poco) {
    var sql = `insert into yeucaudangban(MaNguoiYeuCau) value(N'${poco.MaND}') `;
    return db.load(sql);
}

exports.getYeuCauDB = function(email) {
    var sql = `select * from yeucaudangban where MaNguoiYeuCau= (select MaNguoiDung from nguoidung where Email='${email}') `;
    return db.load(sql);
}