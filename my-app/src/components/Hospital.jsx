import React from "react";
import Patient from "./Patient";

export default function Hospital() {
  // const patientInfo = { name: "kumar",
  // hospitalName: "applo"};
  // const showPatientInfo =
  //   patientInfo.name !== undefined && patientInfo.hospitalName !== undefined;
  // const isHospitalOpen = true;
  // const name = "kumar";
  // const Hospitalname = "applo";
  // const patientInfo = {
  // name: "kumar",
  // hospitalName: "applo"
  // }

  const patientList = [
    { name: "Ganesh", hospitalName: "jipmer" },
    { name: "Kumar", hospitalName: "rajiv gandhi hosipital" },
    { name: "aslam", hospitalName: "mahatma gahndi hospital" },
  ];

  return (
    <>
      {/* <Patient name = {name} hosName = "applo"  /> */}
      {/* {showPatientInfo ? <Patient patientInfo={patientInfo} /> : null} */}
      {/* {showPatientInfo && <Patient patientInfo={patientInfo} />}
      {isHospitalOpen ? <h2>Hospital is open</h2> : <h2>Hospital is closed</h2>} */}
     <ul>
      {
        patientList.map((patientInfo, index) => ( <li key={index}> <Patient patientInfo = {patientInfo}/> </li> ))
      }
     </ul>
    </>
  );
}

