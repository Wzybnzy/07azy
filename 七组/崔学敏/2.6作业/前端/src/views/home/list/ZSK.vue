<template>
  <div class="zsk">
    <div class="top">
      <div>名称</div>
      <div>简介</div>
      <div>操作</div>
    </div>
    <div class="bottom" v-for="(item,index) in tableData" :key="index">
      <div>{{item.title}}</div>
      <div>{{item.content}}</div>

      <el-row>
        <el-button type="primary" @click="edmt(item)">编辑</el-button>
        <el-button type="danger" @click="del(item.id)">删除</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
import httpAxios from "@/utils/request.js";
export default {
  data() {
    return {
      tableData: []
    };
  },
  methods: {
    //删除
    async del(id) {
      this.$confirm("确定要删除吗?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          let res = await httpAxios.get("/api/del", { params: { id } });
          if (res.data.code == 1) {
            let index = this.tableData.findIndex(item => item.id == id);
            this.tableData.splice(index, 1);
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //编辑跳路由
    edmt(item){
     
      this.$router.push({path:'/home/edmtzsk',query:{...item}})
    }
  },
  //获取数据
  async created() {
  
    let res = await httpAxios.get("/api/lists", {
      params: {
        uid: JSON.parse(window.localStorage.user).uid,
        _csrf: document.cookie.split("=")[1]
      }
    });
    console.log(res);
    if (res.data.code == 1) {
      this.tableData = res.data.data;
    }
  }
};
</script>

<style lang="scss">
.zsk {
  width: 100%;
  height: 100%;
  padding-top: 100px;
}
.top {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  border-bottom: 1px solid #ccc;

  div {
    flex: 1;
    height: 50px;
    text-align: center;
  }
}

.bottom {
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  border-bottom: 1px solid #ccc;
  div {
    flex: 1;
    height: 50px;
    text-align: center;
  }
}
</style>