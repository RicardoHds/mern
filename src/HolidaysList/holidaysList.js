import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HolidayRow from './holidayRow';

const HolidaysList = () => {
  const [holidaysList, setHolidaysList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:4000/api/holidays/').then(holidays => {
      if (holidays && holidays.data) {
        if (holidays.data[0]) {
          setHolidaysList(holidays.data[0].holidays);
        } else {
          Axios.get('http://nolaborables.com.ar/api/v2/feriados/2020')
            .then(res => {
              const persons = res.data;
              Axios.post('http://localhost:4000/api/holidays/save-holidays', persons).then(response => {
              })
            });
        }
      }
    })
  }, []);


  return (
    <div className="container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Dia</th>
            <th>Mes</th>
            <th>Motivo</th>
            <th>Tipo</th>
            <th>Info</th>
            <th></th>
          </tr>
        </thead>
        {holidaysList.map((holiday, i) => {
          return (
            <tbody key={i}>
              <HolidayRow holiday={holiday} />
            </tbody>
          )
        })}
      </Table>
    </div>
  );
}

export default HolidaysList;
