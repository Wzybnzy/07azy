<template>
  <div>
    <header>
      <div class="headerleft">
        <h3>语雀</h3>
        <div v-if="$route.meta.show">
          <input placeholder="请输入搜索内容" v-model="input" />
          <button @click="goToSearch">搜索</button>
        </div>
      </div>
      <div class="headerright">
        <div @click="showmenu">+</div>
        <div>欢迎您：{{name}}</div>
        <span>退出</span>
      </div>
      <ul :class="['headermenu',!flag?'none':'']">
        <li @click="goTofile">新建文档</li>
        <li @click="goToknow">新建知识库</li>
      </ul>
      <div v-if="show" class="fn">
        <h4>新建文档</h4>
        <div v-for="(item,index) in list" :key="index">
          {{item.knowname}}
          <button @click="fn(item.id,item.isshow,item.uid)">选择</button>
        </div>
      </div>
    </header>
    <div class="bottom">
      <router-view />
    </div>
  </div>
</template>

<script>
import { listknow } from "@/api/api.js";
export default {
  data() {
    return {
      list: [],
      name: JSON.parse(window.localStorage.user).name,
      input: "",
      flag: false,
      show: false,
      uid: JSON.parse(window.localStorage.user).uid
    };
  },
  methods: {
    showmenu() {
      this.flag = !this.flag;
    },
    goToknow() {
      (this.flag = false), this.$router.push({ name: "addknow" });
    },
    async goTofile() {
      this.flag = false;
      this.show = true;
      let { uid } = this;
      let res = await listknow({ uid });
      this.list = res.data;
    },
    fn(knowid,isshow,uid){
      this.show = false
      this.$router.push({name:'addfile',params:{knowid,uid,isshow,flag:true}})
    },
    goToSearch(){
      this.$router.push({name:'search',params:{search:this.input}})
    }
  }
};
</script>

<style scoped>
header {
  width: 100%;
  height: 40px;
  display: flex;
  line-height: 30px;
}
.fn {
  position: absolute;
  top: 40px;
  left: 400px;
  width: 400px;
  height: 150px;
  background: #eee;
  z-index: 999;
}
.bottom {
  width: 100%;
  height: 100%;
}
.tab {
  display: flex;
}
.headermenu {
  position: absolute;
  width: 100px;
  height: 55px;
  background: #eee;
  text-align: center;
  right: 135px;
  top: 40px;
  z-index: 999;
}
h3 {
  margin: 0 10px;
}
.none {
  display: none;
}
.headermenu > li {
  line-height: 26px;
  list-style: none;
}
.headerleft,
.headerleft > div {
  display: flex;
}
.headerright {
  display: flex;
  position: absolute;
  right: 30px;
  top: 5px;
}
.headerleft > div input {
  width: 100px;
  height: 20px;
  margin-top: 3px;
  line-height: 30px;
  margin-left: 50px;
}
.headerleft > div button {
  height: 20px;
  line-height: 20px;
  margin-left: 20px;
  margin-top: 5px;
}
.headerright > div:nth-child(1) {
  height: 20px;
  width: 20px;
  line-height: 20px;
  margin-top: 5px;
  margin-right: 10px;
  border: 1px solid #ccc;
  text-align: center;
  border-radius: 100%;
}
</style>