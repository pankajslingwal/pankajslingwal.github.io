import React from 'react';

const Image = (props) => {

    return (
        <img src={props.source} alt={props.alt} />
    );
}

export default Image;