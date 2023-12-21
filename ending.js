let mic;
let targetVolumeRange = { min: 0.2, max: 0.5 }; 
let gameWon = false;
let startTime;
let requiredTime = 2000; 



function setup() {
  createCanvas(windowWidth, windowHeight);
  img =  loadImage('Artboard 122.png');
  mic = new p5.AudioIn();
  mic.start();
  startTime = millis(); 
 
}

function draw() {


textSize(400)
text("CONGRATS",windowWidth,windowHeight);



}


