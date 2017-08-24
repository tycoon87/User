$('form').submit(function(){
        $("#UserInfo").append("<div class='Last'>"+$("#last").val()+ "</div><div class='First'>"+$("#first").val()+ "</div><div class='Email'>"+$("#email").val()+ "</div><div class='Contact'>"+$("#contact").val()+ "</div>");
        console.log($("#first").val());
        console.log ('click');
        return false;
})
 $("UserInfo").append()