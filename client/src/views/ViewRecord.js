import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, Link} from 'react-router-dom';

const ViewRecord = (props) => {
    const[records, setRecords] = useState([]);
    
    const {_id} = useParams();
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/records/${_id}`)
            .then(res=>{
                console.log(res.data);
                setRecords(res.data.results)
            })
            .catch(err=>console.log(err))
    }, [_id])

    return(
        <div>
            <div className="viewRecordHeader mx-auto mb-2">
                <h2 className="">You are viewing {records.name}'s record</h2>
            </div>
            
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Back to Homepage</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{records.name}</td>
                            <td>{records.email}</td>
                            <td>{records.age}</td>
                            <td>{records.gender}</td>
                            <td>
                                <Link to={"/"} className="action-link">Home</Link> |
                                <Link to={`/records/${records._id}/edit`} className="action-link"> Edit</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewRecord; 