import React from 'react';
import renderer from 'react-test-renderer';
import CTA from './';


describe("CTA", () => {

    it('renders correctly', () => {
        const tree = renderer.create(<CTA />).toJSON();
        expect(tree).toMatchSnapshot();
    }) 

});