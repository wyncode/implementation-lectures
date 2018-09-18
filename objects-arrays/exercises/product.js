let productArr = [];
function product(name, brand, quantity = 0) {
	if(typeof name === 'string' && typeof brand === 'string' && typeof quantity === 'number') {
		let inStock = quantity > 0 ? true : false;
		let obj = { 
			name,
			brand, 
			quantity, 
			inStock 
		};
		productArr.push(obj);
		return obj;
	} else {
		return null;
	}
}

//Don't write nor change code after this line
module.exports = {
  product,
  productArr,
};
