<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="名称">
    <el-input v-model="zisiku_name"></el-input>
  </el-form-item>
  <el-form-item label="是否可见">
    <el-select v-model="isshow" placeholder="是否可见">
      <el-option label="是" value="1"></el-option>
      <el-option label="否" value="0"></el-option>
    </el-select>
  </el-form-item>

  <el-form-item label="简介">
    <el-input type="textarea" v-model="zisiku_info"></el-input>
  </el-form-item>
    <el-button type="primary" @click='finish'>完成</el-button>

</el-form>
  </div>
</template>
<script>
import {addknow,updateknow} from '../../../api/api'
  export default {
    data() {
      return {
         zisiku_info: '',
          zisiku_name: '',
          isshow: '',
          id:''
      }
    },
    created() {//先拿出来 编辑页面 带过来的参数 并赋值给 v-medel
      const {zisiku_info,zisiku_name,isshow, id}=this.$route.query.item.item;
      console.log(zisiku_info,zisiku_name,isshow, id);
      this.zisiku_info=zisiku_info;
      this.zisiku_name=zisiku_name;
      this.isshow=isshow;
     this.id=id;
    },

    methods: {
      finish(){//点完成
           const { zisiku_info, zisiku_name, isshow,id}=this;
           const uid=window.localStorage.id;
        if(!id){//判断有无 id 选择是增加还是 删除
            addknow({zisiku_info, zisiku_name, isshow,uid}).then(res=>{
                    if(res.data.code===1){
                    alert('添加知识库成功')
                    this.$router.push('/home/list')
                    }
                  }) 
        }else{//修改情况
       
          const { zisiku_info, zisiku_name, isshow,id}=this;
           const uid=window.localStorage.id;
           updateknow({zisiku_info, zisiku_name, isshow,id,uid}).then(res=>{
             console.log(res)
             if(res.data.code==1){
               alert('修改成功')
                 this.$router.push('/home/list')
             }
           })
        }
      }
    }
  }
</script>
<style lang="">
  
</style>