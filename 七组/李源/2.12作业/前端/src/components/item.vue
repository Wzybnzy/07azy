<template>
  <div class="item">
       <router-view></router-view>
       <router-link to ='/books' class = 'lis'></router-link>
       <router-link to ='/xians' class = 'lis'></router-link>
       <router-link to ='/login' class = 'lis'></router-link>
  </div>
</template>

<script>
export default {
  name: 'item',
}
</script>
<style>
*{
  margin:0;
  padding:0;
  list-style:none;
}
.item{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  font-size: 13px;
}
.lis{
  width:0px;
  height:0px;
}
</style>
