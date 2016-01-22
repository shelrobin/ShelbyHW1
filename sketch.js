var barWidth = 600;
var barHeight = 100;

function setup() {
createCanvas(600,600);

}
function rainbow(x,y){
  noStroke()
  rect(x,y,600,100) //defining a function for the rectangle
}
function draw() {

fill(300,100,0);
rainbow(0,100) //trying to used the defined function
  

fill(300,200,0)
rect(0,200,barWidth,barHeight) //original way of making the rectangles
  

fill(300,300,0)
rect(0,300,barWidth,barHeight)
  

fill(100,100,0)
rect(0,400,barWidth,barHeight)


fill(0,50,50)
rect(0,500,barWidth,barHeight)
  
fill(0)
ellipse(300,200,60,60) //head
triangle(300,220,250,350,350,350) //dress
  
stroke(0)
strokeWeight(10)
line(284,412,284,300) //leg
line(316,412,316,300) //leg
line(mouseX,mouseY,300,275) //arm 
line(360,190,300,275) //arm
}
