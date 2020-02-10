<template>
  <div class="changefile">
      <p><input type="text" placeholder="文档标题" v-model="title"></p>
      <textarea name="" id="" cols="30" rows="10" placeholder="在这里输入内容" v-model="info"></textarea>
      <button @click="publish">发布</button>
  </div>
</template>

<script>
import axios from "@/utils/request.js";
export default {
    data(){
        return {
            title:"",
            info:"",
            uid:window.localStorage.uid,
            kid:"",
            id:""
        }
    },
    async created(){
        console.log(this.$route.query)
        let {id,file_title,file_con,uid,kid} = this.$route.query;
        this.title = file_title;
        this.info = file_con;
        this.kid = kid;
        this.id = id;
    },
    methods:{
        async publish(){
            let {title,info,uid,kid,id} = this;
            if(!kid){//添加
                let res = await axios.post('/api/files/add',{file_title:title,file_con:info,uid,kid:1})
                // console.log(res)
                if(res.data.code===1){
                    this.$router.push('/list/dom');
                }else{
                    alert('文档添加失败')
                }
            }else{//编辑
                let res = await axios.post('/api/files/updata',{file_title:title,file_con:info,uid,id});
                // console.log(res)
                if(res.data.code===1){
                    this.$router.push('/list/dom');
                }else{
                    alert('编辑文档失败')
                }
            }
        }
    }
}
</script>

<style>

</style>