let canvasWidth = 800;
let canvasHeight = 600;
let  bgImg,water,bckflask;
let shownext = false;
let process = 0;



let img3x, img3y,img3w, img3h, nxth, nxtw, nxtx, nxty;
let canvos,x,y;




let showrect = true, rectHeight = 0;
let increase;
let drops = [];

let gif;
let blinking = true;
let blinkInterval = 200;
let full=false;
let vi=0;
let recColor1,recColor2,recColor3;
let flaskheight, flaskwidth, flaskX, flaskY, waterheight=5;
let beaker1H=0,beaker2H=0,beaker3H=0;
let speed_=0.1;
let stop=false;
let decW=0;

let rectX = 10, rectY = 370;
let rectX2 = 220, rectY2 = 380;
let rectX3=500,rectY3=370;
let x1=170,y1=330,x2=150,y2=30,x3=243,y3=365;
let dragging1 = false;
let dragging2 = false;
let dragging3 = false;
let cngColor;




function preload() {
  // Load your images
  // image1 = loadImage('PotasiumChromate.png');
  // img = loadImage('Cap.png');
  bgImg = loadImage('bg4.png');
  image3 = loadImage('sepratingFunnel.png');
  fullW=loadImage('water.png');
  halfW=loadImage('Halfwater.png')
  beaker1 = loadImage('PotasiumChromateAq.png');
  beaker2 = loadImage('PotasiumChromateEx.png');
  beaker3 = loadImage('PotasiumChromateOrg.png');
  // liquid = loadImage('Halfwater.png');
  nextimg = loadImage('Forward.png');
//   bckflask=loadImage('backflask.png');
//   water=loadImage('water.png')

}

function setup() {
  
   canvos=createCanvas(canvasWidth, canvasHeight);
  canvos.parent("#container");

  img3x = 370+200; img3y = 80-20, img3w = 180; img3h = 400;
  img3X=180, img3Y=80;
  nxtx = 740; nxty = 540; nxtw = 50; nxth = 50;
  flaskwidth=110, flaskheight=145, flaskX= img3x-30, flaskY=img3y+280;
  recColor1=color(76,0,19);
  recColor2=color(76,0,19);
  recColor3=color(76,0,19);;
  cngColor=color(76,0,19);;

  process=2;

}

function draw() {

    background(bgImg);
        // Increase the rectangle's height in the y-axis3
        image(image3, img3X, img3Y, img3w, img3h);
    // if (in)
    if (rectHeight < 109 & increase == true & !stop) {
      noStroke();
      
      if (decW>63){
         cngColor=color(239,237,158,200);
      }
      push();
      fill(cngColor);
      rect(img3X+120+2,310, 4, 180-rectHeight*.7);
      pop();
      
      rectHeight += .5;
      decW+=.5;
      
      if (process==1){
        beaker1H +=.3;
        recColor1=cngColor;
      }
      else if(process==2){
        beaker2H +=.3;
        recColor2=cngColor;
      }
      else if(process==3){
        beaker3H +=.3;
        recColor3=cngColor;
      }
      else{
        console.log('no beaker')
      }
      
      // setTimeout(()=>{waterheight +=.67*speed_;},1500);
      
    }
    

    let u=rectanglesIntersect(x1,y1,100,100,rectX,rectY,100,100);
    let v=rectanglesIntersect(x1,y1,100,100,rectX2,rectY2,100,100);
    let w=rectanglesIntersect(x1,y1,100,100,rectX3,rectY3,100,100);

    if (!dragging1 && u) {
      process=1;
      stop=false;
      rectX = x1+50; rectY = y1+30;
    }
    if (!dragging2 && v) {
      process=2;     
       stop=false;
      rectX2 = x1+50; rectY2 = y1+30;
    }
    if (!dragging3 && w) {
      process=3;
      stop=false;
      rectX3 = x1+50; rectY3 = y1+30;
    }
    else if (!u && !v && !w){
      console.log('no beaker')
      // process=0;
      stop=true;
    }
    push();
    fill(recColor1);
    rect(rectX+40,rectY+120, 86, -beaker1H);
    pop();

    push();
    fill(recColor2);
    rect(rectX2+40,rectY2+120, 86, -beaker2H);
    pop();

    push();
    fill(recColor3);
    rect(rectX3+40,rectY3+120, 86, -beaker3H);
    pop();


    
  // image(frontflask, img3x-30,flaskY, 110, 145);
  image(beaker1, rectX,rectY, 150, 130);
  image(beaker3, rectX2,rectY2, 150, 130);
  image(beaker2, rectX3,rectY3, 150, 130);

    fullW.resize(80,105);
    halfW.resize(55,70);
    if (decW>5) {
      let c = fullW.get(0, decW, 80, 110-decW);
      let d=halfW.get(0, decW, 80, 110-decW);
      image(c,img3X+85,img3Y+100+decW,80,110-decW);
      image(d,img3X+97,img3Y+140+decW,80,110-decW);

     
    } 
    else {
      // If waterheight exceeds flaskheight, draw the entire image without cropping
      image(fullW,img3X+85,img3Y+100+decW,80,105);
      image(halfW,img3X+97,img3Y+138+decW,55,72);
    }


   

  //console.log("MouseX: " + mouseX + ", MouseY: " + mouseY);

  if (shownext == true) {
      // Check if it's time to blink
  if (millis() % (2 * blinkInterval) < blinkInterval) {
    // Display the image
    image(nextimg, nxtx, nxty, nxtw, nxth);
  }
    
  }



    //console.log('process3')



// increase=true;



    // if()
    


    if (mouseX > img3X+100 && mouseX < img3X+100 + 80 &&
      mouseY > img3Y+195 && mouseY < img3Y+195 + 30){
      cursor('pointer')
      // console.log('hi')
    }

    else{
      cursor('auto')
    }
    if (rectHeight>=100){
      shownext=true;
      console.log('nextn')
    }

}

function mousePressed() {
  // Check if the mouse is over the Cap image
  // increase=false;
  
  // Check if the mouse is over the Droper image
  if (mouseX > img3X+100 && mouseX < img3X+100 + 80 &&
    mouseY > img3Y+195 && mouseY < img3Y+195 + 30){
      if(increase){
        increase=false;
      }
      else{
    increase=true;}
  }
  if (mouseX > nxtx - nxtw / 4 && mouseX < nxtx + nxtw && mouseY > nxty - nxth / 4 && mouseY < nxty + nxth) {
    nextpressed();
  }

    // Check if the mouse is over the rectangle when pressed
    if (mouseX > rectX && mouseX < rectX + 100 &&
      mouseY > rectY && mouseY < rectY + 100) {
      cursor('drag');

      dragging1 = true;   increase=false;
      
    }

    if (mouseX > rectX2 && mouseX < rectX2 + 100 &&
      mouseY > rectY2 && mouseY < rectY2 + 100) {
        cursor('drag');
      dragging2 = true; increase=false;
 
v
    }
    if (mouseX > rectX3 && mouseX < rectX3 + 100 &&
      mouseY > rectY3 && mouseY < rectY3 + 100) {
        cursor('drag');
      dragging3 = true; increase=false;

    }

}
function mouseDragged(){
   if (dragging1) {
    // console.log('hii2')
    rectX = mouseX - 100 / 2-40;
    rectY = mouseY - 100 / 2;
  }
  else if (dragging2) {
    // console.log('hii2')
    rectX2 = mouseX - 100 / 2-40;
    rectY2 = mouseY - 100 / 2;
  }
  else if (dragging3) {
    // console.log('hii2')
    rectX3 = mouseX - 25 / 2-40;
    rectY3 = mouseY - 100 / 2;
    // Gcapped=false;
  }
}

function mouseReleased() {

  cursor('auto');
  dragging1 = false;
  dragging2 = false;
  dragging3 = false;
}


function nextpressed() {
  console.log('nxt');
  window.location.href = 'index2.html';


}

function rectanglesIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
  return (
    x1 < x2 + w2 &&
    x1 + w1 > x2 &&
    y1 < y2 + h2 &&
    y1 + h1 > y2
  );
}