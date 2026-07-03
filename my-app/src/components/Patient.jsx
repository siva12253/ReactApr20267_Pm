import React from "react";

export default function Patient(props) {
  // const {name, hosName} = props; 

  const { patientInfo } = props;
  const {name, hosName} = props; 



  const text = `Hi, i am ${name}, i am a patient from ${hosName} hospital`;
 
   
  return (
    <>
      <h1>patient - patients records</h1>
      <p>{text}</p>
    </>
  );
}

// import React, { Component } from 'react'
// //            inheritance
// export class patient extends Component {
//   render() {
//     return (
//       <div>patient</div>
//     )
//   }
// }

// export default patient
