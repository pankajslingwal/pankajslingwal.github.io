import React, { Component } from 'react';
import './flight-schedule-row.scss';
import Indigo from '../../assets/Indigo.png';
import AI from '../../assets/AI.png';
import EK from '../../assets/EK.png';
import CTA from '../../atom/cta';
import Image from '../../atom/image';

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

    const highlight = props.selected ? 'selected-row' : '';
    const classes = `schedule-row ${highlight}`;

    return (
        <ul key={props.rowid} data-testid={`schedule-row-${props.index}`} className={classes} tabIndex="0" role="button" aria-label={`Flight ${props.flight} departs from ${props.from} at ${props.dtime} and arrives ${props.to} at ${props.atime}, total Flight duration is ${props.duration}.`}> 
            <li className="only-desktop"><span className="highlight">{props.dtime}</span> ({props.from})</li>
            <li className="only-desktop"><span className="highlight">{props.atime}</span> ({props.to})</li>
            <li className="only-mobile"><span className="highlight">{props.dtime} - {props.atime}</span></li>
            <li className="only-mobile"><span >{props.from} - {props.to}</span></li>
            <li className="only-mobile">{props.duration}</li>
            <li><span className="color-highlight icon ">
                    <Image
                        source={icon}
                        alt={`Flight ${props.flight} logo`}
                    />
                    {props.flight}
                </span></li>
            <li className="only-desktop">{props.duration}</li>
            <li>
                <CTA
                    title="Select Flight"
                    ariaLabel={`Select Flight number ${props.flight}`}
                    disabled={props.selected} 
                    onCtaClicked={handleClick}
                    tooltip={`Select Flight number ${props.flight}`}
                />
            </li>
        </ul>
    );
}

export default FlightScheduleTableRow;