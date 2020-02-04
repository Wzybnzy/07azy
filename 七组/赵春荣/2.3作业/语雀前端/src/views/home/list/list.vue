<template>
  <div class='list'>
     <div class='search'>
        <input placeholder="查找" v-if='$route.meta.show' class="input"/>
       <button class="btn">查找</button>
     </div>
     <router-view></router-view>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
  .list{
    width:100%;
    height:100%;
    display: flex;
    flex-direction: column;
  }
  .search{
    width:100%;
    height: 60px;
    display: flex;
  }
  .list .input{
    width:200px;
    height: 25px;
    float: left;
  }
  .list .btn{
    width:40px;
    height:25px;
     float: right;
  }
</style>