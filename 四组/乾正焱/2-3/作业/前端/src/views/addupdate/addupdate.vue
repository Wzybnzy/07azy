<template>
  <div class="addupdate">
    <p>
      <span>名称：</span>
      <input type="text" placeholder="标题" v-model="title" />
    </p>
    <p>
      <span>简介：</span>
      <textarea name id cols="30" rows="10" placeholder="在这里输入简介" v-model="info"></textarea>
    </p>
    <p>
      <span></span>
      <select name id>
        <option value="是否可见">是否可见</option>
        <option value="1">可见</option>
        <option value="0">不可见</option>
      </select>
    </p>
    <p>
      <button @click="clickbtn">新建</button>
    </p>
  </div>
</template>

<script>
import axios from "@/utils/request.js";
export default {
  data() {
    return {
      title: "",
      info: "",
      isshow: 1,
      uid: window.localStorage.uid,
      id: "",
      obj: this.$route.query
    };
  },
  async created() {
    let { id, info, isshow, title, uid } = this.obj;
    this.title = title;
    this.info = info;
    // this.isshow = isshow;
    this.id = id;
  },
  methods: {
    async clickbtn() {
      let { title, info, isshow, uid, id } = this;
      if (id) {//编辑
        let res = await axios.post("/api/knowledge/updata", {title,info,isshow, uid,id});
        // console.log(res)
        if (res.data.code === 1) {
          // 编辑成功
          this.$router.push("/list/know");
        } else {
          alert("编辑失败");
        }
      }else{//添加
        let res = await axios.post('/api/knowledge/add',{title,info,isshow,uid});
        console.log(res)
        if(res.data.code===1){
            this.$router.push("/list/know");
        }else{
            alert('添加失败')
        }
      }
    }
  }
};
</script>

<style>
</style>