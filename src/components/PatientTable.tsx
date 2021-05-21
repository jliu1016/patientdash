import { Table } from 'antd';
import React, { useState, useEffect } from 'react';

interface name {
    first: string
    last: string
}

interface PatientTableRow {
    name: string
    dob: string
    gender: string
    age: number

}
interface PatientTableProps {
    data: PatientTableRow[]

}

export function PatientTableComponent(props: any) {
    let [filteredInfo, setFilteredInfo] = useState<any>(props.data);
    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Date of Birth', dataIndex: 'dob', key: 'dob' },
        { title: 'Gender', dataIndex: 'gender', key: 'gender' },
        {
            title: 'Age', dataIndex: 'age', key: 'age',
            filters: [
                { text: 'Pediatric', value: 18 },

            ],
            filteredValue: filteredInfo.age || null,
            onFilter: (value: any, record: any) => record.age < value
        }
    ];
    // pagination and sorting are not used but are required to be compatible with antd Table
    const handleChange = (pagination: any, filters: any, sorter: any) => {
        setFilteredInfo(filters)
    };
    return (
        <Table
            columns={columns}
            dataSource={props.data}
            onChange={handleChange}
        />
    );
}