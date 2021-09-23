import React, { Component } from 'react';
import FlightScheduleTableRow from '../molecule/flight-schedule-row';
import mock from '../mock/flight-schedule.json';
//TODO: Mock Below api call with jest

class FlightScheduleTable extends Component {

  render() {
    return (
      <div className="fs-table">
        <div className="fs-body">
          Flight Schedule Table
          {mock.map((flight) => (
              <FlightScheduleTableRow
                flight={flight.flight}
                from={flight.from}
                to={flight.to}
                depart-time={flight.dtime}
                arrival-time={flight.atime}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default FlightScheduleTable;