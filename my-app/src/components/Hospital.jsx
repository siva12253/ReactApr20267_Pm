import React from 'react'
import Patient from './Patient';

export default function Hospital() {
    // const name = "kumar";
    // const Hospitalname = "applo";
    const patientInfo = {
        name: "kumar",
        hospitalName: "applo"
    }
  return (
    <>
      {/* <Patient name = {name} hosName = "applo"  /> */}
      <Patient patientInfo = {patientInfo}  />
    </>
  )
}
