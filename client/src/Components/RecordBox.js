import React from 'react';
import { Link } from 'react-router-dom';

const RecordBox = (props) => {
    return (
        <div>
            <table className="table table-bordered">
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
                    <tr> 
                        <td>{props.record.name}</td>
                        <td>{props.record.email}</td>
                        <td>{props.record.age}</td>
                        <td>{props.record.gender}</td>
                        <td>
                            <Link to={`/records/${props.record._id}`}>Details</Link> |
                            <Link to={`/records/${props.record._id}/edit`}>Edit</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RecordBox;