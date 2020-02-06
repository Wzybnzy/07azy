<template>
  <div id="app">
    <header>
      <div class="jia" @click="show">+</div>
    </header>
    <div class="inner" v-if="isshow">
      <p @click="newjian">新建知识库</p>
      <p>新建文档</p>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isshow:false
    }
  },
  methods:{
    show(){
      this.isshow = !this.isshow
    },
    newjian(){
      this.$router.push("/bjzsku")
      this.isshow = false
    }
  }
}
</script>
<style lang="scss">
body,html,#app {
    width:100%;
    height:100px;
}
header {
  width: 100%;
  height: 40px;
  background: skyblue;
  .jia {
    position: absolute;
    top: 0;
    right: 10%;
    font-size: 30px;
  }
}
.inner {
  width: 150px;
  text-align: center;
  position: absolute;
  top: 40px;
  right: 6%;
  border:1px solid #ccc;
}
*{
  margin: 0;padding: 0;list-style: none;
}

</style>
