$(document).ready(function(){
// The Form in the Footer
$("#submitButton").on("click", function() {
  if ($('#buttonSelf').hasClass('disabled-button')) {
    /*$('#captchaErr').fadeIn();
    setTimeout(function(){
      $('#captchaErr').fadeOut(200);
    }, 2000);*/
    $('.group-inner.form-input').addClass('animate-right');
    $('#fillCaptcha').fadeIn();
    setTimeout(function(){
      $('#fillCaptcha').fadeOut();
      $('.group-inner.form-input').removeClass('animate-right');
    }, 2000);
  } else {
    var form_data = $('#subscribeForm').serialize();   
    var username = $("#subscribeForm input[name='username']").val();
    var email = $("#subscribeForm input[name='email']").val();
    if (username != '' && email != '') {
      $('#buttonSelf').addClass('green-button');
      $.ajax({
        type: "POST", 
        url: "subscriber.php", 
        data: form_data,
        success: function() {
          $('.form-group.form-footer').addClass('animate-right');
          //$('.main-footer .contact-widget').addClass('widget-hidden');
          $('#thanks').fadeIn(800);
        }
      });
    }
  }
});

//The Contact Form
$("#contactButton").on("click", function() {
  if ($('#contactButton').hasClass('disabled-button')) {
    $('#captchaErr').fadeIn();
    setTimeout(function(){
      $('#captchaErr').fadeOut(200);
    }, 2000);
  } else {
    var form_data = $('#contact-form').serialize();   
    var username = $("#contact-form input[name='username']").val();
    var email = $("#contact-form input[name='email']").val();
    var massage = $("#contact-form textarea").val();
    if (username != '' && email != '' && massage != '') {
      $.ajax({
        type: "POST", 
        url: "sendemail.php",
        data: form_data,
        success: function() {
          $('#doneForm').fadeIn();
          setTimeout(function(){
            $('#doneForm').fadeOut(200);
          }, 3000);
        }
      });
    }
  }
});
});