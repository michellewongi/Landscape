class Views {

  constructor() {
    this.move = 1;
    this.x = 100;
  }

 sail() {
    //boat moving
    this.x = this.x + this.move;
    if ( this.x > width) {
      this.x = 100;
    }
  }

  shine() {
    //moonlight
    noStroke();
    fill(245, 252, 143, 10);
    beginShape();
    vertex(429, 50);
    vertex(488, 56);
    vertex(465, 382);
    vertex(218, 382);
    endShape();
  }


  display() {
    //lake
    noStroke();
    fill('#153371');
    rect(0, 367, 600, 133);


    //mountains
    noStroke();
    fill('#113116');
    bezier(500, 365, 100, 120, 124, 5, -100, 365);
    bezier(661, 364, 682, 15, 518, 213, 417, 338);
    fill('#16431E');
    bezier(350, 354, 224, 204, 138, 201, 9, 354);
    noStroke();
    fill('#1D5527');
    rect(0, 349, 600, 30);
    bezier(600, 360, 463, 29, 336, 251, 204, 360);

    //steps
    fill(0);
    beginShape();
    vertex(352, 380);
    vertex(402, 380);
    vertex(425, 358);
    vertex(335, 358);
    vertex(352, 380);
    endShape();
    stroke('#A07022');
    line(352, 367, 402, 367);
    line(364, 375, 391, 375);

    //house
    noStroke();
    fill('#2E2E25');
    rect(335, 299, 90, 60);
    fill('#3D3E32');
    triangle(321, 311, 377, 257, 439, 311);
    if (option == 3) { //changes the window to black if key is pressed
      fill(0);
    } else {
      fill('#CCCEAD');
    }
    rect(352, 321, 20, 20);

    //docks
    fill(20);
    rect(305, 378, 140, 10);

    //grass
    stroke(0);
    strokeWeight(0.2);
    line(129, 379, 270, 347);
    line(270, 347, 296, 356);
    line(296, 356, 336, 347);
    line(424, 360, 516, 362);
    line(516, 362, 595, 351);

    //moon 
    fill('#F9FCD4');
    noStroke();
    ellipse(460, 45, 60, 60);

  }


  drawBoat() {
    //boat
    stroke(0);
    strokeWeight(0.5);
    fill(180);
    triangle(this.x, 350, this.x+24, 375, this.x, 395);
    fill('#403325');
    rect(this.x-9, 348, 8, 100);
    arc(this.x-4, 440, 180, 100, 0, PI, CHORD);
  }

  drawCloud(x_, y_) {
    //clouds
    fill(color(random(150, 250)));
    ellipse(x_+49, y_+14, 190, 50);
    ellipse(x_-4, y_, 70, 50);
    ellipse(x_+44, y_-4, 70, 60);
    ellipse(x_+93, y_, 70, 60);
    ellipse(x_, y_+20, 70, 60); 
    ellipse(x_+50, y_+27, 90, 60);
    ellipse(x_+55, y_+20, 90, 60);
  }

  drawStars() {
    //stars
    fill(random(200, 250));
    ellipse(78, 40, 3, 3);
    ellipse(206, 90, 3, 3);
    ellipse(336, 40, 3, 3);
    ellipse(321, 149, 3, 3);
    ellipse(40, 112, 3, 3);
    ellipse(144, 95, 3, 3);
    ellipse(242, 37, 3, 3);
    ellipse(285, 90, 3, 3);
    ellipse(513, 130, 3, 3);
    ellipse(419, 109, 3, 3);
    ellipse(392, 177, 3, 3);
    ellipse(551, 55, 3, 3);
    ellipse(593, 150, 3, 3);
  }

  drawRocks() {
  	//rocks
    fill(0);
    beginShape();
    vertex(0, 297);
    vertex(93, 374);
    vertex(266, 600);
    vertex(0, 600);
    vertex(0, 303);
    endShape();
    //another rock
    beginShape();
    vertex(600, 403);
    vertex(503, 440);
    vertex(440, 500);
    vertex(600, 500);
    vertex(600, 97);
    endShape();
  }

  makeWaterOverlap() {
    //lake water overlap
    noStroke();
    fill(21, 51, 113, 140);
    rect(0, 470, 600, 67);
  }
}