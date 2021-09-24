import React from 'react';

const CTA = (props) => {

    const handleClick = () => {
        props.onCtaClicked();
    }

    return (
        <button disabled={props.disabled} onClick={handleClick}>{props.title}</button>
    );
}

export default CTA;