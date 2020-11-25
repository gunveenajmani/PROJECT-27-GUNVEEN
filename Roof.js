class Roof{

   constructor(){
       var options={
           isStatic:true
       }
       this.Body= Bodies.rectangle(350, 200, 300, 10, options);
       World.add(world, this.Body);
   }
    
   display(){
       fill("blue");
       rect(this.Body.position.x, this.Body.position.y, 300, 10);
   }
}