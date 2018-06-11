function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


$(document).on('click', '#btnTime', function(){
    var a = getParameterByName('query');
    $("#aaa").empty();
    $("#sortprice").empty();
    $("#sorttime").show();
    $.ajax({
        url: 'http://localhost:3000/timkiem/query/sorttime/'+ a,
        dataType: 'json',
        timeout: 10000,
    }).done(function(data) {
        var srcImgSP=data.map(a =>a.Hinh1);
        var arrNameSP=data.map(a => a.TenSP); //string name+srcImgSP[i]+
        var arrGiaKD=data.map(a => a.GiaHienTai);
        var arrGiaMuaNgay=data.map(a=>a.GiaMuaNgay);
        var arrTimeDistance=data.map(a=>a.TimeDistance);
        var arrBidTimes=data.map(a=>a.SoLuotDauGia);
        var arrSeller=data.map(a=>a.TenND);
        var arrMaSP=data.map(a=>a.MaSP);
        var horizontal="<div class=\"row\">";
        var text=horizontal;

        //$("#aaa").append(horizontal);
        for(var i=0;i<srcImgSP.length;i++){
            var ht="<form action=\"chitietsp.html\"><div class=\"column\">"+
            		"<input type=\"hidden\" name=\"query\" value="+ arrMaSP[i] +">"+
    				"<div class=\"card\" style=\"width: 16rem\">\n" +
            		"<img class=\"rounded mx-auto d-block\"  src="+ srcImgSP[i] +" height=\"125\" width=\"180\" alt=\"Card image cap\">\n" + //hinh anh
            		"<div class=\"card-body\">\n" +
            		"<h5 class=\"card-title\">"+ arrNameSP[i] +"</h5>\n" //title ten sp
            		+ "<p>Giá hiện tại: "+ arrGiaKD[i] +" VND</p>\n" //mieu ta
            		+ "<p>Giá mua ngay: "+ arrGiaMuaNgay[i] +" VND</p>\n"
            		+ "<p>Số lượt đấu giá: "+ arrBidTimes[i] +" lần</p>\n"
            		+ "<p>Người đang giữ giá: "+ arrSeller[i] +"</p>\n"
            		+ "<p>Còn lại: "+ arrTimeDistance[i] +"</p>\n"
            		+ "<button type=\"submit\" id=\"btnSeeDetail\" class=\"btn btn-primary\">Xem chi tiết</button> </div> </div>"+
    				"</div></form>";
    		text=text.concat(ht);
        }
        var div="</div>";
        $("#sorttime").append(text.concat(div));
        $("#btnTime").prop('disabled', true);
        $("#btnPrice").prop('disabled', false);
        //$("#aaa").show();
        
    }).fail(function(xhr, textStatus, error) {
        console.log(textStatus);
        console.log(error);
        console.log(xhr);
    });
});

$(document).on('click', '#btnPrice', function(){
    var a = getParameterByName('query');
    $("#aaa").empty();
    $("#sorttime").empty();
    $("#sortprice").show();
    $.ajax({
        url: 'http://localhost:3000/timkiem/query/sortprice/'+ a,
        dataType: 'json',
        timeout: 10000,
    }).done(function(data) {
        var srcImgSP=data.map(a =>a.Hinh1);
        var arrNameSP=data.map(a => a.TenSP); //string name+srcImgSP[i]+
        var arrGiaKD=data.map(a => a.GiaHienTai);
        var arrGiaMuaNgay=data.map(a=>a.GiaMuaNgay);
        var arrTimeDistance=data.map(a=>a.TimeDistance);
        var arrBidTimes=data.map(a=>a.SoLuotDauGia);
        var arrSeller=data.map(a=>a.TenND);
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
            		+ "<p>Giá hiện tại: "+ arrGiaKD[i] +" VND</p>\n" //mieu ta
            		+ "<p>Giá mua ngay: "+ arrGiaMuaNgay[i] +" VND</p>\n"
            		+ "<p>Số lượt đấu giá: "+ arrBidTimes[i] +" lần</p>\n"
            		+ "<p>Người đang giữ giá: "+ arrSeller[i] +"</p>\n"
            		+ "<p>Còn lại: "+ arrTimeDistance[i] +"</p>\n"
            		+ "<button type=\"submit\" id=\"btnSeeDetail\" class=\"btn btn-primary\">Xem chi tiết</button> </div> </div>"+
    				"</div></form>";
    		text=text.concat(ht);
        }
        var div="</div>";
        $("#sortprice").append(text.concat(div));
        $("#btnPrice").prop('disabled', true);
        $("#btnTime").prop('disabled', false);
        
    }).fail(function(xhr, textStatus, error) {
        console.log(textStatus);
        console.log(error);
        console.log(xhr);
    });
});

$(document).ready(function() {
	var a = getParameterByName('query');
	$("#keyword").text(a);
    $.ajax({
        url: 'http://localhost:3000/timkiem/query/'+ a,
        dataType: 'json',
        timeout: 10000,
    }).done(function(data) {
    	var a = getParameterByName('query');
        var srcImgSP=data.map(a =>a.Hinh1);
        var arrNameSP=data.map(a => a.TenSP); //string name+srcImgSP[i]+
        var arrGiaKD=data.map(a => a.GiaHienTai);
        var arrGiaMuaNgay=data.map(a=>a.GiaMuaNgay);
        var arrTimeDistance=data.map(a=>a.TimeDistance);
        var arrBidTimes=data.map(a=>a.SoLuotDauGia);
        var arrSeller=data.map(a=>a.TenND);
        var arrMaSP=data.map(a=>a.MaSP);
        var horizontal="<div class=\"row\">";
        var text=horizontal;

        //$("#aaa").append(horizontal);
        for(var i=0;i<srcImgSP.length;i++){
            var ht="<form action=\"chitietsp.html\"><div class=\"column\">"+
            		"<input type=\"hidden\" name=\"query\" value="+ arrMaSP[i] +">"+
    				"<div class=\"card\" style=\"width: 16rem\">\n" +
            		"<img class=\"rounded mx-auto d-block\"  src="+ srcImgSP[i] +" height=\"125\" width=\"180\" alt=\"Card image cap\">\n" + //hinh anh
            		"<div class=\"card-body\">\n" +
            		"<h5 class=\"card-title\">"+ arrNameSP[i] +"</h5>\n" //title ten sp
            		+ "<p>Giá hiện tại: "+ arrGiaKD[i] +" VND</p>\n" //mieu ta
            		+ "<p>Giá mua ngay: "+ arrGiaMuaNgay[i] +" VND</p>\n"
            		+ "<p>Số lượt đấu giá: "+ arrBidTimes[i] +" lần</p>\n"
            		+ "<p>Người đang giữ giá: "+ arrSeller[i] +"</p>\n"
            		+ "<p>Còn lại: "+ arrTimeDistance[i] +"</p>\n"
            		+ "<button type=\"submit\" id=\"btnSeeDetail\" class=\"btn btn-primary\">Xem chi tiết</button> </div> </div>"+
    				"</div></form>";
    		text=text.concat(ht);
        }
        var div="</div>";
        $("#aaa").append(text.concat(div));
    }).fail(function(xhr, textStatus, error) {
        console.log(textStatus);
        console.log(error);
        console.log(xhr);
    });
});

//http://localhost:3000/timkiem/loaddanhmuc
/*$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:3000/timkiem/loaddanhmuc',
        dataType: 'json',
        timeout: 10000,
    }).done(function(data) {
    	var arrID=data.map(a =>a.MaDM);
    	var arrTen=data.map(a=>a.TenDM)
    	var text="";
    	for(var i=0;i<arrID.length;i++){
    		var ht="<button id=\""+arrID[i]+"\">"+arrTen[i]+"</button>\n";
    		text=text.concat(ht);
    	}
    	$("#dm").append(text);
    	}).fail(function(xhr, textStatus, error) {
        console.log(textStatus);
        console.log(error);
        console.log(xhr);
    });
});*/