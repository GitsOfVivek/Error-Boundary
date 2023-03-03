import React, { useState } from 'react';
import '../styles/App.css';
import Component from './Component';
import ErrorBoundary from './ErrorBoundary';
const App = () => {
	const [error, setError] = useState(false);

	const errorGenerator = () => {
		setError(!error);
	};
	return (
		<div id="main">
			<h2>React Error Boundaries</h2>
			<ErrorBoundary>
				<Component error={error} />
			</ErrorBoundary>
			<button id="gen" onClick={errorGenerator}>
				Generate Error
			</button>
		</div>
	);
};

export default App;
