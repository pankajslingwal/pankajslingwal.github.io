import React from 'react';
import PropTypes from 'prop-types';

/**
 * Image component renders image with specified source and alt.
 */
const Image = (props) => {

    return (
        <img src={props.source} alt={props.alt} />
    );
}

Image.propTypes = {
    /** image source */
    source: PropTypes.string,
    /** alt text for screen readers and SEO */
    alt: PropTypes.string
  };

export default Image;