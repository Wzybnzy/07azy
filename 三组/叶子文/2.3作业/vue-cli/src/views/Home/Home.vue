<template>
  <div class="home">
    <header>
      <h3>语雀</h3>
      <p v-if="this.$route.meta.show">
        <input type="text" />
        <button>搜索</button>
      </p>
      <div>
        <span>+</span>
        <img src alt />
        <p>退出</p>
      </div>
    </header>

    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  header {
    width: 100%;
    height: 50px;
    background: blue;
    display: flex;
  }
}
.home > div {
  flex: 1;
}
</style>