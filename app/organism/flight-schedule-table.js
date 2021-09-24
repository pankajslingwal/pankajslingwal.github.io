import React, { Component } from 'react';
import FlightScheduleTableRow from '../molecule/flight-schedule-row';
import './flight-schedule-table.scss'
import mock from '../mock/flight-schedule.json';
//TODO: Mock Below api call with jest

class FlightScheduleTable extends Component {

  state = {
    selected: '',
  };

  handleRowClicked = row => {
     this.setState(state => ({
      selected: row,
    }));
  };

  render() {
    return (
      <div className="content">
          Flight Schedule Table
          <ul className="schedule-header">
            <li>Depart</li>
            <li>Arrive</li>
            <li>Flight</li>
            <li>Total Duration</li>
            <li>&nbsp;</li>
        </ul>
          {mock.map((flight) => (
              <FlightScheduleTableRow
                key={flight.flight}
                rowid={flight.flight}
                flight={flight.flight}
                from={flight.from}
                to={flight.to}
                dtime={flight.dtime}
                atime={flight.atime}
                acode={flight.acode}
                onRowClicked={this.handleRowClicked}
                selected={this.state.selected != flight.flight ? false : true}
              />
            ))}
        </div>
    );
  }
}

export default FlightScheduleTable;