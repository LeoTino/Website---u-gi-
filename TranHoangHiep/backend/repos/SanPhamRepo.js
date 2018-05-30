var db = require('../fn/mysql-db');

exports.loadAll = function() {
    var sql = 'select * from sanpham';
    return db.load(sql);
}

exports.load = function(id) {
    var sql = `select * from sanpham where MaSP = ${id}`;
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