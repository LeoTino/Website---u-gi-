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

$(document).ready(function() {
    document.getElementById("tt").click();
})

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
        $("#giaht").append(formatter.format(data.GiaHienTai));
        $("#giamn").append(formatter.format(data.GiaMuaNgay));
        $("#seller").append( data.TenNguoiBan);
        $("#sellerstar").append(data.DiemDanhGia);
        $("#timedang").append(data.TimeDangSP);
        $("#timeketthuc").append(data.TimeKetThuc);
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
        $("#buyer").append(data.TenNguoiDung);
        $("#buyerstar").append(data.DiemDanhGia);
    }).fail(function(xhr, textStatus, error) {
        console.log(textStatus);
        console.log(error);
        console.log(xhr);
    });
});

$(document).on('click', '#mt', function(){
    var a = getParameterByName('query');
    $('#mota').empty();
    $("#keyword").text(a);
    $.ajax({
        url: 'http://localhost:3000/chitiet/mota/'+ a,
        dataType: 'json',
        timeout: 10000,
    }).done(function(data) {
        var arrTime=data.map(a=>a.Time);
        var arrMoTa=data.map(a=>a.MoTa);
        var text="";
        for(var i=0;i<arrTime.length;i++){
            var ht="<tr>"+
                   "<td>*"+arrTime[i]+":</td>"+
                   "<td>"+arrMoTa[i]+"</td>"+
                   "</tr>";
            text=text.concat(ht);
        }
        $("#mota").append(text);
    }).fail(function(xhr, textStatus, error) {
        console.log(textStatus);
        console.log(error);
        console.log(xhr);
    });
});

//<img class="img-responsive" src="assets\picture\img3\1-798x450.jpg" alt="Chania" width="800" height="450">
$(document).on('click', '#ha', function(){
    var a = getParameterByName('query');
    $("#img1").empty();
    $("#img2").empty();
    $("#img3").empty();
    $.ajax({
        url: 'http://localhost:3000/chitiet/hinhanh/'+ a,
        dataType: 'json',
        timeout: 10000,
    }).done(function(data) {
        var temp1="<img src=";
        var temp2=" alt=\"Nature\" style=\"width:100%\">";
        $("#img1").append(temp1+data.Hinh1+temp2);
        $("#img2").append(temp1+data.Hinh2+temp2);
        $("#img3").append(temp1+data.Hinh3+temp2);
    }).fail(function(xhr, textStatus, error) {
        console.log(textStatus);
        console.log(error);
        console.log(xhr);
    });
});