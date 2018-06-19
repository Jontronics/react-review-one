import React from 'react'

const person = (props) => {
  return (
    <div>
      <p> Aye im {props.name} and I am {props.age } </p>
      <p> {props.children} </p>
    </div>  
  )  
};


export default person;