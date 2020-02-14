import React, { Component } from 'react'
import { Table, Button, Modal, Input, Select, Tag } from 'antd';
import "../../../node_modules/antd/dist/antd.css"
import axios from "axios"
let { Option } = Select
export default class Home extends Component {
    state = {
        list: [],
        visible: false,
        phone: "",
        name: '',
        card: '',
        address: '',
        label: '',
        role: '',
        followup: '',
        total: 1,
        pageSize: 5,
        arr: [
            {
                val: 'v0',
                txt: '超级管理员'
            },
            {
                val: 'v1',
                txt: '管理员'
            },
            {
                val: 'v2',
                txt: '访客'
            }
        ]

    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = async e => {
        console.log(e);
        let { phone, name, address, card, role, followup, label } = this.state
        this.setState({
            visible: false,
        });
        let res = await axios.post("/addlist", {
            phone, name, address, card, role, followup, label
        })
        if (res.data.code == 1) {
            alert("添加成功")
            this.getlist()
        }
    };
    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    render() {
        let { list, total, pageSize,arr } = this.state;
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
                render: () => <>
                    <Button type="primary">查看</Button>
                    <Button type="primary">编辑</Button>
                    <Button type="danger">删除</Button>
                </>,
            }
        ];
        list.map(item => item.key = item.id)
        const data = list
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
                <Button type="primary" onClick={this.showModal}>添加用户</Button>
                <Button type="danger">删除用户</Button>
                <Table rowSelection={rowSelection} columns={columns} dataSource={data}
                    pagination={{ total, pageSize }}
                    onChange={this.handlePage.bind(this)}
                />
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >

                    <Input placeholder="请输姓名" name="name" onChange={this.handleInput.bind(this)} />
                    <Input placeholder="请输电话" name="phone" onChange={this.handleInput.bind(this)} />
                    <Input placeholder="请输入身分" name="label" onChange={this.handleInput.bind(this)} />
                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleSelect.bind(this)}>
                       {
                           arr&&arr.map((item,index)=><Option value={item.val} key={index}>
                               {item.txt}
                           </Option> )
                       } 
                    </Select>
                    <Input placeholder="请输入role" name="role" onChange={this.handleInput.bind(this)} />

                    <Input placeholder="请输入身份证" name="card" onChange={this.handleInput.bind(this)} />
                    <Input placeholder="请输入地址" name="address" onChange={this.handleInput.bind(this)} />
                    <Input placeholder="请输入followup" name="followup" onChange={this.handleInput.bind(this)} />
                </Modal>
            </div>
        )

    }
    handleInput(e) {
        let name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    }
    handleSelect(value){
       this.setState({
           role:value
       })
    }
    componentDidMount() {
        this.getlist();
    }
    async getlist() {
        let res = await axios.get('/getlist');
        console.log(res);
        if (res.data.code == 1) {
            this.setState({
                list: res.data.data,
                total: res.data.total
            })
        }
    }
    async handlePage(page) {
        let { current, pageSize } = page;
        let res = await axios.get('/getlist?page=' + current + '&limit' + pageSize)
        if (res.data.code == 1) {
            this.setState({
                list: res.data.data
            })
        }
    }

}
