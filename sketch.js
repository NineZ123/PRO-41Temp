const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
var drops=[];
var engine, world;
var maxDrops;
var random;
var Lightning;
var lightningFrame;
function preload(){
    //Upload Images (Not Available, Link doesn't give me access to images)
}

function setup(){
    var canvas=createCanvas(800,500)
   var umbrella = new Umbrella(400,200);
    engine = Engine.create();
    world = engine.world;



}

function draw(){
    Engine.update(engine);
    background(0,0,0);
random = Math.round(1,4);
if(frameCount%60 === 0){
Lightning = createSprite(random(10,300), random(10,15),10,10);
switch(random){
 case1 : Lightning.addImage(//...
 );
 break;
 case2 : Lightning.addImage(//...
    );
    break;
    case3 : Lightning.addImage(//...
        );
        break;
        case4 : Lightning.addImage(//...
            );
            default; break;

}
Lightning.scale = 0.75;
}

if(lightningFrame + 12 === frameCount && Lightning){
   Lightning.destroy();
}

    for(var i = 0; i < maxDrops; i++){
        drops.push(new createDrops(random(0,400), random(0,400)));
    }

umbrella.display();

for(var i = 0; i < maxDrops; i++){
    drops[i].update();
    drops[i].display();
}

}

