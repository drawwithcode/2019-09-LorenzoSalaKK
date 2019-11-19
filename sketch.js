var mybg;
var pan, pany, panx;
var conf;
var meat, meaty, meatx, meatwid, meathei;


function preload() {
  mybg = loadImage("./assets/stove.png")
  pan = loadImage("./assets/pan.png")
  conf = loadImage("./assets/confezione.png")
  meat = loadImage("./assets/hamburger.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(120);
  imageMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  panx = windowWidth / 2;
  pany = windowHeight * 2 / 3;

  image(mybg, windowWidth / 2, windowHeight / 2, mybg.width / 3, mybg.height / 3)
  image(pan, panx, pany, pan.width / 8, pan.height / 8)
  image(meat, meatx, meaty, meatwid, meathei)

  if (rotationX > 35 && rotationX <= 90) {
    meatx = map(rotationY, -180, 180, windowWidth / 4, windowWidth * 3 / 4);
    meaty = map(rotationX, -180, 180, windowHeight / 4 - 10, windowHeight * 3 / 4 - 10);
    var meatmulti = map(rotationX, 35, 90, 1, 2.5);
    meatwid = meat.width * meatmulti / 3;
    meathei = meat.height * meatmulti / 3;

  } else if ((rotationY > 90 || rotationY < -90) || (rotationX > 90 || rotationX < -90)) {
    meatx = windowWidth / 2;
    meaty = windowHeight / 2 - 10;
    meatwid = meat.width * 5;
    meathei = meat.height * 5;
    fill(255);

  } else {
    meatx = map(rotationY, -180, 180, windowWidth / 6, windowWidth * 5 / 6);
    meaty = map(rotationX, -180, 180, windowHeight / 6 - 10, windowHeight * 5 / 6 - 10);
    meatwid = meat.width / 3;
    meathei = meat.height / 3;
  }


  // noStroke();
  // textSize(32);
  // textAlign(CENTER)
  //
  // text(round(rotationX), width / 2, height / 2);
  //
  // text(round(rotationY), width / 2, height / 6 * 5);
}

function touchMoved() {

  return false;
}

function touchEnded(event) {
  DeviceOrientationEvent.requestPermission()
}
