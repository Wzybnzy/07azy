<template>
  <div class="list">
    <div class="list-left">
       <router-link to='/home/list/file'>文档</router-link>
       <router-link to='/home/list/know'>知识库</router-link>
    </div>
      
       <div class="list-right">
           <router-view/>
       </div>
    
  </div>
</template>

<script>
export default {

}
</script>

<style>
.list{
  width: 100%;
  height: 100%;
  display: flex;
}
.list .list-left{
  width: 24%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid black;
}
.list .list-right{
  width: 70%;
  height: 100%;
  display: flex;
}
</style>