# Asynchronous programming exercise

## We will be working with Promises and the async/await functionality to do some asynchronous programming.

## Setup.

1. Change directory into ```wyncode/implementation-lectures```
2. Change directory into ```async-await-implementation```
4. Run ```npm install``` in order to install the project's dependencies.
3. Create an ```index.js``` file.
5. Require ```axios``` into the ```index.js``` file

## Objectives

1. Create an ```async``` **function** named ```fetchPeople``` that performs a ```GET``` request using **axios** to ```https://goodparts.dokku-hosted.thruhere.net/people``` using **await**
2. Save the data returned from this function call into a variable. (Remember that the actual data returned from an **axios** request is stored in the **data** property of the response object). The data you receive will be a group of **person** objects in an **array**
**NOTE** The following step has nothing to do with asynchronous programming. Skip it if you feel it will take too long
3. Create a new **array** that contains all elements with a ```first_name``` property that starts with either 'a' or 'A'. (Use Array.prototype.filter, not Array.prototype.map)
4. Return this **array** from the ```fetchPeople``` function and assign it to a **variable**
5. Since ```fetchPeople``` is an **async/await** function it will always return a **promise**, write down a **promise** handler that will iterate over the returned **array** and will **console.log** each element inside the **array**

**Second Exercise**

1. Create an ```async``` **function** named ```fetchStarWarsCharacter``` that performs a ```GET``` request using **axios** to get a random character with an ```id``` equals to a number between 1 and 10, save this character in a variable. Read the documentation of the API to see how to get a character from the movies.
2. Perform this operation once more so you now have 2 characters.
3. Make a ```POST``` request using await to ```https://www.google.com``` that contains as data the 2 characters you retrieved in steps 1 and 2. Read the axios docs to learn how to send data to a server.
4. This request will fail. You will need to handle this promise rejection in a way that it does not exit your whole application.
5. return character1 and character2 as part of an **object**.
6. Add a promise handler to the function created in step 1 that **outputs** both properties of the object that was returned.
