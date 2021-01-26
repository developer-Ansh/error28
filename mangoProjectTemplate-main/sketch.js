
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,m2,m3,m4,m5;
var world,boy;
var slingshot

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

  mango1=new mango(1100,100,30);
  m2=new mango(980,95,35);
  m3=new mango(1140,210,42);
  m4=new mango(950,220,40);
  m5=new mango(1250,205,20);

	treeObj=new tree(1050,580);

  

	groundObject=new ground(width/2,600,width,20);
  stoneObj=new stone(235,420,30,30);
	slingshot=new SlingShot(stoneObj.body, {x:235, y:425});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();

  stoneObj.display();

  slingshot.display();

  groundObject.display();
}

function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if (keyCode === "SPACE"){
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420})
    slingshot.attach(stoneObj.body);
  }
}