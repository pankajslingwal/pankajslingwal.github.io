import React, { Component } from 'react';
import FlightScheduleTableRow from '../molecule/flight-schedule-row';
import './flight-schedule-table.scss'
import mock from '../mock/flight-schedule.json';
//TODO: Mock Below api call with jest

class FlightScheduleTable extends Component {

  handleRowClicked = row => {
    console.log('Pankaj')
    // const updatedData = data.map(item => {
    //   if (row.id !== item.id) {
    //     return item;
    //   }

    //   return {
    //     ...item,
    //     toggleSelected: !item.toggleSelected
    //   };
    // });

    // setData(updatedData);
    
  };

  render() {
    return (
      <div className="content">
        
          Flight Schedule Table
          <ul className="schedule-header">
            <li className="depart">Depart</li>
            <li className="arrive">Arrive</li>
            <li className="flight">Flight</li>
            <li className="duration">Total Duration</li>
        </ul>
          {mock.map((flight) => (
              <FlightScheduleTableRow
                key={flight.flight}
                flight={flight.flight}
                from={flight.from}
                to={flight.to}
                dtime={flight.dtime}
                atime={flight.atime}
                acode={flight.acode}
                onRowClicked={this.handleRowClicked}
              />
            ))}
        </div>
    );
  }
}

export default FlightScheduleTable;