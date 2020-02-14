import React, { Component } from 'react'
import httpAxios from '../utils/request.js';
import { Button, Table, Modal, Input, Select, Tag, Tooltip } from 'antd';

const { Option } = Select;
export default class Home extends Component {
  state = {
    list: [],
    total: 1,
    pageSize: 5,
    visible: false,
    SelArr: [
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
    name: '',
    phone: '',
    card: '',
    address: '',
    lable: '',
    followup: '',
    role: '',
    tags: [],
    tagesArr: ['上海', '北京', '天津', '重庆', '广东'],
    inputVisible: false,
    inputValue: '',
  }
  render() {
    let { list, total, pageSize, SelArr, phone, name, card, address, followup, tags, tagesArr } = this.state;

    const columns = [
      {
        title: 'name',
        dataIndex: 'name',

      },
      {
        title: 'phone',
        dataIndex: 'phone',
      },
      {
        title: 'lable',
        dataIndex: 'lable',
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
        render: (text, record, index) => {
          return (//v0 删除，编辑，查看  v1查看 编辑 v2查看
            <>
              {

                record.role == 'v0' ? <Button type="danger">删除</Button> : null
              }
              {
                record.role == 'v1' || record.role == 'v0' ? <Button type="primary">编辑</Button> : null
              }
              <Button type="primary">查看</Button>
            </>
          )

        }
      },
    ];
    list.map((item => item.key = item.id));
    const data = list
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
      <div className="home">
        <div className="header">
          <Button type="primary" onClick={this.showModal.bind(this)}>添加用户</Button>
          <Button type="danger">删除用户</Button>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={{ total, pageSize }}
          onChange={this.handleTotal.bind(this)}
        />
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input placeholder="请输入手机号" name='phone' onChange={this.ChangeInput.bind(this)} />
          <Input placeholder="请输入用户名称" name='name' onChange={this.ChangeInput.bind(this)} />
          <Input placeholder="请输入身份证号" name='card' onChange={this.ChangeInput.bind(this)} />
          <Select defaultValue="v0" style={{ width: 120 }} onChange={this.handleChange.bind(this)}>
            {
                SelArr &&SelArr.map((item, index) => <Option value={item.val} key={index}>{item.txt}</Option>)
            }
          </Select>
          <Input placeholder="请输入公司地址" name='address' onChange={this.ChangeInput.bind(this)} />
          <Input placeholder="请输入跟进" name='followup' onChange={this.ChangeInput.bind(this)} />
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
              tagesArr.map((item, index) => <Tag color="magenta" key={index} onClick={this.ClickTags}>{item}</Tag>)
            }
          </div>
        </Modal>
      </div>
    )
  }
  ClickTags = (e) => {
    let txt = e.target.innerHTML;
    let { tags } = this.state;
    let ind = tags.findIndex(item => item == txt);
    if (ind == -1) {
      tags.push(txt);
      this.setState({
        tags
      })
    }
  }
  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
  };
  ChangeInput(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    })
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleChange(value) {
 
    this.setState({
role:value
    })
    console.log(`selected ${value}`);
  }
  handleOk = async e => {
    console.log(e);
    let { phone, name, card, address, followup, role, tags } = this.state;
    // console.log(phone, name, card, address, followup, role, tags)
    this.setState({
      visible: false,
    });
    let res = await httpAxios.post('/addlist', {
      name, phone, card, address, lable: tags.join(','), followup, role
    })
    if (res.data.code == 1) {
      // console.log(res)
      this.getlist()
    } else {
      alert(res.data.mes)
    }
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  componentDidMount() {

    this.getlist();

  }
  async getlist() {
    let res = await httpAxios.get('/getlist');
    if (res.data.code == 1) {
      this.setState({
        list: res.data.data,
        total: res.data.total
      })
    }

  }
  //点击页面切换（分页）
  async handleTotal(page) {
    console.log(page)
    //当前页数current
    let { current, pageSize } = page;
    //发送请求，请求下一页的数据
    let res = await httpAxios.get('/getlist?page=' + current + '&limit' + pageSize)
    if (res.data.code == 1) {
      this.setState({
        list: res.data.data
      })
    }
  }
}
