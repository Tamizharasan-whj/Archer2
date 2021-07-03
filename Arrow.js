class Arrow {
    constructor(x, y,angle) {
      this.trajectory = []
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1,
        isStatic: true
      };
      this.angle = angle;
      this.width = 100;
      this.height = 20;  
      this.body = Bodies.rectangle(x, y,this.width,this.height, options);
  
      this.image = loadImage("./assets/arrow.png");
      World.add(world, this.body);
    }
  
    shoot() {
      var velocity = p5.Vector.fromAngle(bow1.angle);
      velocity.mult(10);
      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y });
    }
  
    display() {
     
      var pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      if (keyIsDown(RIGHT_ARROW) /*&& this.angle < -0.35*/) {
        this.angle += 0.02;
      }
  
      if (keyIsDown(LEFT_ARROW) /*&& this.angle > 1.45*/) {
        this.angle -= 0.02;
      }
     
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
      if (this.body.velocity.x>0&&this.body.position.x>300){
        var position = [this.body.position.x,this.body.position.y];
        this.trajectory.push(position);
  
      }
      for(var i = 0; i<this.trajectory.length;i++){
        image(this.image,this.trajectory[i][0],this.trajectory[i][1],5,5);
      }
      }
    }

    
