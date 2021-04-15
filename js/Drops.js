class Drops{
constructor(x,y){
    var opts = {
friction: 0.1
    }
this.body = Bodies.circle(x, y, 10, opts);
this.radius = 10;
World.add(world, this.body);


}

update(){
if(this.rain.position > height){
Matter.body.setPosition(this.rain, {x:random(0,400), y:random(0,400)});
}
}


display(){
ellispeMode(CIRLE);
ellispe(this.body.position.x, this.body.position.y, this.radius,this,radius);
}
}