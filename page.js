var canvasSize = 256;

function makeGrid(){
  document.g
  for(var i = 0; i < canvasSize; i ++){
    var square = document.createElement("div");
    square.setAttribute('class', 'square');
    square.setAttribute('onmouseover', 'changeColor(this)');
    document.getElementById("container").appendChild(square);
  }
  var w = 100/Math.sqrt(canvasSize);
  w = w.toString() + "%";
  var a = document.getElementsByClassName("square");
  for(var i=0; i< a.length;i++){
    a[i].style.width = w;
    a[i].style.height = w;
  }
}

function changeColor(x){
  x.style.background = "black";
}

function clearGrid(){
  canvasSize = Math.pow(prompt("How many squares per side do you want to set the new canvas to?", "16"), 2);
}

$(document).ready(function(){
  $("#clear").click(function(){
    $(".square").css({"background-color": "white"})
    $("div.square").remove();
    makeGrid();
  });
});
