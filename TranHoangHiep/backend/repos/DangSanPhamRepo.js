var db = require('../fn/mysql-db');

exports.ThemSP = function(poco) {
    var sql = `INSERT INTO sanpham (TenSP, GiaKhoiDiem, GiaMuaNgay, TimeDangSP, Hinh1, Hinh2, Hinh3, MaNguoiBan, BuocGia, isAutoExtend) VALUES ('${poco.TenSP}',${poco.GiaKD},${poco.GiaMuaNgay},'${poco.ThoiGianDangSP}', '${poco.Hinh1}', '${poco.Hinh2}','${poco.Hinh3}', (select MaNguoiDung from nguoidung where Email='${poco.Email}'), ${poco.BuocGia}, '${poco.isAuto}')`;
    return db.load(sql);
}