<template>
  <div class="start">
      <el-container id="start-containter">
        <el-aside width="200px" id="start-l">
            <router-link to="/index/start/doc"><el-tag>文档</el-tag></router-link>
            <router-link to="/index/start/know"><el-tag>知识库</el-tag></router-link>
            <router-link to="/index/start/collect"><el-tag>收藏</el-tag></router-link>
            <router-link to="/index/start/attention"><el-tag>关注</el-tag></router-link>
            <router-link to="/index/start/person"><el-tag>个人</el-tag></router-link>
        </el-aside>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.start{
    width: 100%;
    height: 100%;
}
#start-containter{
    width: 100%;
    height: 100%;
}
#start-l{
    display: flex;
    flex-direction: column;
    align-items: center;
   
    a{
        width: 100%;
        margin: 7px;
         span{
        width: 100%;
        text-align: center;
        
    }
    }
}
</style>