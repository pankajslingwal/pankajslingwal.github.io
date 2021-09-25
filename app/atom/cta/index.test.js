import React from 'react';
import renderer from 'react-test-renderer';
import CTA from './';


describe("CTA", () => {

    it('renders correctly, no data passed', () => {
        const tree = renderer.create(<CTA />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly, data passed, disabled is true', () => {
        const props = {
            title:"Select Flight",
            ariaLabel:"Select Flight number EK 512",
            disabled:true,
            onCtaClicked:jest.fn(),
            tooltip:"Select Flight number EK 512"
        };

        const tree = renderer.create(<CTA {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly, data passed, disabled is false', () => {
        const props = {
            title:"Select Flight",
            ariaLabel:"Select Flight number EK 512",
            disabled:false,
            onCtaClicked:jest.fn(),
            tooltip:"Select Flight number EK 512"
        };

        const tree = renderer.create(<CTA {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});