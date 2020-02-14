import React from "react"
import {BrowserRouter} from "react-router-dom"
import routes from "./routerconfig"
import RouterView from "./routerview"
function RootRouter(){
    return <BrowserRouter>
        <RouterView routes={routes}></RouterView>
    </BrowserRouter>
}
export default RootRouter;