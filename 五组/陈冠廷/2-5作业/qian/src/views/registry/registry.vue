<template>
  <div class="registry">
      <div class="registry-box">
        <p><input placeholder="名字" v-model="name"></p>
        <p><input placeholder="密码" v-model="pwd"></p>
        <p><el-button :plain="true" @click="registry">注册</el-button></p>
      </div>
  </div>
</template>

<script>
import httpAxios from '../../utils/request';
export default {
 data(){
   return {
     name:'',
     pwd:''
   }
 },
 methods:{
  async registry(){
     let {name,pwd}=this;
     console.log(name,pwd)
    if(!name||!pwd){
      this.$message('缺少参数');
      return;
    }
    let res=await httpAxios.post('/api/registry',{name,pwd});
    // console.log(res)
    if(res.data.code==1){
      this.$router.push('/login');
    }else{
       this.$message('注册失败');
    }
   }
 }
}
</script>

<style>

</style>