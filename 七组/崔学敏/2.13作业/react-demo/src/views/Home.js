import React, { Component } from 'react'
import httpAxios from '../utils/request.js';
import { Button, Table } from 'antd';
export default class Home extends Component {
  state = {
    // page:1,
    // limit:5,
    list: []
  }
  render() {
    let { list } = this.state;
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
        render: () => {
          return (
            <>
              <Button type="primary">删除</Button>
              <Button type="danger">编辑</Button>
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
          <Button type="primary">添加用户</Button>
          <Button type="danger">删除用户</Button>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    )
  }
  async componentDidMount() {
    //   let {page,limit}=this.state;
    let res = await httpAxios.get('/getlist');
    console.log(res.data.data)
    this.setState({
      list: res.data.data
    })
  }
}
