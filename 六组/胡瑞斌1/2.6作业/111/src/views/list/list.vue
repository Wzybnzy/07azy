<template>
  <div class="tab">
    <div class="left1">
      <div class="left" v-for="(item,index) in menuArr" :key="index" @click="changeTab(item.url)">{{item.txt}}</div>
    </div>
    <div class="right">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuArr: [
        {
          txt: "文档",
          url: "wd"
        },
        {
          txt: "知识库",
          url: "know"
        },
        {
          txt: "收藏",
          url: "sc"
        },
        {
          txt: "关注",
          url: "zd"
        }
      ]
    };
  },
  methods: {
    changeTab(url) {
      this.$router.push({ name: url });
    }
  }
};
</script>

<style scoped>
.tab {
  display: flex;
  width: 100%;
  height: 100%;
}
.left1{
  height: 100%;
}
.left{
  width: 100px;
  text-align: center;
  line-height: 30px;
}
.right{
  width: 100%;
  height: 100%;
}
</style>