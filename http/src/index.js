import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://5eb410aa2b81f70016308069.mockapi.io/';
// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
	console.log(request);
	// Edit request config
	return request;
}, error => {
	console.log('axios.interceptors.request');
	console.log(error);
	return Promise.reject(error);
})

axios.interceptors.response.use(response => {
  console.log(response);
  // Edit request config
  return response;
}, error => {
	console.log('axios.interceptors.response');
	console.log(error);
	return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
