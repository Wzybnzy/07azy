import axios from '@/utils/request';

export const login = params => axios.post('/login', params);
export const registry = params => axios.post('/registry', params);
export const addknow = params => axios.post('/addknow', params);
export const getknow = () => axios.get('/getknow');
