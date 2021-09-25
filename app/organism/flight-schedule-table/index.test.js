import React from 'react';
import renderer from 'react-test-renderer';
import FlightScheduleTable from './';


it('renders correctly', () => {
    const tree = renderer.create(
        <FlightScheduleTable />
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});