<template>
  <div class="dialog">
      <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
    .dialog{
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0,0,0,.4);
    }
    .box{
        width: 200px;
        height: 80px;
        background: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        margin:-40px 0 0 -100px;
    }
    .know-box{
        width: 200px;
        background: #fff;
        margin: 200px;
    }
    
</style>