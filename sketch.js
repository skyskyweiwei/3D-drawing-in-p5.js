function setup() {
  createCanvas(800,800,WEBGL);
  elliposidImage=loadImage("sun.png")
  earthImage=loadImage("earth.png")
  backgroudImage=loadImage("background.png")
  staraImage=loadImage("stara.png")
  stardImage=loadImage("stard.png")
  starbImage=loadImage("starb.png")

}
var angle=0.0
var elliposidImage;
function draw() {
  orbitControl()
  background(0,10,200);
  //image(backgroundImage, 0, 0, 0, width,length, height)
  texture(backgroudImage);
  plane(800,800);

  smooth()
  
  { 
fill(10,150,100)
  texture(earthImage)
  rotateX(angle)
  ellipsoid(150)
  fill(50,100,20)
  translate(50,300,100)
  texture(elliposidImage)
  rotateY(angle)
  rotateX(angle)
  rotateZ(angle)
  ellipsoid(100)
  //fill(200,0,100)
  texture(stardImage)
  cylinder(150,20)
  angle +=0.003
  fill(100,200,10)
  translate(100,20,200)
  rotateZ(angle)
  texture(starbImage)
  box(150,150)
  translate(10,200,10)
  fill(100,200,100) 
  rotateX(angle)
  texture(staraImage)
  ellipsoid(70)
  }

}