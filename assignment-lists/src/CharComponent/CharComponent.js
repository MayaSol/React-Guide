import React from 'react';
import './CharComponent.css';

const CharComponent = (props) => {

	return(
		<span className="CharComponent" onClick={props.click}>
			{props.char}
		</span>
	);

}

export default CharComponent;