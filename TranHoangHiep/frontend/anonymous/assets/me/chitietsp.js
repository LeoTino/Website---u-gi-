function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'VND',
  minimumFractionDigits: 0,
});


$(document).on('click', '#tt', function(){
    var a = getParameterByName('query');
    $("#tensp").empty();
    $("#giaht").empty();
    $("#giamn").empty();
    $("#seller").empty();
    $("#sellerstar").empty();
    $("#timedang").empty();
    $("#timeketthuc").empty();
    $.ajax({
        url: 'http://localhost:3000/chitiet/ttsp/'+a,
        dataType: 'json',
        timeout: 10000,
    }).done(function(data) {
        $("#tensp").append(data.TenSP);
        $("#giaht").append("Giá hiện tại: "+formatter.format(data.GiaHienTai));
        $("#giamn").append("Giá mua ngay: "+formatter.format(data.GiaMuaNgay));
        $("#seller").append("Tên người bán: "+ data.TenNguoiBan);
        $("#sellerstar").append("Điểm đánh giá người bán: "+data.DiemDanhGia);
        $("#timedang").append("Thời gian đăng sản phẩm: "+data.TimeDangSP);
        $("#timeketthuc").append("Thời gian kết thúc đấu giá: "+data.TimeKetThuc);
    }).fail(function(xhr, textStatus, error) {
        console.log(textStatus);
        console.log(error);
        console.log(xhr);
    });
});

$(document).on('click', '#tt', function(){
    var a = getParameterByName('query');
    $("#buyer").empty();
    $("#buyerstar").empty();
    $.ajax({
        url: 'http://localhost:3000/chitiet/giugiamax/'+a,
        dataType: 'json',
        timeout: 10000,
    }).done(function(data) {
        $("#buyer").append("Người mua giữ giá cao nhất hiện tại: "+data.TenNguoiDung);
        $("#buyerstar").append("Điểm đánh giá người mua: "+data.DiemDanhGia);
    }).fail(function(xhr, textStatus, error) {
        console.log(textStatus);
        console.log(error);
        console.log(xhr);
    });
});