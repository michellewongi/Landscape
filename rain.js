class Rain {

  constructor() { 
    this.x = random(width);
    this.y = random(height);
    this.speed = random(5, 9);
  }

  fall() {
    this.y = this.y + this.speed;
    if (this.y > height) {
      this.y = 0;
    }
  }

  display() {
    noStroke();
    // raindrops
    if (option == 3) {
      stroke('#A6BDEA');
      line(this.x, this.y, this.x, this.y+6);
    } else if (option == 1) {
      fill(color(mouseX/5, mouseX/3, 255, 200));
      bezier(this.x, this.y, this.x+59, this.y+93, this.x-54, this.y+100, this.x, this.y);
    }
  }
}