<template>
  <div class="index">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-menu-item
            :index="index + ''"
            v-for="(item,index) in list"
            @click="leftClick(item.url)"
            :key="index"
          >
            <i :class="item.icon"></i>
            {{item.text}}
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          text: "文档",
          url: "doc",
          icon: "el-icon-s-home"
        },
        {
          text: "知识库",
          url: "know",
          icon: "el-icon-message"
        },
        {
          text: "收藏",
          url: "collect",
          icon: "el-icon-folder-opened"
        },
        {
          text: "关注",
          url: "att",
          icon: "el-icon-plus"
        },
        {
          text: "个人信息",
          url: "pim",
          icon: "el-icon-postcard"
        }
      ]
    };
  },
  methods: {
    leftClick(url) {
      if (this.$route.name != url) {
        this.$router.push({ name: url });
      }
    }
  }
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>