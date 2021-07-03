class Hand2{
       constructor(x,y,width,height,angle){

        var options = {
          isStatic:true
        }  
          this.x = x;
          this.y = y;
          this.width = width;
          this.height = height;
        
          this.angle = angle;
          this.image = loadImage("./assets/playerArcher.png");
          this.body = Bodies.rectangle(x,y,this.width,this.height,options);

           


       }

      display(){
        var pos = this.body.position;
        
        console.log(this.angle);
        push();
        //Matter.body.Detector.collisions();
        translate(pos.x, pos.y);
        if (keyIsDown(RIGHT_ARROW) /*&& this.angle < 0*/) {
          this.angle += 0.02;
        }
    
        if (keyIsDown(LEFT_ARROW)/* && this.angle > 180*/) {
          this.angle -= 0.02;
        }
         
         
     
        rotate(this.angle);
      //   rectMode(CENTER);
        imageMode(CORNER);
        image(this.image,0,0,this.width,this.height);
        //rect(pos.x,pos.y,this.width,this.height)
        pop();
    
    
      }










}