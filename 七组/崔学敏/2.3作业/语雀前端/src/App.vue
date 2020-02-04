<template>
  <div id="app">
  
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
  list-style:none;
  text-decoration: none;
  box-sizing: border-box;
}
body,html,#app{
  width:100%;
  height:100%;
}
.home{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  .cont{
    flex:1;
    .list{
  width:100%;
  height:100%;
  display: flex;
  .left{
    width:150px;
    height:100%;
    p{
      width:100%;
      height:50px;
      line-height: 50px;
      text-align: center;
      font-size: 18px;
    }
  }
  .right{
    flex:1;
  }
}
  }
}

</style>
