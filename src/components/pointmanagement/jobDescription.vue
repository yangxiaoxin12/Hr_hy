<template>
  <div>
    <div class="form-outer">
      <div class="label">岗位：</div>
      <el-input
        class="item"
        v-model="searchForm.content"
        placeholder="请输入岗位名称"
      ></el-input>
      <el-button class="button" @click="handleSearch">查询</el-button>
      <el-button class="button" @click="handleReset">重置</el-button>
      <el-button class="button" type="primary">新增</el-button>
    </div>

    <el-table border :data="tableData" style="width: 100%">
      <el-table-column fixed prop="planName" label="序号" width="100">
      </el-table-column>
      <el-table-column prop="content" label="岗位" width="280">
      </el-table-column>
      <el-table-column prop="date" label="下发时间" width="200">
      </el-table-column>
      <el-table-column prop="dutyName" label="岗位说明书名称">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="handleEdit(scope.row, scope.$index)"
            >下载</el-button
          >
          <el-button type="text" style="color: red" size="small"
            >删除</el-button
          >
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
        planName: "",
        content: "",
        startDate1: [],
      },
      tableData: [
        {
          planName: "1",
          content: "UI",
          date: "2020-12-15",
          dutyName: "岗位说明书目录（ui用）",
          startDate1: "2020-1-8",
          endDate1: "2021-1-7",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "年度阶段",
          type: "安全考核",
        },
        {
          planName: "2",
          content: "新材料公司",
          date: "2020-12-28",
          dutyName: "新材料公司岗位",
          startDate1: "2020-1-8",
          endDate1: "2020-2-7",
          startDate2: "2020-1-15",
          endDate2: "2020-2-14",
          process: "月度阶段",
          type: "安全考核",
        },
        {
          planName: "3",
          content: "数字化工作室",
          date: "2020-12-24",
          dutyName: "新材料公司岗位",
          startDate1: "2020-2-8",
          endDate1: "2020-3-7",
          startDate2: "2020-2-15",
          endDate2: "2020-3-14",
          process: "月度阶段",
          type: "安全考核",
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
      if (i == 0) {
        const link = document.createElement("a");
        link.style.display = "none";
        link.href = "../../../static/file/0.docx";
        link.setAttribute("download", "岗位说明书目录（ui用）.docx");
        document.body.appendChild(link);
        link.click();
      }
      if (i == 1) {
        const link = document.createElement("a");
        link.style.display = "none";
        link.href = "../../../static/file/1.docx";
        link.setAttribute("download", "新材料公司岗位说明书.docx");
        document.body.appendChild(link);
        link.click();
      }
      if (i == 2) {
        const link = document.createElement("a");
        link.style.display = "none";
        link.href = "../../../static/file/2.docx";
        link.setAttribute("download", "数字化工作室岗位说明书.docx");
        document.body.appendChild(link);
        link.click();
      }
    },
    handleSearch() {
      this.tableData = this.saveData.filter((item) => {
        let nameKey = "planName";
        let contentKey = "content";
        let dateKey = "startDate1";

        let nameIn = this.searchForm[nameKey]
          ? item[nameKey].indexOf(this.searchForm[nameKey]) >= 0
          : true;
        let contentIn = this.searchForm[contentKey]
          ? item[contentKey].indexOf(this.searchForm[contentKey]) >= 0
          : true;

        let sDate = this.searchForm[dateKey][0];
        let eDate = this.searchForm[dateKey][1];

        console.log(sDate);

        let getTimeFromStr = (str) => {
          return new Date(str).getTime();
        };

        let dateIn =
          sDate && eDate
            ? getTimeFromStr(item[dateKey]) <= eDate.getTime() &&
              getTimeFromStr(item[dateKey]) >= sDate.getTime()
            : true;

        return nameIn && contentIn && dateIn;
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