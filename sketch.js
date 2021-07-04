const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;
var computer,computerBase;
var arrow;

var bow,bow1;
var arrow;
var arrows=[];


function setup() {
  canvas = createCanvas(1200,1000);

  engine = Engine.create();
  world = engine.world;
  angle = PI/4;
  angle1 = -PI/6;
  playerBase = new PlayerBase(300,800, 180, 150);
  player = new Player(300,660,80,160); 
  //Create Player Archer Object

  computerBase = new ComputerBase(900,800,180,150);
  computer  = new Computer(900,660,80,160);
  bow  = new Hand(360,690,120,140);
  bow1 = new Hand2(875,585,120,140,angle);
  arrow = new Arrow(bow1.x,bow1.y,angle);
  
 
  //Create an arrow Object
  
  
}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  for(var i=0; i<arrows.length; i++){
    displayArrows(arrows[i],i);
  }

 // playerArcher.display();
  //computerArcher.display()


  //Display arrow();
  bow.display();
  bow1.display();




}
  //if Space (32) key is pressed call shoot function of playerArrow
  function keyReleased(){
  if(keyCode === 32){
    //Call shoot() function and pass angle of playerArcher
    arrows[arrows.length-1].shoot(bow1.body.angle);
    arrow.shoot(playerArcher.body.angle);
  }
  }

function keyPressed(){
  if(keyCode== 32){
    var arrow = new Arrow(bow1.x,bow1.y,bow1.angle);
    arrows.push(arrow);
  }

}

function displayArrows(arrow,index){
  arrow.display();
  if(arrow.body.position.x>=width||arrow.body.position.y>=height-50){
    Matter.World.remove(world,arrow.body);
    arrows.splice(index,1)
  }
}



