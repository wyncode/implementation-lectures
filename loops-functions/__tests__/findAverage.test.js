xdescribe('Find average value tests', () => {
	let findAverage = require('../exercises/findAverage');
	it('should return the average value', () => {
		expect(findAverage([2,2,2,2])).toBe(2);
	})

	it('should return null if array is empty', () => {
		expect(findAverage([])).toBeNull();
	})
})