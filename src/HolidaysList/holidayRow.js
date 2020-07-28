import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './holidayList.css';

const HolidayRow = (props) => {
    const { holiday } = props;
    const { dia, mes, motivo, tipo, info } = holiday;
    const [isEditing, setIsEditing] = useState(true);

    return (
        <tr>
            <td>
                <input disabled={isEditing} value={dia} />
            </td>
            <td>
                <input disabled={isEditing} value={mes} />
            </td>
            <td>
                <input disabled={isEditing} value={motivo} />
            </td>
            <td>
                <input disabled={isEditing} value={tipo} />
            </td>
            <td>
                <input disabled={isEditing} value={info} />
            </td>
            <td>
                {isEditing ?
                    <i onClick={() => setIsEditing(!isEditing)} className="fa fa-edit"></i>
                    :
                    <i onClick={() => setIsEditing(!isEditing)} className="fa fa-check"></i>
                }
            </td>
        </tr>
    );
}

export default HolidayRow;
