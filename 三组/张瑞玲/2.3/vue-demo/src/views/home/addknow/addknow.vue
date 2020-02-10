<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="">
    <el-input v-model="form.job"></el-input>
  </el-form-item>
  <el-form-item label="是否可见">
    <el-select v-model="form.region" placeholder="互联网是否可见">
      <el-option label="是" value="1"></el-option>
      <el-option label="否" value="2"></el-option>
    </el-select>
  </el-form-item>  
  <el-form-item label="简介">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
     <el-button type="primary" @click="onSubmit">{{!id?'添加知识库':'编辑知识库'}}</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
//import {addknow} from '@/api/api.js'
import axios from 'axios'
export default {
  data() {
    return {
      form:{
         name:'',
         desc:'',
         region:'',
         job:''
      },
      id:null,
      uid:null
    }
  },
  created(){
     let { id, uid, isshow, know_name, know_info } = this.$route.params;
    this.form = {
      name: know_name,
      region: isshow ? isshow + "" : '1',
      desc: know_info
    };
    this.id = id ? id : null;
    this.uid = uid ? uid : null;
  },
  methods: {
    async onSubmit() {
       let {name,region,desc,job} = this.form;
      //  let res = await  addknow({
      //      know_name:name,
      //      know_info:desc,
      //      isshow:region,
      //      uid:JSON.parse(window.localStorage.user).uid
      //  });
      let {id}=this
      if(!id) {
        let res =await axios.post('/api/know/add',{
            know_name:name,
           know_info:desc,
           isshow:region,
            uid:job
        })
         if(res.data.code == 1){ 
           this.$router.push({name:'know'});
       }
       console.log(res);
      }else{
         let res = await axios.post('/api/know/update',{
          know_name: name,
          know_info: desc,
          isshow: region,
          uid: this.uid,
          id: this.id
      })
      if (res.data.code == 1) {
          this.$message("编辑成功");
          this.$router.push({name:'know'})
        }
      }
    }
  }
}
</script>

<style>

</style>