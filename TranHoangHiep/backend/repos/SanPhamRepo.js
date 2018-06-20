var db = require('../fn/mysql-db');

exports.loadAll = function() {
    var sql = 'select * from sanpham';
    return db.load(sql);
}

exports.load = function(id) {
    var sql = `select * from sanpham where MaSP = ${id}`;
    return db.load(sql);
}

exports.loadByBiddedCount = function() {
    var sql = `select DISTINCT sp.MaSP, sp.TenSP,sp.GiaKhoiDiem, sp.GiaMuaNgay,sp.Hinh1 from sanpham sp, daugia d where sp.MaSP=d.MaSP group by sp.MaSP order by COUNT(d.MaNguoiDau) desc limit 5 `;
    return db.load(sql);
}

exports.loadByPrice = function() {
    var sql = `select DISTINCT sp.MaSP, sp.TenSP,sp.GiaKhoiDiem, sp.GiaMuaNgay,sp.Hinh1 from sanpham sp group by sp.MaSP order by sp.GiaMuaNgay desc limit 5 `;
    return db.load(sql);
}

exports.loadByExpireTime = function() {
    var sql = `SELECT DISTINCT MaSP, TenSP, GiaMuaNgay, Hinh1, TIMEDIFF(TimeKetThuc,NOW()) as TimeDistance from sanpham where TIME_TO_SEC(TIMEDIFF(now(),TimeKetThuc))<0 ORDER BY TimeDistance asc LIMIT 5`;
    return db.load(sql);
}

exports.loadByDanhMuc = function() {
    var sql = `SELECT DISTINCT MaSP, TenSP, GiaMuaNgay, Hinh1, TIMEDIFF(TimeKetThuc,NOW()) as TimeDistance from sanpham ORDER BY TimeDistance asc LIMIT 5`;
    return db.load(sql);
}

exports.getThongTinDauGia = function(id) {
    var sql = `SELECT GiaKhoiDiem, GiaMuaNgay, GiaHienTai, BuocGia from sanpham where MaSP=${id}`;
    return db.load(sql);
}


exports.delete = function(id) {
    var sql = `delete from sanpham where MaSP = ${id}`;
    return db.delete(sql);
}