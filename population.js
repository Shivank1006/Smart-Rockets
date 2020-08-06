function Population(){
	this.rockets = [];
	this.populationSize = 25;
	this.matingPool = [];
	
	for(var i=0; i<this.populationSize; i++){
		this.rockets[i] = new Rocket();
	}
	
	this.evaluate = function(){
		var maxfit = 0;
		for(var i=0; i<this.populationSize; i++){
			this.rockets[i].calculateFitness();
			if(this.rockets[i].fitness > maxfit){
				maxfit = this.rockets[i].fitness;
			}
		}
		for(var i=0; i<this.populationSize; i++){
			if(this.rockets[i].completed == true){
				success += 1;
			}
			this.rockets[i].fitness /= maxfit;
		}
		this.matingPool = [];
		for(var i=0; i<this.populationSize; i++){
			var n = this.rockets[i].fitness * 100;
			for(var j=0; j<n; j++){
				this.matingPool.push(this.rockets[i]);
			}
		}
	}
	
	this.selection = function(){
		var newRockets = [];
		for(var i=0; i<this.rockets.length; i++){
			var parentA = random(this.matingPool).dna;
			var parentB = random(this.matingPool).dna;
			var child = parentA.crossOver(parentB);
			child.mutation();
			newRockets[i] = new Rocket(child);
		}
		this.rockets = newRockets;
	}
	
	this.run = function(){
		for(var i=0; i<this.populationSize; i++){
			this.rockets[i].update();
			this.rockets[i].show();
		}
	}
}
