import React from 'react';
import renderer from 'react-test-renderer';
import Image from './';


describe("Image", () => {

    it('renders correctly', () => {
        const tree = renderer.create(<Image />).toJSON();
        expect(tree).toMatchSnapshot();
    }) 

});