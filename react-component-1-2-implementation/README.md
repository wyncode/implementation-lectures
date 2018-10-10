# React Component Implementation!

## Description
Today we will be working with components! And BrowserRouter as well...
It's gonna be fun, I promise.

## Setup
1. Change directory to your wyncode folder.
2. Use ```create-react-app``` to create a new react app named ```react-component-implementation```
3. Install the following dependencies ```react-router-dom``` ```semantic-ui-react```. (Semantic UI React is a component libraries kind of like Bootstrap that provides us with predefined components to use on our web applications)
4. Create a directory named ```components``` in your project's ```src``` directory.

## Instructions
1. Setup ```index.js``` by importing ```react``` ```react-dom```
2. Still in ```index.js``` import ```BrowserRouter``` and ```Route``` from ```react-router-dom```
3. Create a Stateless Functional Component named Root that renders a new instance of ```BrowserRouter```
4. The Root component should render 3 ```Route``` components: the first one should always be displayed, and will render the ```Header``` component, the second one should display the ```Home``` component when the path is extrictly equals to '/', the third one should display the ```About``` component when the path is equals to '/about'.
5. It's evident that you will need to create a ```Home, Header, and About``` component.
6. The ```Header``` component should look like a top bar menu with 2 elements. (Hint: If you feel like chanllenging yourself, Google 'semantic ui react' and try and use one of the predefined components to create the ```Header``` component **cough** Menu **cough**)
7. One of this elements will display text 'About' and when clicked it will push '/about' into ```this.props.history```
8. The other element will have display text 'Home' and when clicked it will push '/' into ```this.props.history```
