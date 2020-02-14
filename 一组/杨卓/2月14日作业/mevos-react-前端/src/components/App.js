import React,{Component} from 'react';
import Router from "../router/index"
import "./App.css"
class App extends Component{
    constructor(){
        super();
        this.state = {

        };
    }
    handleClick = ()=>{
        
    }
    render(){
        return (
            <div className="app">
				<Router></Router>
            </div>
        )
    }
}

export default App;

