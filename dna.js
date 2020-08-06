function DNA(genes){
	if(genes){
		this.genes = genes;
	}else{
		this.genes = [];
		for(var i=0; i<lifeSpan; i++){
			this.genes[i] = p5.Vector.random2D();
			this.genes[i].setMag(maxForce);
		}
	}
	
	this.crossOver = function(partner){
		var newGenes = [];
		var mid = floor(random(this.genes.length))
		for(var i=0; i<this.genes.length; i++){
			if(i > mid){
				newGenes[i] = this.genes[i];
			}else{
				newGenes[i] = partner.genes[i];
			}
		}
		return new DNA(newGenes);
	}
	
	this.mutation = function(){
		for(var i=0; i<this.genes.length; i++){
			if(random(1) < 0.01){
				this.genes[i] = p5.Vector.random2D();
				this.genes[i].setMag(maxForce);
			}
		}
	}
}
