<template>
  <div class="addKnow">
    <el-form ref="form" :model="form" label-width="80px" class="form">
      <el-form-item label="名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="简介">
        <el-input type="textarea" :rows="5" v-model="form.desc" class="brief"></el-input>
      </el-form-item>
      <el-form-item>
        <el-select v-model="form.region" placeholder="是否可见">
          <el-option label="是" value="1"></el-option>
          <el-option label="否" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addKnow } from "@/api/api";
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
    async onSubmit() {
      let { name, region, desc } = this.form;
      let res = await addKnow({
        know_name: name,
        brief: desc,
        isShow: region,
        uId: localStorage.getItem("uId")
      });
      if (res.data.code == 1) {
        this.$message({
          message: res.data.msg,
          offset: 50,
          duration: 1500
        });
        setTimeout(() => {
          this.$router.push({ name: "know" });
        }, 700);
      } else {
        this.$message({
          message: res.data.msg,
          offset: 50,
          duration: 1500
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  width: 500px;
  transform: translate(30%, 20%);
  .brief {
    height: 120px;
  }
}
</style>