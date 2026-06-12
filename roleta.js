let anguloRoleta = 0;
let velocidadeRoleta = 0;
let girando = false;

let anguloBola = 0;
let velocidadeBola = 0;

const numeros = [
  0, 32, 15, 19, 4, 21, 2, 25, 17, 34,
  6, 27, 13, 36, 11, 30, 8, 23, 10, 5,
  24, 16, 33, 1, 20, 14, 31, 9, 22, 18,
  29, 7, 28, 12, 35, 3, 26
];

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(20);

  translate(width / 2, height / 2);

  desenharRoleta();
  desenharBola();

  if (girando) {
    anguloRoleta += velocidadeRoleta;
    anguloBola -= velocidadeBola;

    velocidadeRoleta *= 0.98;
    velocidadeBola *= 0.99;

    if (velocidadeRoleta < 0.1 && velocidadeBola < 0.1) {
      girando = false;
      mostrarResultado();
    }
  }
}

function desenharRoleta() {
  let total = numeros.length;
  let anguloSetor = 360 / total;

  push();
  rotate(anguloRoleta);

  for (let i = 0; i < total; i++) {
    let n = numeros[i];

    if (n === 0) {
      fill("green");
    } else if (i % 2 === 0) {
      fill("black");
    } else {
      fill("red");
    }

    arc(0, 0, 300, 300, i * anguloSetor, (i + 1) * anguloSetor, PIE);

    // Número
    push();
    rotate(i * anguloSetor + anguloSetor / 2);
    fill("white");
    textSize(12);
    text(n, 110, 0);
    pop();
  }

  pop();
}

function desenharBola() {
  let raio = 140;

  let x = cos(anguloBola) * raio;
  let y = sin(anguloBola) * raio;

  fill("white");
  circle(x, y, 10);
}

function girar() {
  velocidadeRoleta = random(15, 25);
  velocidadeBola = random(20, 35);
  girando = true;
}

function mostrarResultado() {
  let total = numeros.length;
  let anguloSetor = 360 / total;

  let anguloFinal = (anguloBola - anguloRoleta) % 360;
  if (anguloFinal < 0) anguloFinal += 360;

  let indice = floor(anguloFinal / anguloSetor);
  let numero = numeros[indice];

  document.getElementById("resultado").innerText =
    "Resultado: " + numero;
}