<!-- registry -->
<template>
    <div>
      <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.pwd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="registry">注册</el-button>
      </el-form-item>
    </el-form>
    </div>
</template>

<script>
import httpAxios from './../utils/requset.js'
export default {
  components: {},
  data () {
    return {
      form:{ 
          name:"",
          pwd:""
      } ,
      isShow:false
    };
  },

  computed: {},

 // mounted: {},

  methods: {
    async registry(){
       const {name,pwd} = this.form
       let res = await httpAxios.post("/api/registry",{name,pwd}) 
       console.log(res.data);
       
       if(res.data.code==1){
              alert(res.data.mes);
                this.$router.go(-1);
            }else{
           this.$message(res.data.mes);
      }
    },
     
  }
}

</script>
<style lang='scss' scoped>

</style>