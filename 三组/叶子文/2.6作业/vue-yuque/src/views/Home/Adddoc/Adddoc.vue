<template>
  <div class="addKnow">
    <el-form ref="form" :model="form" label-width="80px" class="form">
      <el-form-item label="标题">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input type="textarea" :rows="5" v-model="form.desc" class="brief"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">{{id==null ?"立即创建" :"更新"}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addDoc, updateDoc } from "@/api/api";

export default {
  data() {
    return {
      form: {
        name: "",
        desc: ""
      },
      id: null,
      uId: null,
      know_name: "",
      know_id: null,
      isShow: ""
    };
  },
  created() {
    let {
      id,
      know_name,
      know_id,
      isShow,
      uId,
      doc_name,
      doc_content
    } = this.$route.params;
    this.uId = uId;
    this.know_name = know_name;
    if (this.$route.params.flag) {
      // 新建
      this.know_id = id;
      this.isShow = isShow + "";
    } else {
      // 编辑
      this.id = id;
      this.know_id = know_id;
      this.form = {
        name: doc_name,
        desc: doc_content
      };
    }
  },
  methods: {
    async onSubmit() {
      let { name, desc } = this.form;
      let { id, uId, know_name, know_id, isShow } = this;
      if (id == null) {
        // 新建
        let res = await addDoc({
          uId,
          know_name,
          know_id,
          isShow,
          doc_name: name,
          doc_content: desc
        });
        if (res.data.code == 1) {
          this.$toasts(this, res);
          this.toKnow();
        } else {
          this.$toasts(this, res);
        }
      } else {
        // 编辑
        let obj = await updateDoc({
          doc_name: name,
          doc_content: desc,
          know_id,
          uId,
          id
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
        this.$router.push({ name: "doc" });
      }, 700);
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  width: 500px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -70%);
  .brief {
    height: 120px;
  }
}
</style>