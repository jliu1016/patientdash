import React, { useState, useEffect } from 'react';
import { PatientTableComponent } from '../components/PatientTable'

export function PatientTableContainer(props: any) {
  const getAge = (date: Date) => {
    let timeDiff = Date.now() - date.getTime();
    if (timeDiff < 0) {
      return 0
    }
    return Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
  }

  let tableRows: any = []
  if (props.data) {
    tableRows = props.data.map((data:any) => {
      data = data.resource
      console.log(data)
      return {

        name: data.name?
        (data.name[0].given.join(' ') + ' ' + (data.name[0].family?data.name[0].family:''))
        :'',
        age: getAge(new Date(data.birthDate)),
        dob: data.birthDate,
        gender: data.gender?data.gender: 'Unavailable'
      }
    })
  }
  console.log(tableRows)

  if (props.data) {
    return <PatientTableComponent data={tableRows} />
  }
  return <div></div>
}