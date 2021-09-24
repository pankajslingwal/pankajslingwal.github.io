import React, { Component } from 'react';
import './flight-schedule-row.scss';
import Indigo from '../../assets/Indigo.png';
import AI from '../../assets/AI.png';
import EK from '../../assets/EK.png';
import CTA from '../../atom/cta';

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
        <ul key={props.rowid} className={classes} tabindex="0" role="button" aria-label={`Flight ${props.flight} departs from ${props.from} at ${props.dtime} and arrives ${props.to} at ${props.atime}, total Flight duration is ${props.duration}.`}> 
            <li className="only-desktop"><span className="highlight">{props.dtime}</span> ({props.from})</li>
            <li className="only-desktop"><span className="highlight">{props.atime}</span> ({props.to})</li>
            <li className="only-mobile"><span className="highlight">{props.dtime} - {props.atime}</span></li>
            <li className="only-mobile"><span >{props.from} - {props.to}</span></li>
            <li className="only-mobile">{props.duration}</li>
            <li><span className="color-highlight icon "><img src={icon} alt="Logo" />{props.flight}</span></li>
            <li className="only-desktop">{props.duration}</li>
            <li>
                <CTA
                    title="Select Flight"
                    ariaLabel={`Select Flight number  ${props.flight}`}
                    disabled={props.selected} 
                    onCtaClicked={handleClick}
                />
            </li>
        </ul>
    );
}

export default FlightScheduleTableRow;