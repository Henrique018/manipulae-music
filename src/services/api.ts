import axios from 'axios';

export const api = axios.create({
	baseURL: 'https://musicsioproxy.herokuapp.com/https://api.deezer.com'
});
