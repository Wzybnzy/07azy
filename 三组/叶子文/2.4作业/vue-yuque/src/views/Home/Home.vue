<template>
  <div class="home">
    <header>
      <h2>语雀</h2>
      <p v-if="this.$route.meta.show">
        <input type="text" placeholder="输入内容" />
        <span class="button">搜索</span>
      </p>
      <div>
        <span v-show="this.$route.meta.show" @click="addClick">+</span>
        <span v-show="!this.$route.meta.show" class="placeholder"></span>
        <b class="user">欢迎您：{{name}}</b>
        <p>[ 退出 ]</p>
        <ul v-show="isShow">
          <li>新建文档</li>
          <li @click="addKnow">新建知识库</li>
        </ul>
      </div>
    </header>

    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      name: ""
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
    // 新建知识库
    addKnow() {
      this.isShow = false;
      this.$router.push({ name: "addknow" });
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
