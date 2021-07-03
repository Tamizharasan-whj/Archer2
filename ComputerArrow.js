class ComputerArrow {
  constructor(x, y, width, height, archerAngle) {
    var options = {
      restitution: 0.8,
      friction: 1.0,
      density: 1.0,
      isStatic: true
    };
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    this.image = loadImage("./assets/arrow.png");
    World.add(world, this.body);
  }

 display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    /*translate(pos.x, pos.y);
    rotate(angle);*/
    imageMode(CENTER);
    image(this.image,pos.x,pos.y, this.width, this.height);
    pop();
  }
}
