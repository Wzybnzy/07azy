<template>
  <el-table :data="list" style="width: 100%">
    <el-table-column label="名称" width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.filename }}</span>
      </template>
    </el-table-column>
    <el-table-column label="归属" width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.username }}/{{scope.row.knowname}}</span>
      </template>
    </el-table-column>
    <el-table-column>
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { listfile, delfile } from "@/api/api.js";
export default {
  data() {
    return {
      list: [],
    };
  },
  async created() {
    let res = await listfile({ uid: JSON.parse(window.localStorage.user).uid });
    this.list = res.data;
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({name:'addfile',params:{...row,flag:false}})
    },
    handleDelete(index, row) {
      this.$confirm("是否删除?", "删除", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          let { uid, id } = row;
          // console.log(uid,id);
          let res = await delfile({ uid, id });
          // console.log(res);
          if (res.data.code == 1) {
            this.list.splice(index, 1);
            this.$message(res.data.mes);
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style>
</style>