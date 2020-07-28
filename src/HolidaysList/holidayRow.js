import React, { useState } from 'react';
import Axios from 'axios';
import './holidayList.css';

const HolidayRow = (props) => {
    const { holiday } = props;
    const { dia, mes, motivo, tipo, info, _id } = holiday;
    const [isEditing, setIsEditing] = useState(true);
    const [day, setDay] = useState(dia);
    const [month, setMonth] = useState(mes);
    const [reason, setReason] = useState(motivo);
    const [type, setType] = useState(tipo);
    const [information, setInformation] = useState(info);


    const updateHoliday = () => {
        let body = {
            _id: _id,
            dia: Number(day),
            mes: Number(month),
            motivo: reason,
            tipo: type,
            info: information
        };
        Axios.put('http://localhost:4000/api/holidays/edit-holiday', body).then(response => {
            setIsEditing(true);
        });
    }

    return (
        <tr>
            <td>
                <input disabled={isEditing} defaultValue={day} onChange={e => setDay(e.target.value)} />
            </td>
            <td>
                <input disabled={isEditing} defaultValue={month} onChange={e => setMonth(e.target.value)} />
            </td>
            <td>
                <input disabled={isEditing} defaultValue={reason} onChange={e => setReason(e.target.value)} />
            </td>
            <td>
                <input disabled={isEditing} defaultValue={type} onChange={e => setType(e.target.value)} />
            </td>
            <td>
                <input disabled={isEditing} defaultValue={information} onChange={e => setInformation(e.target.value)} />
            </td>
            <td>
                {isEditing ?
                    <i onClick={() => setIsEditing(!isEditing)} className="fa fa-edit"></i>
                    :
                    <i onClick={() => updateHoliday()} className="fa fa-check"></i>
                }
            </td>
        </tr>
    );
}

export default HolidayRow;
