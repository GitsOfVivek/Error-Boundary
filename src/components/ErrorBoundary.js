import React from 'react';

class ErrorBoundary extends React.Component {
	constructor() {
		super();
		this.state = {
			hasError: false,
		};
	}

	componentShouldCatch() {
		this.setState({
			hasError: true,
		});
	}

	render() {
		if (this.state.hasError) {
			return <p id="error">Error</p>;
		}
		return <>{this.props.children}</>;
	}
}
export default ErrorBoundary;
