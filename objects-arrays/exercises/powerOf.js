function powerOf(numberArray, power) {
	return numberArray.map(function(e) {
		return e ** power;
	})
}

let arr = powerOf([2,3,4], 2);

module.exports = powerOf