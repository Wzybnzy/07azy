<template>
  <div>
     <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="标题">
    <el-input v-model="form.knowtit"></el-input>
  </el-form-item>
  <el-form-item label="内容">
    <el-input v-model="form.knowcon"></el-input>
  </el-form-item>
  <el-form-item label="是否可见">
    <el-select v-model="form.isshow" placeholder="请选择">
      <el-option label="是" value="1"></el-option>
      <el-option label="否" value="0"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">添加</el-button>
    
  </el-form-item>

</el-form>
  </div>
</template>

<script>
import httpAxios from '../../utils/request';
export default {
    data() {
      return {
        form: {
          knowtit: '',
          knowcon: '',
          isshow: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          id:null
        }
      }
    },
    methods: {
     async onSubmit() {
        let {knowtit,knowcon,isshow}=this.form;
        // console.log('submit!',knowtit,knowcon,isshow);
        let uid=JSON.parse(window.localStorage.uid);
        
        if(!this.id){
            //  console.log(uid)
          let res=await httpAxios.post('/api/know/add',{knowtit,knowcon,isshow,uid});
          // console.log(res,"00")
          if(res.data.code==1){
            this.$router.push('/home/list/know');
          }else{
            this.$message('添加知识库失败');
          }
        }else{
          let {id}=this;
          console.log(id)
          let res=await httpAxios.post('/api/know/edit',{knowtit,knowcon,isshow,id});
          console.log(res,"00")
          if(res.data.code==1){
            this.$router.push('/home/list/know');
          }else{
            this.$message('编辑知识库失败');
          }
        }
        
      }
    },
    created(){
      // console.log(this.$route.query.row.id)
       this.id=this.$route.query.row.id;
       this.form.knowtit=this.$route.query.row.knowtit;
       this.form.knowcon=this.$route.query.row.knowcon;
       this.form.isshow=this.$route.query.row.isshow;
    }
  }
</script>

<style>

</style>