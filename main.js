var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d")

var color = "black"
var lineWidth = 3;

var currentX, currentY, lastX, lastY;

canvas.addEventListener ("mousedown", mousedownFn);

function mousedownFn () {
    console.log ("mouseClick")
    
}

canvas.addEventListener ("mousemove", mousemoveFn)

function mousemoveFn () {
    console.log ("mouseMove")
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.moveTo (lastX, lastY)
    ctx.lineTo (currentX, currentY)
    ctx.stroke();
}

canvas.addEventListener ("mouseleave", mouseleaveFn)

function mouseleaveFn () {
    console.log ("mouseLeave")
}

canvas.addEventListener ("mouseup", mouseupFn)

function mouseupFn () {
    console.log ("Mouseup")
}