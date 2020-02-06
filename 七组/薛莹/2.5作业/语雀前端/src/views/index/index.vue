<template>
  <div class="index">
      <div class="header">
          <h3>语雀</h3>
          <div class="input-box" v-if="$route.meta.show">
              <input type="text">
              <button>搜索</button>
          </div>
          <p class="con">
            <span @click="show">+</span>
            <span>欢迎您 {{name}}</span>
            <span>退出</span>
          </p>
          <ul :class="['ul', isshow ? 'add' : '']">
              <li @click="goToknow">新增知识库</li>
              <li @click="showdia">新增文件</li>
          </ul>
      </div>
      <div class="main">
          <router-view></router-view>
      </div>
      <dialogvue v-if="ischeck">
          <div class="know-box">
              <p>请选择知识库</p>
              <p v-for="(item,index) in listdata" :key="index" @click="goTofile(item.id,item.ischeck)">{{item.knowname}}</p>
          </div>
      </dialogvue>
  </div>
</template>

<script>
import dialogvue from "../../components/dialog";
import {list} from "../../api/api";
export default {
    data(){
        return {
            isshow:false,
            name:window.localStorage.name,
            ischeck:false,
            listdata:[]
        }
    },
    components:{
        dialogvue
    },
    async mounted(){
        let res=await list({uid:window.localStorage.uid});
        this.listdata=res.data.data;
        console.log(this.listdata)
    },
    methods:{
        show(){
            this.isshow=!this.isshow
        },
        showdia(){
            this.isshow=!this.isshow
            this.ischeck=true
        },
        goToknow(){
            this.isshow = false;
            this.$router.push("/index/addknow")
           
        },
        goTofile(id,ischeck){
            this.isshow = false;
            this.$router.push({path:"/index/addfile",query:{item:{id,ischeck}}})
            this.ischeck=false;
        }
    }
}
</script>

<style scoped lang="scss">
    .index{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .header{
        width: 100%;
        height: 50px;
        background: skyblue;
        color: #fff;
        display: flex;
        justify-content: space-around;
        align-items: center;
        span{
            padding: 0 10px;
        }
    }
    .con{
        position: relative;
    }
    .ul{
        position: absolute;
        top: 50px;
        right: 145px;
        color: #000;
        border:1px solid; 
        z-index: 9;
        display: none;
    }
    .ul.add{
        display: block;
    }
    .main{
        width: 100%;
        flex: 1;
        overflow: auto;
    }
</style>