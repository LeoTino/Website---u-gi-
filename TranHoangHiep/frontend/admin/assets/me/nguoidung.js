var email;

$(document).ready(function() {
    email=localStorage.getItem('email');
    $("#local").append(email);
    $.ajax({
        url: 'http://localhost:3000/taikhoan/loadDS',
        dataType: 'json',
        timeout: 10000,
    }).done(function(data) {
        var arrMaND=data.map(a=>a.MaNguoiDung);
        var arrTenND=data.map(a=>a.TenNguoiDung);
        var arrEmail=data.map(a=>a.Email);
        var arrIsDelete=data.map(a=>a.isDelete);

        var text="<tr>"
                +"<th>Tên người dùng</th>"
                +"<th>Email</th>"
                +"<th>Reset mật khẩu</th>"
                +"<th>Xóa tài khoản</th>"
                +"</tr>";

        for(var i=0;i<arrTenND.length;i++){
            if(arrIsDelete[i]=='yes'){
                var ht= "<tr>"+
                        "<td>"+arrTenND[i]+"</td>"+
                        "<td>"+arrEmail[i]+"</td>"+
                        "<td><button type=\"button\" value=\""+ arrMaND[i] +"\" id=\"btnReset\" class=\"btn btn-primary\">Reset mật khẩu</button></td>"+
                        "<td><button type=\"button\" value=\""+ arrMaND[i] +"\" id=\"btnXoa\" class=\"btn\" disabled>Xóa tài khoản</button></td>"+
                        "</tr>";
                text=text.concat(ht);
            }
            else {
                var ht= "<tr>"+
                        "<td>"+arrTenND[i]+"</td>"+
                        "<td>"+arrEmail[i]+"</td>"+
                        "<td><button type=\"button\" value=\""+ arrMaND[i] +"\" id=\"btnReset\" class=\"btn btn-primary\">Reset mật khẩu</button></td>"+
                        "<td><button type=\"button\" value=\""+ arrMaND[i] +"\" id=\"btnXoa\" class=\"btn btn-primary\">Xóa tài khoản</button></td>"+
                        "</tr>";
                text=text.concat(ht);
            }
        }
        $("#dsnd").append(text);
    }).fail(function(xhr, textStatus, error) {
        console.log(textStatus);
        console.log(error);
        console.log(xhr);
    });
});

$(document).on('click', '#btnReset', function(){
    var maND=$(this).attr("value");
    $.ajax({
        url: 'http://localhost:3000/taikhoan/reset/'+maND,
        dataType: 'json',
        timeout: 10000,
    }).done(function(data) {
        alert("Đã reset. Mật khẩu mặc định là'000000'");
    }).fail(function(xhr, textStatus, error) {
        console.log(textStatus);
        console.log(error);
        console.log(xhr);
    })
})

$(document).on('click', '#btnXoa', function(){
    var maND=$(this).attr("value");
    $.ajax({
        url: 'http://localhost:3000/taikhoan/xoa/'+maND,
        dataType: 'json',
        timeout: 10000,
    }).done(function(data) {
        alert("Đã xóa tài khoản này");
        location.reload();
    }).fail(function(xhr, textStatus, error) {
        console.log(textStatus);
        console.log(error);
        console.log(xhr);
    })

})