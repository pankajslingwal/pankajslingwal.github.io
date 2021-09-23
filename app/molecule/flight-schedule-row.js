// import React, { Component } from 'react';

// class FlightScheduleTableRow extends Component {
//   render() {
//     return (
//       <div className="fs-row">
//         Flight schedule Row
//       </div>
//     );
//   }
// }

// export default FlightScheduleTableRow;

import React from 'react';
import './flight-schedule-row.scss';

const FlightScheduleTableRow = (props) => {
    return (
        <ul className="schedule-row">
            <li>{props.flight}</li>
            <li>{props.from}</li>
            <li>{props.to}</li>
            <li>{props.dtime}</li>
            <li>{props.atime}</li>
        </ul>
    );
}

export default FlightScheduleTableRow;