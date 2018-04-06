import React from 'react'

export function Instructions(props){
  return(
    <div className="container">
      <h1>Instructions</h1>
      <ol><h3>
      <li><span className="label label-primary">Please read all instructions carefully.</span></li>
      <li><span className="label label-primary">All questions are mandatory.</span></li>
      <li><span className="label label-primary">You have 10 minutes to answer the questions.</span></li>
      <li><span className="label label-primary">Once the time is over the answers will automatically be submitted.</span></li>
      <li><span className="label label-primary">Please click start button to initiate the test.</span></li></h3>
      </ol>
      <button onClick={props.startTest} style={{paddingLeft : 10,marginLeft : 10}}className="btn btn-primary btn-md">Start</button> 
    </div>
  )
}