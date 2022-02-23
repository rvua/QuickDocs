import React from 'react';
import { Link } from 'react-router-dom';

const RecordBox = ({record, name, onDeleteHandler}) => {
    
    return (
        <tr className="mainTable">
            <td>{record.name}</td>
            <td>{record.email}</td>
            <td>{record.age}</td>
            <td>{record.gender}</td>
            <td>
                <Link to={`/records/${record._id}`} className="action-link">Details</Link> |
                <Link to={`/records/${record._id}/edit`} className="action-link"> Edit</Link> |
                <button type="button" onClick={() => onDeleteHandler(record._id)} className="deleteBtn">Delete</button>
            </td>
        </tr>
    )
}

export default RecordBox;
