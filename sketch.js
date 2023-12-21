let mic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage('party.jpg');
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(220); 
  let vol = mic.getLevel();
  
  
  let opacity = map(vol, 0, .5, 255, 0);
  image(img, 0, 0, windowWidth, windowHeight);
  textSize(30);
  fill("#FF69B4");
  text("IF",50,50)
  text("YOU'RE",windowWidth/5,50)
  text("READY",windowWidth/3,50)
  text("TO ",windowWidth/2,50)
  text("RUMBLE",windowWidth-200,50)
  text("LET",windowWidth/6,windowHeight/5)
  text("ME",windowWidth/4,windowHeight/5)
  text("HEAR",windowWidth/2,windowHeight/5)
  text("YOU",windowWidth/1.5,windowHeight/5)
  
  text("(SCREAM)",windowWidth/1.3,windowHeight/5)
  textSize(60);
  text("BY JONATAHN RAMESH",windowWidth/1.8,windowHeight-10)
  // text("BY JONATHAN RAMESH",windowWidth/6,windowHeight/5)
  
  fill(0, opacity);
  
  
  rect(0, 0, windowWidth, windowHeight);
   fill(200)
  textSize(300);
  textStyle(BOLD);
  
  text('RAMESH', 0, windowHeight/1.4 );
  text('WARE', 0, windowHeight);
}




function mouseClicked() {
  if (mic.enabled) {
    mic.stop();
    window.location.href = 'index2.html';
  } else {
    
  }
}



