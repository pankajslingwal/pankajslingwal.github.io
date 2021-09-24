import React, { Component } from 'react';
import './flight-schedule-row.scss';
import Indigo from '../assets/Indigo.png';
import AI from '../assets/AI.png';
import EK from '../assets/EK.png';
import CTA from '../atom/cta';

const FlightScheduleTableRow = (props) => {

    const handleClick = () => {
        props.onRowClicked(props.flight);
    }

    let icon;
    switch (props.acode) {
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

    let highlight = props.selected ? 'selected-row' : '';
    let classes = `schedule-row ${highlight}`;

    return (
        <ul key={props.rowid} className={classes}> 
            <li className="only-desktop"><span className="highlight">{props.dtime}</span> ({props.from})</li>
            <li className="only-desktop"><span className="highlight">{props.atime}</span> ({props.to})</li>
            <li className="only-mobile"><span className="highlight">{props.dtime} - {props.atime}</span></li>
            <li className="only-mobile"><span >{props.from} - {props.to}</span></li>
            <li className="only-mobile">3h 30m</li>
            <li><span className="color-highlight icon "><img src={icon} alt="Logo" />{props.flight}</span></li>
            <li className="only-desktop">3h 30m</li>
            <li>
                <CTA
                    title="Select Flight" 
                    disabled={props.selected} 
                    onCtaClicked={handleClick}
                />
            </li>
        </ul>
    );
}

export default FlightScheduleTableRow;