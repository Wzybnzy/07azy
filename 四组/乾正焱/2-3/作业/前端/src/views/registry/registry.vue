<template>
  <div class="registry">
      <div class="box">
      <p>
        <input type="text" placeholder="姓名" v-model="name" />
      </p>
      <p>
        <input type="text" placeholder="密码" v-model="pwd" />
      </p>
      <p @click="registry">注册</p>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return {
            name:"",
            pwd:""
        }
    },
    methods:{
        async registry(){
            let {name,pwd} = this;
            let res = await axios.post('/api/registry',{name,pwd});
            if(res.data.code===1){//注册成功
                this.$router.push('/login');
            }else if(res.data.code===2){
                alert('缺少参数')
            }else if(res.data.code===3){
                alert('该用户已注册，可以直接登录')
            }else{
                alert('注册失败')
            }
        }
    }
}
</script>

<style lang="scss">
.registry {
  position: relative;
}
.box {
  width: 100%;
  height: 300px;
  position: absolute;
  left: 0;
  top: 200px;
  p {
    width: 90%;
    height: 50px;
    line-height: 40px;
    text-align: center;
    border: 1px solid #ccc;
    margin: 10px auto;
    input {
      width: 100%;
      height: 40px;
      border: none;
      outline: none;
      padding-left: 20px;
    }
  }
}
</style>