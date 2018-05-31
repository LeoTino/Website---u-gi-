$(document).ready(function() {
    $.ajax({
        url: 'http://localhost:3000/sanpham/top5',
        dataType: 'json',
        timeout: 10000,
        //type: 'get',
        //contentType: 'application/json',
        //data: JSON.stringify(body)
    }).done(function(data) {
        var srcImgSP=data.map(a =>a.Hinh1);
        var arrNameSP=data.map(a => a.TenSP); //string name+srcImgSP[i]+
        var text="";
        var ten="";
        for(var i=0;i<2;i++){
            var x="<div class=\"card\" style=\"width: 20rem\">\n" +
            "<img class=\"card-img-top\" src="+ srcImgSP[i] +" height=\"125\" width=\"180\" alt=\"Card image cap\">\n" + //hinh anh
            "<div class=\"card-body\">\n" +
            "<h5 class=\"card-title\">"+ arrNameSP[i] +"</h5>\n" //title ten sp
            + "<p>"+ arrNameSP[i] +"</p>\n" //mieu ta
            + "<a href=\"#\" class=\"btn btn-primary\">See details</a> </div> </div>" ;//button
            //ten+="<p> "+ arrNameSP[i] +" </p>\n";
            $("#sp").append(x);
        }
        //alert(x);
        //document.getElementById("sp").innerHTML= text;
        //pic[1].src=srcImgSP[1];
        //var arrNameSP = data.map(a => a.foo);
        /*var listName=JSON.stringify(data[0]);
        var name=JSON.parse(listName);
        $("p").append(name.TenSP);
        var pic=document.getElementById('pic');
        pic.src=name.Hinh1;
*/
         //alert(name["TenSP"]);
        
    }).fail(function(xhr, textStatus, error) {
        console.log(textStatus);
        console.log(error);
        console.log(xhr);
    });
});