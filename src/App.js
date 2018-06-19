import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  
  state = {
    persons: [
      {name: 'Jon', age: 28},
      {name: 'Chris', age: 33},
      {name: 'Nick', age: 56}
    ]
  }
  
  switchNameHandler = () => {
    // console.log("this works")
      this.setState({persons: [
        {name: 'Jonathan', age: 28},
        {name: 'Chris', age: 33},
        {name: 'Nick', age: 57}
      ]
    })
  }
  
  
  render() {
    return (
      <div className="App">
        <h1> click some buttons / state management </h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person 
          name= {this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name= {this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler}> Hobbies: Racing </Person>
        <Person 
          name= {this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}




export default App;
