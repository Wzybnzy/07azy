<template>
  <div class="edmtzsk">
      <p>
          <span>名称</span><input type="text" placeholder="编辑标题"/>
      </p>
      <div>
          <span>简介</span><textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
      <p>
          <span></span><select name="" id="" placeholder="是否可见">
              <option value="">是否可见</option>
              <option value="">是</option>
              <option value="">否</option>
          </select>
      </p>
      <p>
          <button>新建</button>
      </p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.edmtzsk{
    width:100%;
    height:100%;
p,div{
    width:100%;
    height:50px;
    display: flex;
    margin-top: 20px;
    span{
        display: inline-block;
        width:100px;
        height: 50px;
        text-align: center;
        line-height: 50px;
    }
    button{
        width:80px;
        height:40px;
        line-height: 40px;
        text-align: center;
        background-color: blue;
        outline: none;
        border:0;
        margin-left: 100px;
        color:#fff;
        font-size: 20px;
    }
}
}
</style>