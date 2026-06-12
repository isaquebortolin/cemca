function setup(){
let canvas;

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
}
}

function draw(){
  background(20);

  // efeito simples tipo cassino
  fill(255, 215, 0);
  noStroke();

  for(let i=0;i<50;i++){
    ellipse(random(width), random(height), 3);
  }
}