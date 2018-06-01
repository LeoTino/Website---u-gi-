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

exports.add = function(poco) {
    var sql = `insert into categories(TenSP) values('${poco.TenSP}')`;
    return db.insert(sql);
}

exports.delete = function(id) {
    var sql = `delete from sanpham where MaSP = ${id}`;
    return db.delete(sql);
}