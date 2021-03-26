class Block {
  constructor(x, y, width, height) {
    var options = { isStatic: true };

    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);
    this.width = width;
    this.height = height;
  }

  display() {
    var pos = this.body.position;

    push();
    rectMode(CENTER);
    translate(pos.x, pos.y);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
