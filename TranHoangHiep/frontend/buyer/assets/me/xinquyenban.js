var check;
$(document).ready(function() {
    var email=localStorage.getItem('email');
    if(email==null){
        localStorage.removeItem('email');
        localStorage.removeItem('type');
        alert("Bạn chưa đăng nhập, vui lòng đăng nhập để tiếp tục");
        window.location="file:///C:/Users/langt/Documents/GitHub/Website-dau-gia/TranHoangHiep/frontend/anonymous/login.html";
    }
    else{
        $("#local").append(email);
    }
    
})

var temp=0;
$(document).on('click', '#btnDangKy', function(){
	var email=localStorage.getItem('email');

	$.ajax({
	    url: 'http://localhost:3000/quyendangban/get/'+email,
	    dataType: 'json',
	    timeout: 10000,
	}).done(function(data) {
		if(data.QuyenDangBan=='yes'){
			alert("Bạn đã có quyền đăng bán. Vui lòng đăng nhập lại");
			window.location="file:///C:/Users/langt/Documents/GitHub/Website-dau-gia/TranHoangHiep/frontend/anonymous/login.html";
	    }
		if(data.QuyenDangBan=='no'){
	   		var maND=data.MaNguoiDung;
	   		var body ={
	               MaND : maND,
	           }     
	    	if(temp==0){              
	   			$.ajax({
		        url: 'http://localhost:3000/quyendangban/themdangky',
	               dataType: 'json',
	               timeout: 10000,
	               type: 'POST',
	               contentType: 'application/json',
	                data: JSON.stringify(body)
			    }).done(function(data) {
			    	temp++;
			    	alert("Đăng ký thành công");
			    }).fail(function(xhr, textStatus, error) {
			        console.log(textStatus);
			        console.log(error);
			        console.log(xhr);
			    });
	   		}
	   		else{
	   			alert('Yêu cầu của bạn đang chờ duyệt. Vui lòng không đăng ký nữa!');
	   		}
	   	}
	    }).fail(function(xhr, textStatus, error) {
		    console.log(textStatus);
		    console.log(error);
		    console.log(xhr);
		});
})


		/*var isApproved='';

	var temp=$.ajax({
	        url: 'http://localhost:3000/quyendangban/getycdb/'+email,
	        dataType: 'json',
	        timeout: 10000,
	    }).done(function(data) {
	    	if(data.isApproved=='no'){
	    		alert("Yêu cầu của bạn đang được duyệt. Vui lòng không đăng ký nữa");
	    	}
	    	else{
	    		isApproved='yes';
	    	}
	    }).fail(function(xhr, textStatus, error) {
	        console.log(textStatus);
	        console.log(error);
	        console.log(xhr);
	    });*/
