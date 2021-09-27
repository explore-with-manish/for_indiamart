import React, { Component } from 'react';

class ErrorHandler extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    render() {
        if (this.state.hasError) {
            var img500 = require('../../assets/http-500.jpg').default;
            return (
                <div className="text-center">
                    <h2 className="text-danger">Something went wrong, please contact admin</h2>
                    <img className="rounded" src={img500} alt="Internal Server Error" />
                </div>
            );
        } else {
            return this.props.children || <h2 className="text-warning">No Component to Render.</h2>
        }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, info) {
        // You can also log the error to an error reporting service
    }
}

export default ErrorHandler;