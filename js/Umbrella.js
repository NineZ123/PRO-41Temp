class Umbrella{
constructor(x,y){
var options = {
    isStatic:true
}

this.body = Bodies.cirlce(x,y,45,options);
this.radius = 45;
//this.image = loadImage(...)
World.add(world, this.body);
}
display(){
    //ACCESS WAS DENIED FOR THE PICTURES, SO I WILL MAKE BRUCE A SQUARE
//imageMode(CENTER);
//image(this.image,this.body.position.x,this.body.position.y,200,200);

}

}