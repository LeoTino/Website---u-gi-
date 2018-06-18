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

function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  }

// bien dung de dau gia
var _buocgia;
var _giakhoidiem;
var _giamuangay;
var _giahientai
var _diemdanhgia;
var _giadenghi;

$(document).ready(function(){
    var email=localStorage.getItem('email');
    document.getElementById("tt").click();
    if(email==null){
        alert("Bạn chưa đăng nhập, vui lòng đăng nhập để tiếp tục");
        window.location="file:///F:/Git/Do%20An%20web%202/Website---u-gi-/TranHoangHiep/frontend/anonymous/login.html";
    }
    else{
        $("#local").append(email);
    }

})

$(document).on('click', '#btnWishList', function(){
    var maSP=getParameterByName('query');
    var email=localStorage.getItem('email');
    if(email==null){
        alert("Bạn chưa đăng nhập, vui lòng đăng nhập để tiếp tục");
        window.location="file:///F:/Git/Do%20An%20web%202/Website---u-gi-/TranHoangHiep/frontend/anonymous/login.html";
    }
    $.ajax({
        url: 'http://localhost:3000/wishlist/getlist/'+email,
        dataType: 'json',
        timeout: 10000,
    }).done(function(data) {
        var check=true;
        var arrMaSP=data.map(a =>a.MaSP);
        for(var i=0;i<arrMaSP.length;i++){
            if(maSP==arrMaSP[i]){
                check=false;
            }
        }
        if(check==false){
            alert("Bạn đã thêm sản phẩm này rồi!");
        }
        else{
            var body ={
                MaSP : maSP,
                Email : email,
            }
            $.ajax({
                url: 'http://localhost:3000/wishlist/themsp/',
                dataType: 'json',
                timeout: 10000,
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(body)
            }).done(function(data) {
                alert("Đã thêm sản phẩm này vào danh sách yêu thích");
            }).fail(function(xhr, textStatus, error) {
                console.log(textStatus);
                console.log(error);
                console.log(xhr);
            })
        }
        }).fail(function(xhr, textStatus, error) {
        console.log(textStatus);
        console.log(error);
        console.log(xhr);
    });
})

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


$(document).on('click', '#dg', function(){
    var email=localStorage.getItem('email');
    var maSP=getParameterByName('query');
    $("#giahtt").empty();
    $("#buocgiaa").empty();
    //gan diem danh gia
        var ddg=$.ajax({
            url: 'http://localhost:3000/changeinfo/diemdanhgia/'+email,
            dataType: 'json',
            timeout: 10000,
        }).done(function(data) {
            _diemdanhgia=data.DiemDanhGia;
        }).fail(function(xhr, textStatus, error) {
            console.log(textStatus);
            console.log(error);
            console.log(xhr);
        })

    //gan _buocgia _giakhoidiem _giamuangay _giahientai
        var ttdg=$.ajax({
            url: 'http://localhost:3000/sanpham/ttdaugia/'+ maSP,
            dataType: 'json',
            timeout: 10000,
        }).done(function(data) {
            _buocgia=data.BuocGia;
            _giakhoidiem=data.GiaKhoiDiem;
            _giamuangay=data.GiaMuaNgay;
            _giahientai=data.GiaHienTai;
        }).fail(function(xhr, textStatus, error) {
            console.log(textStatus);
            console.log(error);
            console.log(xhr);
        })

    ttdg.done( function(){
            //cai dat gia de nghi
        if(_giahientai==0){
            _giadenghi=_giakhoidiem;
        }
        else {
            _giadenghi=_giahientai+_buocgia;
        }

        $('#txtGiaDau').prop('step',_buocgia);
        $('#txtGiaDau').prop('value',_giadenghi);
        var giahtt="<h1 style=\"color:#DC143C\">"+formatter.format(_giahientai)+"</h1>";
        $('#giahtt').append(giahtt);
        var buocgiaa="<h1 style=\"color:#DC143C\">"+formatter.format(_buocgia)+"</h1>";
        $('#buocgiaa').append(buocgiaa);
        /*$("#txtGiaDau").change(function(){
            $('#txtGiaDau').prop('value',formatter.format($('#txtGiaDau').val()));
        });*/
    });
})

//bam nut dau gia
$(document).on('click', '#btnDauGia', function(){
    var email=localStorage.getItem('email');
    var maSP=getParameterByName('query');
    var giadau;
    giadau = $('#txtGiaDau').val();

    if (isNaN(giadau) || giadau<_giadenghi) {
        alert("Giá đấu của bạn không hợp lệ");
    } else {
        var r = confirm("Bạn có thực sự muốn đấu giá sản phẩm này?");
        if (r == false) {
            alert('Bạn đã hủy đấu giá sản phẩm này!');
        }
        else{
            var body ={
                MaSP : maSP,
                Email : email,
                GiaDau : giadau,
            }
            $.ajax({
                url: 'http://localhost:3000/daugia/themgiaodich/',
                dataType: 'json',
                timeout: 10000,
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(body)
            }).done(function(data) {
                $.ajax({
                    url: 'http://localhost:3000/daugia/capnhatgiahientai',
                    dataType: 'json',
                    timeout: 10000,
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(body)
                }).done(function(data) {
                    alert("Đấu giá thành công!");
                }).fail(function(xhr, textStatus, error) {
                    console.log(textStatus);
                    console.log(error);
                    console.log(xhr);
                }).fail(function(xhr, textStatus, error) {
                    console.log(textStatus);
                    console.log(error);
                    console.log(xhr);
                });
            }).fail(function(xhr, textStatus, error) {
                console.log(textStatus);
                console.log(error);
                console.log(xhr);
            }).fail(function(xhr, textStatus, error) {
                console.log(textStatus);
                console.log(error);
                console.log(xhr);
            });
        }
    }    
})

$(document).on('click', '#bl', function(){
    var a = getParameterByName('query');
    $("#tableBidLog").empty();
    $.ajax({
        url: 'http://localhost:3000/daugia/bidlog/'+ a,
        dataType: 'json',
        timeout: 10000,
    }).done(function(data) {
        var arrTime=data.map(a=>a.ThoiGianDauGia);
        var arrTenND=data.map(a=>a.TenNguoiDung);
        var arrGiaDau=data.map(a=>a.GiaDau);
        var text="<tr>"
                +"<th>Thời gian đấu giá</th>"
                +"<th>Người đấu giá</th>"
                +"<th>Giá đấu sản phẩm</th>"
                +"</tr>";
        for(var i=0;i<arrTenND.length;i++){
            var ht="<tr>"+
                   "<td>"+arrTime[i]+"</td>"+
                   "<td>"+arrTenND[i]+"</td>"+
                   "<td>"+formatter.format(arrGiaDau[i])+"</td>"+
                   "</tr>";
            text=text.concat(ht);
        }
        $("#tableBidLog").append(text);
    }).fail(function(xhr, textStatus, error) {
        console.log(textStatus);
        console.log(error);
        console.log(xhr);
    });
});

//check thong tin dau gia
/*$(function(){
    $('#frmDauGia').validate({
        rules: {
            Gi: {
                required: true,
                minlength: 6
            },
            NewPassword: {
                required: true,
                minlength: 6
            },
            ConfirmNewPassword: {
                required: true,
                equalTo: $('#txtNewPassword')
            },
            HoTen: {
                required: true
            },
            Email: {
                required: true,
                email: true
            },
        },
        messages: {
            OldPassword: {
                required: "Chưa nhập mật khẩu cũ.",
                minlength: "Mật khẩu phải nhiều hơn 6 ký tự."
            },
            NewPassword: {
                required: "Chưa nhập mật khẩu mới.",
                minlength: "Mật khẩu phải nhiều hơn 6 ký tự."
            },
            ConfirmNewPassword: {
                required: "Chưa nhập xác nhận mật khẩu mới.",
                equalTo: "Mật khẩu nhập lại không khớp."
            },
            HoTen: {
                required: "Chưa nhập họ tên."
            },
            Email: {
                required: "Chưa nhập email.",
                email: "Email không đúng định dạng."
            },
        },

        highlight: function(element) { // hightlight error inputs
            $(element).closest('.form-group').addClass('alert alert-danger'); // set error class to the control group
        },

        success: function(element) {
            // var name = label.attr('for');
            // $('[name=' + name + ']').closest('.form-group').removeClass('has-error');

             element
            .text('OK!').addClass('alert alert-primary')
            .closest('.form-group').removeClass('alert alert-danger').addClass('alert alert-success');
        },

    });
    $('#txtEmail').select();
});*/