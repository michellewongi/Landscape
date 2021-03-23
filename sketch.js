let drops = [];
let option = 1;
let scene;
let foggy;


function setup() {
  option = 1;
  scene = new Views();
  foggy = new Rain();

  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 110; i++) {
    drops.push(new Rain());
  }
}

function draw() {
  //taken out because nope
  // if (option == 1) {
  //   background(0);
  //   for (let i = 0; i < drops.length; i++) {
  //     drops[i].fall();
  //     drops[i].display();
  //   }
  // }

  if (option == 1) {
    background('#272939');
    scale(1.5);
    scene.display();
    scene.drawStars();
    scene.drawBoat();
    scene.makeWaterOverlap();
    scene.shine();
    scene.drawRocks();
    scene.sail();
    foggy.fog();
  }

  if (option == 2) {
    scale(1.5);
    background('#1E1F2C');
    scene.display();
    scene.drawCloud(400, 80);
    scene.drawCloud(300, 20);
    scene.drawCloud(540, 30);
    scene.drawCloud(150, 60);
    scene.drawCloud(20, 30);
    scene.drawCloud(700, 30);
    scene.drawCloud(860, 60);
    scene.drawBoat();
    scene.sail();
    scene.makeWaterOverlap();
    scene.drawRocks();
    for (let i = 0; i < drops.length; i++) {
      drops[i].fall();
      drops[i].display();
    }
  }

}
