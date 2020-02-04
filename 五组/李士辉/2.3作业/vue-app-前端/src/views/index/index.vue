<template>
  <div id="app">
    <div class="title">
        <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=137109304,463926872&fm=26&gp=0.jpg" alt="">
        <h1>语 雀 登 录 平 台</h1>
    </div>
    <div class="content">
    <Toast></Toast>
      <div class="left">
        <img src="http://img5.imgtn.bdimg.com/it/u=4103888617,3742418678&fm=26&gp=0.jpg" alt/>
      </div>
      <div class="right">
        <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2728837902,566730165&fm=26&gp=0.jpg" alt="" class="log">
        <ul>
            <li><h2>用 户 登 录</h2></li>
            <li><span>账号 :</span><input type="text" placeholder="请输入用户名" v-model="name"></li>
            <li><span>密码 :</span><input type="password" placeholder="请输入密码" v-model="pwd"></li>
            <li><button @click="login">登 陆</button></li>
            <li><router-link to='/registry'><button>还没有账号？ 去注册 ...</button></router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Toast from '@/toast/Toast.vue'
export default {
  data() {
    return {
        name:'',
        pwd:''
    };
  },
  mounted(){
  },
  components:{
      Toast
  },
  methods:{
      async login(){
        let {name,pwd} = this;
        let res = await this.$Axios.post('/api/login',{
            name,
            pwd,
            _csrf:document.cookie.split('=')[1]
        })
        this.name = '';
        this.pwd = '';
        if(res.data.code == 1){  // 登陆成功
            this.$Toast(res.data.msg)
            this.$router.push('/login')
        }else{
            this.$Toast(res.data.msg)
        }
      }
  }
};
</script>

<style lang='scss'>
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
#app{
    width: 100%;
    height: 100%;
}
.title{
    width: 100%;
    background: black;
    display: flex;
    align-items: center;
    height: 100px;
    img{
        height: 100%;
    }
    h1{
        // width: 320px;
        color: white;
        margin-left: 100px;
    }
}
.content{
    width: 100%;
    height: 868px;
    display: flex;
    .left{
        width: 65%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .right{
        width: 35%;
        height: 100%;
        .log{
            width: 200px;
            display: block;
            margin: 30px auto;
        }
    }
}
.right ul{
    width: 500px;
    height: 500px;
    background: white;
    margin: 0 auto;
    li{
        width: 100%;
        height: 50px;
        line-height: 50px;
        border-radius: 20px;
        border-bottom: 1px solid #ccc;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
        span{
            display: inline-block;
            width: 70px;
            text-align: center;
        }
        h2{
            width: 118px;
            margin: 0 auto;
        }
        input{
            width: 300px;
            height: 25px;
            border: none;
            border-bottom: 1px solid rgb(21, 255, 0);
            outline: none;
        }
        button{
            border-radius: 10px;
            outline: none;
            color: white;
            border: none;
        }
    }
    li:nth-child(4){
        button{
            width: 70%;
            height: 30px;
            background: green;
        }
    }
    li:nth-child(5){
        a{
            width: 70%;
            height: 30px;
            line-height: 30px;
        }
        button{
            width: 100%;
            height: 100%;
            background: red;
        }
    }
}
</style>