$(function(){
    $('#loginForm').validate({
        rules: {
            Password: {
                required: true,
                minlength: 6
            },
            Email: {
                required: true,
                email: true
            },
        },
        messages: {
            Password: {
                required: "Chưa nhập mật khẩu.",
                minlength: "Mật khẩu phải nhiều hơn 6 ký tự."
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
});

var check=false;
var _email;
var type;

$(document).on('click', '#btnLogin', function(){
	var isValid = $('#loginForm').valid();
    if (isValid) {
    	 var _pwd = $('#txtPassword').val();
    	 	 _email=$('#txtEmail').val();
	$.ajax({
            url: 'http://localhost:3000/login/logindata',
            dataType: 'json',
            timeout: 10000,
            type: 'POST',
        }).done(function(data) {
            var arrEmail=data.map(a=>a.Email);
            var arrPWD=data.map(a=>a.MatKhau);
            var arrIsDelete=data.map(a=>a.isDelete);
            var arrLoaiNguoiDung=data.map(a=>a.LoaiNguoiDung);
            var type="";
            var isDel="";
            var html="";
            for(var i=0; i<arrEmail.length;i++){
            	if(arrEmail[i]===_email && arrPWD[i]===_pwd){
            		check=true;
            		type=arrLoaiNguoiDung[i];
            		isDel=arrIsDelete[i];
            	}
            }
            if(isDel=='yes'){
            	alert("Tài khoản này đã bị xóa");
            	window.location = "file:///F:/Git/Do%20An%20web%202/Website---u-gi-/TranHoangHiep/frontend/anonymous/login.html";
            } 
            if(check==true && isDel!='yes'){
                if(type=='mua'){
                    localStorage.setItem('email',_email);
                    localStorage.setItem('type',type);
                    window.location="file:///F:/Git/Do%20An%20web%202/Website---u-gi-/TranHoangHiep/frontend/buyer/profile.html";
                }
            	if (type=='ban') {
                    localStorage.setItem('email',_email);
                    localStorage.setItem('type',type);
                    window.location="file:///F:/Git/Do%20An%20web%202/Website---u-gi-/TranHoangHiep/frontend/seller/profile.html";
                }
                if (type=='admin') {
                    localStorage.setItem('email',_email);
                    localStorage.setItem('type',type);
                    window.location="file:///F:/Git/Do%20An%20web%202/Website---u-gi-/TranHoangHiep/frontend/admin/index.html";
                }
            }
            else{
            	alert("Bạn nhập sai Email hoặc Mật khẩu. Vui lòng kiểm tra lại");
            	window.location = "file:///F:/Git/Do%20An%20web%202/Website---u-gi-/TranHoangHiep/frontend/anonymous/login.html";
            }
            if(check==true){
				$.ajax({
		            url: 'http://localhost:3000/login/setlogin/'+_email,
		            dataType: 'json',
		            timeout: 10000,
		            type: 'GET',
		        }).done(function(data) {
		        }).fail(function(xhr, textStatus, error) {
		            console.log(textStatus);
		            console.log(error);
		            console.log(xhr);
		        });
			}
        }).fail(function(xhr, textStatus, error) {
            console.log(textStatus);
            console.log(error);
            console.log(xhr);
        });
	}
})

