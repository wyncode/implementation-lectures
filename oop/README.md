## Setup
1. Clone this repo.
2. Change directory into the cloned folder.
3. Run ```npm install``` in your console.
4. Run ```npm run test``` in your console.

## Instructions 
1. Create a **Drink** class. 
2. Each **instance** of this **class** should have the following properties: name, brand, flavor. flavor is an optional parameter with a default value of **null**. 
3. Define a **method** named **describe** in the **Drink class** that returns a string that has the following format if the drink has a **flavor**  **property**  `${brand}: ${name} with flavor ${flavor}` else if the **flavor** is null return `${brand}: ${name}`. 
4. Create a **Spirit** class that inherits from **Drink**. 
5. This **class** has the same properties as **Drink** but it will add another property named **alcoholContent** (which is a numeric value between 0 and 100) if the **alcoholContent** value falls out of those values assign 0 to it.
6.  Define a function in **Spirit** named **howManyCanYouDrink**. This function will take a parameter named **weight** and it will substract the **alcoholContent** from the **weight** argument and return the resulting value divided by 10.

**Extra**
1. Create a class that inherits from **Drink**. This class is of your own creation. Go wild, build stuff.
2. Make sure that this new class expands on the concept of **Drink** which means that it should add its own properties and it should also add extra behavior that's only available to instances of this class.