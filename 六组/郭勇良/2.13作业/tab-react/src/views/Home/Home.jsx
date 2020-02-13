import React, { Component } from 'react'
import { Table, Button } from 'antd';
import axios from "axios"
export default class Home extends Component {
    state = {
        list:[]
    }
    render() {
        let {list} = this.state;
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
                 <Button type="primary">查看</Button>
                 <Button type="primary">编辑</Button>
                 <Button type="danger">删除</Button>
                 </>,
            }
        ];
        list.map(item=>item.key=item.id)
        const data=list
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', 
                name: record.name,
            }),
        };
        return (
            <div>
                <Button type="primary">添加用户</Button>
                <Button type="danger">删除用户</Button>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
            </div>
        )
        
    }
    async componentDidMount(){
        let res = await axios.get('/getlist');
        console.log(res);
        if(res.data.code == 1){
            this.setState({
                list:res.data.data
            })
        }
    }
}
