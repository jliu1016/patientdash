import React, { useState, useEffect } from 'react';
import { PatientTableComponent } from '../components/PatientTable'
import { getAge, getFullName } from '../helpers/helper'
export function PatientTableContainer(props: any) {

  let tableRows: any = []
  let key = 0;

  if (props.data) {
    tableRows = props.data.map((data: any) => {
      data = data.resource
      key++
      return {
        key: key,
        name: data.name ? getFullName(data.name) : '',
        age: getAge(new Date(data.birthDate)),
        dob: data.birthDate,
        gender: data.gender ? data.gender : 'Unavailable'
      }
    })
  }

  if (props.data) {
    return <PatientTableComponent data={tableRows} />
  }
  return <div></div>
}