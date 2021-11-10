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
          content: "工业蒸汽裂解炉偶和模拟方法",
          date: "2020-1-8～2021-1-7",
          back: 22,
          grade: "优秀",
          dutyName: "刘宗宪",
          startDate1: "2020-1-8",
          endDate1: "2028-1-7",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "是",
          type: "170000.00" / 4,
        },
        {
          planName: "2020年1月度安全员考核计划",
          content: "工业蒸汽裂解炉炉烟的组成分布预测方法",
          date: "2020-1-8～2020-2-7",
          grade: "优秀",
          back: 48,
          dutyName: "王云",
          startDate1: "2020-1-8",
          endDate1: "2028-2-7",
          startDate2: "2020-1-15",
          endDate2: "2020-2-14",
          process: "是",
          type: "370000.00" / 4,
        },
        {
          planName: "2020年2月度安全员考核计划",
          content: "管式柴油调和法",
          date: "2020-2-8～2020-3-7",
          grade: "优秀",
          back: 36,

          dutyName: "李青",
          startDate1: "2020-2-8",
          endDate1: "2028-3-7",
          startDate2: "2020-2-15",
          endDate2: "2020-3-14",
          process: "是",
          type: "450000.00" / 4,
        },
        {
          planName: "2020年3月度安全员考核计划",
          content: "去西汀分子量分布建模快速方法",
          date: "2020-3-8～2020-4-7",
          grade: "优秀",
          back: 55,

          dutyName: "刘淑媛",
          startDate1: "2020-3-8",
          endDate1: "2028-4-7",
          startDate2: "2020-3-15",
          endDate2: "2020-4-14",
          process: "是",
          type: "56742.00" / 4,
        },
        {
          planName: "2020年4月度安全员考核计划",
          content: "微电网能量优化管理办法",
          date: "2020-4-8～2020-5-7",
          grade: "优秀",
          back: 68,

          dutyName: "陈思远",
          startDate1: "2020-4-8",
          endDate1: "2028-5-7",
          startDate2: "2020-4-15",
          endDate2: "2020-5-14",
          process: "是",
          type: "176562.00" / 4,
        },
        {
          planName: "2020年5月度安全员考核计划",
          content: "聚烯烃微观结构预测方法",
          date: "2020-5-8～2020-6-7",
          grade: "优秀",
          back: 19,

          dutyName: "任柯泽",
          startDate1: "2020-5-8",
          endDate1: "2028-6-7",
          startDate2: "2020-5-15",
          endDate2: "2020-6-14",
          process: "否",
          type: "76542.00" / 4,
        },
        {
          planName: "2020年6月度安全员考核计划",
          content: "常减压蒸馏装置的预测方法",
          date: "2020-6-8～2020-7-7",
          grade: "优秀",
          back: 226,

          dutyName: "王建路",
          startDate1: "2020-6-8",
          endDate1: "2028-7-7",
          startDate2: "2020-6-15",
          endDate2: "2020-7-14",
          process: "是",
          type: "781333.00" / 4,
        },
        {
          planName: "2020年7月度安全员考核计划",
          content: "催化裂解收率的预测方法",
          date: "2020-7-8～2020-8-7",
          grade: "优秀",
          back: 127,

          dutyName: "赵汤峪",
          startDate1: "2020-7-8",
          endDate1: "2028-8-7",
          startDate2: "2020-7-15",
          endDate2: "2020-8-14",
          process: "否",
          type: "98721.00" / 4,
        },
      ],
      saveData: [],
    };
  },
  mounted() {
    this.tableData.forEach((item) => {
      item.back += 22;
      
      item.type = item.type * 544;
    });
    // 保存原始数据
    this.saveData = JSON.parse(JSON.stringify(this.tableData));
  },
  methods: {
    handleEdit(row) {
      console.log(row);
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