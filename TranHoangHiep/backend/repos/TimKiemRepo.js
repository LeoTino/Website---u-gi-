var db = require('../fn/mysql-db');


exports.loadKetQua = function(query) {
    var sql = `select DISTINCT sp.MaSP, sp.TenSP, COUNT(dg.MaSP)-1 as SoLuotDauGia , TIMEDIFF(sp.TimeKetThuc,NOW()) as TimeDistance, concat('xxxxxx',RIGHT(TenNguoiDung, 5)) as TenND, sp.GiaHienTai, sp.GiaMuaNgay,sp.Hinh1 from sanpham sp, nguoidung nd, daugia dg where sp.MaSP=dg.MaSP AND MaNguoiBan=MaNguoiDung AND TenSP like '%${query}%' GROUP BY dg.MaSP`;
    return db.load(sql);
}

exports.loadKetQuaByTime = function(query) {
    var sql = `select DISTINCT sp.MaSP, sp.TenSP, COUNT(dg.MaSP)-1 as SoLuotDauGia , TIMEDIFF(sp.TimeKetThuc,NOW()) as TimeDistance, concat('xxxxxx',RIGHT(TenNguoiDung, 5)) as TenND, sp.GiaHienTai, sp.GiaMuaNgay,sp.Hinh1 from sanpham sp, nguoidung nd, daugia dg where sp.MaSP=dg.MaSP AND MaNguoiBan=MaNguoiDung AND TenSP like '%${query}%' GROUP BY dg.MaSP ORDER BY TimeKetThuc DESC`;
    return db.load(sql);
}

exports.loadKetQuaByPrice = function(query) {
    var sql = `select DISTINCT sp.MaSP, sp.TenSP, COUNT(dg.MaSP)-1 as SoLuotDauGia , TIMEDIFF(sp.TimeKetThuc,NOW()) as TimeDistance, concat('xxxxxx',RIGHT(TenNguoiDung, 5)) as TenND, sp.GiaHienTai, sp.GiaMuaNgay,sp.Hinh1 from sanpham sp, nguoidung nd, daugia dg where sp.MaSP=dg.MaSP AND MaNguoiBan=MaNguoiDung AND TenSP like '%${query}%' GROUP BY dg.MaSP ORDER BY GiaHienTai asc`;
    return db.load(sql);
}


/*exports.loadAll = function() {
    var sql = 'select * from sanpham';
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
    var sql = `SELECT DISTINCT MaSP, TenSP, GiaMuaNgay, Hinh1, TIMEDIFF(TimeKetThuc,NOW()) as TimeDistance from sanpham ORDER BY TimeDistance asc LIMIT 5`;
    return db.load(sql);
}


exports.delete = function(id) {
    var sql = `delete from sanpham where MaSP = ${id}`;
    return db.delete(sql);
}*/