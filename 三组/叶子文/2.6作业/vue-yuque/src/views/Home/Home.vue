<template>
  <div class="home">
    <header>
      <h2>语雀</h2>
      <p v-if="this.$route.meta.show">
        <input type="text" v-model="iptVal" placeholder="输入内容" />
        <span class="button" @click="toSearch">搜索</span>
      </p>
      <div>
        <span v-show="this.$route.meta.show" @click="addClick">+</span>
        <span v-show="!this.$route.meta.show" class="placeholder"></span>
        <b class="user">欢迎您：{{name}}</b>
        <p>[ 退出 ]</p>
        <ul v-show="isShow">
          <li @click="addDoc">新建文档</li>
          <li @click="addKnow">新建知识库</li>
        </ul>
      </div>
    </header>
    <el-dialog
      title="新建文档"
      class="dialog"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <div v-for="(item,index) in knowList" @click="toAddDoc(item)" :key="index">
        <i class="el-icon-notebook-1"></i>
        {{name}} / {{item.know_name}}
      </div>
    </el-dialog>

    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { knowList } from "@/api/api";

export default {
  data() {
    return {
      //  el-icon-notebook-1
      isShow: false,
      name: "",
      dialogVisible: false,
      knowList: [],
      iptVal: ""
    };
  },
  created() {
    this.name = localStorage.getItem("name");
  },
  methods: {
    // 点击加号
    addClick() {
      this.isShow = !this.isShow;
    },
    // 搜索
    toSearch() {
      let { iptVal } = this;
      if (!iptVal) {
        this.$toasts(this, { data: { msg: "请输入搜索内容" } });
        return;
      }
      this.$router.push({ name: "search", params: { iptVal } });
    },
    // 新建知识库
    addKnow() {
      this.isShow = false;
      this.$router.push({ name: "addknow" });
    },
    // 新建文档
    toAddDoc(item) {
      this.dialogVisible = false;
      this.$router.push({ name: "adddoc", params: { ...item, flag: true } });
    },
    // 新建文档遮罩
    async addDoc() {
      this.isShow = false;
      this.dialogVisible = true;
      let res = await knowList({
        uId: JSON.parse(localStorage.getItem("uId"))
      });
      if (res.data.code == 1) {
        this.knowList = res.data.data;
      }
    },
    handleClose(done) {
      done();
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  line-height: 50px;
  header {
    width: 100%;
    height: 50px;
    background: rgba(46, 21, 187, 0.959);
    position: relative;
    display: flex;
    justify-content: space-between;

    p {
      display: flex;
      align-items: center;
    }
    h2 {
      height: 100%;
      text-align: center;
      color: #fff;
      margin-left: 10%;
    }
    input {
      transform: translate(-20%);
      outline: none;
      border: 1px solid #fff;
      background: rgba(46, 21, 187, 0.959);
      height: 25px;
      border-radius: 3px;
      padding-left: 5px;
      color: #fff;
    }
    ::-webkit-input-placeholder {
      color: #fff;
    }
    .button {
      display: inline-block;
      height: 25px;
      line-height: 25px;
      transform: translate(-50%);
      font-size: 12px;
      padding: 0 7px;
      outline: none;
      color: #fff;
      background: #666;
      font-size: 12px;
      cursor: pointer;
    }
  }
}
.el-dialog__body > div {
  border-bottom: 1px solid #e8e8e8;
  cursor: pointer;
  z-index: 999;
}
.el-icon-notebook-1 {
  font-size: 16px;
}

.home header > div {
  width: 20%;
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #fff;
  position: relative;
  ul {
    position: absolute;
    width: 90px;
    height: 70px;
    border-radius: 5px;
    border: 1px solid black;
    text-align: center;
    bottom: -70px;
    left: -35px;
    color: black;
    z-index: 999;
    li {
      height: 35px;
      line-height: 35px;
      font-size: 12px;
      cursor: pointer;
    }
  }
  p {
    font-size: 12px;
    margin-left: 10%;
    cursor: pointer;
  }
  span {
    display: inline-block;
    width: 21px;
    height: 21px;
    background: #fff;
    border-radius: 50%;
    text-align: center;
    line-height: 21px;
    color: #666;
    font-size: 20px;
    cursor: pointer;
  }
  .placeholder {
    background: rgba(0, 0, 0, 0);
  }
  .user {
    margin-left: 10%;
    font-weight: 300;
  }
}
</style>
