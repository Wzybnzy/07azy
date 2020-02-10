const routes = [
    {
        path:"/",
        redirect:"/login"
    },
    {
        path:"/login",
        component:()=>import("../views/login/login.vue")
    },
    {
        path:"/register",
        component:()=>import("../views/register/register.vue")
    },
    {
        path:"/home",
        component:()=>import("../views/home/home.vue")
    },
]
export default routes;