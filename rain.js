class Rain {

  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.speed = random(5, 9);
    this.o = 200;
  }

  fall() {
    //rain falling
    this.y = this.y + this.speed;
    if (this.y > height) {
      this.y = 0;
    }
  }

  /*i tried to make it so opacity of the foggy
  fades more consistently but this freezes the screen*/
  // fade() {
  //   for (i = 20; i > 0; i -= 5) {
  //     this.o -= i;
  //   }
  // }

  //this fog method makes the boat move super slow
  fog() {
    // for (this.x = 700; this.x < 1000; this.x += 5) {
    //   for (this.y = 0; this.y < 800; this.y += 5) {
    //     fill(255, 255, 255, 1);
    //     ellipse(random(this.x), random(this.y), 200, 100);
    //   }
    // }
    // this.o-=3;
  }

  display() {
    noStroke();
    // raindrops
    if (option == 2) {
      stroke('#A6BDEA');
      line(this.x, this.y, this.x, this.y + 6);
    }
    // else if (option == 1) {
    //   fill(color(mouseX/5, mouseX/3, 255, 200));
    //   bezier(this.x, this.y, this.x+59, this.y+93, this.x-54, this.y+100, this.x, this.y);
    // }
  }
}
