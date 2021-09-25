import React from 'react';
import renderer from 'react-test-renderer';
import FlightScheduleTable from './';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";


describe("Flight Schedule Table", () => {

    it('renders correctly', () => {
        const tree = renderer.create(<FlightScheduleTable />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('After row selected, Select Flight button disables and row is highlighted', () => {
        render(<FlightScheduleTable />);
        userEvent.click(screen.getAllByText("Select Flight")[0]);

        const btn = screen.getAllByText("Select Flight")[0];
        const row = screen.getAllByRole("button")[0];
        
        expect(btn.className).toBe("disabled");
        expect(row.className).toContain("schedule-row selected-row");
    });

    it('After another row selected, Select Flight button disables and row is highlighted and revert previous row', () => {
        render(<FlightScheduleTable />);
        
        //Click of 1st row button
        userEvent.click(screen.getAllByText("Select Flight")[0]);

        const btn1 = screen.getAllByText("Select Flight")[0];
        const row1 = screen.getByTestId("schedule-row-0");
        
        //1st row button to be disabled and row highlighted
        expect(btn1.className).toBe("disabled");
        expect(row1.className).toContain("schedule-row selected-row");

        const btn2 = screen.getAllByText("Select Flight")[1];
        const row2 = screen.getByTestId("schedule-row-1");
        
        //2nd row button to be enabled and row not highlighted
        expect(btn2.className).toBe("");
        expect(row2.className.trim()).toBe("schedule-row");

        //After click of 2nd row button
        userEvent.click(screen.getAllByText("Select Flight")[1]);

        //1st row button to be enabled and row not highlighted
        expect(btn1.className).toBe("");
        expect(row1.className).toContain("schedule-row");

        //2nd row button to be disabled and row highlighted
        expect(btn2.className).toBe("disabled");
        expect(row2.className.trim()).toBe("schedule-row selected-row");
    });

});