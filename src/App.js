import React, { Component } from 'react'; 
import classes from './App.css';
import Person from './Person/Person'; 
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
// have to import styleroot so tranforming i.e. media quieries work
// import Radium, {StyleRoot} from 'radium';

class App extends Component {
  state = {
    persons: [
      {id: 'jo', name: 'Max', age: 28},
      {id: 'fd', name: 'Manu', age: 29},
      {id: 'sad', name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  }
// Method
//   switchNameHandler = (newName) => {
//     // console.log('Was clicked');
//     // DON'T DO THIS: React doesn't recognize a direct change like this example; this.state.person[0] = 'Maximillian'
//     this.setState({
//     persons: [
//       {name: newName, age: 28},
//       {name: 'Manu', age: 29},
//       {name: 'Stephanie', age: 27}
//     ]
//   })
// }

// Method
nameChangedHandler = (event, id) => {
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const person = {
    ...this.state.persons[personIndex]
  };

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex]= person;

  


  this.setState( {persons: persons})

} 

// Method
togglePersonsHandler= () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons:!doesShow});

}
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});


  }


  render() {
    
    
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   // its not a valid js properties name cuz of colon, as strings they are valid. css sudo selector enabled by Radium
    //   // ':hover': {
    //   //   backgroundColor:'lightgreen',
    //   //   color: 'black'
    //   // }
    // };

    let persons = null;
    let btnClass = '';


    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            
// Now with that person wrapped with error boundary, we also have to move the key here to the error boundary
// because this is now the outer element which we map and the key always has to be on the outer element
//ErrorBoundary is a higher order component 
            return <ErrorBoundary key={person.id}>
              <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age ={person.age}
            
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
            </ErrorBoundary>
          })}
        
      </div> 

      );
    
      btnClass = classes.Red;
   }
        // css class list
        // will change this is working text based on criteria below
        const assignedClasses= [];
        if(this.state.persons.length <= 2) {
          assignedClasses.push(classes.red); // classes = ['red'] 
        }
        if(this.state.persons.length <= 1) {
          assignedClasses.push(classes.bold); // classes = ['red', 'bold']
        }



    return (
      // <StyleRoot>
    <div className={classes.App}>
       <h1>Hi, I'm a React App</h1>
       {/* .join is used cuz classes is set to an empty array before being used here and css class list cant work without having something in the array */}
       <p className={assignedClasses.join(' ')}> This is really working!</p>
       <button
       className={btnClass}
        
        onClick={this.togglePersonsHandler}>Toggle Persons </button>
       {persons}
    </div>
    // </StyleRoot>
    );
  }
}


// higher order component, injecting more functionality into the app.js by wrapping it in Radium. Radium is about styling, allows css sudo selectors and medio queiries
export default App;
