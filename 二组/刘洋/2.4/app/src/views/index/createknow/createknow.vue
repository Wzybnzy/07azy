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
      <el-select v-model="isshow" placeholder="请选择">
        <el-option v-for="(item,index) in options" :key="index" :value="item.value"></el-option>
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
      options: [
        {
          value: 1
        },
        {
          value: 0
        }
      ],
      isshow: "",
      kname: "",
      kintro: ""
    };
  },
  methods: {
    async createk() {
      let { type, knowid } = this.$route.query;
      let { kname, kintro, isshow } = this;

      if (type == "编辑") {
        let res = await httpAxios.post("/api/updateknow", {
          knowid,
          kname,
          kintro,
          isshow
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