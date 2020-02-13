<template>
  <div class="shou">
        首页
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'shou',
  data(){
      return{
         node:[
                    
              ],
        name:'',
        age:''
      }
  },

  mounted(){
      
  },
}
</script>
<style>
.heads{
  width:100%;
  height:50px;
  background: #000;
}
.active{
   position: fixed;
   top:50px;
   z-index: 999;
}
.liu{
  width:100%;
  height:60px;
  line-height: 40px;
  text-align: center;
}
</style>
