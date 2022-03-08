class barco{
    constructor(x,y,w,h,p){
    //this.x
    //this.y
    this.body = Bodies.rectangle(x,y,w,h)  
    this.w = w
    this.h = h
    this.p = p
    this.image = loadImage("./assets/BARCOS.png") 
    World.add(world,this.body)
    }

    remove(index){
    setTimeout(()=>{
        Matter.World.remove(world,matrizdebarcos[index].body)
     delete matrizdebarcos[index]
    },500)    
    }

    show(){
        push();
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image,0,this.p,this.w,this.h)
        pop();
    }
}





















