import React, { Component } from 'react';
import './flight-schedule-row.scss';
import Indigo from '../assets/Indigo.png';
import AI from '../assets/AI.png';
import EK from '../assets/EK.png';

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

    handleClick = () => {
        this.props.onRowClicked();
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

        return (
            <ul key={this.props.test} className="schedule-row">
                <li><span className="color-highlight">{this.props.dtime}</span> ({this.props.from})</li>
                <li><span className="color-highlight">{this.props.atime}</span> ({this.props.to})</li>
                <li><span className="color-highlight icon"><img src={icon} alt="Logo" />{this.props.flight}</span></li>
                <li>3h 30m</li>
                <li><button onClick={this.handleClick}>Select Flight</button></li>
            </ul>
        );
    }
}

export default FlightScheduleTableRow;