let a;

function setup() {
  createCanvas(200, 200);
  }

function draw() {
  background(220);
  fill (255, 255, 255)
  square(0, 0, 200);       
  if (mouseIsPressed){
    a = int(random(1, 6));
  }
  else if (a == 1){
 
//1
  fill (192, 192, 192);
  circle(100, 100, 40);
  }
  

  else if(a == 2 ){
//2
  fill (192, 192, 192);
  circle(100, 50, 40);
  circle(100, 150, 40);
  }
  else if(a == 3){
//3  
  fill (192, 192, 192);
  circle(100, 50, 40);
  circle(100, 100, 40);
  circle(100, 150, 40);

  }
  
  else if(a == 4){
//4
  fill (192, 192, 192);
  circle(50, 50, 40);
  circle(150, 50, 40);
  circle(50, 150, 40);
  circle(150, 150, 40);
  }
  
  else if(a == 5){
//5  
  fill (192, 192, 192);
  circle(50, 50, 40);
  circle(150, 50, 40);
  circle(100, 100, 40);
  circle(50, 150, 40);
  circle(150, 150, 40);
  }
  
  else if(a == 6){
  
//6  
 fill (192, 192, 192);
 circle(50, 50, 40);
 circle(50, 100, 40);
 circle(50, 150, 40);
 circle(150, 50, 40);
 circle(150, 100, 40);
 circle(150, 150, 40);
  } 
  {print (a)}
}
