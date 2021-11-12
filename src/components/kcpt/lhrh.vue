<template>
  <div>
    <div class="form-outer">
      <div class="label">部门：</div>
      <el-input
        class="item"
        v-model="searchForm.content"
        placeholder="请输入部门名称"
      ></el-input>
      
      <el-button class="button" @click="handleSearch">查询</el-button>
      <el-button class="button" @click="handleReset">重置</el-button>
      <el-button class="button" type="primary">新增</el-button>
    </div>

    <el-table border :data="tableData" style="width: 100%">
      <el-table-column fixed prop="planName" label="序号" width="100">
      </el-table-column>
      <el-table-column prop="content" label="类型" width="200">
      </el-table-column>
      <el-table-column prop="date" label="文件名" width="200">
      </el-table-column>
      <el-table-column prop="dutyName" label="发布时间">
      </el-table-column>
      <el-table-column prop="process" label="阅读量">
      </el-table-column>
      <el-table-column prop="type" label="下载量">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="handleEdit(scope.row, scope.$index)"
            >下载</el-button
          >
          <el-button type="text" style="color: blue" size="small"
            >上传</el-button
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
          content: "安环部",
          date: "2020-12-15",
          dutyName: "2021年部门年度计划（安环部）",
          startDate1: "2020-1-8",
          endDate1: "2021-1-7",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "年度阶段",
          type: "安全考核",
        },
        {
          planName: "2",
          content: "催化剂装置",
          date: "2020-12-28",
          dutyName: "2021年部门年度计划（催化剂装置）",
          startDate1: "2020-1-8",
          endDate1: "2020-2-7",
          startDate2: "2020-1-15",
          endDate2: "2020-2-14",
          process: "月度阶段",
          type: "安全考核",
        },
        {
          planName: "3",
          content: "技术部",
          date: "2020-12-24",
          dutyName: "2021年部门年度计划（技术部）",
          startDate1: "2020-2-8",
          endDate1: "2020-3-7",
          startDate2: "2020-2-15",
          endDate2: "2020-3-14",
          process: "月度阶段",
          type: "安全考核",
        },
        {
          planName: "4",
          content: "发展部",
          date: "2021-01-11",
          dutyName: "2021年部门年度培训计划（发展部）",
          startDate1: "2020-3-8",
          endDate1: "2020-4-7",
          startDate2: "2020-3-15",
          endDate2: "2020-4-14",
          process: "月度阶段",
          type: "安全考核",
        },
        {
          planName: "5",
          content: "丙烯酸装置",
          date: "2021-05-10",
          dutyName: "2021年部门培训计划（丙烯酸装置）",
          startDate1: "2020-4-8",
          endDate1: "2020-5-7",
          startDate2: "2020-4-15",
          endDate2: "2020-5-14",
          process: "月度阶段",
          type: "安全考核",
        },
        {
          planName: "6",
          content: "质检中心",
          date: "2021-01-11",
          dutyName: "2021年部门培训计划（质检中心）",
          startDate1: "2020-5-8",
          endDate1: "2020-6-7",
          startDate2: "2020-5-15",
          endDate2: "2020-6-14",
          process: "月度阶段",
          type: "安全考核",
        },
        {
          planName: "7",
          content: "综合办公室",
          date: "2021-01-11",
          dutyName: "2021年部门培训计划（综合办公室）",
          startDate1: "2020-6-8",
          endDate1: "2020-7-7",
          startDate2: "2020-6-15",
          endDate2: "2020-7-14",
          process: "月度阶段",
          type: "安全考核",
        },
        {
          planName: "8",
          content: "生产管理部",
          date: "2021-01-06",
          dutyName: "2021年度部门年度计划(生产管理部）",
          startDate1: "2020-7-8",
          endDate1: "2020-8-7",
          startDate2: "2020-7-15",
          endDate2: "2020-8-14",
          process: "月度阶段",
          type: "安全考核",
        },
        {
          planName: "9",
          content: "SAP装置",
          date: "2021-01-12",
          dutyName: "2021年度部门培训计划（SAP装置）",
          startDate1: "2020-9-8",
          endDate1: "2020-10-7",
          startDate2: "2020-9-15",
          endDate2: "2020-10-14",
          process: "月度阶段",
          type: "安全考核",
        },
        {
          planName: "10",
          content: "数字化工作室",
          date: "2021-01-12",
          dutyName: "2021年度部门培训计划（数字化工作室）",
          startDate1: "2020-9-8",
          endDate1: "2020-10-7",
          startDate2: "2020-9-15",
          endDate2: "2020-10-14",
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
      const link = document.createElement("a");
      link.style.display = "none";
      if (i == 0) {
        link.href = "../../../static/files/0.docx";
        link.setAttribute("download", "2021年部门年度计划（安环部）.docx");
      }
      if (i == 1) {
        link.href = "../../../static/files/1.docx";
        link.setAttribute("download", "2021年部门年度计划（催化剂装置）.docx");
      }
      if (i == 2) {
        link.href = "../../../static/files/2.docx";
        link.setAttribute("download", "2021年部门年度计划（技术部）.docx");
      }
      if (i == 3) {
        link.href = "../../../static/files/3.docx";
        link.setAttribute("download", "2021年部门年度培训计划（发展部）.docx");
      }
      if (i == 4) {
        link.href = "../../../static/files/4.docx";
        link.setAttribute("download", "2021年部门培训计划（丙烯酸装置）.docx");
      }
      if (i == 5) {
        link.href = "../../../static/files/5.docx";
        link.setAttribute("download", "2021年部门培训计划（质检中心）.docx");
      }
      if (i == 6) {
        link.href = "../../../static/files/6.docx";
        link.setAttribute("download", "2021年部门培训计划（综合办公室）.docx");
      }
      if (i == 7) {
        link.href = "../../../static/files/7.docx";
        link.setAttribute("download", "2021年度部门年度计划(生产管理部）.docx");
      } if (i == 8) {
        link.href = "../../../static/files/8.xlsx";
        link.setAttribute("download", "2021年度部门培训计划（SAP装置）.xlsx");
      }
       if (i == 9) {
        link.href = "../../../static/files/9.pdf";
        link.setAttribute("download", "数字化岗位培训计划(1).pdf");
      }
      

       document.body.appendChild(link);
        link.click();
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