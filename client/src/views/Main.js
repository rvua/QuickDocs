import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecordBox from '../Components/RecordBox';

const Main = (props) => {
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
        <div>
            {
                records.map((item, i) => {
                    return(
                        <div>
                            <RecordBox key={i} pet={item}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Main; 