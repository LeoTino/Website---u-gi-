$(function(){
    $('.datepicker').datepicker({
        autoclose: true,
        format: 'd/m/yyyy',
        startDate: '-3d'
    });

    $('#frmDangSP').validate({
        rules: {
            TenSP: {
                required: true
            },
            Hinh1: {
                required: true,
            },
            Hinh2: {
                required: true,
            },
            Hinh3: {
                required: true,
            },
            GiaKD: {
                required: true,
            },
            BuocGia: {
                required: true,
            },
            GiaMuaNgay: {
                required: true,
            },
            ThoiGianDang: {
                required: true,
            },
            MoTa: {
                required: true,
            },
        },
        messages: {
            TenSP: {
                required: "Chưa nhập tên sản phẩm"
            },
            Hinh1: {
                required: "Chưa nhập link hình ảnh 1",
            },
            Hinh2: {
                required: "Chưa nhập link hình ảnh 2",
            },
            Hinh3: {
                required: "Chưa nhập link hình ảnh 3",
            },
            GiaKD: {
                required: "Chưa nhập giá khởi điểm",
            },
            BuocGia: {
                required: "Chưa nhập bước giá",
            },
            GiaMuaNgay: {
                required: "Chưa nhập giá mua ngay",
            },
            ThoiGianDang: {
                required: "Chưa nhập thời gian đăng",
            },
            MoTa: {
                required: "Chưa nhập mô tả sản phẩm",
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
    $('#txtTenSP').select();
});

$(document).ready(function(){
    var _email= localStorage.getItem('email');
    if(_email==null){
        alert("Bạn chưa đăng nhập, vui lòng đăng nhập để tiếp tục");
        window.location="file:///F:/Git/Do%20An%20web%202/Website---u-gi-/TranHoangHiep/frontend/anonymous/login.html";
    }
    else{
        $("#local").append(_email);
    }
    $("#ThoiGianDang").datepicker();

})

$(document).on('click', '#btnDangSP', function(){
    var isValid = $('#frmDangSP').valid();
    var _email= localStorage.getItem('email');
    if (isValid) {
        var _tenSP = $('#txtTenSP').val();
            _hinh1=$('#txtHinh1').val();
            _hinh2=$('#txtHinh2').val();
            _hinh3=$('#txtHinh3').val();
            _giaKD=$('#txtGiaKD').val();
            _buocGia=$('#txtBuocGia').val();
            _giaMuaNgay=$('#txtGiaMuaNgay').val();
            _thoiGianDang=$('#txtThoiGianDang').val();
            _giaHan = $("input[name=GiaHan]:checked").val();
            _moTa=$('#txtMoTa').val();
        
        var body = {
            TenSP: _tenSP,
            Hinh1: _hinh1,
            Hinh2: _hinh2,
            Hinh3: _hinh3,
            GiaKD: _giaKD,
            BuocGia: _buocGia,
            GiaMuaNgay: _giaMuaNgay,
            ThoiGianDangSP: _thoiGianDang,
            Email: _email,
            isAuto: _giaHan,
            MoTa: _moTa,  
        }
        var check=0;
        var sp=$.ajax({
            url: 'http://localhost:3000/dangsp/themSP',
            dataType: 'json',
            timeout: 10000,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(body)
        }).done(function(data) {
            check++;
            var mt=$.ajax({
                    url: 'http://localhost:3000/dangsp/themMoTa',
                    dataType: 'json',
                    timeout: 10000,
                    type: 'POST',
                    contentType: 'application/json',
                    data: JSON.stringify(body)
                }).done(function(data) {
                    check++;
                    if(check==2){
                        alert("ok");
                    }
                }).fail(function(xhr, textStatus, error) {
                    console.log(textStatus);
                    console.log(error);
                    console.log(xhr);
                });
        }).fail(function(xhr, textStatus, error) {
            console.log(textStatus);
            console.log(error);
            console.log(xhr);
        });

        

    }
})