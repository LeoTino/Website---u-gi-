$(document).on('click', '#logout', function(){
	localStorage.removeItem('email');
	localStorage.removeItem('type');
	window.location='file:///C:/Users/langt/Documents/GitHub/Website-dau-gia/TranHoangHiep/frontend/anonymous/login.html';
})