import React from 'react';
import Radium from 'radium';
import './Person.css'



const person = (props) => {
    const style ={
        // acceptable cuz its a string, understood cuz of radium
        '@media (min-width: 500px)': {
            // fixed width
            width: '450px'
        }
    };

   return ( 
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    
    
    )
};


export default Radium(person);