function Animal(order, family, genus, species) {
	this.order = order;
	this.family = family;
	this.genus = genus;
	this.species = species;
}

Animal.prototype.describe = function() {
	return `${this.order} ${this.family} ${this.genus} ${this.species}`
}

function Dog(name, breed, height, weight) {
	Animal.apply(this, ['Carnivora', 'Canidae', 'Canis', 'C. lupus']);
	this.name = name;
	this.breed = breed;
	this.height = height;
	this.weight = weight;
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function() {
	return `${this.name} is barking`;
}

let angus = new Dog('Angus', 'English Bulldog', '2', '75');
console.log(angus.bark());

let arr = new Arry();