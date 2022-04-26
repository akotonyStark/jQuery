$(document).ready(() => {  

    $('#wrapper').css("width", 500)
    $('em > a').css("color", "red")
   $('em + a').css("color", "orange")
  $("#fruitsList li:nth-child(3)").css("color", "red")
  
  $("#fruitsList li:first").css("color", "blue")
  $("li[name]").append(" and juice")
 
   $("li[id='apple']").append(" and juice")
  $("a[href *= 'google']").css("font-weight", "bold") //conatains google
  
  $("a[href ^= 'www']").css({"font-weight": "bold", "color": "darkred"}) //starts with wwww
  
   $("a[href $= 'pdf']").css({"font-weight": "bold", "color": "darkred"}) //ends with pdf
  $("img").width(500).height(500)
})
