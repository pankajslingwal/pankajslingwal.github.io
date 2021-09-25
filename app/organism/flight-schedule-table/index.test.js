import React from 'react';
import renderer from 'react-test-renderer';
import FlightScheduleTable from './';


describe("Flight Schedule Table", () => {

    it('renders correctly', () => {
        const tree = renderer.create(<FlightScheduleTable />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});