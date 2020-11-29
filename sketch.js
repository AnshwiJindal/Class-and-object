const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var ground1;
var b1;
var b2;

function setup() {
createCanvas(400,400);
 engine= Engine.create();
 world=engine.world;


 



 b1= new box(200,200,50,50);
 b2=new box(170,50,50,50)

 ground1=new ground(200,380,400,40)
}

function draw() {
  background("yellow");
Engine.update(engine)



b1.display();
b2.display();
 ground1.display();
}
