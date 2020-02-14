import React, { Component } from 'react'
import httpAxios from '../../utils/request'
import { Button, Table, Modal, Input, Select, Tag } from 'antd'


export default class Home extends Component {
  state = {
    list: [],
    total: 0,
    num: 4,
    page: 1,
    visible: false,
    name: "",
    tel: "",
    cart: "",
    address: "",
    followup: "",
    role: "",
    roleList: [
      {
        text: "超级管理员",
        role: "v0"
      }, {
        text: "管理员",
        role: "v1"
      }, {
        text: "访客",
        role: "v2"
      }
    ],
    labelList: [
      {
        text: "2016年大会",
        flag: false
      }, {
        text: "2017年大会",
        flag: false
      }, {
        text: "2018年大会",
        flag: false
      }, {
        text: "2019年大会",
        flag: false
      }, {
        text: "2020年大会",
        flag: false
      }
    ],
    delId: []
  }
  async componentDidMount() {
    this.getList();
  }
  render() {
    const columns = [
      {
        title: '用户昵称',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
      },
      {
        title: '手机号',
        dataIndex: 'tel',
      },
      {
        title: '标签',
        dataIndex: 'label',
      }, {
        title: '用户身份',
        dataIndex: 'role',
      }, {
        title: '身份证',
        dataIndex: 'cart',
      }, {
        title: '公司地址',
        dataIndex: 'address',
      }, {
        title: '跟进记录',
        dataIndex: 'followup',
      }, {
        title: '注册时间',
        dataIndex: 'time',
      }, {
        title: '操作',
        render: (text) => {
          // console.log(text)
          return (
            <>
              <Button type="primary">查看</Button>
              {
                text.role !== "v2" && <Button type="primary">编辑</Button>
              }
              {
                text.role === "v0" && <Button type="danger">删除</Button>
              }
            </>
          )
        },
      },
    ];
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        this.setState({ delId: selectedRowKeys });
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };
    const { Option } = Select;

    let { list, total, num, roleList, labelList } = this.state;
    const data = list;
    data.forEach(item => item.key = item.id);

    return (
      <div className="home">
        <Button type="primary" onClick={this.showModal}>添加用户</Button>
        <Button type="danger" onClick={this.delUser.bind(this)}>删除用户</Button>

        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input placeholder="请输入手机号" name="tel" onChange={this.handChange.bind(this)} />
          <Input placeholder="请输入用户名称" name="name" onChange={this.handChange.bind(this)} />
          <Input placeholder="请输入身份证号码" name="cart" onChange={this.handChange.bind(this)} />
          <Select defaultValue="用户身份" style={{ width: 120 }} onChange={this.handleChange.bind(this)}>
            {
              roleList.map((item, index) => {
                return (
                  <Option value={item.role} key={index}>{item.text}</Option>
                )
              })
            }
          </Select>
          <Input placeholder="请输入公司地址" name="address" onChange={this.handChange.bind(this)} />
          <h4>标签</h4>
          {
            labelList.map((item, index) => {
              return (
                <Tag
                  key={index}
                  closable
                  visible={item.flag}
                  onClose={() => {
                    labelList[index].flag = !labelList[index].flag;
                    this.setState({ labelList });
                  }}
                >
                  {item.text}
                </Tag>
              )
            })
          }
          <br />
          {
            labelList.map((item, index) => {
              return (
                <Button key={index} size="small" onClick={() => {
                  labelList[index].flag = !labelList[index].flag;
                  this.setState({ labelList });
                }}>
                  {item.text}
                </Button>
              )
            })
          }
          <Input placeholder="请输入跟进情况" name="followup" onChange={this.handChange.bind(this)} />
        </Modal>

        <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={{ total, pageSize: num }} onChange={this.pageChange.bind(this)} />

      </div>
    )
  }
  async getList(page = 1, num = this.state.num) {
    let res = await httpAxios.get("/list/list", { params: { page, num } });
    if (res.data.code === 1) {
      this.setState({
        list: res.data.data,
        total: res.data.total
      });
    }
  }
  // 分页
  pageChange(page) {
    this.setState({ page })
    this.getList(page.current, this.state.num);
  }
  handChange(e) {
    let name = e.target.name;
    this.setState({
      [name]: e.target.value
    })
  }
  // 删除
  async delUser() {
    let { delId, page, num } = this.state;
    let id = delId.join(",");
    let res = await httpAxios.get("/list/del", { params: { id } });
    if (res.data.code === 1) {
      this.getList(page, num)
      console.log(res.data.msg);
    } else {
      console.log(res.data.msg);
    }
  }


  // 遮罩
  showModal = () => {
    let { labelList } = this.state;
    labelList.forEach(item => item.flag = false)
    this.setState({
      labelList,
      visible: true,
    });
  };
  handleOk = async e => { // 确定
    let { name, tel, cart, address, followup, role, labelList } = this.state;
    let label = [];
    labelList.forEach(item => item.flag && label.push(item.text));
    label = label.join(",");
    let res = await httpAxios.post("/list/add", { name, tel, label, cart, address, followup, role });
    if (res.data.code === 1) {
      console.log(res.data.msg);
      this.getList();
    } else {
      console.log(res.data.msg);
    }
    this.setState({
      visible: false,
    });
  };
  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };
  // select
  handleChange(value) {
    this.setState({ role: value });
  }
}
