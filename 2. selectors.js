$(document).ready(() => {  
  
  $("#button1").click(() => {
    $("div").css('background-color', 'orange')
    
    $('.para').css('font-style', 'italic')
    $('#div1, #div2').css('background-color', 'red')
     $('#div3 li').css('background-color', 'purple')
  })
  
  $('#fade').click(() => {
    $('div > p').fadeToggle(3000)
  })
 
})
