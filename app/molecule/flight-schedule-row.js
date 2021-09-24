import React, { Component } from 'react';
import './flight-schedule-row.scss';
import Indigo from '../assets/Indigo.png';
import AI from '../assets/AI.png';
import EK from '../assets/EK.png';
import CTA from '../atom/cta';

// const FlightScheduleTableRow = (props) => {

//     let icon;
//     switch(props.acode) {
//         case 'Indigo':
//           icon = Indigo;
//           break;
//         case 'EK':
//             icon = EK;
//           break;
//         case 'AI':
//             icon = AI;
//           break;
//         default:
//             icon = AI;
//       }

//     return (
//         <ul key="{props.key}" className="schedule-row">
//             <li><span className="color-highlight">{props.dtime}</span> ({props.from})</li>
//             <li><span className="color-highlight">{props.atime}</span> ({props.to})</li>
//             <li><span className="color-highlight icon"><img src={icon} alt="Logo" />{props.flight}</span></li>
//             <li>3h 30m</li>
//             <li><button onClick={props.onRowClicked}>Select Flight</button></li>
//         </ul>
//     );
// }

// export default FlightScheduleTableRow;


class FlightScheduleTableRow extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
        this.props.onRowClicked(this.props.flight);
    }

    render() {

        let icon;
        switch (this.props.acode) {
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

        let highlight = this.props.selected ? 'selected-row' : '';
        let classes = `schedule-row ${highlight}`;

        return (
            <ul key={this.props.rowid} className={classes}> 
                <li className="desktop"><span className="highlight">{this.props.dtime}</span> ({this.props.from})</li>
                <li className="desktop"><span className="highlight">{this.props.atime}</span> ({this.props.to})</li>
                <li className="mobile"><span className="highlight">{this.props.dtime} - {this.props.atime}</span></li>
                <li className="mobile"><span >{this.props.from} - {this.props.to}</span></li>
                <li className="mobile">3h 30m</li>
                <li className=""><span className="color-highlight icon "><img src={icon} alt="Logo" />{this.props.flight}</span></li>
                <li className="desktop">3h 30m</li>
                <li>
                    <CTA
                        title="Select Flight" 
                        disabled={this.props.selected} 
                        onCtaClicked={this.handleClick}
                    />
                </li>
            </ul>
        );
    }
}

export default FlightScheduleTableRow;