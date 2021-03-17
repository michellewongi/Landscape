// Rain[] drops = new Rain[110];
// Views scene;
// int option = 1;
let drops = [];
let option;
let scene;


function setup() {
  option = 1;
  scene = new Views();

  createCanvas(600, 500);
  
  for (let i = 0; i < 110; i++) {
    drops.push(new Rain());
  }
}

function draw() {
  if (option == 1) {
    background(0);
    for (let i = 0; i < drops.length; i++) {
      drops[i].fall();
      drops[i].display();
    }
  }
  
  if (option ==2) {
    background('#111855');
    scene.display();
    scene.drawStars();
    scene.drawBoat();
    scene.makeWaterOverlap();
    scene.drawRocks();
    scene.sail();
    scene.shine();
  }

  if (option ==3) {
    background('#1E2A46');
    scene.display();
    scene.drawCloud(400, 80);
    scene.drawCloud(300, 20);
    scene.drawCloud(540, 30);
    scene.drawCloud(150, 60);
    scene.drawCloud(20, 30);
    scene.drawBoat();
    scene.makeWaterOverlap();
    scene.drawRocks();
    for (let i = 0; i < drops.length; i++) {
      drops[i].fall();
      drops[i].display();
    }
  }

}


function keyPressed() {
  option++;
  if (option>3) {
    option = 1;
  }
}