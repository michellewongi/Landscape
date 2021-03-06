class Fog {
  constructor() {
    this.o = 10;
    this.alive = true;
    this.timer = millis();
  } // end of constructor


  /*i tried to make it so opacity of the foggy
  fades more consistently but this freezes the screen*/
  // fade() {
  //   for (i = 20; i > 0; i -= 5) {
  //     this.o -= i;
  //   }
  // }


  //this fog method makes the whole screen super laggy
  //update: i made the circles bigger and created less circle
  display() {
    for (this.x = 700; this.x < 1000; this.x += 20) {
      for (this.y = 0; this.y < 800; this.y += 20) {
        fill(255, 255, 255, this.o);
        ellipse(random(this.x), random(this.y), 500, 200);
      }
    }
  } //end of display method


  /*Lilly Lin the TA helped me with the timer function
  https://editor.p5js.org/lillylin/sketches/2HmXWEqLM */
  checkAlive() {
    if (millis() - this.timer > 5000) {
      this.o--;
    }
    if (millis() - this.timer > 7000) {
      this.alive = false;
    }
    return this.alive;
  } // end of checkAlive


} // end of class
