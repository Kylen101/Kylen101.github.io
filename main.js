// changes the color of text from black to red
let = isGreen = true
setInterval(function () {
  if (isGreen){
    isGreen = false
      document.getElementById("vote").style.color = "#fa0202";  
  } else {
    isGreen = true
    document.getElementById("vote").style.color = "black";      
  }

}, 1500);
