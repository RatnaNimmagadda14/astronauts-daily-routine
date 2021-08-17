var bg,brush,sleep,gym,drink,eat,bath,move
var astronaut

function preload(){
bg=loadImage("iss.png")
brush=loadAnimation("brush.png")
sleep=loadAnimation("sleep.png")
gym=loadAnimation("gym1.png")
bath=loadAnimation("bath2.png")
eat=loadAnimation("eat1.png")
drink=loadAnimation("drink2.png")
move=loadAnimation("move2.png")
}




function setup() {
  createCanvas(800,400);
 astronaut= createSprite(300, 200, 50, 50);
astronaut.addAnimation("sleeping",sleep)
astronaut.scale=0.1
astronaut.addAnimation("gym1.png")
astronaut.addAnimation("bath2.png")
astronaut.addAnimation("eat1.png")
astronaut.addAnimation("drink2.png")
astronaut.addAnimation("move2.png")
}

function draw() {
  background(bg);  
  drawSprites();
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush)
    astronaut.changeAnimation("brushing")
    astronaut.y=300
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gyming",gym)
    astronaut.changeAnimation("gyming")
    astronaut.y=200
  } 
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath)
    astronaut.changeAnimation("bathing")
    astronaut.y=200
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat)
    astronaut.changeAnimation("eating")
    astronaut.y=250
  }
  if(keyDown("space")){
    astronaut.addAnimation("drinking",drink)
    astronaut.changeAnimation("drinking")
    astronaut.y=250
  }
  
}