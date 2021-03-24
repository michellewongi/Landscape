class Rain {

  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.speed = random(5, 9);
    // this.o = 100;
  } // end of constructor


  fall() {
    //rain falling
    this.y = this.y + this.speed;
    if (this.y > height) {
      this.y = 0;
    }
  } // end of fall method



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
  }// end of display method


}// end of class
