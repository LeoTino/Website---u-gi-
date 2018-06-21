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
})