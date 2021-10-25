$(document).ready(function(){
 

    const iceCreams = ["chocolate","strawberry","vanilla"];
    let str = '';
    iceCreams.forEach(function(iceCream){
      str += iceCream + ' ';
    });
  
    $("#output").text(str);
})

