import React, { useState, useEffect } from 'react';
import { PatientTableContainer } from '../containers/PatientTable';
import { StatsCard } from '../components/StatsCard';
import './PatientData.css';
import { getAge } from '../helpers/helper';

export function PatientData(props: any) {
    const [patientData, setPatientData] = useState<any[]>([]);

    const url = 'http://hapi.fhir.org/baseR4/Patient?birthdate=gt1950-01-01&_pretty=true'
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setPatientData(data.entry)
            });
    }, [])

    const ageArray: number[] = patientData.filter(entry => entry.resource.hasOwnProperty('birthDate'))
        .map((entry) => {
            entry = entry.resource
            return getAge(new Date(entry.birthDate))
        })

    const pediatricPatientCount = ageArray.filter(age => age < 18).length
    const avgAge = ageArray.reduce((p: number, c: number) => p + c, 0) / ageArray.length;


    if (patientData.length > 0) {
        return (
            <div className='PatientData'>
                <div className='StatsRow'>
                    <div className='Stat'>
                        <StatsCard title="Avg Age" number={avgAge} />
                    </div>
                    <div className='Stat'>
                        <StatsCard title="Number of Patients" number={patientData.length} />
                    </div>
                    <div className='Stat'>
                        <StatsCard title="Pediatric Patient Count" number={pediatricPatientCount} />
                    </div>
                </div>
                <div className='PatientTable'>
                    <PatientTableContainer data={patientData} />
                </div>
            </div>
        )
    }
    return <div></div>
}