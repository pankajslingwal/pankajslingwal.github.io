import React from 'react';
import renderer from 'react-test-renderer';
import FlightScheduleTableRow from './';

describe("Flight Schedule Row", () => {

    it('renders correctly, no data passed', () => {
        const tree = renderer.create(<FlightScheduleTableRow />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly, data passed, selected is true', () => {
        const props = {
            key:"Emirates (EK512)",
            rowid:"Emirates (EK512)",
            flight:"Emirates (EK512)",
            from:"DXB",
            to:"BOM",
            dtime:"12:10",
            atime:"13:15",
            acode:"EK",
            duration:"5 hours 30 minutes",
            onRowClicked:jest.fn(),
            selected:true
          };

        const tree = renderer.create(<FlightScheduleTableRow {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly, data passed, selected is false', () => {
        const props = {
            key:"Emirates (EK512)",
            rowid:"Emirates (EK512)",
            flight:"Emirates (EK512)",
            from:"DXB",
            to:"BOM",
            dtime:"12:10",
            atime:"13:15",
            acode:"EK",
            duration:"5 hours 30 minutes",
            onRowClicked:jest.fn(),
            selected:false
          };

        const tree = renderer.create(<FlightScheduleTableRow {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});