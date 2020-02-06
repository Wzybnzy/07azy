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
        <el-button type="primary" @click="onSubmit">{{id==null ?"立即创建" :"更新"}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addKnow, updateKnow } from "@/api/api";

export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        desc: ""
      },
      id: null,
      uId: null
    };
  },
  created() {
    if (this.$route.params.id) {
      let { id, know_name, brief, isShow, uId } = this.$route.params;
      this.form = {
        name: know_name,
        desc: brief,
        region: isShow + ""
      };
      this.id = id;
      this.uId = uId;
    }
  },
  methods: {
    async onSubmit() {
      let { name, region, desc } = this.form;
      let { id, uId } = this;
      if (id == null) {
        // 新建
        let res = await addKnow({
          know_name: name,
          brief: desc,
          isShow: region,
          uId: localStorage.getItem("uId")
        });
        if (res.data.code == 1) {
          this.$toasts(this, res);
          this.toKnow();
        } else {
          this.$toasts(this, res);
        }
      } else {
        // 编辑
        let obj = await updateKnow({
          id,
          uId,
          know_name: name,
          isShow: region,
          brief: desc
        });
        if (obj.data.code == 1) {
          this.$toasts(this, obj);
          this.toKnow();
        } else {
          this.$toasts(this, obj);
        }
      }
    },
    toKnow() {
      setTimeout(() => {
        this.$router.push({ name: "know" });
      }, 700);
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  width:500px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -70%);
  .brief {
    height: 120px;
  }
}
</style>