let mic;
let targetVolumeRange = { min: 0.1, max: 0.3 }; 
let gameWon = false;
let startTime;
let requiredTime = 17000; 



function setup() {
  createCanvas(windowWidth, windowHeight);
  img =  loadImage('Artboard 125.png');
  mic = new p5.AudioIn();
  mic.start();
  startTime = millis(); 
}

function draw() {






  let vol = mic.getLevel();
  let mappedValue = map(vol, 0, .4, 0, 2);

  let c1 = color("#F3FDE8"); 
  let c2 = color("#A8DF8E"); 


  let interpColor = lerpColor(c1, c2, mappedValue);
  background(interpColor);
  image(img, 0, 0, windowWidth, windowHeight);

//        let minFontWeight = 100;  
//       let maxFontWeight = 900;  

//  
//       let fontWeight = map(vol, 0, targetVolumeRange.max, minFontWeight, maxFontWeight);
      textStyle(BOLD)
   textSize(16);
  text(+ vol.toFixed(2),windowWidth-50,50)
  
  
  text('CURRENT VOLUME: ', 50, 50);
  text(' TARGET RANGE:',windowWidth/5,windowHeight/5)
  text(' 0.1',windowWidth-(windowWidth/5),windowHeight/5)
  
  
  text(' DURATION REQUIRMENT:',windowWidth/5,windowHeight-(windowHeight/5));
  text(' 17',windowWidth-(windowWidth/5),windowHeight-(windowHeight/5));
  text('LIVE TIMER: ' , 50, windowHeight-50);
  text(' SECONDS',windowWidth-100,windowHeight-50)
  

  fill("#FFBFBF");
  ellipse(windowWidth/2, windowHeight/2, 50*(vol*10),50*(vol*10));

 
  
  if (vol >= targetVolumeRange.min && vol <= targetVolumeRange.max) {
    
    if (millis() - startTime >= requiredTime) {
      displayWinMessage();
    }

   
   

    textSize(40);
  
  
    text(((millis() - startTime) / 1000).toFixed(2),(windowWidth/2),windowHeight-50 )
    
  } else {
    
    startTime = millis(); 
    gameWon = false;
  }
}


function displayWinMessage() {
 
  background("black");
  textSize(100);
  fill(255);
  text('YOUR NOT TO SHABBY ', windowWidth/2-100, windowHeight / 2);
  fill("0, 50, 0");

  mic.stop();
  window.location.href = 'index4.html';
}