import httpAxios from '../utils/requset.js'
//添加知识库
export const addkonw  = (params)=> httpAxios.post('/api/konw/add',params);
//查询知识库
export const konwlist  = (params)=> httpAxios.get('/api/konw/list',{params});
//删除知识库
export const konwdel  = (params)=> httpAxios.get('/api/konw/del',{params});
//编辑知识库
export const konwupdate  = (params)=> httpAxios.post('/api/konw/update',params);