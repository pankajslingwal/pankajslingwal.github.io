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
            <li><span className="color-highlight">{props.dtime}</span> ({props.from})</li>
            <li><span className="color-highlight">{props.atime}</span> ({props.to})</li>
            <li><span className="color-highlight">{props.flight}</span></li>
            <li>3h 30m</li>
           
            

            {/* <li><ul className="schedule-row"><li>{props.flight}</li><li>{props.from}</li><li>{props.to}</li></ul></li>
            <li><ul className="schedule-row"><li>{props.dtime}</li><li>{props.atime}</li></ul></li> */}
        </ul>
    );
}

export default FlightScheduleTableRow;