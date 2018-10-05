# Asynchronous programming exercise

## We will be working with Promises and the async/await functionality to do some asynchronous programming.

## Setup.

1. Change directory into ```wyncode/implementation-lectures/asynchronous-programming```
2. Run ```git pull origin master``` to get the newest changes
3. Run ```npm install axios``` in order to install axios as a dependency
4. Create an ```index.js``` file.
5. Require ```axios``` into the ```index.js``` file

## Objectives

1. Create an ```async``` **function** named ```fetchPeople``` that performs a ```GET``` request using **axios** to ```https://goodparts.dokku-hosted.thruhere.net/people``` using **await**
2. Save the data returned from this function call into a variable. (Remember that the actual data returned from an **axios** request is stored in the **data** property of the response object). The data you receive will be a group of **person** objects in an **array**
3. If you have less than 200 elements in the **array** perform the same operation again, and add all the newly fetched elements to the **array**. You will need to iterate over the newly retrieved array in order to push the elements into the previously created **array**.
4. Return this **array** from the ```fetchPeople``` function and assign it to a **variable**
5. Since ```fetchPeople``` is an **async/await** function it will always return a **promise**, write down a **promise** handler that will iterate over the returned **array** and will **console.log** each element inside the **array**
