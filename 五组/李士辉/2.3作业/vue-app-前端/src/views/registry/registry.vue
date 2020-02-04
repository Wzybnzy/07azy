<template>
  <div class="registry">
      <div class="tent">
        <div class="titles">
          <h1>语 雀 注 册 界 面</h1>
        </div>
        <ul>
          <li>
            <span>用户名 :</span>
            <input type="text" placeholder="请输入用户名" v-model="name"/>
          </li>
          <li>
            <span>密码 :</span>
            <input type="password" placeholder="请输入密码" v-model="pwd"/>
          </li>
          <li>
            <span>确认密码 :</span>
            <input type="password" placeholder="请输入确认密码" v-model="qpwd"/>
          </li>
          <li>
            <button @click="registry">注 册</button>
          </li>
          <li>
            <router-link to='/'><button>已有账号? 去登陆 ...</button></router-link>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:'',
      pwd:'',
      qpwd:''
    }
  },
  methods:{
    async registry(){
      let {name,pwd,qpwd} = this;
      if(pwd == qpwd){
        let res = await this.$Axios.post('/api/registry',{
          name,
          pwd,
          _csrf:document.cookie.split('=')[1]
        })
        if(res.data.code == 1){
          this.$Toast(res.data.msg)
          this.$router.push('/')
        }else{
          this.$Toast(res.data.msg)
        }
      }else{
        this.$Toast('两次密码输入不一致，请从新输入')
      }
    }
  }
};
</script>

<style lang='scss'>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.registry {
  width: 100%;
  height: 100%;
  background: rgb(246, 246, 246);
  .titles{
    margin-bottom: 30px;
    padding-top: 100px;
  }
  .tent {
    width: 75%;
    height: 968px;
    margin: 0 auto;
    background: rgb(250, 250, 250);
    ul {
      width: 50%;
      height: 600px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      li {
        width: 100%;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #ccc;
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      li:nth-child(4) {
        border-bottom: none;
        button {
          width: 80%;
          height: 30px;
          background: skyblue;
        }
      }
      li:nth-child(5) {
        border-bottom: none;
        a{
          width: 80%;
          height: 30px;
        }
        button {
          width: 100%;
          height: 100%;
          background: rgb(0, 255, 0);
        }
      }
    }
  }
}
.tent ul li {
  span {
    display: inline-block;
    width: 20%;
    text-align: center;
  }
  input {
    width: 80%;
    height: 30px;
    outline: none;
    padding-left: 5px;
    border: none;
    border-bottom: 1px solid #ccc;
    background: none;
  }
  button {
    border-radius: 20px;
    border: none;
    outline: none;
    color:white;
  }
}
</style>