<template>
  <div class="addknow">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="名称">
        <el-input v-model="form.name" placeholder="编辑标题"></el-input>
      </el-form-item>
      <el-form-item label="简介">
        <el-input type="textarea" v-model="form.desc" placeholder="在这里输入简介"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit()">发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addfile, updatefile } from "@/api/api.js";
export default {
  data() {
    return {
      form: {
        name: "",
        desc: ""
      }
    };
  },
  created() {
    let { filename, fileinfo } = this.$route.params;
    console.log(this.$route);
    this.form = {
      name: filename,
      desc: fileinfo
    };
  },
  methods: {
    async onSubmit() {
      let { id,knowid, isshow, uid, flag } = this.$route.params;
      console.log(this.$route.params);
      console.log(knowid, isshow, uid);
      if (flag) {
        let res = await addfile({
          filename: this.form.name,
          fileinfo: this.form.desc,
          isshow: isshow + "",
          uid: uid,
          knowid: knowid
        });
        console.log(res);
        if (res.data.code == 1) {
          this.$router.push({ name: "wd" });
        }
      } else {
        let res = await updatefile({
          filename:this.form.name,
          fileinfo:this.form.desc,
          isshow: isshow + "",
          uid: uid,
          id: id
        });
        if (res.data.code == 1) {
          this.$message(res.data.mes);
          this.$router.push({ name: "wd" });
        }
      }
    }
  }
};
</script>

<style scoped>
.addknow {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>