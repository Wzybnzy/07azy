<template>
  <div class="search">
    <el-card class="box-card">
      <div v-for="(item,index) in list" :key="index" class="text item">
        {{ item.doc_name }}
        <p>{{item.doc_content}}</p>
      </div>
    </el-card>
  </div>
</template>

<script>
import { searchDoc } from "@/api/api";

export default {
  data() {
    return {
      list: []
    };
  },
  async created() {
    let res = await searchDoc({
      searchVal: this.$route.params.iptVal
    });
    if (res.data.code == 1) {
      this.list = res.data.data;
    }
  }
};
</script>

<style lang="scss" scoped>
.search {
  margin-top: 70px;
  height: 440px;
  overflow: hidden;
}
.text {
  font-size: 14px;
}

.item {
  border-bottom: 1px solid #ccc;
}

.box-card {
  width: 60%;
  margin: 0 auto;
}
</style>