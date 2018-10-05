# jQuery Implementation Block

# Set up

 1. Change directory into your ```wyncode/implementation-lectures/jqueryImplementation```.
 2. git Pull from your **upstream** repository.
 2. In your command line run **npm install** or **yarn install**
 3. Start the **server.js** file by running **node server.js**
 4. In your browser go to ```localhost:5000```
 5. You will be writing your code in ```public/main.js```

# Instructions

 1. Use jquery to select all buttons in your html page, and then add the **special** class to them.
 2. Add a **click** event listener to both theme **buttons** located on the top right corner of your html page.
 3. Pass a callback function to the event listeners you created in the previous step that changes the 
 **background-color** style property of the element with **id** of **content** to either red or blue depending on the button you click.
 4. Add a **click** event listener to the button with id **import-people**.
 5. Pass a callback function to the event listener you created in the previous step. This function should make a  **GET** request to the **users** endpoint at **localhost:5000**.
 6. Iterate over each element in the data array that you got from your request. 
 7. For each element in the data array create an **li** with two **p** tags that will hold the **first_name** and **last_name** of each element respectively.
 8. Give each **li** a **person-li** class.
 9. Append each one of these elements to the **ul** with id of **people-list**.