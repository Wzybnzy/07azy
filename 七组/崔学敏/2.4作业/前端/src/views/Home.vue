<template>
  <div class="home">
<Header/>
<div class="cont">
<router-view/>
</div>
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
components:{
    Header
}
}
</script>

<style lang='scss'>

</style>