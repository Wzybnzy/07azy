import httpAxios from '../utils/request'

// 用户
export const login = (params) => httpAxios.post("/api/login", params)
export const register = (params) => httpAxios.post("/api/register", params)

// 知识库
export const knowList = (params) => httpAxios.get("/api/know/list", { params })
export const addKnow = (params) => httpAxios.post("/api/know/add", params)
export const delKnow = (params) => httpAxios.get("/api/know/del", { params })
export const updateKnow = (params) => httpAxios.post("/api/know/update", params)

// 文档
export const docList = (params) => httpAxios.get("/api/doc/list", { params })
export const addDoc = (params) => httpAxios.post("/api/doc/add", params)
export const delDoc = (params) => httpAxios.get("/api/doc/del", { params })
export const updateDoc = (params) => httpAxios.post("/api/doc/update", params)
export const searchDoc = (params) => httpAxios.get("/api/doc/search", { params })
