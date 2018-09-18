function person({name, age, alive}) {
	return {name, age, alive};
}

//[['john', 23, true], ['jane', 33, true], ['zed', 38, false]]

function createPeople(arr) {
	return arr.map(function(arrayWithinArray) {
		return person(...arrayWithinArray);
	});
}

module.exports = createPeople;