
function setup() {
  createCanvas(400,400);
}

function draw() 
{
 
  if(keyIsDown(DOWN_ARROW)){
    background("yellow");
  }
  if(keyIsDown(UP_ARROW)){
    background("blue");
  }
  if(keyIsDown(LEFT_ARROW)){
    background("RED");
  }
  if(keyIsDown(RIGHT_ARROW)){
    background("PURPLE");
  }
}



