import React, { Component } from 'react'
import { Button, Table  } from 'antd';
import "antd/dist/antd.css"
import httpAxios from "../../utils/reques"
export default class Home extends Component {
    state = {
        list:[],
        flag:false
    }
    render() {
        let {list,flag}=this.state;
        const columns = [
            {
                title: 'name',
                dataIndex: 'name'
            },
            {
                title: 'phone',
                dataIndex: 'phone',
            },
            {
                title: 'label',
                dataIndex: 'label',
            },
            {
                title: 'role',
                dataIndex: 'role',
            },
            {
                title: 'card',
                dataIndex: 'card',
            },
            {
                title: 'address',
                dataIndex: 'address',
            },
            {
                title: 'followup',
                dataIndex: 'followup',
            },
            {
                title: 'time',
                dataIndex: 'time',
            },
            {
                title: 'action',
                dataIndex: 'action',
                render: () =><>
                 <Button>查看</Button>
                 &nbsp;&nbsp;
                 <Button type="primary">编辑</Button>
                 &nbsp;&nbsp;
                 <Button type="danger" onClick={()=>{this.deluser()}}>删除</Button>
                 </>,
            }
        ];
        list.map(item => item.key= item.id)
        const data = list;
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };
        return (
            <div className='home-'>
                <div className='home-page'>
                    {/*首页 头部 */}
                    <div className='home-head'>
                        <div>
                            <h3>数据管理中心————用户数据管理</h3>
                        </div>
                        <div>
                            <span onClick={()=>{this.adduser()}}>添加用户</span>
                            <span>删除用户</span>
                        </div>
                    </div>
                    {/* 首页表格 */}
                    <div className='home-main'>
                        <div>
                            <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
                        </div>
                    </div>
                </div>
                {
                    flag&&<div className='flag'>
                    <span className='del-mark' onClick={()=>{this.delMark()}}>X</span>
                </div> 
                }   
            </div>
        )
    }
    async componentDidMount(){
        let res = await httpAxios.get('/getall');
        console.log(res);
        if(res.data.code == 1){
            this.setState({
                list:res.data.data
            })
        }
    }
    adduser=()=>{//打开遮罩
        this.setState({
            flag:true
        })
    }
    delMark=()=>{//关闭遮罩
        this.setState({
            flag:false
        })
    }
    deluser=(id)=>{//删除该用户
        // console.log(id,"EEEEEEEE");
        
    }
}
