xdescribe('Find smallest number tests', () => {
	let findSmallest = require('../exercises/findSmallest');
	it('should find the smallest number in an array', () => {
		expect(findSmallest([-1000, 3, 0 ,5])).toBe(-1000);
	})

	it('should return null if array is empty', () => {
		expect(findSmallest([])).toBeNull();
	})
})