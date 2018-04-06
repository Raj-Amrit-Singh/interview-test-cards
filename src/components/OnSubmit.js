import React, { Component } from 'react';

export function OnSubmit(props){
   return(
    <div>
      <button onClick={props.checkAnswer} className="btn-lg btn-primary" style={{align:"center"}}>Submit</button>
      <label></label>
      </div>
  )
}