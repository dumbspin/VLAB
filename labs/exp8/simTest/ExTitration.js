let canvasWidth = 800;
let canvasHeight = 600;

let knob, knob_base, nextimg, bgImg;
let knobImage;
let markerAngle = 0;
let knobRadius = 2;
let isDragging = false;
let offsetX, offsetY;
let stepSize = 10;
let currentStep = 5;
let markerRadius =10;
let Gcapped=false;

let PipetX = 290, PipetY = 354;

let Pstart, Poverflow;

let increaseDH = true, dropHeight = 0, speed = 0;
let raindrops=[];

// let knob_click;--
let shownext;
let nxtx = 740; nxty = 540; nxtw = 50; nxth = 50;
const knob_click = new Audio('rachetOneCut.mp3');
const pumpS = new Audio('pump.mp3');
const knobX =0, knobY = -65;
let rectX = 100, rectY = 100;
let rectX2 = 140, rectY2 = 30;
let rectX3=30,rectY3=200;

let x1=20,y1=20,x2=140,y2=20,x3=240,y3=365;


let vi;
let waterheight=0,flaskheight=100,flaskY=450;

let pump = false;


let dragging1 = false;
let dragging2 = false;
let dragging3 = false;
let dropCounter=0;
let Bwater=-60;
let weight=0.0;
let process=0;
let machineOn=true;
// let Gcapped



class Raindrop {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 2.5+(speed/100);
    this.radius = 2.2;
    this.active = true;
  }

  update() {
    if (this.active) {
      this.y += this.speed;

      // Check if the raindrop has reached the specified y-coordinate
      if (this.y > y3 + flaskheight - waterheight&&pump== false&&speed!=0 &&dropHeight > 0 ) {
        vi++;
        if (vi == 3 ) {

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
      fill(255, 255, 255, 90);
      ellipse(this.x, this.y, this.radius * 2, this.radius * 2 + 2); pop();
    }
  }
}





function preload() {
  // Load your images
  knob = loadImage('knob.png');
  knob_base = loadImage('knob_base.png');
  knobM = loadImage('knobMark.png')
  bgImg = loadImage('bg.png');
  nextimg = loadImage('Forward.png')
  digitalFont = loadFont('DS-DIGIB.TTF');
  gravity = loadImage('gravity.png');
  gravityC = loadImage('gravityCap.png');
  gravityW = loadImage('gravityWater.png');
  pippet = loadImage('pippet.png');
  pumpI = loadImage('pump.png');
  SOn=loadImage('switchON.png');
  SOff=loadImage('switchOF.png');
  buretteStand=loadImage('burette51.png');
  beaker=loadImage('PotasiumChromate.png');

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
  gravityW.resize(100, 100);


  Pstart = color(0, 255, 0, 100);
  Poverflow = color(255, 0, 0, 100);


}


function draw() {
  weight=0;
  let v2=rectanglesIntersect(x1,y1,100,100,rectX2,rectY2,100,100);
  let u2=rectanglesIntersect(x2,y2,100,100,rectX2,rectY2,100,100);
  let w2=rectanglesIntersect(x3,y3-50,100,100,rectX2,rectY2,100,100);
  let v=rectanglesIntersect(x1,y1,100,100,rectX,rectY,100,100);
let u=rectanglesIntersect(x2,y2,100,100,rectX,rectY,100,100);
let w=rectanglesIntersect(x3,y3,100,100,rectX,rectY,100,100);
  


  // console.log('speed',speed)
  // push();
  // translate(0, 0);
  background(bgImg);
  if(!w||!w2){
    process=0;
  }

    // Update and display each drop
    for (let rd of raindrops) {

      rd.update();
      rd.display();
    }
  

  //pump;
  image(pumpI,PipetX+54,PipetY-200,60,100)
 

  //Pippet
  image(pippet, PipetX-13, PipetY-292, 100, 300);
 
  image(gravityC,rectX3,rectY3,25,100);

  image(beaker,rectX2,rectY2-10,100,100);
  push();
  fill(255,255,255,200);
  rect(rectX2+18,rectY2+80,70,Bwater);pop();

  push()
  translate(0, 0);


  // console.log(v,'hhj',u)
  if (!dragging2 && v2) {
    rectX2 = x1; rectY2 = y1+12;
  }
  else if (dragging2 && u2) {
    rectX2 = x2;
    rectY2 = y2+12;
  }
  else if(!dragging2 && w2){
    rectX2=x3;
    rectY2=y3-50;
    process=1;
  }

  // console.log(v,'hhj',u)
  if (!dragging1 && v) {
    rectX = x1; rectY = y1;
  }
  else if (!dragging1 && u) {
    rectX = x2;
    rectY = y2;
  }
  else if(!dragging1 && w){
    rectX=x3;
    rectY=y3;
    weight+=.22;
    process=2;
  }


  
  if (rectanglesIntersect(rectX3,rectY3,25,100,rectX,rectY,100,20)){
    rectX3=rectX+38;
    rectY3=rectY-70;
    Gcapped=true;
    if (w){
      weight+=.05;
    }
  }
  else if (!rectanglesIntersect(rectX3,rectY3,25,100,rectX,rectY,100,20)){
    Gcapped=false;
  }
  if (rectanglesIntersect(rectX3,rectY3,25,100,30,200,100,30)){
    rectX3=30;
    rectY3=200;
    // Gcapped=true;
  }
  if (rectanglesIntersect(rectX3,rectY3,25,100,30,200,100,30)){
    rectX3=30;
    rectY3=200;
    // Gcapped=true;
  }
  
  if(rectanglesIntersect(rectX3,rectY3,25,100,260,445,60,-22)){
    rectX3=280;
    rectY3=360;
    weight=weight +.05;
  }
  
  // rect(rectX,rectY,100,100);
  // image(gravityW, rectX, rectY, 100, 100);
  if (waterheight < 98) {
    c = gravityW.get(0, 100 - waterheight, 100, 100);
    image(c, rectX , rectY  + 100 - waterheight);
  } else {
    // If waterheight exceeds flaskheight, draw the entire image without cropping
    image(gravityW, rectX, rectY);
  }
  image(gravity, rectX, rectY, 100, 100);




  noStroke();
  push();
  fill(255, 255, 255, 150);
  rect(PipetX-2, PipetY, 6, -dropHeight);
  pop();

  image(buretteStand,PipetX-220,PipetY-325,370,470)
  //indicator to indicate starting or stoping of a pump
  push();
  fill(Pstart)
  ellipse(390, 260, 10, 10)
  pop();
  push();
  fill(Poverflow)
  ellipse(413, 258, 10, 10)
  pop();
  //For showing water in the droper

  if (pump == true&&process==1) {
    Pstart = color(0, 255, 0, 250);
    // console.log(dropHeight);
    pumpS.play();
    dropHeight += 1 / 70 * speed;
    Bwater+=1/700*speed;

    if (dropHeight > 150) {
      Poverflow = color(255, 0, 0, 255);
      if (currentStep > 10) {
        currentStep = 10;
      }
      overflow();

    }


  }
  else if (pump == false&&(process==2||process==1)) {
    Pstart = color(0, 255, 0, 50);
    Poverflow = color(255, 0, 0, 50);
    if (dropHeight > 0) {
      dropHeight -= 1 / 140 * speed;
      Bwater-=1/1400*speed;
      console.log();
      // waterheight += 1/215*speed;
      if(Gcapped==false){
      waterheight += 1/215*speed;
      }
      // droperDrop= new DropF(currentPoint_2.x + 15,150 + 130);
      
    }

  }


  translate(knobX, knobY);
  translate(width / 2, height / 2);

  // Draw the rotating knob image
  push();
  rotate(radians(markerAngle));
  imageMode(CENTER);
  image(knob, 0, 0, 40, 40);
  pop();

  // Draw the marker (red ball)
  let x = cos(radians(markerAngle)) * knobRadius;
  let y = sin(radians(markerAngle)) * knobRadius;
  fill(255, 0, 0);
  // ellipse(x, y, markerRadius * 1, markerRadius * 1);
  push();
  imageMode(CENTER);
  image(knobM, x-10 , y, markerRadius, markerRadius); pop();
  push();
  // Display the current angle and step
  textStyle(BOLD);
  // Set the text color to green
  fill(0, 255, 0);
  textSize(20);
  textAlign(CENTER, CENTER);
  // text(`Angle: ${markerAngle}`, 0, knobRadius + 80);
  text(`Step: ${currentStep}`, 0, knobRadius + 40);
   pop();

  speed = currentStep;


  let d = dist(mouseX - width / 2 - knobX, mouseY - height / 2 - knobX, cos(radians(markerAngle)) * knobRadius, sin(radians(markerAngle)) * 2);
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
  translate(-width / 2, -height / 2);
  translate(-knobX, -knobY);

push();
  fill(255, 255, 255, 30);
  rect(x1, y1, 100, 100);
  rect(x2, y2, 100, 100);
  rect(x3,y3,100,100);
  rect(30,200,30,100);
  fill(255, 255, 255, 100);
  // rect(240,365+100,100,-20);
  pop();

  //To show toogle switch
  if(pump){
    image(SOn, 395, 257, 12, 40);}
    if(!pump){
    image(SOff, 395, 257, 12, 40);}

    if(machineOn){
      push();
      fill(102, 220, 20,150);
    rect(250,492,70,16);
    fill(60, 100, 60,255);
    textSize(20);
    textAlign(LEFT, CENTER);
    text(`${weight.toFixed(2)}  `,280 ,499 );
    textSize(12);
    textAlign(LEFT, CENTER);
    text('9',315 ,502 );

     pop();
    }



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
  else if (((mouseX > 400 - 20 && mouseX < 400 + 20 && mouseY > 270 - 10 && mouseY < 270 + 10))) {
    cursor('pointer');
  }
  // else if (mouseX > rectX && mouseX < rectX + 100 &&
  //   mouseY > rectY && mouseY < rectY + 100) {
  //   cursor('pointer');

  // }


}



function overflow() {
  setTimeout(() => { pump = false; }, 4000);
}

function showDrop() {
  if (pump== false&&speed!=0){

drop();
}}

function drop(){
  let v =Math.floor(speed/20)
  for (let i = 0; i < 3; i++) {
    raindrops.push(new Raindrop(PipetX +2, (PipetY -50+i*30)));
  }
}


function mousePressed() {
  


  // userStartAudio();
  if (mouseX > nxtx - nxtw / 4 && mouseX < nxtx + nxtw && mouseY > nxty - nxth / 4 && mouseY < nxty + nxth && shownext) {
    nextpressed();
  }
  else if (((mouseX > 400 - 20 && mouseX < 400 + 20 && mouseY > 270 - 10 && mouseY < 270 + 10))) {
    if (pump == true) {
      pump = false;
      vi = 2;
    }
    else {
      pump = true;
      vi = 2;
      // showDrop();
    }
  }

  // Check if the mouse is over the rectangle when pressed
  if (mouseX > rectX && mouseX < rectX + 100 &&
    mouseY > rectY && mouseY < rectY + 100) {
    dragging1 = true;

    
  }
  if (mouseX > rectX2 && mouseX < rectX2 + 100 &&
    mouseY > rectY2 && mouseY < rectY2 + 100) {
    dragging2 = true;
  }
  if (mouseX > rectX3 && mouseX < rectX3 + 100 &&
    mouseY > rectY3 && mouseY < rectY3 + 100) {
    dragging3 = true;
  }

  // Check if the mouse is over the knob
  // Check if the mouse is over the knob
  let d = dist(mouseX - width / 2 - knobX, mouseY - height / 2 - knobX, cos(radians(markerAngle)) * knobRadius, sin(radians(markerAngle)) * knobRadius);
  if (d < markerRadius) {

    isDragging = true;
    offsetX = mouseX - width / 2 - cos(radians(markerAngle)) * knobRadius;
    offsetY = mouseY - height / 2 - sin(radians(markerAngle)) * knobRadius;
    // showDrop();

  }


}



function doubleClicked(){
  // currentStep=0;
showDrop();
}



function mouseReleased() {
  isDragging = false;
  cursor('auto')
  dragging1 = false;
  dragging2 = false;
  dragging3 = false;
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
    if (newStep !== currentStep && newStep < 60) {
      currentStep = newStep;
      knob_click.play();
      // console.log('Step changed:', currentStep);
    }
    else if (newStep > 60) {
      currentStep = 0;
    }
  }

  else if (dragging1) {
    // console.log('hii2')
    rectX = mouseX - 100 / 2;
    rectY = mouseY - 100 / 2;
  }
  else if (dragging2) {
    // console.log('hii2')
    rectX2 = mouseX - 100 / 2;
    rectY2 = mouseY - 100 / 2;
  }
  else if (dragging3) {
    // console.log('hii2')
    rectX3 = mouseX - 25 / 2;
    rectY3 = mouseY - 100 / 2;
    // Gcapped=false;
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