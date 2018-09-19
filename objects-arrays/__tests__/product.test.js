xdescribe("product function test", () => {
	let {product, productArr} = require("../exercises/product");
  it("should create an object with 4 properties", () => {
    expect(Object.keys(product("hammer", "ge", 100)).length).toBe(4);
  });
  it("should assign 0 to resulting product's quantity property if quantity argument is ignored on creation", () => {
    expect(product("hammer", "ge").quantity).toBe(0);
  });
  it("should assign false to resulting product's inStock property if quantity argument is ignored on creation", () => {
    expect(product("screwdriver", "ge").inStock).toBe(false);
	});
	it("should assign true to resulting product's inStock property if quantity argument is greater than 0 on creation", () => {
		expect(product('screwdriver', 'ge', 1000).inStock).toBe(true);
	})
	it("should push newly created objects into productArr", () => {
		expect(productArr.length).toBeGreaterThan(0);
	})
});