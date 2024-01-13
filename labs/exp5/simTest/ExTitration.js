let canvasWidth = 800;
let canvasHeight = 600;
let image1, image2, bgImg, rod, burette;
let buretteX, buretteY;
let size = 7;
let shownext = false;

let startPoint, endPoint, endPoint2; // Starting and two ending points
let currentPoint; // Current position of the image

let startPoint_3, endPoint_3, endPoint2_3, endPoint_3_, endPoint2_3_; // Starting and two ending points
let currentPoint_3;

let steps = 100;
let currentStep = 0;
let animationInProgress = 3;
let showrect = false, rectHeight = 50;
let increase, dropAdded = false;
let drops = [];

let gif;
let blinking = true;
let blinkInterval = 200;
let drop_, showDrop = false;

class Drop {
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

            // Check if the drop has reached the specified y-coordinate
            if (this.y > 460) {
                this.active = false; // Set drop as inactive
            }
        }
    }

    display() {
        if (this.active) {
            noStroke();
            fill(100, 0, 30, 200);
            ellipse(this.x, this.y, this.radius * 2, this.radius * 2 + 2);
        }
    }
}
class WaterDrop {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    display() {
        noStroke();

        // Base color of the water drop
        let baseColor = color(0, 0, 255);

        // Apply gradient for a more realistic effect
        let gradientTop = color(255, 255, 255, 150);
        let gradientBottom = color(0, 0, 255, 50);
        if (showDrop) {

            // Draw the flattened circular shape with gradient
            radialGradient(this.x, this.y, 30, baseColor, gradientTop, gradientBottom);

            // Add a reflection at the top
            let reflectionColor = color(255, 255, 255, 50);
            radialGradient(this.x, this.y - 10 + 7, 15, reflectionColor, color(255, 255, 255, 0));

            // Simulate a slight distortion at the edge
            let distortionColor = color(0, 0, 255, 10);
            radialGradient(this.x, this.y + 5, 30, distortionColor, color(0, 0, 255, 0));
        }
    }
}

function preload() {
    // Load your images
    image1 = loadImage('PotasiumChromate.png');
    rod = loadImage('glass rod.png');
    bgImg = loadImage('bg.png');
    image3 = loadImage('droper.png');
    frontflask = loadImage('frontflask.png');
    bckflask= loadImage('backflask.png')
    burette = loadImage('resinC.png');
    nextimg = loadImage('Forward.png');
    water=loadImage('water.png');

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
    drop_ = new WaterDrop(width / 2, width / 2);
    canvos = createCanvas(canvasWidth, canvasHeight);
    canvos.parent("#container");
    gif1.parent("#container");
    gif2.parent("#container");
    gif3.parent("#container");
    gif4.parent("#container");

    img2x = 560; img2y = 222; img2w = 200; img2h = 10;
    img3x = 150; img3y = 155, img3w = 55; img3h = 160;
    buretteX = 30, buretteY = 60;
    nxtx = 740; nxty = 540; nxtw = 50; nxth = 50;

    // gif1.show();


    startPoint = createVector(img2x, img2y);
    // Set initial position to the starting point
    currentPoint = startPoint.copy();
    // Set initial destination point
    endPoint2 = currentPoint.copy();


    startPoint_3 = createVector(img3x, img3y);
    currentPoint_3 = startPoint_3.copy();
    endPoint2_3 = currentPoint_3.copy();
    //endPoint2_3 = endPoint2_3.copy();
    // Base color of the water drop



}

function draw() {
    background(bgImg);
    image(bckflask, buretteX + 95, buretteY + 350, size * 18, size * 17.5);

    // frontflask.resize()
    push();
    translate(180, 440);
    // Rotate the image by radians
    //  let angle = radians(frameCount); // You can change the angle based on your requirements
    rotate(radians(110));
    // Display the image at the center
    imageMode(CENTER);
    image(rod, 0, 0, 180, 8); 
    pop();

    image(burette, buretteX, buretteY, size * 28.57, size * 73);
    if (waterheight < flaskheight) {
        c = water.get(0, flaskheight - waterheight, flaskwidth, flaskheight);
       image(c, flaskX, flaskY+flaskheight - waterheight);
     } else {
       // If waterheight exceeds flaskheight, draw the entire image without cropping
       image(water, flaskX, flaskY+flaskheight - waterheight);
     }
    image(frontflask, buretteX + 90, buretteY + 355, size * 18, size * 17.14);

    // image(rod,50,50,300,8);


}
