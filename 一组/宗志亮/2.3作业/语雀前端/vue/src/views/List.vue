<template>
    <div class="list">
        <div class="left">
            <router-link to="/list/wd">文档</router-link>
            <router-link to="/list/collect">收藏</router-link>
            <router-link to="/list/gz">关注</router-link>
            <router-link to="/list/my">个人信息</router-link>
            <router-link to="/list/zsk">知识库</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.list{
    width: 100%;
    height: 100%;
    
}
.left{
    width: 20%;
    height: 200px;
    display: flex;
    flex-direction: column;
}
</style>
