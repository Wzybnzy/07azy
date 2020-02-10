<template>
  <div class="index">
      <div class="index-header"></div>
      <div class="index-main">
          <router-view></router-view>
      </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.index{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.index-header{
    width: 100%;
    height: 50px;
    background-color: blue;
}
.index-main{
    flex: 1
}
</style>