# Loops and Functions implementation!

## Setup

1. Change directory into your wyncode folder
2. Run the following command on your terminal ```git clone https://github.com/dankified/implementation-lectures.git``` This command will make a copy of the target repository in your current directory.
3. Change directory into ```implementation-lectures/loops-functions```
4. Run ```npm install``` This command will download an automated testing framework that will test our code for us. Don't delve too much on this, we will be seeing automated testing in the future.
5. Run ```npm run test``` This command will instruct our testing framework to start listening to changes in our code.

## Instructions

1. You will tackle each one of the exercises in their independent files which are located in the ```exercises``` directory. e.g: If you want to to work on **Find all Even numbers** you will work on ```exercises/findAllEven.js```.
2. To be able to run the tests associated with each exercise, go to their respective file in the ```__tests__``` directory and remove the first character of the first statement. e.g: You want to be able to run the tests associated with ```findAllEven.js```. In order to do so, go to ```__tests__/findAllEven.test.js``` and replace ```xdescribe``` with ```describe``` the ```x``` character marks a test to be ignored.

### Find all Even numbers in an array
1. In ```findAllEven.js``` write a function called ```findAllEven``` that takes an ```Array``` of numbers as an ```argument```. Your function will initialize a ```variable``` that will store an empty ```Array```.
2. Iterate through each element in the ```Array``` that was passed as an ```argument``` and if the current element is even then push said element into the ```Array``` that you created inside the function.
3. Finally, return the ```Array``` you created.
4. If the array that was passed to the ```function``` as an ```argument``` is empty, return ```null```.

### Find the average value in an array
1. In ```findAverage.js``` write a function called ```findAverage``` that takes an ```Array``` as an argument.
2. Return the average value of all elements inside the array.
3. If the array that was passed to the ```function``` as an ```argument``` is empty, return ```null```.

### Find the smallest number in an array
1. In ```findSmallest.js``` write a function called ```findSmallest``` that takes an ```Array``` as an argument.
2. Return the smallest number in the array.
3. If the array that was passed to the ```function``` as an ```argument``` is empty, return ```null```.

### Raise to the power of
1. In ```raiseToThePowerOf.js``` write a function called ```raiseToThePowerOf``` that takes 2 arguments. The first one is an ```Array``` of numbers, the second one is a ```number```. 
2. Iterate through each element in the ```Array``` that was passed as the first ```argument``` and update the value of each element in that ```Array``` with the value of the current element raised to the power of the second ```argument```. (This step deals with mutation of an object, which is a concept we touched on in the data types lecture)
3. Return the first ```argument``` passed to the function.
3. If the array that was passed to the ```function``` as an ```argument``` is empty, return ```null```.