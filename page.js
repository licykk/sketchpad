function makeGrid(){
  for(var i = 0; i < 255; i ++){
    var square = document.createElement("div");
    square.setAttribute('class', 'square');
    square.setAttribute('onmouseover', 'changeColor(this)');
    document.getElementById("container").appendChild(square);
  }
}

function changeColor(x){
  x.style.background = "black";
}
