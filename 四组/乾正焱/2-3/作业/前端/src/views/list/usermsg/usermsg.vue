<template>
  <div class="usermsg">
      <p><span>用户名：</span><input type="text" v-model="name"></p>
      <p><span>密码：</span><input type="text" v-model="pwd"></p>
      <p><span>简介：</span><input type="text" v-model="info"></p>
      <button>更新</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            name:window.localStorage.name,
            pwd:window.localStorage.pwd,
            info:"热爱"
        }
    }
}
</script>

<style lang="scss">
.usermsg{
    p{
    line-height: 50px;
    padding:0 20px;
    span{
        width: 70px;
        display: inline-block;
        text-align: center;
        margin-right: 10px;
    }
}
button{
    margin-left:25px;
    padding:0 10px;
    background:blue;
    color:#fff;
    border:none;
}
}
</style>