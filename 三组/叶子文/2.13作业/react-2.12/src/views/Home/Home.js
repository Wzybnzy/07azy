import React, { Component } from 'react'
import httpAxios from '../../utils/request'
import { Button, Table } from 'antd'

const roleList = ["v0", "v1", "v2"]

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
    render: (e) => {
      // console.log(e)
      let roleIndex = roleList.indexOf(e.role);
      console.log(roleIndex);
      console.log(data, "role---------------")
      return (
        <>
          <Button type="primary">查看</Button>
          {
            roleIndex !== 2 && <Button type="primary">编辑</Button>
          }
          {
            roleIndex === 0 && <Button type="danger">删除</Button>
          }
        </>
      )
    },
  },
];
let data = JSON.parse(localStorage.getItem("data")) || [];
// let data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     tel: 15135744588,
//     role: "v2",
//     cart: "22",
//     label: "整形专家",
//     address: 'New York No. 1 Lake Park',
//     followup: "5555",
//     time: "2019"
//   }
// ];
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};
export default class Home extends Component {
  async componentDidMount() {
    console.log("component-----------")
    let res = await httpAxios.get("/list/list");
    if (res.data.code === 1) {
      data = res.data.data;
      // console.log(res.data.data)
    }
  }
  render() {
    data.forEach(item => item.key = item.id);
    // localStorage.setItem("data", JSON.stringify(data))
    return (
      <div className="home">
        <Button type="primary">添加用户</Button>
        <Button type="danger">删除用户</Button>
        {
          data && <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        }
      </div>
    )
  }
}
