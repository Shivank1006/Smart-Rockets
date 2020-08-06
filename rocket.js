function Rocket(dna){
	this.position = createVector(width/2, height);
	this.velocity = createVector();
	this.acceleration = createVector();
	this.completed = false;
	this.crashed = false;
	if(dna){
		this.dna = dna;
	}else{
		this.dna = new DNA();
	}
	this.fitness = 0;
	
	this.applyForce = function(force){
		this.acceleration.add(force);
	}
	
	this.calculateFitness = function(){
		var d = dist(this.position.x, this.position.y, target.x, target.y);
		this.fitness = map(d, 0, height, height, 0);
		
		if(this.completed){
			this.fitness *= 30;
		}
		
		if(this.crashed){
			this.fitness /= 10;
		}
	}
	
	this.update = function(){
		var d = dist(this.position.x, this.position.y, target.x, target.y);
		if(d<40){
			this.completed = true;
			this.position = target.copy();
		}
		if(this.position.x < 0 || this.position.x > width || this.position.y < 0 || this.position.y > height){
			this.crashed = true;
		}
		if(this.position.x > rx && this.position.x < rx+rw && this.position.y > ry && this.position.y < ry+rh){
			this.crashed = true;
		}
		if(this.position.x > rx1 && this.position.x < rx1+rw && this.position.y > ry1 && this.position.y < ry1+rh){
			this.crashed = true;
		}
		this.applyForce(this.dna.genes[count]);
		if(!this.completed && !this.crashed){
			this.velocity.add(this.acceleration);
			this.position.add(this.velocity);
			this.acceleration.mult(0);
			this.velocity.limit(6);
		}
	}
	
	
	this.show = function(){
		push();
		translate(this.position.x, this.position.y);
		rotate(this.velocity.heading() + PI/2);
		noStroke();
		if(this.crashed){
			fill(180, 150);
			triangle(0, -15, -5, -8, 5, -8);
			ellipse(0, 0, 5, 5);
			rect(-5, -8, 10, 23);
			triangle(5, 10, 5, 15, 10, 15);
			triangle(-5, 10, -5, 15, -10, 15);
		}else{
			fill(255, 0, 0);
			triangle(0, -15, -5, -8, 5, -8);
			fill(255);
			rect(-5, -8, 10, 23);
			fill(0, 0, 255);
			ellipse(0, 0, 5, 5);
			fill(48, 141, 255);
			triangle(5, 10, 5, 15, 10, 15);
			triangle(-5, 10, -5, 15, -10, 15);
			fill(255, 0, 0, 200);
			rect(-5, 15, 3, 8);
			rect(-2, 15, 4, 13);
			rect(2, 15, 3, 8);
		}
		pop();
	}
}