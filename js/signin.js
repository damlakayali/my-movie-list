$(function(){
    $("#email-label").hide();
    $("#pass-label").hide();

    $( "#email" ).keyup(function() {
        var email=$('#email').val();
        if(email!="")  $("#email-label").show();
        else  $("#email-label").hide();
      });
      $( "#password" ).keyup(function() {
        var pass=$('#password').val();
        if(pass!="")  $("#pass-label").show();
        else  $("#pass-label").hide();
      });
})