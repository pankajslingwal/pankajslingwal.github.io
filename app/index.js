import React from 'react';
import ReactDOM from 'react-dom';
import FlightScheduleTable from './organism/flight-schedule-table';

import './core-style/grid.scss';
import './core-style/breakpoint.scss';
import './core-style/variables.scss';

ReactDOM.render(<FlightScheduleTable />, document.getElementById('root'));