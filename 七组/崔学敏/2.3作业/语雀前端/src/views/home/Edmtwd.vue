<template>
  <div class="edmtwd">
      <p>
          <input type="text" placeholder="编辑标题"/>
      </p>
      <div>
          <textarea name="" id="" cols="30" rows="10" placeholder="在这里输入内容"></textarea>
      </div>
      <p>
          <button>发布</button>
      </p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss' scoped>
.edmtwd{
    width:100%;
    height: 100%;
    p{
        width:100%;
        height:30px;
        text-align: center;
        line-height: 30px;
        button{
           width:80px;
        height:40px;
        line-height: 40px;
        text-align: center;
        background-color: blue;
        outline: none;
        border:0;
        margin-right: 100px;
        color:#fff;
        font-size: 20px; 
        }
    }
    div{
        width:100%;
        height:300px;
        text-align: center;
    }
}
</style>