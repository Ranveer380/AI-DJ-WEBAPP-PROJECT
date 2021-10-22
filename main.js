function setup(){
    canvas=createCanvas(600,600);
    video=createCapture(VIDEO);
    video.hide();
    canvas.center()
}
function draw(){
    image(video,0,0,600,600);
}
