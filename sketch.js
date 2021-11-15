var bgImag;
var cat;
var mouse;
function preload() {
    //carregue as imagens aqui
    bgImg- loadImage("garden.png");
    catimg1= loadImage("cat1.png");
    catimg2= loadImage("cat2,png");
    catimg3= loadimage("cat3.png");
    catimg4= loadImage("cat4.png");
    mouseimg1= loadImage("mouse1.png");
    mouseimg2= loadImage("mouse2.png");
    mouseimg3= loadImage("mouse3.png");
    mouseimg4= loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    cat= createSprite(870,600);
    cat.addAnimation("gatoSentado",catimg1);
    cat.scale= 0.2;
    mouse=createSprite(870,600);
    mouse.addAnimation("ratoQueijo", mouseimg1);
    mouse.scale= 0.3; 
}

function draw() {

    background(bgImg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    if (cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("ultimaImagemGato", catimg3);
        cat.changeAnimation("ultimaImageGato");
        cat.x=300;
        cat.scale=0.2;

    }
    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
    if (keyCode=== LEFT_ARROW){
        mouse.addAnimation("ratoProvocando", mouseimg2);
        mouse.changeAnimation("ratoProvocando");
        mouse.frameDelay=25;

        cat.velocityX=-5;
        cat.addAnimation("gatoCorrendo", catimg2);
        cat.changeAnimation("gatoCorrendo");
       
    }

}
