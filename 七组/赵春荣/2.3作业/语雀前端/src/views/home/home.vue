<template>
  <div class="home">
   <header>头部</header>
   <main>
     <router-view></router-view>
   </main>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
  .home{
    width:100%;
    height:300px;
    background-color: #ccc;
    display: flex;
    flex-direction: column;
  }
  .home header{
    width:100%;
    height:30px;
    background-color: skyblue;
  }
  .home main{
    flex:1;
    width:100%;
    background-color: #fff;
  }
</style>