var population;
var lifeSpan = 400;
var count = lifeSpan;
var target;
var maxForce = 0.4;

var generation = 1;
var success = 0;

var life;
var canvas;

var rx = 20;
var rw = 300;
var ry = 200;
var rh = 10;

var rx1 = 280;
var ry1 = 400;

function setup(){
	canvas = createCanvas(600, 600);
	canvas.parent('#canvas');
	population = new Population();
	target = createVector(width/2, 70);
}

function draw(){
	background(0);
	population.run();

	count--;
	if(count == 0){
		success = 0;
		population.evaluate();
		population.selection();
		generation += 1;
		count = lifeSpan;
	}

	textSize(15);
	text('Successful Rockets in Last Generation: ' + success, 7, 20);
	text('Current Generation: ' + generation, 7, 40);

	noStroke();
	fill(255, 0, 0);
	ellipse(target.x, target.y, 80, 80);
	fill(252, 232, 3);
	ellipse(target.x, target.y, 60, 60);
	fill(0, 0, 255);
	ellipse(target.x, target.y, 40, 40);
	fill(0, 255, 0);
	ellipse(target.x, target.y, 20, 20);
	fill(255, 0, 0);
	rect(rx, ry, rw, rh);
	rect(rx1, ry1, rw, rh);
	fill(0, 255, 0);
	life = map(count, 0, lifeSpan, 0, width);
	rect(0, height-7, life, 7, 7);
}