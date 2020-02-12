import React from "react"
import {Route,Switch,Redirect} from "react-router-dom"

function RouterView(props){
    let {routes}=props
    let routerArr=routes&&routes.filter(item=>!item.to)
    let redirectArr=routes&&routes.filter(item=>item.to)
    return <Switch>
        {
            routerArr&&routerArr.map((item,index)=><Route key={index} path={item.path} render={(props)=>{
                return <item.component {...props} child={item.children}></item.component>
            }}></Route>)
        }
        {
            redirectArr&&redirectArr.map((item,index)=><Redirect key={index} path={item.path} to={item.to}></Redirect>)
        }
    </Switch>
}
export default RouterView