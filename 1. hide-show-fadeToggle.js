$(document).ready(() => {  
  
   $('#hidden').hover(() => {
     $('#hidden').css("color", "black");
  
   },function(){
     $('#hidden').css("color", "white");
     //$(this).hide()
   })
  $('.list').click(() => {
    alert('clicked me')
  })
  
  $('button').click(() => {
    $('.ironman').fadeToggle()
  })
  
 
})
