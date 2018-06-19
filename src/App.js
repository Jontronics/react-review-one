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
  
  switchNameHandler = (newName) => {
    // console.log("this works")
      this.setState({persons: [
        {name: newName, age: 28},
        {name: 'Chris', age: 33},
        {name: 'Nick', age: 57}
      ]
    })
  }
  
    nameChangedHandler = (event) => {
      this.setState({persons: [
        {name: "Jon", age: 28},
        {name: event.target.value, age: 33},
        {name: 'Nick', age: 66}
      ]
    })
  }
  
  
  render() {
    
    const style = {
      backgroundColor: 'orange',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      curser: 'pointer'
    };
    
    
    return (
      <div className="App">
        <h1> click some buttons / state management </h1>
        <button 
           style={style}
           onClick={this.switchNameHandler.bind(this, "Jon the best")}>Switch Name</button>
        <Person 
          name= {this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name= {this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Whaaaaat')}
          changed={this.nameChangedHandler}> Hobbies: Racing </Person>
        <Person 
          name= {this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  }
}




export default App;
