describe('powerOfNames tests', () => {
	let powerOf = require('../exercises/powerOf');
	it('should create arrays with numbers to the power of the second argument', () => {
		expect(powerOf([1,2,3,4], 2)).toEqual([1, 4, 9, 16]);
	})
})