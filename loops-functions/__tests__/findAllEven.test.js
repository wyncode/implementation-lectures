xdescribe('find all even numbers tests', () => {
	let findAllEven = require('../exercises/findAllEven');
	
	it('should filter even numbers from array', () => {
		expect(findAllEven([1,2,4,3])).toEqual([2,4]);
	})

	it('should return null if array is empty', () => {
		expect(findAllEven([])).toBeNull();
	})
})