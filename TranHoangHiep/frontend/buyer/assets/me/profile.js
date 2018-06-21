function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

$(function(){
    $('#changeinfo').validate({
        rules: {
            OldPassword: {
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
});

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'VND',
  minimumFractionDigits: 0,
});

var email;
$(document).ready(function () {
	email=localStorage.getItem('email');
	if(email==null){
        localStorage.removeItem('email');
        localStorage.removeItem('type');
		alert("Bạn chưa đăng nhập, vui lòng đăng nhập để tiếp tục");
		window.location="file:///C:/Users/langt/Documents/GitHub/Website-dau-gia/TranHoangHiep/frontend/anonymous/login.html";
	}
	else{
		$("#local").append(email);
	}
	var type=localStorage.getItem('type');
	$("#type").append(type);
    document.getElementById("btnDoiThongTin").click();
    //lay diem danh gia
    $.ajax({
            url: 'http://localhost:3000/changeinfo/diemdanhgia/'+email,
            dataType: 'json',
            timeout: 10000,
            type: 'GET',
        }).done(function(data) {
        	$('#diemDG').append(data.DiemDanhGia);
        }).fail(function(xhr, textStatus, error) {
		    console.log(textStatus);
		    console.log(error);
		    console.log(xhr);
		});

	//lay nhan xet
	$.ajax({
            url: 'http://localhost:3000/changeinfo/nhanxet/'+email,
            dataType: 'json',
            timeout: 10000,
            type: 'GET',
        }).done(function(data) {
        	var arrTenNguoiDung=data.map(a=>a.TenNguoiDung);
        	var arrTenSP=data.map(a=>a.TenSP);
        	var arrNhanXet=data.map(a=>a.NhanXet);
        	var tabletext="<tr>"+
        				  "<th>Tên người dùng</th>"+
        				  "<th>Tên sản phẩm</th>"+
        				  "<th>Đánh giá</th>"+
      					  "</tr>";
        	for(var i=0;i<arrTenNguoiDung.length;i++){
        		var html="<tr>\n"+
        		"<td>"+arrTenNguoiDung[i]+"</td>\n"+
        		"<td>"+arrTenSP[i]+"</td>\n"+
        		"<td>"+arrNhanXet[i]+"</td>\n"+
        		"</tr>";
        		tabletext=tabletext.concat(html);
        	}
        	$("#tableDanhGia").append(tabletext);
        }).fail(function(xhr, textStatus, error) {
		    console.log(textStatus);
		    console.log(error);
		    console.log(xhr);
		});

		$.ajax({
            url: 'http://localhost:3000/changeinfo/wishlist/'+email,
            dataType: 'json',
            timeout: 10000,
            type: 'GET',
        }).done(function(data) {
        	var arrTenSP=data.map(a=>a.TenSP);
            var arrMaSP=data.map(a=>a.MaSP);
        	var text="";
        	for(var i=0;i<arrTenSP.length;i++){
        		var html="<tr>\n"+
        		"<td><a href=\"chitietsp.html?query="+arrMaSP[i]+"\">"+arrTenSP[i]+"</a></td>\n"+
        		"</tr>";
        		text=text.concat(html);
        	}
        	$('#tableWishList').append(text);
        }).fail(function(xhr, textStatus, error) {
		    console.log(textStatus);
		    console.log(error);
		    console.log(xhr);
		});


		$.ajax({
            url: 'http://localhost:3000/changeinfo/spdangdg/'+email,
            dataType: 'json',
            timeout: 10000,
            type: 'GET',
        }).done(function(data) {
        	var arrTenSP=data.map(a=>a.TenSP);
        	var arrThoiGian=data.map(a=>a.ThoiGianDauGia);
        	var arrGia=data.map(a=>a.GiaDau);
            var arrMaSP=data.map(a=>a.MaSP);
        	var tabletext="<tr>"+
        				  "<th>Thời gian đấu giá</th>"+
        				  "<th>Tên sản phẩm</th>"+
        				  "<th>Giá đấu</th>"+
      					  "</tr>";
        	for(var i=0;i<arrTenSP.length;i++){
        		var html="<tr>\n"+
        		"<td>"+arrThoiGian[i]+"</td>\n"+
        		"<td><a href=\"chitietsp.html?query="+arrMaSP[i]+"\">"+arrTenSP[i]+"</a></td>\n"+
        		"<td>"+formatter.format(arrGia[i])+"</td>\n"+
        		"</tr>";
        		tabletext=tabletext.concat(html);
        	}
        	$('#tableDangDauGia').append(tabletext);
        }).fail(function(xhr, textStatus, error) {
		    console.log(textStatus);
		    console.log(error);
		    console.log(xhr);
		});
	
})

$(document).on('click', '#btnChangeInfo', function(){
	var isValid = $('#changeinfo').valid();
    if (isValid) {
    	 var _oldpwd = $('#txtOldPassword').val(),
    	 	 _email=$('#txtEmail').val(),
    	 	 _hoten=$('#txtHoTen').val(),
    	 	 _newpwd=$('#txtNewPassword').val();
    	 var body = {
            HoTen: _hoten,
            Password: _newpwd,
            NewEmail: _email,
            Email: email,
        	}   
		$.ajax({
            url: 'http://localhost:3000/changeinfo/get/'+email,
            dataType: 'json',
            timeout: 10000,
            type: 'GET',
        }).done(function(data) {
            if (_oldpwd===data.MatKhau) {
            	if (data.isLogin==="yes") {
            		if (data.isDelete==="no") {
            			$.ajax({
				            url: 'http://localhost:3000/changeinfo/setinfo/',
				            dataType: 'json',
				            timeout: 10000,
				            type: 'POST',
				            contentType: 'application/json',
		            		data: JSON.stringify(body),
		        		}).done(function(data) {
			        		alert("Đổi thông tin thành công! Vui lòng đăng nhập lại");
			        		localStorage.removeItem('email');
							localStorage.removeItem('type');
		        			window.location="file:///C:/Users/langt/Documents/GitHub/Website-dau-gia/TranHoangHiep/frontend/anonymous/login.html";
		        		}).fail(function(xhr, textStatus, error) {
				            console.log(textStatus);
				            console.log(error);
				            console.log(xhr);
				        });
            		} else {
            			alert("Tài khoản này đã bị xóa");
            			location.reload();
            			return;
            			}
            	} else {
            		alert("Bạn chưa đăng nhập. Vui lòng đăng nhập lại!");
            		window.location="file:///C:/Users/langt/Documents/GitHub/Website-dau-gia/TranHoangHiep/frontend/anonymous/login.html";
            		return;
            		}
            } else {
            	alert("Bạn nhập sai mật khẩu cũ!");
            	return;
            }
        }).fail(function(xhr, textStatus, error) {
		    console.log(textStatus);
		    console.log(error);
		    console.log(xhr);
			});
		
		}
	});



