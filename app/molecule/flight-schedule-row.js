import React from 'react';
import './flight-schedule-row.scss';
import Indigo from '../assets/Indigo.png';
import AI from '../assets/AI.png';
import EK from '../assets/EK.png';

const FlightScheduleTableRow = (props) => {

    let icon;
    switch(props.acode) {
        case 'Indigo':
          icon = Indigo;
          break;
        case 'EK':
            icon = EK;
          break;
        case 'AI':
            icon = AI;
          break;
        default:
            icon = AI;
      }

      function sayHello() {
        console.log('Hello!');
      }

    return (
        <ul key="{props.key}" className="schedule-row">
            <li><span className="color-highlight">{props.dtime}</span> ({props.from})</li>
            <li><span className="color-highlight">{props.atime}</span> ({props.to})</li>
            <li><span className="color-highlight icon"><img src={icon} alt="Logo" />{props.flight}</span></li>
            <li>3h 30m</li>
            <li><button onClick={sayHello}>Select Flight</button></li>
        </ul>
    );
}

export default FlightScheduleTableRow;