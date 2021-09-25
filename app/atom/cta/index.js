import React from 'react';

const CTA = (props) => {

    return (
        <button type="submit" title={props.tooltip} className={props.disabled ? 'disabled' : ''} onClick={props.onCtaClicked} aria-pressed={props.disabled} aria-label={props.ariaLabel}>{props.title}</button>
        //disabled={props.disabled}, not used as a11y annoucement is skipped for disabled buttons
    );
}

export default CTA;