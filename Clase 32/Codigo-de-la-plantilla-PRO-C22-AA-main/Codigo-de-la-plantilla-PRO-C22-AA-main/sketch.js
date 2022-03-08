const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine
var world 
var cannon1
var a
var matrizdebalas = []
var matrizdebarcos = [] 
var fondo
var torre
var torreimg
var fondoimg
//var bala1
var piso 


function preload() {
     fondoimg = loadImage("assets/background.gif")
     torreimg = loadImage("assets/tower.png")
}

function setup() {
     createCanvas (1200,600);
     engine = Engine.create();
     world = engine.world;
     angleMode(DEGREES);
     a = 15
     cannon1 = new Cannon(150,129,130,100,a); // se crea el cañon
     piso = Bodies.rectangle(width,height -1,width*2,1,{isStatic:true})
     World.add(world,piso)
}

function draw() {
     background ("blue");
     image(fondoimg,0,0,width,height)
     image(torreimg,20,200,200,300)
     Engine.update(engine);
     cannon1.show(); // Se muestra el cañon
     mostrarBarcos();
     for(var i = 0;i <matrizdebalas.length;i ++){
          mostrarbalas(matrizdebalas[i],i)
         explocion(i)
     }
    
}

function keyPressed(){
     if (keyCode === DOWN_ARROW){
          var bala1 = new Balas(cannon1.x,cannon1.y) // se crea una nueva bala
          Matter.Body.setAngle(bala1.body, cannon1.a)
          console.log("se creo una bala")
          matrizdebalas.push(bala1)

     }
}

function mostrarbalas(ball,index){
     if (ball){
     ball.show();   
     if(ball.body.position.x >= width || ball.body.position.y >= height -50){
          ball.remove(index)
     } 
     }     
}

function keyReleased(){
     if (keyCode === DOWN_ARROW){
          console.log("se muestra una bala")
          matrizdebalas[matrizdebalas.length -1].boom();
     }
}


function mostrarBarcos(){
if(matrizdebarcos.length > 0){
     if(matrizdebarcos[matrizdebarcos.length -1 ] === undefined || matrizdebarcos[matrizdebarcos.length -1].body.position.x < width -300){
        var posiciones = [-40,-60,-70,-20]
        var randomposition = random(posiciones) 
        var barco1 = new barco(width,height -100,200,200,randomposition)
          matrizdebarcos.push(barco1)
     }
 
     for(var i = 0 ;i <matrizdebarcos.length; i ++ ){
          Matter.Body.setVelocity(matrizdebarcos[i].body,{
        x:-1,y:0})
        
     matrizdebarcos[i].show();} 
          }
     else{
          var barco1 = new barco(width,height -20,200,200,-60)
          matrizdebarcos.push(barco1)

     }
     

}

function explocion(index){
for(var i = 0;i <matrizdebarcos.length; i ++ ){
     if(matrizdebalas[index] !== undefined && matrizdebarcos[i] !== undefined){
     var colision = Matter.SAT.collides(matrizdebalas[index].body,matrizdebarcos[i].body)
          if(colision.collided){
               matrizdebarcos[i].remove(i)
               
               Matter.World.remove(world,matrizdebalas[index].body);
               delete matrizdebalas[index];
          }
     }    
}




}

























































































































































































































































































































































































































































































































































