var x;
$(document).ready(function(){
   $("#btn_essen").click(function(){
    x = (Math.random() * (8 - 1)) + 1;
    x = parseInt(x);
    $(".essen").empty();
    $(".essen").append("<img style='width:90%;max-height:500px;' src='" + x + ".jpg'>");
  });
}); 
