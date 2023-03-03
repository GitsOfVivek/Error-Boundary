import React, { useState } from 'react';

const Component = ({ error }) => {
	// const [error, setError] = useState(false);

	return <>{error && <div>{somethingNotDefined}</div>}</>;
};

export default Component;
