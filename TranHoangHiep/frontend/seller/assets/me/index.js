$(document).ready(function() {
    var email=localStorage.getItem('email');
    $("#local").append(email);
    $.ajax({
        url: 'http://localhost:3000/sanpham/top5',
        dataType: 'json',
        timeout: 10000,
        //type: 'get',
        //contentType: 'application/json',
        //data: JSON.stringify(body)
    }).done(function(data) {
        var srcImgSP=data.map(a =>a.Hinh1);
        var arrNameSP=data.map(a => a.TenSP); //string name+srcImgSP[i]+
        var arrGiaKD=data.map(a => a.GiaKhoiDiem);
        var arrGiaMuaNgay=data.map(a=>a.GiaMuaNgay);
        for(var i=0;i<arrNameSP.length;i++){
            var x="<div class=\"card\" style=\"width: 20rem\">\n" +
            "<img class=\"rounded mx-auto d-block\"  src="+ srcImgSP[i] +" height=\"125\" width=\"180\" alt=\"Card image cap\">\n" + //hinh anh
            "<div class=\"card-body\">\n" +
            "<h5 class=\"card-title\">"+ arrNameSP[i] +"</h5>\n" //title ten sp
            + "<p>Giá khởi điểm: "+ arrGiaKD[i] +" VND</p>\n" //mieu ta
            + "<a href=\"#\" class=\"btn btn-primary\">Giá mua ngay: "+ arrGiaMuaNgay[i] +" VND</a> </div> </div>" ;//button
            //ten+="<p> "+ arrNameSP[i] +" </p>\n";
            $("#top5").append(x);
        }
        //alert(x);
        //document.getElementById("sp").innerHTML= text;
        //pic[1].src=srcImgSP[1];
        //var arrNameSP = data.map(a => a.foo);
        /*var listName=JSON.stringify(data[0]);
        var name=JSON.parse(listName);
        $("p").append(name.TenSP);
        var pic=document.getElementById('pic');
        pic.src=name.Hinh1;
*/
         //alert(name["TenSP"]);
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
        var arrGiaKD=data.map(a => a.GiaKhoiDiem);
        var arrGiaMuaNgay=data.map(a=>a.GiaMuaNgay);
        for(var i=0;i<arrNameSP.length;i++){
            var x="<div class=\"card\" style=\"width: 20rem\">\n" +
            "<img class=\"rounded mx-auto d-block\"  src="+ srcImgSP[i] +" height=\"125\" width=\"180\" alt=\"Card image cap\">\n" + //hinh anh
            "<div class=\"card-body\">\n" +
            "<h5 class=\"card-title\">"+ arrNameSP[i] +"</h5>\n" //title ten sp
            + "<p>Giá khởi điểm: "+ arrGiaKD[i] +" VND</p>\n" //mieu ta
            + "<a href=\"#\" class=\"btn btn-primary\">Giá mua ngay: "+ arrGiaMuaNgay[i] +" VND</a> </div> </div>" ;//button
            $("#top5b").append(x);
        }
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
        var arrGiaKD=data.map(a => a.TimeDistance);
        var arrGiaMuaNgay=data.map(a=>a.GiaMuaNgay);
        for(var i=0;i<arrNameSP.length;i++){
            var x="<div class=\"card\" style=\"width: 20rem\">\n" +
            "<img class=\"rounded mx-auto d-block\"  src="+ srcImgSP[i] +" height=\"125\" width=\"180\" alt=\"Card image cap\">\n" + //hinh anh
            "<div class=\"card-body\">\n" +
            "<h5 class=\"card-title\">"+ arrNameSP[i] +"</h5>\n" //title ten sp
            + "<p>Giá mua ngay: "+ arrGiaMuaNgay[i] +" VND</p>\n" //mieu ta
            + "<a id=\"time\" href=\"#\" class=\"btn btn-primary\">Còn "+ arrGiaKD[i] +" là hết hạn</a> </div> </div>" ;//button
            $("#top5c").append(x);
        }
		
    }).fail(function(xhr, textStatus, error) {
        console.log(textStatus);
        console.log(error);
        console.log(xhr);
    });
});






