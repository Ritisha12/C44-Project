var backgroundImg
var ground
var blockCount=0
var blockYPos
var blockGroup
var firstBlock
function preload(){
  backgroundImg=loadImage("Images/sky background.jpg")
}
function setup() {
  createCanvas(600,700);
  ground=createSprite(width/2,height-105,350,25)
  ground.shapeColor="black"
  blockYPos=height*0.8
  blockGroup=new Group()
  firstBlock=createSprite(600,570,350,25)
  firstBlock.shapeColor="red"
  firstBlock.velocityX=-2
  blockGroup.add(ground)
  blockGroup.add(firstBlock)
}
function draw() {
  background(backgroundImg);  
  if(keyWentDown("space")){
    if(blockGroup.get(blockGroup.length-1).x === blockGroup.get(blockGroup.length-2).x){
      console.log("on top")
      var blockWidth= blockGroup.get(blockGroup.length-1).width
      spawnBlocks(blockWidth)
    }
    else{
      console.log("not on top")
      var breakOff= blockGroup.get(blockGroup.length-1).x - blockGroup.get(blockGroup.length-2).x
      blockGroup.get(blockGroup.length-1).width=breakOff
      blockGroup.get(blockGroup.length-1).velocityX=0
      var blockWidth= blockGroup.get(blockGroup.length-1).width
      spawnBlocks(blockWidth)
  }
  }
  if (blockYPos<0){
    blockYPos=height*0.85
  }
 
  drawSprites();
}

function spawnBlocks(blockWidth){
  var randX=Math.round(random(1,2))
  blockYPos-=25
  var block=createSprite(0,blockYPos,blockWidth,25)
  blockCount++
  if(blockCount<=5){
    block.shapeColor="red"
  }
  else if(blockCount>5&&blockCount<=10){
    block.shapeColor="orange"
  }
  else if(blockCount>10&&blockCount<=15){
    block.shapeColor="yellow"
  }
  else if(blockCount>15&&blockCount<=20){
    block.shapeColor="green"
  }
  else if(blockCount>20&&blockCount<=25){
    block.shapeColor="lightBlue"
  }
  else if(blockCount>25&&blockCount<=30){
    block.shapeColor="darkBlue"
  }
  else if(blockCount>35&&blockCount<=40){
    block.shapeColor="purple"
  }
  else if(blockCount>45&&blockCount<=50){
    block.shapeColor="pink"
  }
  
  if (randX===1){
    block.x=0
    block.velocityX=2
  }
  else{
    block.x=600
    block.velocityX=-2
  }
  blockGroup.add(block)
}