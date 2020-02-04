<template>
  <div class="registry">
      <div class="registry-box">
        <p><input placeholder="名字" v-model="user"></p>
        <p><input placeholder="密码" v-model="pwd"></p>
        <p><input type="button" value="注册" id=""></p>
      </div>
  </div>
</template>

<script>
export default {
 data(){
   return {
     user:'',
     pwd:''
   }
 }
}
</script>

<style>

</style>