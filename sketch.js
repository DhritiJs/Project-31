
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,ground2,ground3,ground4;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
	createCanvas(480,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground(240,798,480,10);
	ground2 = new ground(478,400,10,800);
	ground3 = new ground(240,0,480,10);
	ground4 = new ground(0,400,10,800);

	for (var k=0;k<=width;k=k+80){
		divisions.push(new division(k,height-divisionHeight/2,10,divisionHeight));
	}
	for(var j=40;j<=width;j=j+50){
		plinkos.push(new plinko(j,75));
	}
	for(var j=15;j<=width-10;j=j+50){
		plinkos.push(new plinko(j,175));
	}
	for(var j=40;j<=width;j=j+50){
		plinkos.push(new plinko(j,275));
	}
	for(var j=15;j<=width-10;j=j+50){
		plinkos.push(new plinko(j,375));
	}



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  if(frameCount%20===0){
	particles.push(new particle(random(width/2-10,width/2+10),10,10));

}

  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();




  for(var i=0;i<particles.length;i++){
	  particles[i].display();
  }

  for(var k=0;k<divisions.length;k++){
	divisions[k].display();
}

for(var j=0;j<plinkos.length;j++){
	plinkos[j].display();
}
  drawSprites();
 
}



