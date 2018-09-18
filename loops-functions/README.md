# Loops and Functions Implementation

## Setup

1. In your terminal, change directory into your wyncode folder.
2. Run the following command: ```git clone https://github.com/dankified/implementation-lectures.git```. This will make a copy of the target repository in your current directory.
3. Change directory into ```implementation-lectures/loops-functions```.
4. Run ```npm install```. This will download an automated testing framework that we will use to test our code. Don't dwell too much on this. We will see automated testing in the (near) future.
5. Run ```npm run test```. This will instruct our testing framework to start listening to changes in our code.

## Instructions

1. You will find each of the exercises below in the ```exercises``` directory. So, for example, if you want to to work on **Find All Even numbers**, you will work on ```exercises/findAllEven.js```.
2. To run the tests associated with an exercise, go to its respective file in the ```__tests__``` directory and remove the first character of the first line. For example, if you want to run the tests associated with ```findAllEven.js```, go to ```__tests__/findAllEven.test.js``` and replace ```xdescribe``` with ```describe```. The ```x``` marks a test to be ignored.

#### Find All Even numbers in an Array
1. In ```findAllEven.js```, write a function called ```findAllEven``` that takes an ```Array``` of numbers as an ```argument```. Your function will initialize a ```variable``` that will store an empty ```Array```.
2. Iterate through each element in the ```Array```. If the current element is even, push it into the ```Array``` that you initialized inside the function.
3. Finally, return the ```Array``` that you created.
4. If the array that was passed to the ```function``` as an ```argument``` is empty, return ```null```.

#### Find the Average Value in an Array
1. In ```findAverage.js```, write a function called ```findAverage``` that takes an ```Array``` of numbers as an argument.
2. Return the average value of all elements inside the array.
3. If the array that was passed to the ```function``` as an ```argument``` is empty, return ```null```.

#### Find the Smallest Number in an Array
1. In ```findSmallest.js```, write a function called ```findSmallest``` that takes an ```Array``` of numbers as an argument.
2. Return the smallest number in the array.
3. If the array that was passed to the ```function``` as an ```argument``` is empty, return ```null```.

#### Raise to the Power Of
1. In ```raiseToThePowerOf.js```, write a function called ```raiseToThePowerOf``` that takes 2 arguments. The first is an ```Array``` of numbers, the second is a ```number```. 
2. Iterate through each element in the ```Array``` that was passed as the first ```argument``` and update the value of each element in that ```Array``` to the value of the current element raised to the power of the second ```argument```. (This step deals with mutation of an object, which is a concept we touched upon in the Data Types lecture.)
3. Return the first ```argument``` passed to the function.
3. If the array that was passed to the ```function``` as an ```argument``` is empty, return ```null```.
