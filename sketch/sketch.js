var isMoving = true 
var name = 'Humairaa'
var position = 100
var speed = 1
var numberOfBounces = 0

function setup() {
  // setting the canvas 
  createCanvas(400, 200)
}

function draw() {
  // setting the background colour
  background(100)
  if(isMoving) {
    position = position + speed
  }
  if(position === 390 || position === 0) {
    speed = -speed
    numberOfBounces++
  }

  // drawing a rectangle
  rect(position, 0, 10, 10)
  console.log('the position is ' + position)
  text('my name is ' + name, 10, 30)
  text(isMoving, 10, 50)
  text(numberOfBounces, 10, 70)

}

function mousePressed() {
  isMoving = !isMoving 

}