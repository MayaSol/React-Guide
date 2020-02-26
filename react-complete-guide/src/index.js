import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import Test from './Test';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App appTitle = "Person Managment" />, document.getElementById('root'));
ReactDOM.render(<Test />, document.getElementById('test'));
registerServiceWorker();
