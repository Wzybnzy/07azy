<template>
  <div class="know">
    <div class="form">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="名称" width="180">
          <template slot-scope="scope">
            <!-- <i class="el-icon-time"></i> -->
            <span style="margin-left: 0px">{{ scope.row.know_name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="简介" width="180">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.brief }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { knowList } from "@/api/api";

export default {
  data() {
    return {
      tableData: []
    };
  },
  async created() {
    let res = await knowList({
      uId: localStorage.getItem("uId")
    });
    if (res.data.code == 1) {
      this.tableData = res.data.data;
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style lang="scss" scoped>
.know {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  .form {
    width: 90%;
  }
}
</style>