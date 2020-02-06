<template>
  <div class="home">
    <div class="home-header">
       <p class="one">
         <input type="text" name="" id="">
         <span>搜索</span>
       </p>
       <p class="two">
         <small>
           +
         </small>
         <span>
           姓名
         </span>
         <span>
           退出
         </span>
       </p>
    </div>
    <div class="home-main">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.home{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.home-header{
  width: 100%;
  height: 50px;
  display: flex;
  /* justify-content: space-around; */
  background: blue;
}
.one{
  width: 36%;
  height: 100%;
  display: flex;
  justify-content: space-around;
}
.one input{
  width: 70%;
  height: 30%;
}
.two{
  width: 64%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
}
.two span{
  width: 60px;
  height: 100%;
}
</style>