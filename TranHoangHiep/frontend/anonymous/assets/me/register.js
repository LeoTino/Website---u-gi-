$(function(){
    $('#registerForm').validate({
        rules: {
            HoTen: {
                required: true
            },
            PWD: {
                required: true,
                minlength: 6
            },
            ConfirmPWD: {
                required: true,
                equalTo: $('#txtPassword')
            },
            DiaChi: {
                required: true,
            },
            Email: {
                required: true,
                email: true
            },
        },
        messages: {
            HoTen: {
                required: 'Chưa nhập họ tên.'
            },
            PWD: {
                required: "Chưa nhập mật khẩu.",
                minlength: "Mật khẩu phải nhiều hơn 6 ký tự."
            },
            ConfirmPWD: {
                required: "Chưa nhập lại mật khẩu.",
                equalTo: "Mật khẩu nhập lại không khớp."
            },
            DiaChi: {
                required: "Chưa nhập địa chỉ.",
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
    $('#txtUserName').select();
});


$(document).on('click', '#btnRegister', function(){
    var isValid = $('#registerForm').valid();
    if (isValid) {
        var _hoten = $('#txtHoTen').val(),
            _pwd=$('#txtPassword').val(),
            _diachi=$('#txtName').val(),
            _email=$('#txtEmail').val();

        var body = {
            HoTen: _hoten,
            Password: _pwd,
            DiaChi: _diachi,
            Email: _email,
        }    
        $.ajax({
            url: 'http://localhost:3000/dangky/',
            dataType: 'json',
            timeout: 10000,
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(body)
        }).done(function(data) {
            $('#status').append("<div class=\"alert alert-success\"><p>Đăng ký thành công</p></div>");
            $('html, body').animate({ scrollTop: 0 }, 'fast');
            delay(5000);
        }).fail(function(xhr, textStatus, error) {
            console.log(textStatus);
            console.log(error);
            console.log(xhr);
        });
    }
        else  {
        
    }
})