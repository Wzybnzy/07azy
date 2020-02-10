import httpAxios from '../untis/request'

export const login = (params)=>httpAxios.post('/api/login',params);
export const register = (params)=>httpAxios.post('/api/register',params);

export const addknow =(params)=>httpAxios.post('/api/know/add',params);
export const updateknow=(params)=>httpAxios.post('/api/know/update',params);
export const delknow=(params)=>httpAxios.get('/api/know/del',{params});
export const listknow=(params)=>httpAxios.get('/api/know/list',{params});

export const addfile =(params)=>httpAxios.post('/api/file/add',params);
export const updatefile=(params)=>httpAxios.post('/api/file/update',params);
export const delfile=(params)=>httpAxios.get('/api/file/del',{params});
export const listfile=(params)=>httpAxios.get('/api/file/list',{params});
export const searchfile=(params)=>httpAxios.get('/api/file/search',{params});
export const detailfile=(params)=>httpAxios.get('/api/file/detail',{params});