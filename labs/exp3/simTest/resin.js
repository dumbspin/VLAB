let canvasWidth = 800;
let canvasHeight = 600;
let  bgImg,water,bckflask;
let shownext = false;
let process1 = 0, process2 = -1, process3 = -1, process4 = -1, process5=-1;




let img3x, img3yimg3w, img3h, nxth, nxtw, nxtx, nxty;
let canvos,x,y;




let showrect = true, rectHeight = 135;
let increase;
let drops = [];

let gif;
let blinking = true;
let blinkInterval = 200;
let full=false;
let vi=0;
let recColor=(255,255,255);
let flaskheight, flaskwidth, flaskX, flaskY, waterheight=5;
let speed_=0.1;
let stop=true;


class Drop {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 1;
    this.radius = 2.5;
    this.active = true;
  }

  update() {
    if (this.active) {
      this.y += this.speed;
      
      // Check if the drop has reached the specified y-coordinate
      if (this.y >flaskY+flaskheight - waterheight  ) {
        vi++;
        if (vi==2 && rectHeight>3 && !stop){

          drop();
          vi=0;
        }

        waterheight +=25*speed_;
        this.active = false; // Set drop as inactive
      }
    }
  }

  display() {
    if (this.active) {
      noStroke();
      fill=recColor;
      ellipse(this.x, this.y, this.radius * 2, this.radius * 2+2);
    }
  }
}

function preload() {
  // Load your images
  // image1 = loadImage('PotasiumChromate.png');
  // img = loadImage('Cap.png');
  bgImg = loadImage('bg3.png');
  image3 = loadImage('resinC.png');
  frontflask = loadImage('frontflask2.png');
  liquid = loadImage('Halfwater.png');
  nextimg = loadImage('Forward.png');
  bckflask=loadImage('backflask.png');
  water=loadImage('water.png')

}

function setup() {
  
   canvos=createCanvas(canvasWidth, canvasHeight);
  canvos.parent("#container");

  img3x = 370; img3y = 40, img3w = 50; img3h = 270;
  nxtx = 740; nxty = 540; nxtw = 50; nxth = 50;
  flaskwidth=110, flaskheight=145, flaskX= img3x-30, flaskY=img3y+280;
  console.log(water);
  water.resize(110,145);

}

function draw() {

// console.log(rectHeight);
water.resize(110,145);
  for (let drop of drops) {
    drop.update();
    drop.display();
  }
  background(bgImg);
  for (let drop of drops) {
    drop.update();
    drop.display();
  }
  // Display images

  //image(image2, img2x, img2y, img2w, img2h);

  // let y=img3y+280;
  image(bckflask, img3x-30, flaskY, 110, 145);
  
  
  // image(water, img3x-30, y, 110, 145);
//  let c=water.get(); 
//  image(c, flaskX, flaskY+flaskheight - waterheight);
  if (waterheight < flaskheight) {
     c = water.get(0, flaskheight - waterheight, flaskwidth, flaskheight);
    image(c, flaskX, flaskY+flaskheight - waterheight);
  } else {
    // If waterheight exceeds flaskheight, draw the entire image without cropping
    image(water, flaskX, flaskY+flaskheight - waterheight);
  }
  image(frontflask, img3x-30,flaskY, 110, 145);

  //console.log("MouseX: " + mouseX + ", MouseY: " + mouseY);

  if (shownext == true) {
      // Check if it's time to blink
  if (millis() % (2 * blinkInterval) < blinkInterval) {
    // Display the image
    image(nextimg, nxtx, nxty, nxtw, nxth);
  }
    
  }



    //console.log('process3')

    // Increase the rectangle's height in the y-axis3
    noStroke();
    rect(img3x+11,img3y+200, 27, -rectHeight);
    fill=recColor;

    // Increment the rectangle's height
    if (rectHeight > 0 & increase == false & !stop) {
      rectHeight -= 1*speed_;
      // setTimeout(()=>{waterheight +=.67*speed_;},1500);
      
    }
    // if()
    


  // drop();

  // setTimeout(drop(), 2000);

    image(image3, img3x, img3y, img3w, img3h);
 


    if (mouseX > img3x - img3w / 6 && mouseX < img3x + img3w && mouseY > img3y +210-  img3h / 4 && mouseY < img3y+210 + img3h/4) {
      // droperpressed();
      cursor('pointer');
    }
    else{
      cursor('auto')
    }
    if (rectHeight<=0){
      shownext=true;
      console.log('nextn')
    }

}

function mousePressed() {
  // Check if the mouse is over the Cap image


  // Check if the mouse is over the Droper image
  if (mouseX > img3x - img3w / 4 && mouseX < img3x + img3w && mouseY > img3y - img3h / 4 && mouseY < img3y + img3h) {
    droperpressed();
  }

  if (mouseX > nxtx - nxtw / 4 && mouseX < nxtx + nxtw && mouseY > nxty - nxth / 4 && mouseY < nxty + nxth && shownext) {
    nextpressed();
  }

}




function droperpressed() {

  console.log('droper');
 stop=!stop;
 vi=1;
 if (rectHeight>0 & !stop){
  drop();
  }
  
  increase=false;

}
function drop(){
  for (let i = 0; i < 2; i++) {
    // if()
    let drop = new Drop(img3x+25,240+(i*30));
    drops.push(drop);
  }
}

function nextpressed() {
  console.log('nxt');
  window.location.href = 'index2.html';


}

