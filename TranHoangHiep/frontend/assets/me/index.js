$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:3000/sanpham/top5',
        dataType: 'json',
        timeout: 10000,
        //type: 'get',
        //contentType: 'application/json',
        //data: JSON.stringify(body)
    }).done(function(data) {
        var listName=JSON.stringify(data[0]);
        var name=JSON.parse(listName)
        $("p").append(name.TenSP);
        var pic=document.getElementById('pic');
        pic.src=name.Hinh1;
         //alert(name["TenSP"]);
        
    }).fail(function(xhr, textStatus, error) {
        console.log(textStatus);
        console.log(error);
        console.log(xhr);
    });
});