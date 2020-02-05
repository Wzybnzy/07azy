import axios from 'axios';
<template>
  <div class="addknow">
    <div class="top"></div>
    <div class="main">
      <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="名称">
            <el-input v-model="form.name" type='text' placeholder="知识库名称"></el-input>
          </el-form-item>
  
            <el-form-item label="是否可见">
              <el-radio-group v-model="form.resource">
                <el-radio label="1" >可见</el-radio>
                <el-radio label="0" >不可见</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="描述">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>

            </el-form-item>
          </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
 data() {
      return {
        form: {
          name: '',
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
         axios.post('/add',{
           name:this.form.name,
           describe:this.form.desc,
           visual:this.form.resource,
           uid:localStorage.getItem('uid')
         }).then(res=>{
           if(res.data.code==1){
             alert(res.data.msg)
           }else if(res.data.code==0){
             alert(res.data.msg)
           }
         })
      }
    }
}
</script>

<style>
.addknow{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.top{
  width: 100%;
  height: 40px;
  background-color: yellowgreen;
}
.main{
  width: 100%;
  flex: 1;
  overflow: auto;
}
.el-form{
  width: 500px;
  margin: 50px auto;
}
</style>