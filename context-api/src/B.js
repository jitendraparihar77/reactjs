import React from "react";
import {greetContext} from './App'

function B() {
  return (
    <div>
    <h1>contextapi use</h1>
   <greetContext.Consumer>
    {(value)=>{
        return <p>greet: {value.greet} {value.greet2}</p>
    }}
   </greetContext.Consumer>
    </div>
  );
}

export default B;

