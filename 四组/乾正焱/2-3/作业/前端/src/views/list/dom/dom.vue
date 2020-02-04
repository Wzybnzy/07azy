<template>
  <div class="dom">
       <ul>
          <li>
              <p>名称</p>
              <p>简介</p>
              <p>操作</p>
          </li>
          <li v-for="(item,index) in list" :key="index">
              <p>{{item.file_title}}</p>
              <p>{{item.file_con}}</p>
              <p>
                  <button @click="$router.push({path:'/changefile',query:item})">编辑</button>
                  <button @click='del(item.id)'>删除</button>
              </p>
          </li>
      </ul>
  </div>
</template>

<script>
import axios from "@/utils/request.js";
export default {
  data(){
    return {
      list:[],
      uid:window.localStorage.uid
    }
  },
  async created(){
    let res = await axios.get('/api/files/list?uid='+this.uid)
    // console.log(res);
    if(res.data.code===1){
      this.list = res.data.data;
    }
  },
  methods:{
    async del(id){
      let{uid,list} = this;
      let res = await axios.get('/api/files/delete?uid='+uid+'&id='+id);
      console.log(res);
      if(res.data.code===1){
        let index = list.findIndex(item=>item.id==id);
        list.splice(index,1);
      }else{
        alert('删除文档失败！')
      }
    }
  }
}
</script>

<style lang="scss">
.dom{
    width: 100%;
    height: 100%;
    li{
        display: flex;
        p{
            flex:1;
            text-align: center;
            line-height: 35px;
            border-bottom: 1px solid #ccc;
            button{
                margin-right: 10px;
                padding:0 10px;
            }
        }
    }
}

</style>