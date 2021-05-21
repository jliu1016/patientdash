import React, { useState, useEffect } from 'react';
import { PatientTableContainer } from '../containers/PatientTable';
import { StatsCard } from '../components/StatsCard/StatsCard';
import './PatientData.css';
import { getAge } from '../helpers/helper';
export function PatientData(props: any) {
    const [patientData, setPatientData] = useState<any[]>([]);
    const [avgAge, setAvgAge] = useState<number>(0);
    const url = 'http://hapi.fhir.org/baseR4/Patient?birthdate=gt1950-01-01&_pretty=true'
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.entry)
                setPatientData(data.entry)
            });
    }, [])
    useEffect(() => {

    const ageArray: number[] = patientData.map((entry) => {
        console.log(entry)
        entry = entry.resource
        if (entry.birthDate) {
            return getAge(new Date(entry.birthDate))
        }
        return 0;
    })
    console.log(ageArray)
    const avgAge = ageArray.reduce( ( p:number, c:number ) => p + c, 0 ) / ageArray.length;

    setAvgAge(avgAge)
}, [patientData, setAvgAge])

    if (patientData.length > 0) {
        return (
            <div className='PatientData'>
                <div className='StatsRow'>
                    <div className='Stat'>
                        <StatsCard title="Avg Age" number={avgAge} />
                    </div>
                    <div className='Stat'>
                        <StatsCard title="Avg Age" number={2} />
                    </div>
                    <div className='Stat'>
                        <StatsCard title="Avg Age" number={2} />
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