<template>
  <div class="app">
       <item></item>
  </div>
</template>

<script>
import item from './components/item';
export default {
  name: 'app',
  components:{
      item
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
  list-style:none;
}
.app{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  font-size: 13px;
}
</style>
