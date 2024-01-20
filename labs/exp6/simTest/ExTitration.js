let canvasWidth = 800;
let canvasHeight = 600;

let knob, knob_base, nextimg, bgImg;
let angle = 0;
let dragging = false;
let click=false;
let stepAngle=Math.PI / 4;
let step;

// let knob_click;

let shownext;
let nxtx = 740; nxty = 540; nxtw = 50; nxth = 50;
const knob_click = new Audio('locked_soundForKnob.mp3');




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
  knob = loadImage('knob.png');
  knob_base = loadImage('knob_base.png');
  bgImg = loadImage('bg.png');
  nextimg = loadImage('Forward.png')

  // soundFormats('mp3', 'ogg'); // Specify supported sound file formats
  // knob_click = loadSound('knob_click.mp3');
  // knob_click.stop();

}
function setup() {

  canvos = createCanvas(canvasWidth, canvasHeight);
  canvos.parent("#container");
  nxtx = 740; nxty = 540; nxtw = 50; nxth = 50;
  
}


function draw() {
  background(bgImg);
  // Update and display each drop
  // for (let rd of raindrops) {

  //   rd.update();
  //   rd.display();
  // }
        // Draw knob
        push();
        translate(width / 2, height / 2);
        rotate(angle);
        imageMode(CENTER);
        
        image(knob, 0, 0, 100, 100); // Adjust size as needed
        pop();
        
        // Update angle based on dragging
        if (dragging) {
          
          let dx = mouseX - width / 2;
          let dy = mouseY - height / 2;
          let newAngle = atan2(dy, dx);
          console.log((steps(angle,newAngle)),'Angle changed')
          step=steps(angle,newAngle);
          angle = round(newAngle / stepAngle) * stepAngle;
          
          // if (mouseX !== pmouseX || mouseY !== pmouseY) {
          //   console.log("Mouse is moving");
          //   knob_click.play();
          //   // Additional actions when the mouse is moving can be added here

          // }
          // playSound(step);
                 
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

  else {
    cursor('auto');
  }

}
function steps(x,y){
  if (x<0){
    x=x*-1;
    x=x+4;
  }
  if (y<0){
    y=y*-1;
    y=y+4;
  }
  if(round((y-x)/stepAngle)<0){
    j=round((y-x)/stepAngle)*-1;
  }
  else{
    j=round((y-x)/stepAngle);
  }
  return(j);
}


function mousePressed() {



  // userStartAudio();
  if (mouseX > nxtx - nxtw / 4 && mouseX < nxtx + nxtw && mouseY > nxty - nxth / 4 && mouseY < nxty + nxth && shownext) {
    nextpressed();
  }

  let distance = dist(mouseX, mouseY, width / 2, height / 2);
  if (distance < 50) { // Adjust the radius based on your image size
    click=true;
    dragging = true;
    console.log('True drag')
    
    // if (knob_click.readyState >= 2) {
    //   knob_click.loop();
    // } else {
    //   console.error('Audio file is not loaded.');
    // }
    
  }


  }







function drop() {
  for (let i = 0; i < 3; i++) {
    raindrops.push(new Raindrop(buretteX + 147, (buretteY + 150, 240 + (i * 30))));
  }
}
function mouseReleased() {
  dragging = false;
  click=false;
  // knob_click.pause();
  // knob_click.currentTime = 0;
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

