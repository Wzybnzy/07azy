<template>
  <div class="know">
    <p v-for='item in list' :key='item.id'>{{item.zisiku_name}}{{item.zisiku_info}}
        <el-button type="primary" @click='toregistry({type:"edit",item:item})'>编辑</el-button>
         <el-button type="danger" @click='del(item.id)'>删除</el-button>
    </p>
  </div>
</template>
<script>
import axios from "@/utils/request"
export default {
  data(){
    return{
      list:''
    }
  },
  created() {
    axios.get('/getknow').then(res=>{
      console.log(res.data.data)
      this.list=res.data.data
    })
  },
  methods: {
    del(id){
        axios.get('/delknow',{
          params:{
            id
          }
        }).then(res=>{
          console.log(res)
          if(res.data.code===1){
            alert('删除成功')
             this.list=res.data.data
          }
         
        })
    },
    toregistry(item){
     
       this.$router.push({path:'/home/addknow',query:{item}})
    }
  },
}
</script>
<style>
.know p{
  line-height: 25px;
}
  
</style>