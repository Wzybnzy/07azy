<template>
  <div class="header">
    <span>语雀</span>
    <span v-if="$route.meta.show">
      <input type="text" placeholder="请输入关键词" />
      <button>搜索</button>
    </span>
    <span>
      <span></span>
      <span>退出</span>
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  width: 100%;
  height: 30px;
  line-height: 30px;
  display: flex;
  justify-content: space-around;
  background-color: blue;
  color: #fff;
}
</style>