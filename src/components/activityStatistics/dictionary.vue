<template>
  <div>
    <div class="form-outer">
      <div class="label">专利人</div>
      <el-input
        class="item"
        v-model="searchForm.planName"
        placeholder="请输入计划名称"
      ></el-input>
      <div class="label">申请内容</div>
      <el-input
        class="item"
        v-model="searchForm.content"
        placeholder="请输入创新内容"
      ></el-input>

      <br />
      <div class="label">申请时间：</div>
      <el-date-picker
        v-model="searchForm.startDate1"
        class="item"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </el-date-picker>
      <el-button class="button" @click="handleSearch">查询</el-button>
      <el-button class="button" @click="handleReset">重置</el-button>
      <el-button class="button" type="primary">新增</el-button>
    </div>

    <el-table border :data="tableData" style="width: 100%">
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column prop="startDate1" label="申请时间" width="150">
      </el-table-column>
      <el-table-column prop="content" label="专利内容" width="150">
      </el-table-column>
      <el-table-column prop="dutyName" label="专利申请人" width="200">
      </el-table-column>
      <el-table-column prop="process" label="申请号" width="150">
      </el-table-column>
      <el-table-column prop="type" label="专利号" width="150">
      </el-table-column>
      <el-table-column prop="endDate1" label="有效期" width="120">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="handleEdit(scope.row, scope.$index)"
            >下载附件</el-button
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
          planName: "2020年度安全员考核计划",
          content: "（甲基）丙烯酸羟烷基酯的制备方法",
          date: "2020-1-8～2021-1-7",
          back: 22,
          grade: "优秀",
          dutyName: "上海华谊新材料有限公司",
          startDate1: "2018年",
          endDate1: "20年（2018.4.3-2038.4.3）",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "",
          type: "ZL 201810304514.4",
        },
        {
          planName: "2020年1月度安全员考核计划",
          content: "（甲基）丙烯酸类化合物的制备方法",
          date: "2020-1-8～2020-2-7",
          grade: "优秀",
          back: 48,
          dutyName: "上海华谊新材料有限公司",
          startDate1: "2018年",
          endDate1: "20年（2018.4.3-2038.4.3）",
          startDate2: "2020-1-15",
          endDate2: "2020-2-14",
          process: "",
          type: "ZL 201810288982.7",
        },
        {
          planName: "2020年2月度安全员考核计划",
          content: "用于焚烧高盐有机废水的系统和废水处理方法",
          date: "2020-2-8～2020-3-7",
          grade: "优秀",
          back: 36,

          dutyName: "上海华谊新材料有限公司",
          startDate1: "2019年",
          endDate1: "/",
          startDate2: "2020-2-15",
          endDate2: "2020-3-14",
          process: "201911141983.X",
          type: "/",
        },
        {
          planName: "2020年3月度安全员考核计划",
          content: "(甲基)丙烯酸酯的生产方法",
          date: "2020-3-8～2020-4-7",
          grade: "优秀",
          back: 55,

          dutyName: "上海华谊新材料有限公司",
          startDate1: "2019年",
          endDate1: "/",
          startDate2: "2020-3-15",
          endDate2: "2020-4-14",
          process: "CNGSBC-0192.199408",
          type: "/",
        },
      ],
      saveData: [],
    };
  },
  mounted() {
    this.tableData.forEach((item) => {});
    // 保存原始数据
    this.saveData = JSON.parse(JSON.stringify(this.tableData));
  },
  methods: {
    handleEdit(list, i) {
      const link = document.createElement("a");
      link.style.display = "none";
      if (i == 0) {
        link.href = "../../../static/zl/0.pdf";
        link.setAttribute("download", "CN201810288982.7-发明专利证书.pdf");
      }
      if (i == 1) {
        link.href = "../../../static/zl/1.pdf";
        link.setAttribute("download", "CN201810304514.4-发明专利证书-.pdf");
      }
      if (i == 2) {
        link.href = "../../../static/zl/2.pdf";
        link.setAttribute("download", "CN201911141983.X-发明专利证书.pdf");
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