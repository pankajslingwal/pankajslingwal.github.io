import React from 'react';

const CTA = (props) => {

    const handleClick = () => {
        props.onCtaClicked();
    }

    return (
        <button className={props.disabled ? 'disabled' : ''} onClick={handleClick} aria-pressed={props.disabled} aria-label={props.ariaLabel}>{props.title}</button>
        //disabled={props.disabled}, not used as a11y annoucement is skipped for disabled buttons
    );
}

export default CTA;