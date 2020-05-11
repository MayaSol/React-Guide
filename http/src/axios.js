import axios from 'axios';

const instance = axios.create({
	baseURL: "https://5eb410aa2b81f70016308069.mockapi.io/"
});

export default instance;