import React, { Component } from 'react';
import axios from 'axios';
export class Registry extends Component {
    state={
        name:'',
        pwd:''
    }
    render() {
        let {name,pwd}=this;
        return (
            <div className='login'>
                <div className='loginbox'>
                    
                  <p>用户名：<input type="text" value={name} name='name' onChange={this.handleChange.bind(this)}/></p>
                  <p>密码：<input type="text" value={pwd} name='pwd' onChange={this.handleChange.bind(this)}/></p> 
                  <p><button onClick={this.handleSubmit.bind(this)}>注册</button></p>
                </div>
            </div>
        );
    }
    handleChange(e){
      let name=e.target.name;
      this.setState({
          [name]:e.target.value
      })
    }
    async handleSubmit(){
        let {name,pwd}=this.state;
        let res=await axios.post('/registry',{name,pwd});
        if(res.data.code==1){
            this.props.history.push('/login');
        }else if(res.data.code==2){
            console.log(res.data.msg)
            this.props.history.push('/registry')
        }else if(res.data.code==3){
            console.log(res.data.msg)
        }else{
            console.log(res.data.msg)
        }
    }
}

export default Registry;
