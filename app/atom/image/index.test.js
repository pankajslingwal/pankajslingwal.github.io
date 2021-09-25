import React from 'react';
import renderer from 'react-test-renderer';
import Image from './';
import EK from '../../assets/EK.png';


describe("Image", () => {

    it('renders correctly, no data', () => {
        const tree = renderer.create(<Image />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly, data passed', () => {
        const props = {
            source:EK,
            alt:"Flight Air India (AI0234) logo"
        };

        const tree = renderer.create(<Image {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

});