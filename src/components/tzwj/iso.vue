<template>
  <div>
    <div class="form-outer">
      <div class="label">分享类型：</div>
      <el-input
        class="item"
        v-model="searchForm.type"
        placeholder="请输入分享类型"
      ></el-input>
      <div class="label">分享课程名称：</div>
      <el-input
        class="item"
        v-model="searchForm.filename"
        placeholder="请输入分享课程d名称"
      ></el-input>
      <el-button class="button" @click="handleSearch">查询</el-button>
      <el-button class="button" @click="handleReset">重置</el-button>
      <el-button class="button" type="primary">新增</el-button>
    </div>

    <el-table border :data="tableData" style="width: 100%">
      <el-table-column fixed prop="num" label="序号" width="50">
      </el-table-column>
      <el-table-column prop="type" label="分享类型" width="200">
      </el-table-column>
      <el-table-column prop="filename" label="分享课程名称" width="450">
      </el-table-column>
      <el-table-column prop="times" label="分享时间"> </el-table-column>
      <el-table-column prop="ydl" label="阅读量"> </el-table-column>
      <el-table-column prop="xzl" label="下载量"> </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="handleEdit(scope.row, scope.$index)"
            >下载附件</el-button
          >
          <!-- <el-button type="text" style="color: blue" size="small"
            >上传</el-button
          > -->
          <!-- <el-button type="text" style="color: red" size="small"
            >删除</el-button
          > -->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchForm: {
        type: "",
        filename: "",
        startDate1: [],
      },
      tableData: [
        {
          num: "1",
          type: "iso",
          filename: "ISO QES管理体系过程控制文件",
          times: "2021-01-17",
          ydl: "54",
          xzl: "63",
        },
        
      ],
      saveData: [],
    };
  },
  mounted() {
    // 保存原始数据
    this.saveData = JSON.parse(JSON.stringify(this.tableData));
  },
  methods: {
    handleEdit(row, i) {
      const link = document.createElement("a");
      link.style.display = "none";
      if (i == 0) {
        link.href = "../../../static/lhrh/01.pdf";
        link.setAttribute("download", "ISO QES管理体系过程控制文件.pdf");
      }

      document.body.appendChild(link);
      link.click();
    },
    handleSearch() {
      this.tableData = this.saveData.filter((item) => {
        let nameKey = "type";
        let contentKey = "filename";

        let nameIn = this.searchForm[nameKey]
          ? item[nameKey].indexOf(this.searchForm[nameKey]) >= 0
          : true;
        let contentIn = this.searchForm[contentKey]
          ? item[contentKey].indexOf(this.searchForm[contentKey]) >= 0
          : true;

        return nameIn && contentIn;
      });
    },
    handleReset() {
      this.tableData = JSON.parse(JSON.stringify(this.saveData));
      this.searchForm = {
        startDate1: [],
        planName: "",
        content: "",
      };
    },
  },
};
</script>

<style scoped lang="less">
.testplan {
  padding: 20px;
  text-align: left;
}
.form-outer {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 200px;
    margin-right: 10px;
  }
  .label {
    line-height: 40px;
  }
}
</style>