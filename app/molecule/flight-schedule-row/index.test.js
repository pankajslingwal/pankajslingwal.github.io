import React from 'react';
import renderer from 'react-test-renderer';
import FlightScheduleTableRow from './';


describe("Flight Schedule Row", () => {

    it('renders correctly', () => {
        const tree = renderer.create(<FlightScheduleTableRow />).toJSON();
        expect(tree).toMatchSnapshot();
    }) 

});