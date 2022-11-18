Status="";
function setup() {
    canvas = createCanvas(480, 320);
    canvas.center();
    video = createCapture("VIDEO");
    video.hide();
}
function start() {
    document.getElementById("Status").innerHTML="Status: Detecting Objects";
    input = document.getElementById("Search-Box").value;
}
function modelLoaded() {
    console.log("Model Loaded!");
    Status = true;
}
function draw() {
    video.size(480, 320);
}