import httpAxios from "../utils/request.js";
// 登录注册
export const login=(params)=>httpAxios.post("/api/login",params);

export const registry=(params)=>httpAxios.post("/api/registry",params);
// 知识库
export const list=(params)=>httpAxios.get("/api/know/list",{params});
export const addknow=(params)=>httpAxios.post("/api/know/add",params);
export const delknow=(params)=>httpAxios.get("/api/know/del",{params});

export const updateknow=(params)=>httpAxios.post("/api/know/update",params);

// 文件
export const filelist=(params)=>httpAxios.get("/api/file/list",{params});
export const addfile=(params)=>httpAxios.post("/api/file/add",params);
export const delfile=(params)=>httpAxios.get("/api/file/del",{params});