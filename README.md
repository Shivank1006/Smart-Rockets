# Smart-Rockets

## Genetic Algorithm
A genetic algorithm (GA) is a metaheuristic inspired by the process of natural selection that belongs to the larger class of evolutionary algorithms (EA). Genetic algorithms are commonly used to generate high-quality solutions to optimization and search problems by relying on biologically inspired operators such as mutation, crossover and selection.

It is inspired by Charles Darwin's theory of Natural Selection.

<p align="center"><b><i>Survival Of The Fittest.</i></b></p>


## How does it work ?
Here a population of rockets attempt to find a way to the target without crashing. We initially start with a population of rockets that have a DNA with random genes. After the life span of this population we use a fitness function to decide the fitness of each rocket. We then select two rockets as parents based on their fitness score for reproduction.

<p align="center"><img src="rockets.png" width=500></p>

A crossover point is chosen in DNA of the child and it contains the DNA of first parent before the crossover point and DNA of second parent after crossover point.

After a child is produced by crossover we mutate some of the genes in the DNA. There is a very slight probability for a gene to mutate. Mutations are important to maintain diversity in a populationand to prevent the premature convergence.

This cycle of selection, crossover and mutation goes on and after some time a convergence in the maximum fitness of the population is achieved beyond which the fitness cannot increase. Then the offsprings produced are not significantly different from the previous generation. We then say that a set of solution to our problem is achieved by the genetic algorithm.

## License
[MIT](https://choosealicense.com/licenses/mit/)
