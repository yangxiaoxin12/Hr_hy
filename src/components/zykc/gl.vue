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
          type: "管理",
          filename: "销售专家教你如何做销售",
          times: "2021-03-05",
          ydl: "42",
          xzl: "32",
        },
        {
          num: "2",
          type: "管理",
          filename:
            "2021年度华谊集团管理学院公开课《OPPM一页纸项目管理--敏捷项目管理工具》",
          times: "2021-05-27",
          ydl: "56",
          xzl: "32",
        },
        {
          num: "3",
          type: "管理",
          filename: "2021年度华谊集团管理学院公开课《新媒体时代下的公文写作》",
          times: "2021-06-28",
          ydl: "45",
          xzl: "55",
        },
        {
          num: "4",
          type: "管理",
          filename: "HR-A TTD重塑赋能型培训师培养系统--企业内训师培养实战训练",
          times: "2021-03-09",
          ydl: "53",
          xzl: "32",
        },
        {
          num: "5",
          type: "管理",
          filename: "陈苏娟思维导图课程（企业课）",
          times: "2020-06-27",
          ydl: "35",
          xzl: "53",
        },
        {
          num: "6",
          type: "管理",
          filename: "从理论到实践--精准识人与行动学习",
          times: "2021-07-02",
          ydl: "23",
          xzl: "45",
        },
        {
          num: "7",
          type: "管理",
          filename: "民法典提纲.pptx",
          times: "2021-08-27",
          ydl: "23",
          xzl: "43",
        },
        {
          num: "8",
          type: "管理",
          filename: "中国共产党为什么能",
          times: "2021-05-12",
          ydl: "25",
          xzl: "53",
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
        link.href = "../../../static/gl/01.pdf";
        link.setAttribute("download", "销售专家教你如何做销售.pdf");
      }
      if (i == 1) {
        link.href = "../../../static/gl/02.docx";
        link.setAttribute(
          "download",
          "2021年度华谊集团管理学院公开课《OPPM一页纸项目管理--敏捷项目管理工具》报名通知.docx"
        );
      }
      if (i == 2) {
        link.href = "../../../static/gl/03.docx";
        link.setAttribute(
          "download",
          "2021年度华谊集团管理学院公开课《新媒体时代下的公文写作》报名通知.docx"
        );
      }
      if (i == 3) {
        link.href = "../../../static/gl/04.pdf";
        link.setAttribute(
          "download",
          "HR-A TTD重塑赋能型培训师培养系统--企业内训师培养实战训练 听课通知(1).pdf"
        );
      }
      if (i == 4) {
        link.href = "../../../static/gl/05.pptx";
        link.setAttribute("download", "陈苏娟思维导图课程（企业课）(1).pptx");
      }
      if (i == 5) {
        link.href = "../../../static/gl/06.pdf";
        link.setAttribute(
          "download",
          "从理论到实践--精准识人与行动学习(1).pdf"
        );
      }
      if (i == 6) {
        link.href = "../../../static/gl/07.pptx";
        link.setAttribute("download", "民法典提纲.pptx");
      }
      if (i == 7) {
        link.href = "../../../static/gl/08.pdf";
        link.setAttribute("download", "中国共产党为什么能.pdf");
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