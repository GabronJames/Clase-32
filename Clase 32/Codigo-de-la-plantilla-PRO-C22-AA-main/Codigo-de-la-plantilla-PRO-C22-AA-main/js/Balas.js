class Balas{
    constructor(x,y){
        var opciones = {
            isStatic:true
        }
        this.r = 25
        this.image = loadImage("./assets/BALA.png")
        this.body = Bodies.circle(x,y,this.r,opciones)
        this.trajectory=[]                                                                                                                                                                                  
        World.add(world,this.body)
    }

    remove(index){
        Matter.Body.setVelocity(this.body,{
            x:0,y:0
        })
        this.r = 150
        setTimeout(()=>{
            Matter.World.remove(world,this.body)
         delete matrizdebalas[index]
        },500)  
    }  
    
        boom(){
            var nuevoangle = cannon1.a - 25
            nuevoangle = nuevoangle* (3.14/180)
            var velocity = p5.Vector.fromAngle(nuevoangle)
            velocity.mult(0.5)
            Matter.Body.setStatic(this.body,false)
            Matter.Body.setVelocity(this.body,{
            x:velocity.x*(180/3.14), y:velocity.y*(180/3.14)
            })
        }

    show(){
        push();
            translate(this.body.position.x,this.body.position.y)
            rotate(this.body.angle)
            imageMode(CENTER);
            image(this.image,0,0,this.r,this.r)
        pop();

        if (this.body.velocity.x > 0 && this.body.position.x > 10){
            var position =[this.body.position.x,this.body.position.y]
            this.trajectory.push(position)
        }

        for (var i = 0; i < this.trajectory.length; i++) {
            image(this.image, this.trajectory[i][0], this.trajectory[i][1], 5, 5);
          }
    }
}

































































































































































          