<template>
  <div>知识库
    <button @click="gotopage">添加编辑</button>
  </div>
</template>

<script>
export default {
  methods:{
    gotopage(){
      this.$router.push("/index/page")
    }
  }
}
</script>

<style>

</style>