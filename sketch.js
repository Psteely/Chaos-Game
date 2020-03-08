let point0;
let point1;
let point2;
let pointS;
let newP;
let choiceP;
let margin = 50;
let jump = 0.5;
let points = [];

function setup() {
  canvas = createCanvas(800, 800, WEBGL);
  background(0);
  canvas.parent('canvas');

  point0 = createVector(0, -height / 2 + margin, -width / 2);
  point1 = createVector(width / 2 - margin, height / 2 - margin, 0);
  point2 = createVector(-width / 2 + margin, height / 2 - margin, 0);
  point3 = createVector(0, height / 2 - margin, -width);
  pointS = createVector(random(-width / 2, width / 2),
    random(-height / 2, height / 2), random(-width / 2, width / 2));

  // points.push(pointS);
  stroke(255);
  push();
  translate(point0.x, point0.y, point0.z, 10);
  sphere(10);
  pop();
  push();
  translate(point1.x, point1.y, point1.z, 10);
  sphere(10);
  pop();
  push();
  translate(point2.x, point2.y, point2.z, 10);
  sphere(10);
  pop();
  push();
  translate(point3.x, point3.y, point3.z, 10);
  sphere(10);
  pop();
  angleMode(DEGREES);
}

function draw() {
  background(0);
  stroke(255);
  // fill(255);
  if (keyIsPressed) {

    if (key == "ArrowRight") {
      console.log(key);
      rotateY(10);
    }
  }
  // camera(0,0,200);
  // beginShape();
  for (let i = 0; i < 10000; i++) {
    //const element = array[index];
    choiceP = floor(random(4));
    // console.log(next);
    if (choiceP == 0) {
      stroke(255, 0, 0);
      newP = p5.Vector.lerp(point0, pointS, jump);
    } else if (choiceP == 1) {
      stroke(0, 255, 0);
      newP = p5.Vector.lerp(point1, pointS, jump);
    } else if (choiceP == 2) {
      stroke(0, 0, 255);
      newP = p5.Vector.lerp(point2, pointS, jump);
    } else if (choiceP == 3) {
      stroke(255, 0, 255);
      newP = p5.Vector.lerp(point3, pointS, jump);
    }
    pointS = newP;
    push();
    translate(pointS.x, pointS.y, pointS.z);
    sphere(3);
    pop();
  }
  // endShape();
     
}