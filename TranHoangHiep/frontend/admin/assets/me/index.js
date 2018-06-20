var email;
$(document).ready(function () {
    email=localStorage.getItem('email');
    $("#local").append(email);
})