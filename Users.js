$('form').submit(function(){
        
        var temp1 = $('#last').val();
//        $("#lastN").append(temp1);
        var temp2 = $('#first').val();
  
//        $('#firstN').append(temp2);
        var temp3 = $('#email').val();
//        $('#emailT').append(temp3);
        var temp4 = $('#contact').val();
//        $('#phone').append(temp4);
        $('tbody').append( '<tr><td>' + temp1 + '</td><td>' +temp2+ '</td><td>' +temp3+ '</td><td>' +temp4+ '</td></tr>')
    
        return false;
})