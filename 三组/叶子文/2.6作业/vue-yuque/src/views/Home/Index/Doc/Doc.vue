<template>
  <div class="doc">
    <div class="form">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column label="名称" width="180">
          <template slot-scope="scope">
            <!-- <i class="el-icon-time"></i> -->
            <span style="margin-left: 0px">{{ scope.row.doc_name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="归属" width="180">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{name}}/{{ scope.row.know_name }}</el-tag>
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
import { docList, delDoc } from "@/api/api";

export default {
  data() {
    return {
      tableData: [],
      name: localStorage.getItem("name")
    };
  },
  async created() {
    let res = await docList({
      uId: JSON.parse(localStorage.getItem("uId"))
    });
    if (res.data.code == 1) {
      this.tableData = res.data.data;
    }
  },
  methods: {
    // 编辑
    handleEdit(index, row) {
      this.$router.push({ name: "adddoc", params: { ...row } });
    },
    // 删除
    handleDelete(index, row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          let res = await delDoc({
            uId: JSON.parse(localStorage.getItem("uId")),
            id: row.id,
            know_id:row.know_id
          });
          if (res.data.code == 1) {
            this.tableData.splice(index, 1);
            this.$toasts(this, res);
          } else {
            this.$toasts(this, res);
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
            offset: 50,
            duration: 1500
          });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.doc {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  .form {
    width: 90%;
  }
}
</style>