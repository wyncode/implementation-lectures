describe('es6 test suite', () => {
	let {Drink, Spirit} = require('../es6');
	it('should create a Drink instance with the right properties', () => {
		let coke = new Drink('Coke 0', 'Coca Cola', 'Coke');
		expect(coke).toEqual({name: 'Coke 0', brand: 'Coca Cola', flavor: 'Coke'});
		expect(coke.describe()).toBe('Coca Cola: Coke 0 with flavor Coke');
		let laCroix = new Drink('x', 'x');
		expect(laCroix.describe()).toBe('x: x');
	})
	it('should create a Spirit Instance with the right properties', () => {
		let vodka = new Spirit('vodka', 'Stoli', null, 40);
		expect(vodka.alcoholContent).toBe(40);
		expect(vodka.haveASip(140)).toBe(10);
		vodka = new Spirit('vodka', 'Stoli');
		expect(vodka.alcoholContent).toBe(0);
		expect(vodka.flavor).toBe(null);
		
	})
})