import React, { Component } from 'react';
import FlightScheduleTableRow from '../molecule/flight-schedule-row';
import './flight-schedule-table.scss'
import mock from '../mock/flight-schedule.json';
//TODO: Mock Below api call with jest

class FlightScheduleTable extends Component {

  render() {
    return (
      <div className="fs-table">
        <div className="fs-body">
          Flight Schedule Table
          <ul className="schedule-header">
            <li className="depart">Depart</li>
            <li className="arrive">Arrive</li>
            <li className="flight">Flight</li>
            <li className="duration">Total Duration</li>
        </ul>
          {mock.map((flight) => (
              <FlightScheduleTableRow
                flight={flight.flight}
                from={flight.from}
                to={flight.to}
                dtime={flight.dtime}
                atime={flight.atime}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default FlightScheduleTable;