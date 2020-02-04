<template>
  <div class="know">
      <ul>
          <li>
              <p>名称</p>
              <p>简介</p>
              <p>操作</p>
          </li>
          <li v-for="(item,index) in list" :key="index">
              <p>{{item.title}}</p>
              <p>{{item.info}}</p>
              <p>
                  <button @click="$router.push({path:'/addupdate',query:item})">编辑</button>
                  <button @click='del(item.id)'>删除</button>
              </p>
          </li>
      </ul>
  </div>
</template>

<script>
import axios from "../../../utils/request.js"
export default {
    data(){
        return {
            list:[],
            uid:window.localStorage.uid
        }
    },
    async created(){
        let res = await axios.get('/api/knowledge/list?uid='+this.uid);
        // console.log(res)
        if(res.data.code===1){
            // 查看知识库成功
            this.list = res.data.list;
        }
    },
    methods:{
        // 点击删除
        async del(id){
            let {uid,list} = this;
            let res = await axios.get('/api/knowledge/delete?uid='+uid+'&id='+id);
            console.log(res);
            if(res.data.code===1){
                let index = list.findIndex(item=>item.id==id);
                list.splice(index,1);
            }else{
                alert('删除数据库失败')
            }


        }
    }
}
</script>

<style lang="scss">
.know{
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