import React, { Component } from 'react'
import { Button, Table, Modal, Input, Select, Tag, Tooltip, } from 'antd'; 
import httpAxios from '../utils/request'

const { Option } = Select;
export default class Home extends Component {
    state = {
        list: [],
        total: 1,
        pageSize: 5,
        selArr: [
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
        ],
        visible: false,
        phone: "",
        name: '',
        card: '',
        address: '',
        label: '',
        followup: '',
        role: '',
        tags: [],
        tagsArr: ['医生', '护士', '经理', '总经理', '讲师', '教授', '八维']
    }
    render() {
        let { list, total, pageSize, selArr, tags, tagsArr } = this.state;
        const columns = [
            {
                title: '名称',
                dataIndex: 'name'
            },
            {
                title: '电话号',
                dataIndex: 'phone',
            },
            {
                title: '标签',
                dataIndex: 'label',
            },
            {
                title: '角色',
                dataIndex: 'role',
            },
            {
                title: '身份',
                dataIndex: 'card',
            },
            {
                title:"跟进" ,
                dataIndex: 'address',
            },
            {
                title: '后续行动',
                dataIndex: 'followup',
            },
            {
                title: '时间',
                dataIndex: 'time',
            },
            {
                title: '设置',
                dataIndex: 'action',
                render: (text, record, index) => {    
                    return <>
                        {
                            record.role == 'v0' ? <Button type="danger">删除</Button> : null
                        }
                        {
                            record.role == 'v1' || record.role == 'v0' ? <Button type="primary">编辑</Button> : null
                        } 
                        <Button type="primary">查看</Button>
                    </>
                },
            }
        ];
        list.map(item => item.key = item.id)
        const data = list;
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
                <Table
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={data}
                    pagination={{ total, pageSize }}
                    onChange={this.handleChangePagination.bind(this)}
                />
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                > 

                    <Input placeholder="请输入手机号" name="phone" onChange={this.handleInputChange.bind(this)} />
                    <Input placeholder="请输入用户名称" name="name" onChange={this.handleInputChange.bind(this)} />
                    <Input placeholder="请输入身份证" name="card" onChange={this.handleInputChange.bind(this)} />
                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleSelChange.bind(this)}>
                        {
                            selArr && selArr.map((item, index) => <Option value={item.val} key={index}>{item.txt}</Option>)
                        }
                    </Select>
                    <Input placeholder="请输入公司地址" name="address" onChange={this.handleInputChange.bind(this)} />
                    <Input placeholder="请输入跟进" name="followup" onChange={this.handleInputChange.bind(this)} />
                    <h3>标签:</h3>
                    {tags.map((tag, index) => {
                        const isLongTag = tag.length > 20;
                        const tagElem = (
                            <Tag key={tag} closable onClose={() => this.handleClose(tag)}>
                                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                            </Tag>
                        );
                        return isLongTag ? (
                            <Tooltip title={tag} key={tag}>
                                {tagElem}
                            </Tooltip>
                        ) : (
                                tagElem
                            );
                    })}
                    <div>
                        {
                            tagsArr && tagsArr.map((item, index) =>
                                <Tag color="magenta" key={index} onClick={this.handleClickTags}>{item}</Tag>)
                        }
                    </div> 
                </Modal>
            </div>
        )
    }
    handleClickTags = (e) => { 
        console.log(e.target.innerHTML)
        let txt = e.target.innerHTML;
        let { tags } = this.state; 
        let ind = tags.findIndex(item => item == txt);
        if (ind == -1) {
            tags.push(txt);
            this.setState({ tags })
        }
    }
    handleClose = removedTag => {
        const tags = this.state.tags.filter(tag => tag !== removedTag);
        console.log(tags);
        this.setState({ tags });
    }

    handleInputChange(e) {  
        let name = e.target.name;
        this.setState({
            [name]: e.target.value
        })
    }
    handleSelChange(value) { 
        this.setState({
            role: value
        })
        console.log(value, 'select');
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = async e => {
        console.log(e);
        let { phone, card, address, name, role, followup, tags } = this.state;
        console.log(phone, card, address );
        this.setState({
            visible: false,
        });
        let res = await httpAxios.post('/addlist', {
            phone,
            card,
            address,
            name,
            role,
            followup,
            label: tags.join(',')
        });
        console.log(res)
        if (res.data.code == 1) {
            this.getlist(); 
        }
    }; 
    handleCancel = e => { 
        this.setState({
            visible: false,
        });
    };
    componentDidMount() {
        this.getlist();
    }
    async getlist() {
        let res = await httpAxios.get('/list');
        console.log(res);
        if (res.data.code == 1) {
            this.setState({
                list: res.data.data,
                total: res.data.total
            })
        }
    }
    async handleChangePagination(page) {
        console.log(page);
      
        let { current, pageSize } = page; 
        let res = await httpAxios.get('/list?page=' + current + '&limit=' + pageSize);
        console.log(res);
        
        if (res.data.code == 1) {
            this.setState({
                list: res.data.data
            })
        }
    }
}
