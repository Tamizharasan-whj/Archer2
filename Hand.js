class Hand{
     constructor(x,y,width,height){
       var hand_options={
         isStatic:true
       }
       this.x = x;
       this.y = y;
       this.width = width;
       this.height = height;
       this.angle = angle1;
       this.body = Bodies.rectangle(x,y,this.width,this.height,hand_options);
       this.image = loadImage("./assets/computerArcher.png");

       World.add(world,this.body);


     }

    
 
   display(){
    var pos = this.body.position;
    


    push();
    translate(pos.x,pos.y);

    rotate(this.angle);
    imageMode(CENTER);
    image(this.image,-10, -20,this.width,this.height);

    pop();


   }

 



}