import React from 'react';
import PropTypes from 'prop-types';

/**
 * CTA component renders button[type='submit'].
 */
const CTA = (props) => {

    return (
        <button type="submit" title={props.tooltip} className={props.disabled ? 'disabled' : ''} onClick={props.onCtaClicked} aria-pressed={props.disabled} aria-label={props.ariaLabel}>{props.title}</button>
        //disabled={props.disabled}, not used as a11y annoucement is skipped for disabled buttons
    );
}

CTA.propTypes = {
    /** title of button */
    title: PropTypes.string,
    /** if 'true' button will display disabled and won't click */
    disabled: PropTypes.bool,
    /** text to be announced on screen readers */
    ariaLabel: PropTypes.string,
    /** tooltip to be shown on mouse hover */
    tooltip: PropTypes.string,
    /** parent function where click event will be passed */
    onCtaClicked: PropTypes.func
  };

export default CTA;