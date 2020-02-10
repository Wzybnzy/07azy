<template>
  <div class="edmtzsk">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>

      <el-form-item label="简介">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item label="是否可见">
        <el-select v-model="form.region" placeholder="是否可见">
          <el-option label="是" value="1"></el-option>
          <el-option label="否" value="0"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <el-row>
      <el-button type="primary" @click="add">新建</el-button>
    </el-row>
  </div>
</template>

<script>
import httpAxios from "@/utils/request.js";

export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        desc: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    async add() {
      let {name,region,desc}=this.form;
      let res=await httpAxios.post('/api/add',{title:name,content:desc,_csrf: document.cookie.split("=")[1],isdefault:region,uid:JSON.parse(window.localStorage.user).uid});
      if(res.data.code==1){
        this.$router.push({name:'zsk'})
      }else{
        this.$message(res.data.mes);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.edmtzsk {
  width: 100%;
  height: 100%;
}
.el-form {
  width: 300px;
}
.el-row {
  padding-left: 100px;
}
</style>