let canvasWidth = 800;
let canvasHeight = 600;
let image1, image2, bgImg, rod, burette, water;
let buretteX, buretteY;
let size = 7;
let shownext = false;
let color1, color2, color3, color4, color5;

let n1=.7,n2,v1,v2=25;//Here 1 is for burette and 2 for flask and here we can choose n1,v2 and n2 will be randomly generated and will help to find v1

let dropHeight = 20, showDropHeight = true, increaseDH = true;

let startPoint, endPoint, rotatePoint, currentPoint;
let steps = 60;
let currentStep = 0;
let currentStep_2 = 0;
let process1 = 0; // 0: Not started, 1: Moving to point B, 2: Rotating, 3: Moving to point C
let process2 = 0;//0: Not started, 1:Moving to point B, 2:

let startPoint_3, endPoint_3, endPoint2_3, endPoint_3_, endPoint2_3_; // Starting and two ending points
let currentPoint_3;

let flaskheight, flaskwidth, flaskX, flaskY, waterheight = 10;

let changeColor;

let animationInProgress = 3;
let showrect = false, rectHeight = 180;
let increase, dropAdded = false;
let drops = [];
let raindrops = [];
let scaleFactor = 1;

let droperDrop;

let showDrop = false;

let gif;
let blinking = true;
let blinkInterval = 200;
let vi = 0;
let recColor;
let waterDroplet;
let speed_ = 0.1;
let stop = true;
let runOnce=true;//Used in if for dropeer
let volAdded=0, get_color=0;
let drop_used=false;
let onceA=true;
let once1=true;

let touch;
let showCir;

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
class WaterDroplet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    if (showDrop) {
      noStroke();
      // ellipse(this.x,this.y,5, 20);

      // Base color of the water droplet
      // Base color of the water droplet (Peacock Blue)

      let baseColor = color(96, 196, 59, 100);
      baseColor = color1;
      //0, 161, 173, 100

      // Apply gradient for a more realistic effect
      let gradientTop = color(144, 201, 100, 50);//0, 108, 117,
      gradientTop = color2;
      let gradientBottom = color(50, 250, 50, 100);
      gradientBottom = color3;
      // Draw the flattened circular shape with gradient
      radialGradient(this.x, this.y, 20, baseColor, gradientTop, gradientBottom);

      // Add a reflection at the top
      let reflectionColor = color(255, 255, 255, 50);
      radialGradient(this.x, this.y - 10 + 7, 8, reflectionColor, color4);//color(100, 155, 100, 50)

      // Simulate a slight distortion at the edge
      let distortionColor = color5;//color(0, 255, 0, 10)
      radialGradient(this.x, this.y + 5, 20, distortionColor, color(255, 255, 255, 0));

    }
  }
}
class DropF {
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
      // console.log('Drop down')

      // Check if the drop has reached the specified y-coordinate
      if (this.y > 490) {
        this.active = false; // Set drop as inactive
      }
      else if (this.y < 490) {

        setTimeout(() => {
          showDrop = true;
        }, 800);
        // console.log(showDrop);
      }
    }
  }

  display() {
    if (this.active) {
      noStroke();
      push();
      fill(96, 196, 59, 200);
      ellipse(this.x, this.y, this.radius * 2, this.radius * 2 + 2);
      pop();
    }
  }
}

function radialGradient(x, y, radius, c1, c2) {
  for (let r = radius; r > 0; r--) {
    let inter = map(r, 0, radius, 0, 1);
    let c = lerpColor(c1, c2, inter);
    push();
    fill(c);
    ellipse(x, y, r * 2, r); pop();
  }
}


function preload() {
  // Load your images
  image1 = loadImage('PotasiumChromate.png');
  rod = loadImage('glass rod.png');
  bgImg = loadImage('bg.png');
  image3 = loadImage('droper.png');
  frontflask = loadImage('frontflask.png');
  bckflask = loadImage('backflask.png')
  burette = loadImage('resinC.png');
  nextimg = loadImage('Forward.png');
  water = loadImage('water.png');
  dish = loadImage('dish.png');

  gif1 = createImg('gif1.gif');
  gif2 = createImg('gif1.gif');
  gif3 = createImg('gif1.gif');
  gif4 = createImg('gif1.gif');

  gif1.size(80, 80);
  gif2.size(80, 80);
  gif3.size(80, 80);
  gif4.size(80, 80);


  gif1.hide(); // Hide the original GIF initially
  gif2.hide();
  gif3.hide();
  gif4.hide();
}
function setup() {

  canvos = createCanvas(canvasWidth, canvasHeight);
  canvos.parent("#container");
  gif1.parent("#container");
  gif2.parent("#container");
  gif3.parent("#container");
  gif4.parent("#container");
  water.resize(100, 120);

  recColor = color(255, 216, 0, 150);

  img2x = 560; img2y = 222; img2w = 200; img2h = 10;
  img3x = 150; img3y = 100, img3w = 55; img3h = 160;
  buretteX = 30, buretteY = 60;
  nxtx = 740; nxty = 540; nxtw = 50; nxth = 50;
  flaskwidth = 125, flaskheight = 110, flaskX = img3x - 25, flaskY = img3y + 312;
  // gif1.show();

  color1 = color(96, 196, 59, 100);
  color2 = color(144, 201, 100, 50);
  color3 = color(50, 250, 50, 100);
  color4 = color(100, 155, 100, 50);
  color5 = color(0, 255, 0, 10);

  slider1 = select('#speed_change');
  

  slider1.removeAttribute('disabled'); // Enable the slider1


  angleMode(DEGREES);
  waterDroplet = new WaterDroplet(500, 490);


  startPoint = createVector(140, 385);
  endPoint = createVector(250, 150);
  endPoint2 = createVector(650, 420);
  endPoint3 = createVector(80, 100);
  endPoint4 = createVector(100, 490);
  

  
  currentPoint = startPoint;

  startPoint_2 = createVector(630, 280);
  endPoint_2 = createVector(630, 120);
  endPoint2_2 = createVector(410, 270);
  endPoint3_2 = createVector(655, 120);
  endPoint4_2 = createVector(655, 310);

  currentPoint_2 = startPoint_2;
  changeColor = false;
  speed_=0.3*slider1.value();

  //set the normality
  n2=random(0.15,0.2);
  v1=(n2*v2)/n1;
  console.log(n2,' : ',v1)

}


function draw() {
  background(bgImg);

  speed_=0.02*slider1.value();
  let valueDisplayElement = document.getElementById("valueDisplay");
  valueDisplayElement.innerText = (volAdded.toFixed(1))+ ' ml';

  if (
    rectanglesIntersect(
      500, // x-coordinate of the first image
      490, // y-coordinate of the first image
      20, // width of the first image
      20, // height of the first image
      currentPoint.x, // x-coordinate of the second image
      currentPoint.y, // y-coordinate of the second image
      60, // width of the second image
      140   // height of the second image
    )&& showDrop==true && once1
  ){
    touch +=1;
    console.log('drop used')
    once1=false;
  }
  // console.log(drop_used)

  // console.log(changeColor)

  // console.log('X',currentPoint_2.x);
  // waterDroplet.display();
  for (let dr of drops) {

    dr.update();
    dr.display();
  }

  // Update and display each drop
  for (let rd of raindrops) {

    rd.update();
    rd.display();
  }
  // Increase the rectangle's height in the y-axis3
  noStroke();
  rect(img3x + 20, img3y + 200 + 20, 15, -rectHeight - 55);
  fill(recColor);

  // Increment the rectangle's height
  if (rectHeight > 0 & increase == false & !stop) {
    rectHeight -= 1 * speed_;
    waterheight += .3 * speed_;
    volAdded += .21*speed_;
    console.log(volAdded);
    if (volAdded>v1 &     rectanglesIntersect(
      flaskX + 5, // x-coordinate of the first image
      flaskY - 5 + flaskheight - waterheight, // y-coordinate of the first image
      flaskwidth, // width of the first image
      flaskheight, // height of the first image
      currentPoint.x, // x-coordinate of the second image
      currentPoint.y, // y-coordinate of the second image
      60, // width of the second image
      140  // height of the second image
    )){
      // console.log('Touch')
      get_color=volAdded;
    }
    // setTimeout(()=>{waterheight +=.67*speed_;},1500);

  }
  else {
    increase = true;
  }

  image(bckflask, buretteX + 95, buretteY + 350, size * 18, size * 17.5);
  if (waterheight < flaskheight) {
    c = water.get(0, flaskheight - waterheight, flaskwidth, flaskheight);
    image(c, flaskX + 5, flaskY - 5 + flaskheight - waterheight);
  } else {
    // If waterheight exceeds flaskheight, draw the entire image without cropping
    image(water, flaskX, 412 - 5);
  }



  // frontflask.resize()


  image(burette, buretteX, buretteY, size * 28.57, size * 73);


  image(frontflask, buretteX + 90, buretteY + 345, size * 17, size * 18.14);

  push();
  scale(scaleFactor);
  image(dish, 450, 440, 100, 100);
  pop();
  if(get_color<v1){
    changeColor=true;
  }
  if (get_color> v1){
    changeColor=false;
  }

  waterDroplet.display();
  if (process1 === 0) {
    image(rod, currentPoint.x, currentPoint.y, 60, 140);
  }
  else if (process1 === 1) {
    // Moving to point B or C
    moveToPoint(endPoint);
    showCir=true;
  }
  else if (process1 === 2) {
    moveToPoint(endPoint2);
  }
  else if(process1===3){
    showCir=false;
    image(rod, currentPoint.x, currentPoint.y, 60, 140);
    

    if (changeColor & touch==1 ){  
      showCir=false;   
      color1 = color(0, 161, 173, 100);
      color2 = color(0, 108, 117, 50);
      color3 = color(50, 50, 250, 100);
      color4 = color(100, 100, 155, 50);
      color5 = color(0, 0, 255, 10);}
      else if (!changeColor & touch==1){
        showCir=false;
        color1 = color(96, 196, 59, 100);
        color2 = color(144, 201, 100, 50);
        color3 = color(50, 250, 50, 100);
        color4 = color(100, 155, 100, 50);
        color5 = color(0, 255, 0, 10);
        shownext=true;
        // console.log('finish')
      }
      else if(touch==2 && onceA){
        showCir=false;
        alert('Alert! This drop is already used./n First, click on dish to rinse and then add new drop.');
        onceA=false;
        color1 = color(0, 0, 0, 100);

        
      }
    
  }
  else if(process1===4){
    moveToPoint(endPoint3);
    once1=true;
  }
  else if(process1===5){
    moveToPoint(endPoint4);
  }
  else if(process1===6){
  image(rod, startPoint.x, startPoint.y, 60, 140);
  }
  else {
    image(rod, currentPoint.x, currentPoint.y, 60, 140);
  }

  // pop();
  image(frontflask, buretteX + 90, buretteY + 345, size * 17, size * 18.14);

 
 
 


  //For showing water in the droper
  if (showDropHeight == true) {

    noStroke();
    push();
    fill(96, 196, 59, 230);
    rect(currentPoint_2.x + 15, currentPoint_2.y + 130, 5, -dropHeight);
        pop();

    if (dropHeight != 20 & increaseDH == true) {
      dropHeight += 1;
    }
    if (dropHeight != 0 & increaseDH == false) {
      dropHeight -= 1;
      // droperDrop= new DropF(currentPoint_2.x + 15,150 + 130);
    }

  }
// console.log(process2)

  if (process2 === 0) {
    image(image3, currentPoint_2.x, currentPoint_2.y, 40, 140);
  }
  else if (process2 === 1) {
    // Moving to point B or C
    moveToPoint_2(endPoint_2);
  }
  else if (process2 === 2) {
    moveToPoint_2(endPoint2_2);
  }
  else if(process2===3){
    if(runOnce){
    increaseDH = false;
    for (let i = 0; i < 1; i++) {
      let drop = new DropF(currentPoint_2.x + 18, currentPoint_2.y + 120);
      drops.push(drop);
      
    } runOnce=false;process2+=1;touch=0;
  }
    
  }
  else if(process2===4){
    moveToPoint_2(endPoint3_2);
  }
  else if(process2===5){
    moveToPoint_2(endPoint4_2);
  }
  else if(process2===6){
  image(image3, startPoint_2.x, startPoint_2.y, 40, 140);
  }
  else {
    image(image3, currentPoint_2.x, currentPoint_2.y, 40, 140);
  }




  //To show indicator container
  image(image1, 600, 320, 100, 160);
  
  if(showCir){ 
    // for(let i; i<10;i++)
   {
    ellipse(currentPoint.x,currentPoint.y+137,6,3 );}
  }



  if (shownext == true) {
    // Check if it's time to blink
    if (millis() % (2 * blinkInterval) < blinkInterval) {
      // Display the image
      image(nextimg, nxtx, nxty, nxtw, nxth);
    }

  }
  if (mouseX > buretteX - size * 28.57 / 8 + 140 && mouseX < buretteX + size * 28.57 / 6 + 140 && mouseY > buretteY - size * 5 + 280 && mouseY < buretteY + size * 5 + 280) {
    cursor('pointer');
  }
  else if ((mouseX > currentPoint.x - 20 + 50 && mouseX < currentPoint.x + 20 + 50 && mouseY > currentPoint.y - 40 + 50 && mouseY < currentPoint.y + 40 + 50)) {
    cursor('pointer');
  }
  //For droper
  else if ((mouseX > currentPoint_2.x - 10 + 15 && mouseX < currentPoint_2.x + 10 + 15 && mouseY > currentPoint_2.y - 80 + 60 && mouseY < currentPoint_2.y + 80 + 60)) {
    cursor('pointer');
  }
  else if ((mouseX > 450 - 40 + 50 && mouseX < 450 + 40 + 50 && mouseY > 440 - 40 + 30 && mouseY < 440 + 40 + 30)) {
    cursor('pointer');
  }

  else {
    cursor('auto');
  }

}

function mousePressed() {


  // Check if the mouse is over the Droper image
  if (mouseX > buretteX - size * 28.57 / 8 + 140 && mouseX < buretteX + size * 28.57 / 6 + 140 && mouseY > buretteY - size * 5 + 280 && mouseY < buretteY + size * 5 + 280) {
    droperpressed();
  }
  else if (mouseX > currentPoint.x - 20 + 50 && mouseX < currentPoint.x + 20 + 50 && mouseY > currentPoint.y - 40 + 50 && mouseY < currentPoint.y + 40 + 50) {
    console.log(currentStep);
  process1+=1;


  }
  else if ((mouseX > currentPoint_2.x - 10 + 15 && mouseX < currentPoint_2.x + 10 + 15 && mouseY > currentPoint_2.y - 80 + 60 && mouseY < currentPoint_2.y + 80 + 60)) {
    
    process2 +=1;
    
  }

  if (mouseX > nxtx - nxtw / 4 && mouseX < nxtx + nxtw && mouseY > nxty - nxth / 4 && mouseY < nxty + nxth && shownext) {
    nextpressed();
  }

  else if (mouseX > 450 - 40 + 50 && mouseX < 450 + 40 + 50 && mouseY > 440 - 40 + 30 && mouseY < 440 + 40 + 30) {
    color1 = color(96, 196, 59, 100);
    color2 = color(144, 201, 100, 50);
    color3 = color(50, 250, 50, 100);
    color4 = color(100, 155, 100, 50);
    color5 = color(0, 255, 0, 10);
    scaleFactor = 2;
    showDrop = false;

  }

}
function mouseReleased() {
  scaleFactor = 1;
}
function moveToPoint(targetPoint) {
  console.log(process1);
  let stepX = (targetPoint.x - currentPoint.x) / steps;
  let stepY = (targetPoint.y - currentPoint.y) / steps;

  
  currentPoint.x += stepX;
  currentPoint.y += stepY;




  image(rod, currentPoint.x, currentPoint.y, 60, 140);
  // pop();

  currentStep++;

  if (currentStep >= steps) {
    
      process1+=1;
      currentStep = 0;
    if(process1===6){
      currentStep = 0;
      onceA=true;
      process1=0;
    }

}}
function moveToPoint_2(targetPoint_2) {
  console.log(process2);
  let stepX = (targetPoint_2.x - currentPoint_2.x) / steps;
  let stepY = (targetPoint_2.y - currentPoint_2.y) / steps;

  currentPoint_2.x += stepX;
  currentPoint_2.y += stepY;




  image(image3, currentPoint_2.x, currentPoint_2.y, 40, 140);
  // pop();

  currentStep_2++;

  if (currentStep_2 >= steps) {
    process2 +=1;
    currentStep_2=0;
    
    if (process2==6){
      runOnce=true;
    currentStep_2=0;
    increaseDH=true;
      process2=0;
    }
  }
}


function droperpressed() {
  // Create initial raindrops

  stop = !stop;
  increase = false;
  // process1=1;
  vi = 2;
  if (rectHeight > 0 & !stop) {
    drop();
  }



}
function drop() {
  for (let i = 0; i < 3; i++) {
    raindrops.push(new Raindrop(buretteX + 147, (buretteY + 150, 240 + (i * 30))));
  }
}


function nextpressed() {
  let text={data1: n1, data2: n2, data3:v1, data4:v2};
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
      console.log('Response from server (Page 1):',new_data);

      // Check for a success message or any other condition
      if (new_data.message === 'Value received successfully (Page 2)') {
        // Redirect to the second page after processing
         window.location.href = 'TitrationComp.php';
      } else {
        console.error('Unexpected server response:',new_data);
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
