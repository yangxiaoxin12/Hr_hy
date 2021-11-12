<template>
  <div>
    <div class="form-outer">
      <div class="label">类型：</div>
      <el-input
        class="item"
        v-model="searchForm.type"
        placeholder="请输入课件类型"
      ></el-input>
      <div class="label">课件名：</div>
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
      <el-table-column prop="type" label="类型" width="200"> </el-table-column>
      <el-table-column prop="filename" label="课件名" width="450">
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
          type: "课件资料",
          filename: "GIT Basic",
          times: "2021-9-9",
          ydl: "200",
          xzl: "165",
        },
        {
          num: "2",
          type: "课件资料",
          filename: "工业控制系统网络安全培训",
          times: "2021-10-27",
          ydl: "251",
          xzl: "178",
        },
        {
          num: "3",
          type: "课件资料",
          filename: "华谊集团信息安全意识培训",
          times: "2021-10-28",
          ydl: "196",
          xzl: "112",
        },
        {
          num: "4",
          type: "课件资料",
          filename: "敏捷培训",
          times: "2021-9-13",
          ydl: "290",
          xzl: "268",
        },
        {
          num: "5",
          type: "课件资料",
          filename: "数字化条线集中培训",
          times: "2020-10-27",
          ydl: "267",
          xzl: "128",
        },
        {
          num: "6",
          type: "课件资料",
          filename: "统计基础&机器学习概论",
          times: "2021-7-2",
          ydl: "248",
          xzl: "136",
        },
        {
          num: "7",
          type: "课件资料",
          filename: "网络安全制度培训",
          times: "2021-10-27",
          ydl: "248",
          xzl: "194",
        },
        {
          num: "8",
          type: "课件资料",
          filename: "智能工厂集成技术与应用MES系统操作技能",
          times: "2021-11-12",
          ydl: "189",
          xzl: "124",
        },
        {
          num: "9",
          type: "课件资料",
          filename: "数字科学训练营",
          times: "2021-7-2",
          ydl: "265",
          xzl: "179",
        },
        {
          num: "10",
          type: "素材资料",
          filename: "Pandas操作基础1",
          times: "2021-7-9",
          ydl: "248",
          xzl: "148",
        },
        {
          num: "11",
          type: "素材资料",
          filename: "Pandas操作基础2",
          times: "2021-7-9",
          ydl: "233",
          xzl: "168",
        },
        {
          num: "12",
          type: "素材资料",
          filename: "数据资料",
          times: "2021-7-2",
          ydl: "247",
          xzl: "147",
        },
        {
          num: "13",
          type: "素材资料",
          filename: "DATA Filter",
          times: "2021-7-2",
          ydl: "248",
          xzl: "147",
        },
        {
          num: "14",
          type: "考试题库",
          filename: "能力测试题",
          times: "2021-11-12",
          ydl: "305",
          xzl: "280",
        },
        {
          num: "15",
          type: "考试题库",
          filename: "每日一练",
          times: "2021-1-1",
          ydl: "380",
          xzl: "315",
        },
        {
          num: "16",
          type: "课件资料",
          filename: "POWER BI数据软件培训",
          times: "2021.10.27",
          ydl: "390",
          xzl: "365",
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
        link.href = "../../../static/file3/01.pptx";
        link.setAttribute("download", "GIT Basic.pptx");
      }
      if (i == 1) {
        link.href = "../../../static/file3/02.pdf";
        link.setAttribute("download", "工业控制系统网络安全培训.pdf");
      }
      if (i == 2) {
        link.href = "../../../static/file3/03.pdf";
        link.setAttribute("download", "华谊集团信息安全意识培训.pdf");
      }
      if (i == 3) {
        link.href = "../../../static/file3/04.pptx";
        link.setAttribute("download", "敏捷培训ppt.pptx");
      }
      if (i == 4) {
        link.href = "../../../static/file3/05.pdf";
        link.setAttribute("download", "数字化条线首次培训.pdf");
      }
      if (i == 5) {
        link.href = "../../../static/file3/06.pptx";
        link.setAttribute("download", "统计基础&机器学习概论.pptx");
      }
      if (i == 6) {
        link.href = "../../../static/file3/07.pdf";
        link.setAttribute("download", "网络安全制度培训.pdf");
      }
      if (i == 7) {
        link.href = "../../../static/file3/08.pdf";
        link.setAttribute(
          "download",
          "智能工厂集成技术与应用 MES系统操作技能.pdf"
        );
      }
      if (i == 8) {
        link.href = "../../../static/file3/09.pptx";
        link.setAttribute("download", "数字科学训练营.pptx");
      }
      if (i == 9) {
        link.href = "../../../static/file3/10.html";
        link.setAttribute("download", "Pandas操作基础1.html");
      }
      if (i == 10) {
        link.href = "../../../static/file3/10.ipynb";
        link.setAttribute("download", "Pandas操作基础2.ipynb");
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