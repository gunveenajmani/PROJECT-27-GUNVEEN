class  Rope{

constructor(body1 , body2, xoffset){
var options= {
    bodyA: body1,
    bodyB: body2,
    //stiffness: 0.04,
    //length: 100
    pointB: {x: xoffset, y:0}
}
this.xoffset= xoffset;
this.rope1 = Matter.Constraint.create(options);
World.add(world,this.rope1);

}

display(){
    var A = this.rope1.bodyA.position;
    var B = this.rope1.bodyB.position;
    
stroke("black");
strokeWeight(4);
line(A.x, A.y, B.x + this.xoffset,B.y);

}

}