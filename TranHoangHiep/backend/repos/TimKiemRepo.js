var db = require('../fn/mysql-db');


exports.loadKetQua = function(query) {
    var sql = `select DISTINCT sp.MaSP, sp.TenSP, (COUNT(dg.MaSP)/2)-1 as SoLuotDauGia , TIMEDIFF(sp.TimeKetThuc,NOW()) as TimeDistance, concat('xxx',RIGHT((SELECT nd1.TenNguoiDung from sanpham sp1, nguoidung nd1, daugia dg1 where sp.MaSP=sp1.MaSP AND dg1.MaSP=sp1.MaSP AND nd1.MaNguoiDung= dg1.MaNguoiDau order by dg1.id DESC LIMIT 1), 3)) as TenND, sp.GiaHienTai, sp.GiaMuaNgay,sp.Hinh1 from sanpham sp, nguoidung nd, daugia dg where sp.MaSP=dg.MaSP AND TenSP like '%${query}%' GROUP BY dg.MaSP`;
    return db.load(sql);
}

exports.loadKetQuaByTime = function(query) {
    var sql = `select DISTINCT sp.MaSP, sp.TenSP, COUNT(dg.MaSP)-1 as SoLuotDauGia , TIMEDIFF(sp.TimeKetThuc,NOW()) as TimeDistance, concat('xxx',RIGHT((SELECT nd1.TenNguoiDung from sanpham sp1, nguoidung nd1, daugia dg1 where sp.MaSP=sp1.MaSP AND dg1.MaSP=sp1.MaSP AND nd1.MaNguoiDung= dg1.MaNguoiDau order by dg1.id DESC LIMIT 1), 3)) as TenND, sp.GiaHienTai, sp.GiaMuaNgay,sp.Hinh1 from sanpham sp, nguoidung nd, daugia dg where sp.MaSP=dg.MaSP AND MaNguoiBan=MaNguoiDung AND TenSP like '%${query}%' GROUP BY dg.MaSP ORDER BY TimeKetThuc DESC`;
    return db.load(sql);
}

exports.loadKetQuaByPrice = function(query) {
    var sql = `select DISTINCT sp.MaSP, sp.TenSP, COUNT(dg.MaSP)-1 as SoLuotDauGia , TIMEDIFF(sp.TimeKetThuc,NOW()) as TimeDistance, concat('xxx',RIGHT((SELECT nd1.TenNguoiDung from sanpham sp1, nguoidung nd1, daugia dg1 where sp.MaSP=sp1.MaSP AND dg1.MaSP=sp1.MaSP AND nd1.MaNguoiDung= dg1.MaNguoiDau order by dg1.id DESC LIMIT 1), 3)) as TenND, sp.GiaHienTai, sp.GiaMuaNgay,sp.Hinh1 from sanpham sp, nguoidung nd, daugia dg where sp.MaSP=dg.MaSP AND MaNguoiBan=MaNguoiDung AND TenSP like '%${query}%' GROUP BY dg.MaSP ORDER BY GiaHienTai asc`;
    return db.load(sql);
}

exports.loadDanhMuc = function(query) {
    var sql=`select MaDM, TenDM from danhmuc`;
    return db.load(sql);
}
