const str = 'es6'
console.log(`hello world ${str}`)
function setup() {
  createCanvas(500, 500);

  background(255);
  stroke(0)
  line(0, 0, width, height);

  for (var i = 0; i < 100; i++) {
    var pt = new Point();
    points[i] = pt;
    pt.draw();
  }



  for (var i = 0; i < 100; i++) {
    var pt = points[i]
    var brain = perceptron();
    var guess = brain.guess(pt);
    //console.log(guess, pt.label, pt.x, pt.y);

    if (guess == pt.label) {
      fill(0, 255, 0);
    } else {
      fill(255, 0, 0);
    }
    noStroke();
    ellipse(pt.x, pt.y, 4, 4);
  }
}

var points = [];

function mousePressed() {
  for (var i = 0; i < 100; i++) {
    var pt = points[i]
    var brain = perceptron();
    brain.train(pt, pt.label);

  }
}

function draw() {


}

class Point {

  constructor() {
    this.label = 0;
    this.x = random(width)  ;
    this.y = random(height)  ;
    //console.log(this.x,this.y);
    //var label;
    if (this.x > this.y) {
      this.label = 1;
    } else {
      this.label = -1;
    }
  }

  draw() {
    stroke(0);
    if (this.label == 1) {
      fill(255)
    } else {
      fill(0)
    }
    ellipse(this.x, this.y, 4, 4)
  }
}

function perceptron() {
  var weighs = [0, 0];
  for (var i = 0; i < weighs.length; i++) {
    weighs[i] = random(-1, 1);

  }

  function getRnd(min, max) {
    return (Math.random() * (max - min)) + min;
  }

  var feedforward = function(inputs) {
    var sum = 0;
    for (var i = 0; i < weighs.length; i++) {
      sum += inputs[i] * weighs[i];
    }
    var output = sign(sum);
    return output;
  }

  var sign = function(n) {
    if (n >= 0) return 1;
    return -1
  }

  var train = function(inputs, target) {
    var guess = feedforward(inputs);
    const lr = 0.1;
    var error = target - guess;
    for (var i = 0; i < weighs.lenght; i++) {
      weighs[i] += error * inputs[i] * lr
    }
  }

  return {
    train,
    guess:feedforward
  };
}