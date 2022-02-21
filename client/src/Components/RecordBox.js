import React from 'react';
import { Link } from 'react-router-dom';

const RecordBox = ({record}) => {
    return (
        <tr>
            <td>{record.name}</td>
            <td>{record.email}</td>
            <td>{record.age}</td>
            <td>{record.gender}</td>
            <td>
                <Link to={`/records/${record._id}`}>Details</Link> |
                <Link to={`/records/${record._id}/edit`}>Edit</Link>
            </td>
        </tr>
    )
}

export default RecordBox;
