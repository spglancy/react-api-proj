# React API Challenge 

This is a starter project for the React API project challenge. The goal of this challenge is to use React with a web API. 

The sample code here display the weather data from [OpenWeatherMap.org](https://openweathermap.org). 

## Overview 

This project focusses on two concepts used in react: 

1. Form input and the controlled component pattern.
1. Conditionally rendering components. 

## Controlled Components and form input

Forms work differently in react due to the way React handles the DOM with it's virtual DOM. You'll want to understand and master this pattern as it's required when working with form elements, this includes input, checkboxes, radio buttons, and select elements. 

In a nutshell the component holds the value of form elements on component state. This value is set when the component's value is changed, the form element's value is set to the value on state. This may sound a little circular because it is! 

In the example is happens at the input element in the form. Be sure to look at the comments. 

Read more [here](https://reactjs.org/docs/forms.html).

## Conditionally rendering components 

Single Page Applications need to control what is displayed on the page without loading a new page. Using React you will do that by sometimes rendering a component and sometimes not rendering a component. Or, sometimes rendering one component, and rednering a different component at other stimes. 

We will refer to this conditionally rendering. 

There are several patterns for this. The example shows one method. 

Read more about conditional rednering [here](https://reactjs.org/docs/conditional-rendering.html).

## Challenges 

The goal of this assignment is to create a React component that displays data from web API. 

The goal is to complete this challenge in 3 hours. To do this you will need to limit your scope. 

### Getting started 

1. Fork this repo
1. Post a link to your repo in the tracker
1. Install dependencies: `npm install`
1. Run the project: `npm start`
1. Visit the project at: [http://localhost:3000](http://localhost:3000)

From here the project should update in the browser as you work. 

This project was boot strapped with Create React App. See the notes [here](create-react-app-notes.md) for more information.

### Coding Challenges 

- Move into Component 
- Handle non weather data 
- Style the component 
- 

- Make a component that display the weather. Currently the weather is displayed as part of the App component. You want to move the weather out of App and display your new Weather component in App. 
- Handle Errors and conditionally display a message. Currently if you submit an invalid zip code the request to the server is valid but the JSON returned is not valid weather data. Instead it's an object that looks liek this: 

{cod: "404", message: "city not found"}

As it is the component displays nothing or it displays soem weather data based on this.state.weatherData

- null : displays nothing 
- any other value: displays some JSX 

The problem is that some times you get a valid repsonse but the response is not weather data. Which case you don't have all of the properties that you were expecting and instead you'll want to display a helpful message in place of the nonexistent weather data. 

