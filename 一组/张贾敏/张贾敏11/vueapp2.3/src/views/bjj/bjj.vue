<template>
  <div class="bj">
     <div class="top">
       <span>语雀</span>
       <span class="aa">欢迎<p></p>退出</span>
     </div>
     <div class="main">
       <div class="mian_page">
          <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
  <el-form-item label="名称">
    <el-input v-model="formLabelAlign.title"></el-input>
  </el-form-item>
  <el-form-item label="活动形式">
    <el-input type="textarea" v-model="formLabelAlign.con"></el-input>
  </el-form-item>
   <el-form-item label="">
     <el-select v-model="formLabelAlign.time" placeholder="活动区域">
      <el-option label="是" value="0"></el-option>
      <el-option label="否" value="1"></el-option>
    </el-select>
  </el-form-item>
   <el-button @click="add">编辑</el-button>
</el-form>
       </div>
     </div>
  </div>
</template>

<script>
import httpAxios from '../../utils/request';
export default {
 data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          title: '',
          con: '',
          isshow: '',
          time:'',
            // id:null
        },
         id:null
      };
    },
    methods:{
    async add(){
        console.log(this.id,"11111111111")
    let res=await httpAxios.post('/api/updata',{title,con,id});
       console.log(res)
      }
    },
    created(){
      console.log(this.$route.query.row.id)
      this.id=this.$router.query.row.id;
      this.formLabelAlign.title=this.$router.query.row.title;
      this.formLabelAlign.con=this.$router.query.row.con;
    //    this.formLabelAlign.con=this.$router.query.row.con
    }
}
</script>

<style lang="scss" scoped>
     .bj{
       width: 100%;
       height: 100%;
         display: flex;
       flex-direction: column;
     }
     .top{
       width: 100%;
       height: 50px;
       display: flex;
       justify-content: space-between;
       border-bottom: 1px solid #ccc;
       align-items: center;
     }
     .aa{
       display: flex;
     }
     .main{
       flex: 1;
       overflow: auto;
     }
     .main>div{
       display: flex;
       flex-direction: column;
       width: 50%;

     }
</style>