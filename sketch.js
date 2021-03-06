const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var division=[]
var particle=[]
var plinko=[]
var log1

function preload(){
  backgroundImg = loadImage("bg.png")
}
function setup() {
  createCanvas(480,800)
  engine = Engine.create()
    world = engine.world;

  Engine.run(engine)

  ground1= new Ground(240,790,480,20)
ground2= new Ground (0,400,20,800)
ground3= new Ground (480,400,20,800)
log1=new Log(250,300,20,100,PI/2)
log3=new Log(400,150,20,200,PI/3)
log4=new Log(100,170,20,200,-PI/3)

for(i=16; i<480; i=i+65)
{
division. push(new Division(i, 650))
}
//plinkos
for(i=0; i<=width; i=i+50)
{
  plinko. push(new Plinko(i,50))
}

for(i=150; i<=width; i=i+60)
{
  plinko. push(new Plinko(i,150))
}

for(i=0; i<=width; i=i+50)
{
  plinko. push(new Plinko(i,250))
}

for(i=40; i<=width; i=i+50)
{
  plinko. push(new Plinko(i,350))
}
}

function draw() {
  background(backgroundImg)  
  

  ground1.display()
  ground2.display()
  ground3.display()
  
  log1.display()
  log3.display()
  log4.display()


  if( frameCount% 30===0)
{
particle.push( new Particle())
}

for(i=0; i<particle. length; i++)
{
particle[i] .display()
}


for(i=0; i<division. length; i++)
{
division[i] .display()

}

for(i=0; i<plinko. length; i++)
{
plinko[i] .display()

}


}
