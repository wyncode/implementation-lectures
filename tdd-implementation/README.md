# Test Driven Development with Jest

## Setup
1. Create a new directory named ```tdd-implementation```
2. Change directory into ```tdd-implementation```
3. run ```npm init -y```
4. run ```npm install jest -D```
5. create a ```__tests__``` directory. This is where you will be creating all the ```.test.js``` files.
6. in ```package.json``` change the ```test``` ```script``` to ```jest --watchAll```
7. run ```npm run test```

## Instructions
### Testing a class
1. Create a ```person.test.js``` inside the ```__tests__``` directory.
2. In ```person.test.js``` require ```Person``` from ```person.js```. understant that we haven't created ```Person``` nor ```person.js``` yet.

**Note:** If you want to add proper structure to your tests you should wrap all your tests in a ```describe``` block. Then create two ```test``` blocks, one for the ```Person``` class, and one for ```Person``` instances.
	


3. Write tests for the following functionalities
	```Person``` should:
	3a. be of type ```function```
	
	A new instance of ```Person``` should:
	
	3a.  Have a ```name``` property.
	
	3b.  Have an ```age``` property. This property should have a default value of 0.
	
	3c.  Have a ```greet``` property in its Prototype. Look up how to access a class instance's Prototype. Also check that this property is a function.
	
	3d. When calling the ```greet``` method expect the return value to be ```Hi! My name is ``` followed by the ```name``` property of that instance.
	
	3e. have a ```constructor``` property that's equals to ```Person```.
5. Implement the ```Person``` class inside the ```person.js``` file.
