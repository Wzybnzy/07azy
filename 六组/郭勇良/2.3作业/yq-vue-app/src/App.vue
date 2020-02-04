<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
  *{
    margin: 0;padding: 0;list-style: none
  }
  a{
    text-decoration: none;
    color: black;
  }
  .router-link-active{
     background: rgb(238, 7, 7);
  color: white;
  }
</style>
