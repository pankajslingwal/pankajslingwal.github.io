import React from 'react';
import ReactDOM from 'react-dom';
import FlightScheduleTable from './organism/flight-schedule-table';
import WithData from './hoc/withData';
import './core-style/grid.scss';

const FlightScheduleWithData = WithData(FlightScheduleTable);

ReactDOM.render(<FlightScheduleWithData />, document.getElementById('root')); 