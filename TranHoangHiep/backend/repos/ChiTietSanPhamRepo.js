var db = require('../fn/mysql-db');

exports.loadThongTinSP = function(query) {
    var sql = `SELECT sp.TenSP, sp.GiaHienTai, sp.GiaMuaNgay, nd.TenNguoiDung as TenNguoiBan, nd.DiemDanhGia, date_format(sp.TimeDangSP, '%W %m/%d/%Y %l:%i %p') TimeDangSP, date_format(sp.TimeKetThuc, '%W %m/%d/%Y %l:%i %p') TimeKetThuc  from sanpham sp, nguoidung nd  where sp.MaNguoiBan=nd.MaNguoiDung and sp.MaSP=${query}`;
    return db.load(sql);
}

exports.loadNguoiGiuGiaMax = function(query) {
    var sql=`select nd.TenNguoiDung, nd.DiemDanhGia from daugia dg, nguoidung nd WHERE nd.MaNguoiDung=dg.MaNguoiDau and dg.MaSP=${query} ORDER BY dg.ThoiGianDauGia DESC`;
    return db.load(sql);
}