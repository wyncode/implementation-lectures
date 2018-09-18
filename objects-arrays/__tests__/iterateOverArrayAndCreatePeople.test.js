xdescribe('iterateOverArrayAndCreatePeople function', () => {
	let createPeople = require('../exercises/iterateOverArrayAndCreatePeople');
	it('should create an array of people', () => {
		expect(createPeople([['john', 23, true], ['jane', 33, true], ['zed', 38, false]])).toEqual([{name: 'john', age: 23, alive: true}, {name: 'jane', age: 33, alive: true}, {name: 'zed', age: 38, alive: false}])
	})
})