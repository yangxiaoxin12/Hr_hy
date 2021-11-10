<template>
  <div>
    <el-table border :data="tableData" style="width: 100%; margin-top: 80px">
      <el-table-column fixed prop="planName" label="序号" width="100">
      </el-table-column>
      <el-table-column prop="content" label="招聘类型" width="280">
      </el-table-column>
      <el-table-column prop="pintai" label="招聘平台" width="200">
      </el-table-column>
      <el-table-column prop="date" label="招聘时间" width="200">
      </el-table-column>
      <el-table-column prop="dutyName" label="岗位"> </el-table-column>

      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="handleEdit(scope.row, scope.$index)"
            >详情</el-button
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
          content: "校园招聘",
          pintai: "智联招聘",
          date: "2020-07-15 ~ 2021-02-05",
          dutyName: "产品销售经理",
          startDate1: "2020-1-8",
          endDate1: "2021-1-7",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "年度阶段",
          type: "安全考核",
        },
        {
          planName: "2",
          content: "校园招聘",
          pintai: "智联招聘",
          date: "2020-07-15 ~ 2021-02-05",
          dutyName: "电气技术员",
          startDate1: "2020-1-8",
          endDate1: "2021-1-7",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "年度阶段",
          type: "安全考核",
        },
        {
          planName: "3",
          content: "校园招聘",
          pintai: "智联招聘",
          date: "2020-07-15 ~ 2021-02-05",
          dutyName: "设备技术员",
          startDate1: "2020-1-8",
          endDate1: "2021-1-7",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "年度阶段",
          type: "安全考核",
        },
        {
          planName: "2",
          content: "校园招聘",
          pintai: "智联招聘",
          date: "2021-03-15 ~ 2021-09-05",
          dutyName: "仪表技术员",
          startDate1: "2020-1-8",
          endDate1: "2020-2-7",
          startDate2: "2020-1-15",
          endDate2: "2020-2-14",
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
        window.open(
          "https://xiaoyuan.zhaopin.com/job/XY000676916J00101308748?jobSourceType=2&productId=1&channelId=2"
        );
      }
      if (i == 1) {
        window.open(
          "https://xiaoyuan.zhaopin.com/job/XY000676916J00101308747?jobSourceType=2&productId=1&channelId=2"
        );
      }
      if (i == 2) {
        window.open(
          "https://xiaoyuan.zhaopin.com/job/XY000676916J00101308742?jobSourceType=2&productId=1&channelId=2"
        );
      }
      if (i == 3) {
        window.open(
          "https://xiaoyuan.zhaopin.com/job/XY000676916J00101308746?jobSourceType=2&productId=1&channelId=2"
        );
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