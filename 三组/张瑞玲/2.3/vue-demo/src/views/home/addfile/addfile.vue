<template>
  <div>
    <!-- <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="名称">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="addfile">{{flag ? '新建文档' :'编辑文档'}}</el-button>
      </el-form-item>
    </el-form> -->
      <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="">
    <el-input v-model="form.job"></el-input>
  </el-form-item>
  <el-form-item label="">
    <el-input v-model="form.jobid"></el-input>
  </el-form-item>
  <el-form-item label="是否加密">
    <el-select v-model="form.region" placeholder="">
      <el-option label="是" value="1"></el-option>
      <el-option label="否" value="2"></el-option>
    </el-select>
  </el-form-item>  
  <el-form-item label="内容">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
     <el-button type="primary" @click="onfileSubmit">{{!id?'添加文档':'编辑文档'}}</el-button>
  </el-form-item>
      </el-form>
  </div>
</template>

<script>
// import axios from 'axios'
// export default {
//   data() {
//     return {
//       form:{
//         title:'',
//         desc:''
//       },
//       flag:false
//     }
//   },
//   created(){
//     console.log(this.$route);
//     let { file_name, file_info,flag } = this.$route.params;
//     this.form = {
//       title: file_name,
//       desc: file_info
//     };
//     this.flag = flag;
//   },
//   methods: {
//     async addfile(){
//       console.log(this.$router)
//       let {kid,uid,isshow,flag,id}=this.$route.params
//       if(flag){
//         let res=await axios.post('/api/file/add',{
//            file_name: this.form.title, 
//           file_info: this.form.desc, 
//           know_id: kid, 
//           isshow: isshow + "", 
//           uid: uid 
//         })
//         if(res.data.code==1){
//           this.$routeer.push({name:"file"})
//         }else{
//            let res = await axios.post('/api/flie/update',{
//           file_name:this.form.title,
//           file_info:this.form.desc,
//           id, 
//           uid
//         });
//         if(res.data.code == 1){ 
//           //编辑成功
//           this.$router.push({name:'file'})
//         }
//         }
//       }
//     }
//   }
// }
//import axios from 'axios'
export default {
  data() {
    return {
      form:{
         name:'',
         desc:'',
         region:'',
         job:'',
         jobid:''
      },
      id:null,
      uid:null
    }
  },
  created(){
     let {id, file_name, file_info, isshow, uid ,know_id} = this.$route.params;
    this.form = {
      name: file_name,
      region: isshow ? isshow + "" : '1',
      desc: file_info,
      jobid:know_id
    };
    this.id = id ? id : null;
    this.uid = uid ? uid : null;
  },
   methods: {
     onfileSubmit(){
       this.$router.push({name:'file'})
     }
  //   async onfileSubmit() {
  //      let {name,region,desc,job} = this.form;
  //     let {id}=this
  //     if(!id) {
  //       let res =await axios.post('/api/file/add',{
  //           file_name:name,
  //          file_info:desc,
  //          isshow:region,
  //           uid:job
  //       })
  //        if(res.data.code == 1){ 
  //          this.$router.push({name:'file'});
  //      }
  //      console.log(res);
  //     }else{
  //        let res = await axios.post('/api/file/update',{
  //         know_name: name,
  //         know_info: desc,
  //         isshow: region,
  //         uid: this.uid,
  //         id: this.id
  //     })
  //     if (res.data.code == 1) {
  //         this.$message("编辑成功");
  //         this.$router.push({name:'file'})
  //       }
  //     }
  //   }
   }
}
</script>

<style>

</style>