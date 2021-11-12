<template>
  <div>
    <div class="form-outer">
      <div class="label">课程类型：</div>
      <el-input
        class="item"
        v-model="searchForm.type"
        placeholder="请输入课件类型"
      ></el-input>
      <div class="label">课程名称：</div>
      <el-input
        class="item"
        v-model="searchForm.filename"
        placeholder="请输入课件名称"
      ></el-input>
      <el-button class="button" @click="handleSearch">查询</el-button>
      <el-button class="button" @click="handleReset">重置</el-button>
      <el-button class="button" type="primary">新增</el-button>
    </div>

    <el-table border :data="tableData" style="width: 100%">
      <el-table-column fixed prop="num" label="序号" width="50">
      </el-table-column>
      <el-table-column prop="type" label="课程类型" width="200">
      </el-table-column>
      <el-table-column prop="filename" label="课程名称" width="450">
      </el-table-column>
      <el-table-column prop="times" label="发布时间"> </el-table-column>
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
          type: "机电仪",
          filename: "关于举办“2021年第40届全国机械密封学习班”的通知",
          times: "2021-05-05",
          ydl: "165",
          xzl: "123",
        },
        {
          num: "2",
          type: "机电仪",
          filename: "静设备-赵晨兴（2020.7.22）",
          times: "2020-07-22",
          ydl: "234",
          xzl: "213",
        },
        {
          num: "3",
          type: "机电仪",
          filename: "自控仪表基本知识介绍",
          times: "2021-04-28",
          ydl: "252",
          xzl: "222",
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
        link.href = "../../../static/jdy/01.pdf";
        link.setAttribute(
          "download",
          "关于举办“2021年第40届全国机械密封学习班”的通知.pdf"
        );
      }
      if (i == 1) {
        link.href = "../../../static/jdy/02.ppt";
        link.setAttribute("download", "静设备-赵晨兴（2020.7.22） (2).ppt");
      }
      if (i == 2) {
        link.href = "../../../static/jdy/03.ppt";
        link.setAttribute("download", "自控仪表基本知识介绍.ppt");
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