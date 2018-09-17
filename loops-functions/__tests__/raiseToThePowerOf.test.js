xdescribe('Raise all elements in array to the power of tests', () => {
	let raiseToThePowerOf = require('../exercises/raiseToThePowerOf');
	console.log(typeof raiseToThePowerOf);
	it('should raise all elements in array to the power of the second argument', () => {
		let arr = [2,2,3];
		expect(raiseToThePowerOf(arr, 2)).toEqual([4,4,9]);
		expect(arr).toEqual([4,4,9]);
	})

	it('should return null if array is empty', () => {
		expect(raiseToThePowerOf([], 6)).toBeNull();
	})
})