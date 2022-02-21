import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecordBox from '../Components/RecordBox';

const Main = () => {
    const [records, setRecords] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/records/findAll")
            .then(res => {
                console.log(res.data.results);
                setRecords(res.data.results)
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <div className="table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((item, i) => (
                        <RecordBox key={i} record={item}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Main; 