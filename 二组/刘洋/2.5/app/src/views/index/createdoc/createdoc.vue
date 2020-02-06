<template>
  <div class="createdoc">
    <div class="createk">
      <p>
        名称：
        <el-input v-model="fname" placeholder="请输入内容"></el-input>
      </p>
      <p>
        简介:
        <el-input v-model="fcont" placeholder="请输入内容"></el-input>
      </p>
      <p>
        是否显示:
        <el-select v-model="isshow" placeholder="请选择">
          <el-option value="1" label="是"></el-option>
          <el-option value="0" label="否"></el-option>
        </el-select>
      </p>
      <el-button @click="createf">新建</el-button>
    </div>
  </div>
</template>

<script>
import httpAxios from "../../../utils/request";
export default {
  data() {
    return {
      fname: "",
      fcont: "",
      isshow: ""
    };
  },
  created() {
      if(this.$route.query.type=="编辑"){
    this.fname = this.$route.query.row.fname;
    this.fcont = this.$route.query.row.fcont;
    this.isshow = this.$route.query.row.isshow+"";}
  },
  methods: {
    async createf() {
      let { fname, fcont, isshow } = this;

      if (this.$route.query.type == "编辑") {
        let fid = this.$route.query.row.id;
        let res = await httpAxios.post("/api/updatedoc", {
          fid,
          fname,
          fcont,
          isshow
        });
        if (res.data.code == 1) {
          this.$router.push("/index/start/doc");
        } else {
          this.$message(res.data.msg);
        }
      } else {
        let res = await httpAxios.post("/api/createdoc", {
          kid: localStorage.kid,
          uid: localStorage.uid,
          fname,
          fcont,
          isshow
        });
        console.log(res);
        if (res.data.code == 1) {
          this.$router.push("/index/start/doc");
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