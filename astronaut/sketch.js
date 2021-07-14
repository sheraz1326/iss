const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var astro;
var iss;
var bg,sleep,brush,gym,eat,drink,move;

function preload(){

  bg = loadImage ("bg.png");
  sleep = loadAnimation ("sleep.png");
  brush = loadAnimation ("brush.png");
  gym = loadAnimation ("gym1.png","gym2.png","gym11.png","gym12.png");
  eat = loadAnimation ("eat1.png","eat2.png");
  drink = loadAnimation ("drink1.png","drnk2.png");
  move = loadAnimation ("move.png","move1.png");

}

function setup() {
  createCanvas(500,500);

  engine = Engine.create();
  world = engine.world;
   
   var astro_options ={
     isStatic: false
   }

   var iss_options ={
    isStatic: true
  }

  astro = Bodies.rectangle(20,30,40,40,astro_options);
  World.add(world,astro);

  iss = Bodies.rectangle(200,200,20,20,iss_options);
  World.add(world,iss);

  rectMode(CENTER);
}


function draw() 
{
  background(0);
  Engine.update(engine);
  
  rect(iss.position.x,iss.position.y,200,20);
  rect(astro.position.x,astro.position.y,200,20);
}

