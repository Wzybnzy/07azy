import React, { Component } from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'

function RouterView(props){
    let {router} =props

    let componentarr=router.filter(item=>item.component)
    let toarr=router.filter(item=>item.to).map((item,index)=>{
        return <Redirect to={item.to} key={index}></Redirect>
    })

    return (
        <Switch>
            {
                componentarr&&componentarr.map((item,index)=>{
                    return (
                        <Route path={item.path} key={index} render={(props)=>{
                            return <item.component {...props} child={item.children}></item.component>
                        }}></Route>
                    )
                }).concat(toarr)
            }


        </Switch>
    )
}

export default RouterView