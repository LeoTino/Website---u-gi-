function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}



$(document).ready(function() {
	var a = getParameterByName('query');
	$("#keyword").text(a);
    $.ajax({
        url: 'http://localhost:3000/timkiem/query/'+ a,
        dataType: 'json',
        timeout: 10000,
    }).done(function(data) {
        var srcImgSP=data.map(a =>a.Hinh1);
        var arrNameSP=data.map(a => a.TenSP); //string name+srcImgSP[i]+
        var arrGiaKD=data.map(a => a.GiaKhoiDiem);
        var arrGiaMuaNgay=data.map(a=>a.GiaMuaNgay);
        var horizontal="<div class=\"row\">";
        var text=horizontal;

        //$("#aaa").append(horizontal);
        for(var i=0;i<srcImgSP.length;i++){
            var ht="<div class=\"column\">"+
    				"<div class=\"card\" style=\"width: 16rem\">\n" +
            		"<img class=\"rounded mx-auto d-block\"  src="+ srcImgSP[i] +" height=\"125\" width=\"180\" alt=\"Card image cap\">\n" + //hinh anh
            		"<div class=\"card-body\">\n" +
            		"<h5 class=\"card-title\">"+ arrNameSP[i] +"</h5>\n" //title ten sp
            		+ "<p>Giá khởi điểm: "+ arrGiaKD[i] +" VND</p>\n" //mieu ta
            		+ "<a href=\"#\" class=\"btn btn-primary\">Giá mua ngay: "+ arrGiaMuaNgay[i] +" VND</a> </div> </div>"+
    				"</div>";
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