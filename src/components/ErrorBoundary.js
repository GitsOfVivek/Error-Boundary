import React from 'react';

class ErrorBoundary extends React.Component {
	constructor() {
		super();
		this.state = {
			hasError: false,
			err: '',
		};
	}

	componentDidCatch(err, errInfo) {
		this.setState({
			hasError: true,
			err: err,
		});
	}

	render() {
		if (this.state.hasError) {
			return <p id="error">{this.state.err}</p>;
		}
		return <>{this.props.children}</>;
	}
}
export default ErrorBoundary;
