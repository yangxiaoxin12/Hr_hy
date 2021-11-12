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
          type: "生产",
          filename: "113R02床温异常上升分析及控制措施",
          times: "2021-05-05",
          ydl: "65",
          xzl: "55",
        },
        {
          num: "2",
          type: "生产",
          filename: "131C10塔异常情况说明与处理措施",
          times: "2020-07-20",
          ydl: "64",
          xzl: "35",
        },
        {
          num: "3",
          type: "生产",
          filename: "GAA阻聚剂加入程序优化方案",
          times: "2021-04-28",
          ydl: "78",
          xzl: "35",
        },
        {
          num: "4",
          type: "生产",
          filename: "U112尾烧情况说明及后续处理",
          times: "2021-05-09",
          ydl: "44",
          xzl: "50",
        },
        {
          num: "5",
          type: "生产",
          filename: "U142产品酸度超标原因分析及措施",
          times: "2021-05-17",
          ydl: "65",
          xzl: "65",
        },
        {
          num: "6",
          type: "生产",
          filename: "精馏塔温度异常处理方案",
          times: "2021-05-05",
          ydl: "75",
          xzl: "53",
        },
        {
          num: "7",
          type: "生产",
          filename: "氧化E11壳程结垢情况分析.11",
          times: "2020-11-20",
          ydl: "64",
          xzl: "35",
        },
        {
          num: "8",
          type: "生产",
          filename: "一、二期装置异常停车预案",
          times: "2021-04-28",
          ydl: "45",
          xzl: "35",
        },
        {
          num: "9",
          type: "生产",
          filename: "蒸汽调整预案",
          times: "2021-05-09",
          ydl: "75",
          xzl: "36",
        },
        {
          num: "10",
          type: "生产",
          filename: "蒸汽外供工况及U111U112U822联锁预案",
          times: "2021-05-17",
          ydl: "35",
          xzl: "22",
        },
        {
          num: "11",
          type: "生产",
          filename: "装置废水平衡现状及解决方案",
          times: "2021-05-17",
          ydl: "35",
          xzl: "12",
        },
        {
          num: "12",
          type: "生产",
          filename: "装置异常联锁预案",
          times: "2021-05-17",
          ydl: "35",
          xzl: "64",
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
        link.href = "../../../static/sc/01.docx";
        link.setAttribute("download", "2113R02床温异常上升分析及控制措施.docx");
      }
      if (i == 1) {
        link.href = "../../../static/sc/02.docx";
        link.setAttribute("download", "131C10塔异常情况说明与处理措施.docx");
      }
      if (i == 2) {
        link.href = "../../../static/sc/03.docx";
        link.setAttribute("download", "GAA阻聚剂加入程序优化方案.docx");
      }
      if (i == 3) {
        link.href = "../../../static/sc/04.docx";
        link.setAttribute("download", "U112尾烧情况说明及后续处理.docx");
      }
      if (i == 4) {
        link.href = "../../../static/sc/05.docx";
        link.setAttribute("download", "U142产品酸度超标原因分析及措施.docx");
      }
      if (i == 5) {
        link.href = "../../../static/sc/06.docx";
        link.setAttribute("download", "精馏塔温度异常处理方案.docx");
      }
      if (i == 6) {
        link.href = "../../../static/sc/07.docx";
        link.setAttribute("download", "氧化E11壳程结垢情况分析2020.11.docx");
      }
      if (i == 7) {
        link.href = "../../../static/sc/08.pptx";
        link.setAttribute("download", "一、二期装置异常停车预案.docx");
      }
      if (i == 8) {
        link.href = "../../../static/sc/09.docx";
        link.setAttribute("download", "蒸汽调整预案.docx");
      }
      if (i == 9) {
        link.href = "../../../static/sc/10.docx";
        link.setAttribute(
          "download",
          "蒸汽外供工况及U111U112U822联锁预案.docx"
        );
      }
      if (i == 10) {
        link.href = "../../../static/sc/11.docx";
        link.setAttribute("download", "装置废水平衡现状及解决方案.docx");
      }
      if (i == 11) {
        link.href = "../../../static/sc/12.docx";
        link.setAttribute("download", "装置异常联锁预案.docx");
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