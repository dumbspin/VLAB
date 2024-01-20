let canvasWidth = 800;
let canvasHeight = 600;

let knob, knob_base, nextimg, bgImg;
let knobImage;
let markerAngle = 0;
let knobRadius = 20;
let isDragging = false;
let offsetX, offsetY;
let stepSize = 5;
let currentStep = 0;
let markerRadius = 20;

let PipetX=155,PipetY=400;

let Pstart,Poverflow;

let increaseDH = true, dropHeight = 0, speed = 0;

// let knob_click;

let shownext;
let nxtx = 740; nxty = 540; nxtw = 50; nxth = 50;
const knob_click = new Audio('rachetOneCut.mp3');
const pumpS = new Audio('pump.mp3');
const knobX = -200, knobY = -200;
let rectX=200, rectY=200;

let pump = false;


let dragging1 = false;




class Raindrop {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 3;
    this.radius = 2.5;
    this.active = true;
  }

  update() {
    if (this.active) {
      this.y += this.speed;

      // Check if the raindrop has reached the specified y-coordinate
      if (this.y > flaskY + flaskheight - waterheight) {
        vi++;
        if (vi == 3 && rectHeight > 3 && !stop) {

          drop();
          vi = 0;
        }
        this.active = false; // Set raindrop as inactive

      }
    }
  }

  display() {
    if (this.active) {
      noStroke();
      push();
      fill(255, 216, 0, 200);
      ellipse(this.x, this.y, this.radius * 2, this.radius * 2 + 2); pop();
    }
  }
}





function preload() {
  // Load your images
  knob = loadImage('knobs.jpg');
  knob_base = loadImage('knob_base.png');
  bgImg = loadImage('bg.png');
  nextimg = loadImage('Forward.png')
  digitalFont = loadFont('DS-DIGI.TTF');
  gravity = loadImage('frontflask.png');
  
  // soundFormats('mp3', 'ogg'); // Specify supported sound file formats
  // knob_click = loadSound('knob_click.mp3');
  // knob_click.stop();

}
function setup() {

  canvos = createCanvas(canvasWidth, canvasHeight);
  canvos.parent("#container");
  nxtx = 740; nxty = 540; nxtw = 50; nxth = 50;
  textFont(digitalFont);
  // textColor(0,255,0);

  Pstart=color(0,255,0,50);
  Poverflow=color(255,0,0,50);


}


function draw() {
  // push();
  // translate(0, 0);
  background(bgImg);

  fill(255, 255, 255,50);
  rect(200, 200, 100, 100);
  push()
  translate(0, 0);
  let v=rectanglesIntersect(40,40,100,100,rectX,rectY,100,100);
  let u=rectanglesIntersect(200,200,100,100,rectX,rectY,100,100);

  // console.log(v,'hhj',u)
    if (!dragging1&& v){
      rectX=40;rectY=40;
      

    }
    else if(!dragging1&& u){
      rectX=400;
      rectY=400;
      

    }
    // rect(rectX,rectY,100,100);
  image(gravity, rectX, rectY, 100, 100);



  // for (let rd of raindrops) {

  //   rd.update();
  //   rd.display();
  // }

  image(nextimg, 400, 200, 30, 30);

  noStroke();
  push();
  fill(96, 196, 59, 230);
  rect(PipetX, PipetY, 10, -dropHeight);
  pop();

  //indicator to indicate starting or stoping of a pump
  push();
  fill(Pstart)
  ellipse(200, 200, 10, 10)
  pop();
  push();
  fill(Poverflow)
  ellipse(230, 200, 10, 10)
  pop();
  //For showing water in the droper
  if (pump == true) {
    Pstart=color(0,255,0,250);
    console.log(dropHeight);
    pumpS.play();
    dropHeight += 1 / 70 * speed;


     if (dropHeight > 200) {
      Poverflow=color(255,0,0,255);
      if(currentStep>10){
      currentStep=10;   }
      overflow();
      
    }


  }
  else if (pump == false) {
    Pstart=color(0,255,0,50);
    Poverflow=color(255,0,0,50);
    if(dropHeight>0){
    dropHeight -= 1 /140  * speed;
    // droperDrop= new DropF(currentPoint_2.x + 15,150 + 130);
    // drop();

    }
  }


  // pop();
  // Update and display each drop
  // for (let rd of raindrops) {

  //   rd.update();
  //   rd.display();
  // }
  // Draw knob
  translate(knobX, knobY);
  translate(width / 2, height / 2);

  // Draw the rotating knob image
  push();
  rotate(radians(markerAngle));
  imageMode(CENTER);
  image(knob, 0, 0, 100, 100);
  pop();

  // Draw the marker (red ball)
  let x = cos(radians(markerAngle)) * knobRadius;
  let y = sin(radians(markerAngle)) * knobRadius;
  fill(255, 0, 0);
  ellipse(x, y, markerRadius * 1, markerRadius * 1);
  // image(cutImg,x,y,markerRadius,markerRadius);
  push();
  // Display the current angle and step
  textStyle(BOLD);
  // Set the text color to green
  fill(0, 255, 0);
  textSize(20);
  textAlign(CENTER, CENTER);
  text(`Angle: ${markerAngle}`, 0, knobRadius + 20);
  text(`Step: ${currentStep}`, 0, knobRadius + 40); pop();

  speed = currentStep;


  let d = dist(mouseX - width / 2 - knobX, mouseY - height / 2 - knobX, cos(radians(markerAngle)) * knobRadius, sin(radians(markerAngle)) * knobRadius);
  if (d < markerRadius & !isDragging) {
    cursor('grab');
  }
  else if (isDragging) {
    cursor('grabbing');
  }
  else {
    cursor('auto');
  }


  //Other things
  translate(-knobX, -knobY);
  translate(-width / 2, -height / 2);

  fill(255, 255, 255,50);
  rect(40, 40, 100, 100);



  if (shownext == true) {
    // Check if it's time to blink
    if (millis() % (2 * blinkInterval) < blinkInterval) {
      // Display the image
      image(nextimg, nxtx, nxty, nxtw, nxth);
    }

  }

  if ((mouseX > 450 - 40 + 50 && mouseX < 450 + 40 + 50 && mouseY > 440 - 40 + 30 && mouseY < 440 + 40 + 30)) {
    cursor('pointer');
  }
  else if (((mouseX > 400 - 20 && mouseX < 400 + 20 && mouseY > 200 - 20 && mouseY < 200 + 20))) {
    cursor('pointer');
  }
  else     if (mouseX > rectX && mouseX < rectX + 100 &&
    mouseY > rectY && mouseY < rectY + 100){
      cursor('pointer');

    }


}
function overflow(){
  setTimeout(()=>{pump = false;},4000);
}

function drop() {
  for (let i = 0; i < 3; i++) {
    raindrops.push(new Raindrop(PipetX, (PipetY  + (i * 30))));
  }
}


function mousePressed() {



  // userStartAudio();
  if (mouseX > nxtx - nxtw / 4 && mouseX < nxtx + nxtw && mouseY > nxty - nxth / 4 && mouseY < nxty + nxth && shownext) {
    nextpressed();
  }
  else if (((mouseX > 400 - 20 + 10 && mouseX < 400 + 20 + 10 && mouseY > 200 - 20 && mouseY < 200 + 20))) {
    if (pump == true) {
      pump = false;
    }
    else {
      pump = true;
    }
  }

    // Check if the mouse is over the rectangle when pressed
    if (mouseX > rectX && mouseX < rectX + 100 &&
      mouseY > rectY && mouseY < rectY + 100) {
    dragging1 = true;
  }

  // Check if the mouse is over the knob
  // Check if the mouse is over the knob
  let d = dist(mouseX - width / 2 - knobX, mouseY - height / 2 - knobX, cos(radians(markerAngle)) * knobRadius, sin(radians(markerAngle)) * knobRadius);
  if (d < markerRadius) {

    isDragging = true;
    offsetX = mouseX - width / 2 - cos(radians(markerAngle)) * knobRadius;
    offsetY = mouseY - height / 2 - sin(radians(markerAngle)) * knobRadius;
  }


}







function mouseReleased() {
  isDragging = false;
  cursor('auto')
  dragging1 = false;


}
function mouseDragged() {
  if (isDragging) {
    // Calculate the angle based on mouse position
    let mx = mouseX - width / 2 - offsetX;
    let my = mouseY - height / 2 - offsetY;
    markerAngle = atan2(my, mx) * 180 / PI;

    // Ensure the angle stays within 0 to 360 degrees
    markerAngle = (markerAngle + 360) % 360;

    // Calculate the current step
    let newStep = floor(markerAngle / stepSize);

    // Check if the step has changed
    if (newStep !== currentStep&& newStep<60) {
      currentStep = newStep;
      knob_click.play();
      // console.log('Step changed:', currentStep);
    }
    else if(newStep>60){
      currentStep=0;
    }
  }

  else if (dragging1) {
    console.log('hii2')
    rectX = mouseX - 100 / 2;
    rectY = mouseY - 100 / 2;
  }
}


function nextpressed() {
  let text = { data1: n1, data2: n2, data3: v1, data4: v2 };
  fetch('send.php', {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(text),
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then(new_data => {
      console.log('Response from server (Page 1):', new_data);

      // Check for a success message or any other condition
      if (new_data.message === 'Value received successfully (Page 2)') {
        // Redirect to the second page after processing
        window.location.href = 'TitrationComp.php';
      } else {
        console.error('Unexpected server response:', new_data);
      }
    })


}

function rectanglesIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
  return (
    x1 < x2 + w2 &&
    x1 + w1 > x2 &&
    y1 < y2 + h2 &&
    y1 + h1 > y2
  );
}