<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="名称">
    <el-input v-model="zisiku_name"></el-input>
  </el-form-item>
  <el-form-item label="是否可见">
    <el-select v-model="isshow" placeholder="是否可见">
      <el-option label="是" value="1"></el-option>
      <el-option label="否" value="0"></el-option>
    </el-select>
  </el-form-item>

  <el-form-item label="简介">
    <el-input type="textarea" v-model="zisiku_info"></el-input>
  </el-form-item>
    <el-button type="primary" @click='addknow'>添加</el-button>

</el-form>
  </div>
</template>
<script>
import {addknow} from '../../../api/api'
  export default {
    data() {
      return {
      
         zisiku_info: '',
          zisiku_name: '',
          isshow: ''
     
      }
    },
    methods: {
      addknow(){
        const { zisiku_info, zisiku_name, isshow}=this;
        const uid=window.localStorage.id;
        console.log(uid)
        addknow({zisiku_info, zisiku_name, isshow,uid}).then(res=>{
         if(res.data.code===1){
           alert('添加知识库成功')
           this.$router.push('/home/list/know')
         }
        })
      }
    }
  }
</script>
<style lang="">
  
</style>