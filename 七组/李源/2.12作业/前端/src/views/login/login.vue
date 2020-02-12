<template>
  <div class="login">
       <div class = 'headl'>登陆</div>
       <div class = 'sectl'>
            <li>账户:<input type="text" v-model = 'name'></li>
            <li>密码:<input type="text" v-model = 'pwd'></li>
            <span class = 'spanl' @click = 'login'>登陆</span>
       </div>
  </div>
</template>
<script>
import axios from 'axios'
export default{
  name: 'login',
  data(){
      return{
         user:'',
         pass:''
      }
  },
  created(){
     
  },
  methods:{
      async login(){
            let {name,pwd}=this;
            let res=await axios.post("/api/login",{name,pwd});
            if(res.data.code==1){
                window.localStorage.token = true;
                this.$router.push("/home")
            }else if(res.data.code==2){
                console.log(res.data)
            }
        },
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
  list-style:none;
}
.login{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  font-size: 13px;
}
.headl{
  width:100%;
  height:40px;
  line-height: 40px;
  text-align: center;
  background: pink;
}
.sectl{
  width:100%;
  height:auto;
  margin-top: 30px;
}
.sectl li{
  width:100%;
  height:60px;
  padding-left: 10px;
  display: flex;
  align-items: center;
}
.sectl li input{
  display: inline-block;
  width:80%;
  height:27px;
  border:solid 1px #f00;
  margin-left: 10px;
}
.spanl{
  display: inline-block;
  width:60px;
  height:25px;
  background:pink;
  line-height: 25px;
  text-align: center;
  position: fixed;
  top: 220px;
  left:40%;
}
</style>
