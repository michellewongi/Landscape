class Views {

  constructor() {
    this.move = 2;
    this.x = 100;
  }

  sail() {
    //boat moving
    this.x = this.x + this.move;
    if (this.x > windowWidth - 200) {
      option = 2;
      this.x = this.x + this.move;
    }
  }

  shine() {
    //moonlight
    noStroke();
    fill(245, 252, 143, 10);
    beginShape();
    vertex(429, 50);
    vertex(488, 56);
    vertex(mouseX, 382);
    vertex(mouseX - 247, 382);
    endShape();
  }



display() {
  //lake
  noStroke();
  fill('#153371');
  rect(0, 367, windowWidth, 133);


  //mountains
  noStroke();
  fill('#113116');
  bezier(500, 365, 100, 120, 124, 5, -100, 365);
  bezier(861, 364, 682, 15, 518, 213, 217, 338);
  fill('#16431E');
  bezier(350, 354, 224, 204, 138, 201, 9, 354);
  noStroke();
  push();
  fill('#16431E');
  translate(350, 0);
  bezier(600, 360, 463, 29, 336, 251, 204, 360);
  pop();
  fill('#1D5527');
  rect(0, 349, windowWidth, 30);
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
  if (option == 2) { //changes the window to black if key is pressed
    fill(0);
  } else {
    fill('#CCCEAD');
  }
  rect(352, 321, 20, 20);

  //person
  fill(0);
  ellipse(360, 327, 8, 10);
  rect(355, 332, 10, 9);

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
  triangle(this.x, 330, this.x + 24, 355, this.x, 375);
  fill('#403325');
  rect(this.x - 9, 328, 8, 100);
  arc(this.x - 4, 410, 180, 100, 0, PI, CHORD);
}

drawCloud(x_, y_) {
  //clouds
  fill(200);
  ellipse(x_ + 49, y_ + 14, 190, 50);
  ellipse(x_ - 4, y_, 70, 50);
  ellipse(x_ + 44, y_ - 4, 70, 60);
  ellipse(x_ + 93, y_, 70, 60);
  ellipse(x_, y_ + 20, 70, 60);
  ellipse(x_ + 50, y_ + 27, 90, 60);
  ellipse(x_ + 55, y_ + 20, 90, 60);
}

drawStars() {
  //stars
  fill(random(150, 250));
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
  ellipse(793, 150, 3, 3);
  ellipse(693, 100, 3, 3);
  ellipse(800, 30, 3, 3);
  ellipse(900, 50, 3, 3);
  ellipse(860, 70, 3, 3);
  ellipse(900, 170, 3, 3);
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
  vertex(1000, 203);
  vertex(803, 340);
  vertex(740, 600);
  vertex(1000, 500);
  vertex(1000, 807);
  endShape();
}

makeWaterOverlap() {
  //lake water overlap
  noStroke();
  fill(21, 51, 113, 140);
  rect(0, 440, windowWidth, 67);
}

}
