<template>
  <div>
    <!-- <el-table :data="list" style="width: 100%">
      <el-table-column label="名称" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.file_name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="归属" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px"
            >{{ scope.row.username }} / {{ scope.row.kname }}</span
          >
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table> -->
  </div>
</template>

<script>
// import { filelist, filedel } from "@/api/api";
// export default {
//   data() {
//     return {
//       list: []
//     };
//   },
//   async created() {
//     let res = await filelist({
//       uid: JSON.parse(window.localStorage.user).uid
//     });
//     if (res.data.code == 1) {
//       this.list = res.data.data;
//     }
//     console.log(res);
//   }
//   }
</script>

<style>

</style>