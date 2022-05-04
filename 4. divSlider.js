$(document).ready(function() {
  let pageNum = 0
 
  $('#next').click(function(){
     if(pageNum == 0){
        pageNum++
        $("#two").toggle('slide')
        $("#one").hide()
        $("#three").hide()
     
      }
    else if(pageNum == 1){
        pageNum++
       $("#three").toggle('slide')
       $("#two").hide()
       $("#one").hide()
      }
     console.log(pageNum)
  })
 
   $('#prev').click(function(){
     if(pageNum == 1){
        pageNum--
        $("#two").hide()
        $("#one").toggle('slide')
        $("#three").hide()
      
      }
    else if(pageNum == 2){
        pageNum--
       $("#three").hide()
       $("#two").toggle('slide')
       $("#one").hide()
      }
       console.log(pageNum)
  })
 

});

