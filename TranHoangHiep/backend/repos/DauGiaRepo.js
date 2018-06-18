var db = require('../fn/mysql-db');

exports.insertRecord = function(poco) {
    var sql = `INSERT INTO daugia(MaNguoiDau, MaSP, GiaDau) VALUES ((SELECT MaNguoiDung from nguoidung where Email='${poco.Email}'), ${poco.MaSP}, ${poco.GiaDau})`;
    return db.load(sql);
}

exports.BidLog = function(id) {
    var sql=`SELECT date_format(dg.ThoiGianDauGia, '%W %m/%d/%Y %l:%i %p') as ThoiGianDauGia, concat('xxx',RIGHT(nd.TenNguoiDung,3)) as TenNguoiDung, dg.GiaDau from daugia dg, nguoidung nd where dg.MaNguoiDau=nd.MaNguoiDung and dg.MaSP=${id} order by GiaDau desc`;
    return db.load(sql);
}

exports.updateCurPrice = function(poco) {
    var sql=`update sanpham set GiaHienTai=${poco.GiaDau} where MaSP=${poco.MaSP} `;
    return db.load(sql);
}