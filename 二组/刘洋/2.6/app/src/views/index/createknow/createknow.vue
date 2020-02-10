<template>
  <div class="createk">
    <p>
      名称：
      <el-input v-model="kname" placeholder="请输入内容"></el-input>
    </p>
    <p>
      简介:
      <el-input v-model="kintro" placeholder="请输入内容"></el-input>
    </p>
    <p>
      是否显示:
      <el-select v-model="isshow" placeholder="请选择">
        <el-option value="1" label="是"></el-option>
        <el-option value="0" label="否"></el-option>
      </el-select>
    </p>
    <el-button @click="createk">新建</el-button>
  </div>
</template>

<script>
import httpAxios from "../../../utils/request";
export default {
  data() {
    return {
     
      isshow: "",
      kname: "",
      kintro: "",
    };
  },
  mounted(){
    if(this.$route.query.type=="编辑"){
      console.log(this.$route.query)
      this.isshow=this.$route.query.row.isshow+""
      this.kname=this.$route.query.row.know_name
      this.kintro=this.$route.query.row.know_intro
    }
  },
  methods: {
    async createk() {
      let { type} = this.$route.query;
      let { kname, kintro, isshow } = this;
      
      if (type == "编辑") {
        let knowid=this.$route.query.row.id
        let res = await httpAxios.post("/api/updateknow", {
          knowid,
          kname,
          kintro,
          isshow:this.isshow*1
        });
        if (res.data.code == 1) {
          this.$router.push("/index/start/know");
        } else {
          this.$message(res.data.msg);
        }
      } else {
        let uid = localStorage.uid * 1;
        console.log(uid);

        let res = await httpAxios.post("/api/creatknow", {
          uid,
          kname,
          kintro,
          isshow
        });
        if (res.data.code == 1) {
          this.$router.push("/index/start/know");
        } else {
          this.$message(res.data.msg);
        }
      }
    }
  }
};
</script>

<style>
</style>