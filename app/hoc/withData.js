import React, { Component } from 'react';

const WithData = (WrappedComponent) => {
    return class extends Component {
        render() {
            // Wraps the input component in a container, without mutating it.
            return <WrappedComponent {...this.props} />;
        }
    }
}

export default WithData;