$(document).ready(function() {
    var email=localStorage.getItem('email');
    if(email==null){
        localStorage.removeItem('email');
        localStorage.removeItem('type');
        alert("Bạn chưa đăng nhập, vui lòng đăng nhập để tiếp tục");
        window.location="file:///C:/Users/langt/Documents/GitHub/Website-dau-gia/TranHoangHiep/frontend/anonymous/login.html";
    }
    else{
        $("#local").append(email);
    }
    $.ajax({
        url: 'http://localhost:3000/sanpham/top5',
        dataType: 'json',
        timeout: 10000,
    }).done(function(data) {
        var srcImgSP=data.map(a =>a.Hinh1);
        var arrNameSP=data.map(a => a.TenSP); //string name+srcImgSP[i]+
        var arrMaSP=data.map(a=>a.MaSP);
        var horizontal="<div class=\"row\">";
        var text=horizontal;
        for(var i=0;i<srcImgSP.length;i++){
            var ht="<form action=\"chitietsp.html\"><div class=\"column\">"+
                    "<input type=\"hidden\" name=\"query\" value="+ arrMaSP[i] +">"+
                    "<div class=\"card\" style=\"width: 16rem\">\n" +
                    "<img class=\"rounded mx-auto d-block\"  src="+ srcImgSP[i] +" height=\"125\" width=\"180\" alt=\"Card image cap\">\n" + //hinh anh
                    "<div class=\"card-body\">\n" +
                    "<h5 class=\"card-title\">"+ arrNameSP[i] +"</h5>\n" //title ten sp
                    + "<button type=\"submit\" id=\"btnSeeDetail\" class=\"btn btn-primary\">Xem chi tiết</button> </div> </div>"+
                    "</div></form>";
            text=text.concat(ht);
        }
        $('#top5').append(text);
    }).fail(function(xhr, textStatus, error) {
        console.log(textStatus);
        console.log(error);
        console.log(xhr);
    });
});



$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:3000/sanpham/top5b',
        dataType: 'json',
        timeout: 10000,
    }).done(function(data) {
        var srcImgSP=data.map(a =>a.Hinh1);
        var arrNameSP=data.map(a => a.TenSP); //string name+srcImgSP[i]+
        var arrMaSP=data.map(a=>a.MaSP);
        var horizontal="<div class=\"row\">";
        var text=horizontal;
        for(var i=0;i<srcImgSP.length;i++){
            var ht="<form action=\"chitietsp.html\"><div class=\"column\">"+
                    "<input type=\"hidden\" name=\"query\" value="+ arrMaSP[i] +">"+
                    "<div class=\"card\" style=\"width: 16rem\">\n" +
                    "<img class=\"rounded mx-auto d-block\"  src="+ srcImgSP[i] +" height=\"125\" width=\"180\" alt=\"Card image cap\">\n" + //hinh anh
                    "<div class=\"card-body\">\n" +
                    "<h5 class=\"card-title\">"+ arrNameSP[i] +"</h5>\n" //title ten sp
                    + "<button type=\"submit\" id=\"btnSeeDetail\" class=\"btn btn-primary\">Xem chi tiết</button> </div> </div>"+
                    "</div></form>";
            text=text.concat(ht);
        }
        $('#top5b').append(text);
    }).fail(function(xhr, textStatus, error) {
        console.log(textStatus);
        console.log(error);
        console.log(xhr);
    });
});


$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:3000/sanpham/top5c',
        dataType: 'json',
        timeout: 10000,
    }).done(function(data) {
        var srcImgSP=data.map(a =>a.Hinh1);
        var arrNameSP=data.map(a => a.TenSP); //string name+srcImgSP[i]+
        var arrMaSP=data.map(a=>a.MaSP);
        var horizontal="<div class=\"row\">";
        var text=horizontal;
        for(var i=0;i<srcImgSP.length;i++){
            var ht="<form action=\"chitietsp.html\"><div class=\"column\">"+
                    "<input type=\"hidden\" name=\"query\" value="+ arrMaSP[i] +">"+
                    "<div class=\"card\" style=\"width: 16rem\">\n" +
                    "<img class=\"rounded mx-auto d-block\"  src="+ srcImgSP[i] +" height=\"125\" width=\"180\" alt=\"Card image cap\">\n" + //hinh anh
                    "<div class=\"card-body\">\n" +
                    "<h5 class=\"card-title\">"+ arrNameSP[i] +"</h5>\n" //title ten sp
                    + "<button type=\"submit\" id=\"btnSeeDetail\" class=\"btn btn-primary\">Xem chi tiết</button> </div> </div>"+
                    "</div></form>";
            text=text.concat(ht);
        }
        $('#top5c').append(text);       
    }).fail(function(xhr, textStatus, error) {
        console.log(textStatus);
        console.log(error);
        console.log(xhr);
    });
});






