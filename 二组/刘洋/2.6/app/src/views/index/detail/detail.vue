<template>
  <div class="detail">
    <div class="detail-l">
         <el-button type="info" plain v-for="(item,index) in leftlist" :key="index" @click="todetial(item)">{{item.fname}}</el-button>

    </div>
    <div class="detail-r">
      <p>{{item.fname}}</p>

      <p>{{item.fcont}}</p>
    </div>
  </div>
</template>

<script>
import httpAxios from '@/utils/request'
export default {
  data() {
    return {
      item: this.$route.query.item,
      leftlist:[]
    };
  },
  methods:{
      todetial(item){
          this.item=item
      }
  },
 async created() {
    console.log(this.$route.query.item.kid);
    let res=await httpAxios.get(`/api/kdoclist?kid=${this.$route.query.item.kid}`)
    this.leftlist=res.data.data
    console.log(this.leftlist)

  }
};
</script>

<style lang="scss">
.detail {
  width: 100%;
  height: 100%;
  display: flex;
  .detail-l {
    flex: 3;
    border-right: 1px solid #ccc;
    display: flex;
    flex-direction: column;

    button{
        width: 100%;
        margin: 0;
    }
  }
  .detail-r {
    flex: 7;

    padding: 20px;
  }
}
</style>