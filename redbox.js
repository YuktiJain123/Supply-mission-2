class RedBox{
    constructor(x, y) {
        var options = {
            isStatic:true
        }
        this.width = 200;
        this.height =100;
        this.thickness= 20;
        this.rightBody = Bodies.rectangle(x+100, y-50, this.thickness, this.height, options);
        this.bottomBody = Bodies.rectangle(x, y, this.width, this.thickness, options);
        this.leftBody = Bodies.rectangle(x-100, y-50, this.thickness, this.height, options);
       
       
        World.add(world, this.bottomBody);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
      }
      display(){
          var bottomBody=this.bottomBody.position;
          var leftBody=this.leftBody.position;
          var rightBody=this.rightBody.position;
          push();

          translate(bottomBody.x,bottomBody.y);
          rectMode(CENTER);
          fill("red")
          rect(0,0,this.width,this.thickness)
          pop();
          push();


          translate(rightBody.x,rightBody.y);
          fill("red")
          rectMode(CENTER);
          rect(0,0,this.thickness,this.height)
          pop();
          push();

          translate(leftBody.x,leftBody.y);
          fill("red")
          rectMode(CENTER);
          rect(0,0,this.thickness,this.height)
          pop();
      }
}