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
        <el-select v-model="form.region" placeholder="是否可见">
          <el-option label="是" value="1"></el-option>
          <el-option label="否" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">{{!id?'新建':'编辑'}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addknow, updateknow } from "@/api/api.js";
export default {
  data() {
    return {
      form: {
        name: "",
        region: "1",
        desc: ""
      },
      id: null,
      uid: null
    };
  },
  created() {
    let { id, knowname, knowjj, isshow, uid } = this.$route.params;
    this.form = {
      name: knowname,
      region: isshow ? isshow + "" : "1",
      desc: knowjj
    };
    (this.id = id ? id : null), (this.uid = uid ? uid : null);
  },
  methods: {
    async onSubmit() {
      let { name, region, desc } = this.form;
      let { id } = this;
      if (!id) {
        let res = await addknow({
          knowname: name,
          knowjj: desc,
          isshow: region,
          uid: JSON.parse(window.localStorage.user).uid
        });
        if (res.data.code == 1) {
          this.$router.push({ name: "know" });
        }
      } else {
        let res = await updateknow({
          knowname: name,
          knowjj: desc,
          isshow: region,
          uid: this.uid,
          id: this.id
        });
        if(res.data.code==1){
          this.$message(res.data.mes)
          this.$router.push({name:'know'})
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