var email;

$(document).ready(function() {
    email=localStorage.getItem('email');
    $("#local").append(email);
    $.ajax({
        url: 'http://localhost:3000/xinban/loadyeucau',
        dataType: 'json',
        timeout: 10000,
    }).done(function(data) {
        var arrMaND=data.map(a=>a.MaNguoiDung);
        var arrTenND=data.map(a=>a.TenNguoiDung);
        var arrIsApproved=data.map(a=>a.isApproved);
        var arrEmail=data.map(a=>a.Email);
        var arrIsDelete=data.map(a=>a.isDelete);
        var arrThoiGian=data.map(a=>a.ThoiGianYeuCau);
        var text="<tr>"
                +"<th>Thời gian yêu cầu</th>"
                +"<th>Email</th>"
                +"<th>Tên người dùng</th>"
                +"<th>Trạng thái yêu cầu</th>"
                +"<th>Bấm để duyệt</th>"
                +"</tr>";

        for(var i=0;i<arrTenND.length;i++){
            if(arrIsDelete[i]=='yes'){
                i++;
            }
            else{
                var tt;
                if(arrIsApproved[i]=='no'){
                    tt='[Chưa duyệt]';
                    var ht= "<tr>"+
                            "<td>"+arrThoiGian[i]+"</td>"+
                            "<td>"+arrEmail[i]+"</td>"+
                            "<td>"+arrTenND[i]+"</td>"+
                            "<td>"+tt+"</td>"+
                            "<td><button type=\"button\" value=\""+ arrMaND[i] +"\" id=\"btnDuyet\" class=\"btn btn-primary\">Duyệt</button></td>"+
                            "</tr>";
                    text=text.concat(ht);
                }
                else{
                    tt='[Đã duyệt]';
                    var ht= "<tr>"+
                            "<td>"+arrThoiGian[i]+"</td>"+
                            "<td>"+arrEmail[i]+"</td>"+
                            "<td>"+arrTenND[i]+"</td>"+
                            "<td>"+tt+"</td>"+
                            "<td><button type=\"button\" value=\""+ arrMaND[i] +"\" id=\"btnDuyet\" class=\"btn\" disabled>Duyệt</button></td>"+
                            "</tr>";
                    text=text.concat(ht);
                }  
            }
        }
        $("#dsyc").append(text);
    }).fail(function(xhr, textStatus, error) {
        console.log(textStatus);
        console.log(error);
        console.log(xhr);
    });
});

$(document).on('click', '#btnDuyet', function(){
    var maND=$(this).attr("value");
    var check=0;
    var a1=$.ajax({
        url: 'http://localhost:3000/xinban/duyetyeucau/'+maND,
        dataType: 'json',
        timeout: 10000,
    }).done(function(data) {
        check++;
        a1=$.Deferred();
    }).fail(function(xhr, textStatus, error) {
        console.log(textStatus);
        console.log(error);
        console.log(xhr);
    })

    var a2=$.ajax({
        url: 'http://localhost:3000/xinban/capnhatquyen/'+maND,
        dataType: 'json',
        timeout: 10000,
    }).done(function(data) {
        check++;
        a2=$.Deferred();
    }).fail(function(xhr, textStatus, error) {
        console.log(textStatus);
        console.log(error);
        console.log(xhr);
    })

    $.when( a1, a2 ).done(function () {
        if(check==2){
            alert('Duyệt thành công!');
        }
        location.reload();
    });

    
})





