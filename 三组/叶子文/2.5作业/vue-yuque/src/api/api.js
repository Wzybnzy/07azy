import httpAxios from '../utils/request'

// 用户
export const login = (params) => httpAxios.post("/api/login", params)
export const register = (params) => httpAxios.post("/api/register", params)

// 知识库
export const knowList = (params) => httpAxios.get("/api/know/list", { params })
export const addKnow = (params) => httpAxios.post("/api/know/add", params)
export const delKnow = (params) => httpAxios.get("/api/know/del", { params })
export const updateKnow = (params) => httpAxios.post("/api/know/update", params)
