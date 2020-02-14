import React, { Component } from 'react'
import { Button, Table,Modal,Tag,Select,message  } from 'antd';
import "antd/dist/antd.css"
import httpAxios from "../../utils/reques"

const {Option}=Select

export default class Home extends Component {
    state = {
        list:[],
        total:1,
        pageSize:5,
        visible: false,
        selectArr: [
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
        labelArr:['整形医生','2018年'],//标签数组
        optionArr:['皮肤医生','董事长','网电','采购','培训班','注射医生','总经理','财务'],//选项
        phone:"",//电话
        name:"",//用户名
        card:"",//身份证
        address:"",//公司地址
        role:"",//角色 超级管理员，管理员，访客,
        followup:""//公司名称
    }
    render() {
        let {list,total,pageSize,selectArr,phone,name,card,address,followup,optionArr,labelArr}=this.state;
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
                render: (text, record, index) =>{//v0-超级管理员  v1-管理员 v2-访客   三个参数是官网的api
                    return <>
                    {
                        record.role==='v0'?<Button type="danger" onClick={this.deluser.bind(this,record.id)}>删除</Button>:null
                    }&nbsp;&nbsp;
                    {
                        record.role==='v0'||record.role==='v1'?<Button type="primary">编辑</Button>:null
                    }&nbsp;&nbsp;
                    <Button>查看</Button>
                 </>
                }
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
                            <span onClick={this.showModal}>添加用户</span>
                            <span>删除用户</span>
                        </div>
                    </div>
                    {/* 首页表格 */}
                    <div className='home-main'>
                        <div>
                            <Table 
                            rowSelection={rowSelection} 
                            columns={columns} 
                            dataSource={data} 
                            pagination={{total,pageSize}}//显示页码
                            onChange={this.tablePagination.bind(this)}//api
                             />
                             <Modal
                                title="新增用户数据"
                                visible={this.state.visible}
                                onOk={this.handleOk.bind(this)}
                                onCancel={this.handleCancel}
                                >
                                <p>
                                    <input placeholder="请输入手机号码" value={phone} name='phone' onChange={this.inputChange.bind(this)} />
                                    <input placeholder="请输入用户名称" value={name} name='name' onChange={this.inputChange.bind(this)} />
                                    <input className='inp3' placeholder="身份证号码" value={card} name='card' onChange={this.inputChange.bind(this)} />
                                </p>
                                <div>
                                    <span>用户身份：</span>
                                    <Select defaultValue="Identity" style={{ width: 120 }} onChange={this.selectChange.bind(this)}>
                                        {
                                            selectArr && selectArr.map((item, index) => <Option value={item.val} key={index}>{item.txt}</Option>)
                                        }
                                    </Select>
                                    <input className='input' placeholder="请输入公司名称" value={followup} name='followup' onChange={this.inputChange.bind(this)} />
                                </div>
                                <p>
                                    <span>公司地址：</span>
                                    <input className="inp4" placeholder="请输入详细地址" value={address} name='address' onChange={this.inputChange.bind(this)} />
                                </p>
                                <p>
                                    <span>标签：</span>
                                    {
                                        labelArr&&labelArr.map((item,index)=>{
                                            return <Tag closable onClose={this.log.bind(this)} key={index}>{item}</Tag>
                                        })
                                    }
                                </p>
                                <p>
                                    <span>选项：</span>
                                    {
                                        optionArr&&optionArr.map((item,index)=>{
                                        return <b key={index} onClick={this.changeOption.bind(this)}>{item}</b>
                                        })
                                    }
                                </p>
                             </Modal>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
    async publicArr(){
        let res = await httpAxios.get('/getall');
        if(res.data.code === 1){
            this.setState({
                list:res.data.data,
                total:res.data.total
            })
        }
    }
    async componentDidMount(){
        this.publicArr()//调用页面渲染函数
    }
    async deluser(id){//删除该用户
        let res=await httpAxios.get('/del?id='+id)
        if(res.data.code==1){
            this.publicArr()//调用页面渲染函数
            message.success(res.data.msg);//删除成功提示
        }
    }
    async tablePagination(page){//页码 page是api自带 页码改变的回调，参数是改变后的页码及每页条数	Function(page, pageSize)
        let {current, pageSize}=page;
        //获取到page 和 limit后台参数，请求接口
        let res=await httpAxios.get('/getall?page='+current+'&limit'+pageSize)
        if (res.data.code === 1) {
            this.setState({//重新渲染页面
                list: res.data.data
            })
        }
    }
    showModal = () => {
        this.setState({
          visible: true,
        });
      }
    
     async handleOk(){//弹框确定
        //手机号，用户名，身份证号，身份，公司名称，公司地址，标签
        let {phone,name,card,role,followup,address,labelArr}=this.state
        // console.log(phone,name,card,role,followup,address,labelArr,"EEEEEEEEEEE")
        this.setState({
          visible: false,
        });
        let res=await httpAxios.post('/add',{
            phone,
            name,
            card,
            role,
            followup,
            address,
            label:labelArr.join(',')
        })
        if (res.data.code == 1) {
            this.publicArr()//调用页面渲染函数 //更新列表的数据
        }
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
      inputChange(e){//input受控组件  输入内容发生改变
        let name=e.target.name
        this.setState({
            [name]:e.target.value
        })
      }
       log(e) {
        console.log(e);
      }
      changeOption(e){//点击每一个标签
        let text=e.target.innerHTML;//拿到当前的选项
        let {labelArr}=this.state;
        let ind=labelArr.findIndex(item=>item===text)//判断当前值是否存在
        if(ind===-1){//不存在则添加
            labelArr.push(text)
            this.setState({labelArr})
        }
      }
      selectChange(value){//下拉菜单
        // console.log(value,"DDDDDDDDDDDd")
        this.setState({
            role: value
        })
      }
}
