
import React, { Component } from 'react';
import Button from './Button'

import './App.css';

/** 
 * This example illustrates a simple react project 
 * that works with an external API. 
 * 
 * Take note of the comments they point common 
 * problems you will need to solve with React. 
 * 
 * There are two ideas here
 * - Input/Controlled Component Pattern
 * - Conditionally Rendering components 
 * 
 * The project has an input field where a user will
 * input a zip code. It finds weather data for that
 * zip and displays it in a component. 
 * 
 * */

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      charData: null,  // Used to hold data loaded from the rick and morty API
      page: 1
    }
  }

  // fetchData() {
  //   const url = `https://rickandmortyapi.com/api/character/?page=${this.state.page}`
  //   // Get data from the API with fetch
  //   fetch(url).then(res => {
  //     // Handle the response stream as JSON
  //     return res.json()
  //   }).then((json) => {
  //     console.log("we got data")
  //     // If the request was successful assign the data to component state
  //     this.setState({ charData: json })
  //   }).catch((err) => {
  //     // If there is no data 
  //     this.setState({ charData: null }) // Clear the character data we don't have any to display
  //     // Print an error to the console. 
  //     console.log('-- Error fetching --')
  //     console.log(err.message)
  //     // You may want to display an error to the screen here. 
  //   })
  // }

  handleClick(condition) {
    let pageNum = this.state.page
    condition === "forward" ? this.setState({ page: pageNum += 1 }): this.setState({ page: pageNum -= 1})
  }

  renderChar() {
    const url = `https://rickandmortyapi.com/api/character/?page=${this.state.page}`
    // Get data from the API with fetch
    fetch(url).then(res => {
      // Handle the response stream as JSON
      return res.json()
    }).then((json) => {
      console.log("we got data")
      // If the request was successful assign the data to component state
      this.setState({ charData: json })
    }).catch((err) => {
      // If there is no data 
      this.setState({ charData: null }) // Clear the character data we don't have any to display
      // Print an error to the console. 
      console.log('-- Error fetching --')
      console.log(err.message)
      // You may want to display an error to the screen here. 
    })
    if (this.state.charData === null) {
      return undefined
    }
    return this.state.charData.results.map(({ name, status, species, type, gender, image }) => {
      if(type === ""){
        type = "No Type Specified"
      }
     return( <div className = "character">
              <img alt = "placeholder img" src = {image}></img>
              <div>Name: {name}</div>
              <div>Status: {status}</div>
              <div>Species: {species}</div>
              <div>Type: {type}</div>
              <div>Gender: {gender}</div>
           </div>
     )}
    )}

  render() {
    return (
      <div className="App">
        <div className = "charContainer">{this.renderChar()}</div>
        <div className = "buttonContainer">
          <Button name = "back" className = "button" onClick = { () => this.handleClick("back") } />
          <span>Page: { this.state.page }</span>
          <Button name = "forward" className = "button" onClick = { () => this.handleClick("forward") } />
        </div>
      </div>
    );
  }
}

export default App;
