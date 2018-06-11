var db = require('../fn/mysql-db');

exports.loadNguoiDung = function(email) {
    var sql = `select MatKhau, isDelete, isLogin from nguoidung where Email='${email}' `;
    return db.load(sql);
}

exports.setNguoiDung = function (poco) {
    var sql = `update nguoidung set Email='${poco.NewEmail}', TenNguoiDung='${poco.HoTen}', MatKhau='${poco.Password}' where Email='${poco.Email}'`;
    return db.insert(sql);
}

exports.getDiemDanhGia = function(email) {
    var sql = `select DiemDanhGia from nguoidung where Email='${email}' `;
    return db.load(sql);
}

exports.getNhanXetNguoiMua = function (email) {
    var sql= `select DISTINCT nd.TenNguoiDung, sp.TenSP, dg.NhanXet FROM nguoidung nd, sanpham sp, danhgia dg where dg.MaNguoiDanhGia=nd.MaNguoiDung and dg.MaSP=sp.MaSP and sp.MaNguoiBan=(SELECT sp1.MaNguoiBan from sanpham sp1, nguoidung nd1 where sp1.MaNguoiBan=nd1.MaNguoiDung and nd1.Email='${email}' LIMIT 1)`
    return db.load(sql);
}

exports.getWishList = function(email) {
    var sql = `select sp.TenSP, sp.MaSP from sanpham sp, nguoidung nd, danhsachyeuthich ds where nd.Email= '${email}' and nd.MaNguoiDung=ds.MaNguoiDung AND ds.MaSP=sp.MaSP`;
    return db.load(sql);
}

exports.getSPDangDauGia = function(email) {
    var sql = `select sp.MaSP, sp.TenSP, date_format(dg.ThoiGianDauGia, '%W %m/%d/%Y %l:%i %p') as ThoiGianDauGia, dg.GiaDau from daugia dg, nguoidung nd, sanpham sp where sp.MaSP=dg.MaSP and nd.MaNguoiDung=dg.MaNguoiDau and nd.Email='${email}' order by ThoiGianDauGia desc`;
    return db.load(sql);
}


