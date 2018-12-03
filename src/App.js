import React, { Component } from 'react'; 
import './App.css';
import Person from './Person/Person'; 

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // DON'T DO THIS: React doesn't recognize a direct change like this example; this.state.person[0] = 'Maximillian'
    this.setState({
    persons: [
      {name: newName, age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 27}
    ]
  })
}


nameChangedHandler = (event) => {
  this.setState( {
    persons: [
      {name: 'Max', age: 28},
      {name: event.target.value, age: 29},
      {name: 'Stephanie', age: 26}
    ]
  })
} 

  render() {
    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <p> This is really working!</p>
       <button onClick={() =>this.switchNameHandler('Maxmillian!!')}>Switch Name </button>
       <Person 
       name={this.state.persons[0].name} 
       age={this.state.persons[0].age}/>
       <Person 
       name={this.state.persons[1].name} 
       age={this.state.persons[1].age}
       click={this.switchNameHandler.bind(this, 'Max!')}
       changed={this.nameChangedHandler}>My Hobbies:Racing</Person>
       <Person 
       name={this.state.persons[2].name} 
       age={this.state.persons[2].age}/>
      
      </div>
    );
  }
}

export default App;