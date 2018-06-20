var email;
$(document).ready(function () {
    email=localStorage.getItem('email');
    if(email==null){
        localStorage.removeItem('email');
        localStorage.removeItem('type');
        alert("Bạn chưa đăng nhập, vui lòng đăng nhập để tiếp tục");
        window.location="file:///F:/Git/Do%20An%20web%202/Website---u-gi-/TranHoangHiep/frontend/anonymous/login.html";
    }
    else{
        $("#local").append(email);
    }
})