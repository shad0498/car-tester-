var zenia,wall1;
var tourus,wall2;
var cyclap,wall3;

var speed,weight;



function setup() {
  createCanvas(1600,1600);
  

 speed= random(55,90);
 weight= random(400,1500);

 zenia=createSprite(50,100,50,50);
 zenia.velocityX=20;

 tourus=createSprite(50,300,50,50);
 tourus.velocityX=20;

 cyclap=createSprite(50,500,50,50);
 cyclap.velocityX=20;

 wall1=createSprite(800,100,0,120);
 wall2=createSprite(800,300,0,120);
 wall3=createSprite(800,500,0,120);

 
}

function draw() {
  background("black");

  
 if(wall1.x- zenia.x < (zenia.width+wall1.width)/2){
   zenia.velocityX=0;
   var deformation = 0.5 * 2260 * 60 * 60 / 22500;
   if(deformation < 180){
     zenia.shapeColor=color(255,0,0);
     
   if(deformation < 180 && deformation>100){
     zenia.shapeColor=color(230,230,0); 
   }
   if(deformation<100){
     zenia.shapeColor=color(0,255,0);
   }

   } 
   
 }   
 if(wall2.x- tourus.x < (tourus.width+wall2.width)/2){
  tourus.velocityX=0;
  var deformation = 0.5 * 1552 * 50 * 50 / 22500;
  if(deformation < 180){
    tourus.shapeColor=color(255,0,0);
    
  if(deformation < 180 && deformation>100){
    tourus.shapeColor=color(230,230,0); 
  }
  if(deformation<100){
    tourus.shapeColor=color(0,255,0);
  }

  } 
  if(wall3.x- cyclap.x < (cyclap.width+wall3.width)/2){
    cyclap.velocityX=0;
    var deformation = 0.5 * 3000 * 45 * 45 / 22500;
    if(deformation < 180){
      cyclap.shapeColor=color(255,0,0);
    
      
    if(deformation < 180 && deformation>100){
      cyclap.shapeColor=color(230,230,0); 
    }
    if(deformation<100){
      cyclap.shapeColor=color(0,255,0);
    }
  
    } 
  }
  
}
  
  drawSprites();
}