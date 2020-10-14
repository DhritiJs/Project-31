class plinko {
    constructor(x,y) {
      var options = {
          isStatic: true,
          friction:0,
          restitution:1
      }

      this.r=15;
      this.x=x;
      this.y=y
      this.body = Bodies.circle(this.x,this.y,this.r,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     
      ellipseMode(CENTER);
      ellipse(pos.x, pos.y, this.r, this.r);
  
    }
  }