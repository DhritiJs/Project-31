class particle {
    constructor(x,y) {
      var options = {
         restitution:0.4
      }

      this.r=10;
      this.x=x;
      this.y=y
      this.color=color(random(0,255),random(0,255),random(0,255));
      this.body = Bodies.circle(this.x,this.y,this.r,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate (this.body.angle);
      ellipseMode(CENTER);
      fill(this.color)
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  }