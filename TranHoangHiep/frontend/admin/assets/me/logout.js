$(document).on('click', '#logout', function(){
	localStorage.removeItem('email');
	localStorage.removeItem('type');
	window.location='file:///F:/Git/Do%20An%20web%202/Website---u-gi-/TranHoangHiep/frontend/anonymous/login.html';
})