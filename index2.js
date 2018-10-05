class Car {
	constructor(make, model, year, color, hp) {
		this.make = make;
		this.model = model;
		this.year = year;
		this.color = color;
		this.hp = hp;
	}

	start() {
		if(this.hp < 300) {
			console.log(`The ${this.model} goes put put!`);
		} else {
			console.log(`The ${this.model} goes VROOOM!`);
		}
	}
} 

let tesla = new Car('Tesla', 3, 2090, 'White', 40);

tesla.__proto__.start.call(tesla);
tesla.start();