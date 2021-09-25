import React, { Component } from 'react';

/**
 * Wrap any component that needs to fetch data.
 *
 * @param {Component} WrappedComponent The component to wrap and enhance.
 * @return {Component} The wrapped component.
 */
const WithData = (WrappedComponent) => {
    return class extends Component {
        render() {
            // Wraps the input component in a container, without mutating it.
            return <WrappedComponent {...this.props} />;
        }
    }
}

export default WithData;