function setup() { 
  createCanvas(400, 640);
	
} 

function draw() { 
  background(220)
  ellipseMode(CENTER);
  rectMode(CENTER);
	
  translate(mouseX, mouseY);
  //head
  fill(255); 
  ellipse(0, 0, 200, 250);
  
  //eyes
  ellipse(-35, -40, 
          40, 40);
  ellipse(35, -40, 
          40, 40);
	
  fill(0);
  ellipse(-35, -40, 
          10, 10);
  ellipse(35, -40, 
          10, 10);
  
  //nose
  fill(50);
  rect(0, 0, 30, 20, 5);
  
  fill(100, 100, 100, 67);
  
  //ears
  push();
  translate(-100, -50);
  rotate(PI / 6.0);
  rect(0, 0, 30, 130);
  pop();
  
	
	
  push();
  translate(100, -50);
  rotate(PI / -6.0);
  rect(0, 0, 30, 130);
  pop();
   

}
