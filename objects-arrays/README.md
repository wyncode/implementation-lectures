
# Objects and Arrays Implementation

  

## Setup

1. Change directory into ```wyncode/implementations/objects-arrays```

2. Run ```npm install``` in your console

3. Run ```npm run test``` in your console

  

## Instructions.

1. Last Implementation lecture we did an exercise where we used a function to raise elements of an array to the power of a specific number. Today we will be doing the same thing but we will be using ```map``` instead of a for loop. In ```powerOf.js``` write a function that takes 2 arguments. One is an ```Array``` the other one is a number.

2. Declare an empty array named ```productArr``` in ```exercises/product.js```. In this same file declare a factory ```function``` named products. This ```function``` has 3 ```parameters```: name, brand, quantity. name and brand should always be ```strings```. quantity will be a ```number```. quantity will have a default value of ```0```. Every object created using this function should also have a property named ```inStock``` which is a boolean. If ```quantity``` is less or equals to 0 ```inStock``` will have a value of ```false``` otherwise, ```inStock``` will have a value of ```true```. Every time we create a new object we want to push said object into that array. Return the created object.
This function is supposed to be doing a lot. What I would advise is for you to write down step by step what this function should accomplish this technique will provide more clarity when tackling tougher problems. I would write each steps in this function as follows:

	1. Create an empty array named ```productArr```.
	2. Create a function named ```products``` that has 3 parameters (name, brand, quantity)
	3. Set ```quantity``` to have a default value of 0
	4. Validate that name and brand ```parameters``` are ```strings```
	5. Our function will create an object with 4 properties
	6. The first 3 properties of this object are defined by the arguments passed to our function call.
	7. To set the 4th property we need to check if quantity is less or equals to 0
	8. If the quantity ```argument``` is less or equals to 0 then the ```inStock```
				property of the created object will be false, else it will be true
	9. Push the object into the array created in step 1.
	10. Return the created object.

3.  **Very Hard**: In ```iterateOverArrayAndCreatePeople.js``` create a factory ```function``` named person that takes 3 arguments (name, age, alive). This function will create an object with 3 properties ```e.g: {name: "john", age: 33, alive: true}```. In ```iterateOverArrayAndCreatePeople.js``` Declare a function named ```createPeople```. This function takes an array as an argument and it iterates over said array using ```map```. ```map``` should use the ```person function``` defined previously as to create a new array of elements. e.g: ```createPeople([['jules', 38, true], ['mia', 28, true], ['zed', 35, false]])``` will return ```[{name: 'jules', age: 38, alive: true}, {name: 'mia', age: 28, alive: true}, {name: 'zed', age: 35, alive: false}]```