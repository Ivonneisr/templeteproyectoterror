const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;



function preload() {
   // httpbackgroundImg = loadImage("sprites/...");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    
    //ground = new Ground(600,height,1200,20);
   
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
   
   // ground.display();
     
}

