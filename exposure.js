function draw() {
    var ctx = document.getElementById('canvas').getContext('2d');

    var canvasBackground = new Image();
    canvasBackground.src = "backdrop.jpg";

    // This draws the image we just loaded to our canvas
    var w = 200;
    var h = 200;

    ctx.drawImage(canvasBackground, 0, 0, w, h);

    // This blurs the contents of the entire canvas
    //    stackBlurCanvasRGBA("heroCanvas", 0, 0, w, h, 100);

    //    ctx.fillStyle = "rgb(200,0,0)";
    //    ctx.fillRect(10, 10, 55, 50);

    //    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    //    ctx.fillRect(30, 30, 55, 50);
}
draw();