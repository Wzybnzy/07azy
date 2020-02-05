<template>
  <div class="toast" v-show="show">
      {{msg}}
  </div>
</template>

<script>
export default {
    data(){
        return {
            msg:'content',
            show:false
        }
    }
}
</script>

<style scoped>
.toast{
    width: 30%;
    height: 8%;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
    position: fixed;
    border-radius: 30px;
    left:50%;
    margin-left: -15%;
    top: 50%;
    margin-top: -5%;
    z-index: 999;
    animation: fymain 1s;
}
@keyframes fymain {
    100%{
        background: rgba(0,0,0,0.9)
    }
}
</style>