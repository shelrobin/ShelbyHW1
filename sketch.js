var barWidth = 600;
var barHeight = 100;

function setup() {
createCanvas(600,600);

}
function rainbow (color,x,y){
  fill(color)
  noStroke()
  rect(x,y,600,100)
}
var iterator=50;
while(iterator>0){
  console.log(iterator);
  iterator -=1;
}

function draw(){
rainbow("rgb(200,50,0)",0,0)
rainbow("rgb(300,100,0)",0,100) 
rainbow("rgb(300,200,0)",0,200)
rainbow("rgb(300,300,0)",0,300)
rainbow("rgb(100,100,0)",0,400)
rainbow("rgb(0,50,50)",0,500)

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
