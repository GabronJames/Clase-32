class Cannon{
  constructor (x,y,w,h,a){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.a = a;
    this.image = loadImage ("assets/canon.png")
    this.image2 = loadImage ("assets/cannonBase.png");
  }

  show(){ 
    if (keyIsDown(RIGHT_ARROW) && this.a < 70){
    this.a += 1
  }
  if (keyIsDown(LEFT_ARROW) && this.a > -30){
    this.a -= 1
  }
    push();
    translate(this.x,this.y);
    rotate (this.a);
    imageMode(CENTER);
    image(this.image,0,0,this.w,this.h);

    pop();
  image(this.image2,30,35,200,200);

  }
}



























