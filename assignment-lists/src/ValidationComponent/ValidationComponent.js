import React from 'react';
import './ValidationComponent.css';

const ValidationComponent = (props) => {
	let output = '';
	if (props.length >= 5) {
		output = 'Text long enough';
	}
	else {
		output = 'Text too short';
	}

	return (
		<p>
			{output}
		</p>
	);
}

export default ValidationComponent;