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
      <el-button type="primary" @click="add">{{!id?'新建知识库':'编辑知识库'}}</el-button>
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
      },
      id: null,
      uid: null
    };
  },
  created() {
    let { id, title, content, isdefault, uid } = this.$route.query;
    this.form.name = title;
    this.form.desc = content;
    this.form.region = isdefault?isdefault + "":"1",
      this.id = id ? id : null,
      this.uid = uid ? uid : null;
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    //添加
    async add() {
      let { name, region, desc } = this.form;
      let {id,uid}=this;
      if (!id) {
        //添加
        let res = await httpAxios.post("/api/add", {
          title: name,
          content: desc,
          _csrf: document.cookie.split("=")[1],
          isdefault: region,
          uid: JSON.parse(window.localStorage.user).uid
        });
        if (res.data.code == 1) {
          this.$router.push({ name: "zsk" });
        } else {
          this.$message(res.data.mes);
        }
      } else {
        //编辑
        let res=await httpAxios.post('/api/update',{id:this.id,uid:this.uid,title:name,isdefault:region, content:desc,_csrf:document.cookie.split('=')[1]});
        if(res.data.code==1){
           this.$message(res.data.mes);
           this.$router.push('/home/list/zsk')
        }
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