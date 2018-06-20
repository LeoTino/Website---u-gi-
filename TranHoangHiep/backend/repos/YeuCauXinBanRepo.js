var db = require('../fn/mysql-db');

exports.loadYeuCau = function() {
    var sql = `select MaNguoiDung, TenNguoiDung, isApproved, date_format(ThoiGianYeuCau, '%W %m/%d/%Y %l:%i %p') as ThoiGianYeuCau, Email, isDelete from nguoidung, yeucaudangban where MaNguoiDung=MaNguoiYeuCau order by ThoiGianYeuCau asc`;
    return db.load(sql);
}

exports.duyetYeuCau = function(id) {
    var sql = `update yeucaudangban set isApproved='yes' where MaNguoiYeuCau=${id}`;
    return db.load(sql);
}

exports.udQuyenBan = function(id) {
    var sql = `update nguoidung set QuyenDangBan='yes', LoaiNguoiDung='ban' where MaNguoiDung=${id}`;
    return db.load(sql);
}

