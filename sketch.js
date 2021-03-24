let drops = [];
let option = 1;
let scene;
let foggy;


function setup() {
  option = 1;
  scene = new Views();
  foggy = new Fog();

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
    background(36, 39, 43);
    scale(1.5);
    scene.display();
    scene.drawStars();
    scene.drawBoat();
    scene.makeWaterOverlap();
    scene.shine();
    scene.drawRocks();
    scene.sail();
    if(foggy.checkAlive()){
      foggy.display();
    }
  }

  if (option == 2) {
    scale(1.5);
    background(23, 23, 31);
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
