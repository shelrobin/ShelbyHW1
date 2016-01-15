function setup() {
createCanvas(600,600);

}

function draw() {
background (200,50,0);
  
noStroke()
fill(300,100,0)
rect(0,100,600,100)
  

fill(300,200,0)
rect(0,200,600,100)
  

fill(300,300,0)
rect(0,300,600,100)
  

fill(100,100,0)
rect(0,400,600,100)


fill(0,50,50)
rect(0,500,600,100)
  
fill(0,0,0)
ellipse(300,200,60,60)
triangle(300,220,250,350,350,350)
  
stroke(0)
strokeWeight(10)
line(316,412,316,300)
line(mouseX,mouseY,300,275)
line(360,190,300,275)
}
