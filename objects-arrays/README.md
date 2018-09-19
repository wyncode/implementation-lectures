
# Objects and Arrays Implementation

  

## Setup

1. In your terminal, change directory into ```wyncode/implementations/objects-arrays```.

2. Run ```npm install``` in your console.

3. Run ```npm run test``` in your console.

  

## Instructions

1. In the last implementation lecture (_Loops and Functions_), we created a function to raise elements of an array to the power of a specific number. Today, we will be doing the same thing but we will use ```map``` instead of a for loop. In ```powerOf.js```, write a function that takes 2 arguments: an ```Array``` and a number. Use ```map``` to iterate over each element of the ```Array``` and return a new ```Array``` where each original element has been raised to the power of the second ```number``` argument.

2. Declare an empty array named ```productArr``` in ```exercises/product.js```. In this same file, declare a factory ```function``` named product. This ```function``` has 3 ```parameters```: name, brand, quantity. `name` and `brand` should always be ```strings```. `quantity` will be a ```number``` with a default value of ```0```. Every object created using this function should also have a property named ```inStock``` which is a boolean. If ```quantity``` is less than or equal to 0, ```inStock``` will have a value of ```false```; otherwise, ```inStock``` will have a value of ```true```. Every time we create a new object we want to push said object into the ```productArr``` array and return the created object.

**Tip:** This function is supposed to be doing a lot. A good way to get started is to write down step by step what this function should accomplish. This technique will provide more clarity when tackling tougher problems. See below if you feel stuck.
<details>
	<summary>Suggested Steps</summary>

	1. Create an empty array named ```productArr```.
	2. Create a function named ```product``` that has 3 parameters (name, brand, quantity)
	3. Set ```quantity``` to have a default value of 0
	4. Validate that name and brand ```parameters``` are ```strings```
	5. If name and brand are not ```strings``` return null
	6. Our function will create an object with 4 properties
	7. The first 3 properties of this object are defined by the arguments passed to our function call.
	8. To set the 4th property we need to check if quantity is less or equals to 0
	9. If the quantity ```argument``` is less or equals to 0 then the ```inStock```
				property of the created object will be false, else it will be true
	10. Push the object into the array created in step 1.
	11. Return the created object.
</details>
<br>

3.  **Very Hard**: In ```iterateOverArrayAndCreatePeople.js```, create a factory ```function``` named `person` that takes 3 arguments: name, age, alive. This function will create an object with 3 properties, for example ```{name: "john", age: 33, alive: true}```. Then, declare a function named ```createPeople```. This function takes an array as an argument and it iterates over that array using ```map```. ```map``` should use the ```person function``` defined previously in order to create a new array of elements. For example, ```createPeople([['jules', 38, true], ['mia', 28, true], ['zed', 35, false]])``` will return ```[{name: 'jules', age: 38, alive: true}, {name: 'mia', age: 28, alive: true}, {name: 'zed', age: 35, alive: false}]```
