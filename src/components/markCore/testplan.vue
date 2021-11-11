<template>
  <div>
    <div class="form-outer">
      <div class="label">计划名称：</div>
      <el-input
        class="item"
        v-model="searchForm.planName"
        placeholder="请输入计划名称"
      ></el-input>
      <div class="label">考核内容：</div>
      <el-input
        class="item"
        v-model="searchForm.content"
        placeholder="请输入考核内容"
      ></el-input>

      <br />
      <div class="label">考核日期：</div>
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
      <el-table-column fixed prop="planName" label="计划名称" width="150">
      </el-table-column>
      <el-table-column prop="content" label="考核内容" width="150">
      </el-table-column>
      <el-table-column prop="date" label="考核期" width="200">
      </el-table-column>
      <el-table-column prop="process" label="所属阶段" width="150">
      </el-table-column>
      <el-table-column prop="type" label="考核形式" width="150">
      </el-table-column>
      <el-table-column prop="dutyName" label="计划负责人" width="120">
      </el-table-column>
      <el-table-column prop="startDate1" label="目标起始日期" width="120">
      </el-table-column>
      <el-table-column prop="startDate2" label="评估起始日期" width="120">
      </el-table-column>
      <el-table-column prop="endDate1" label="目标结束日期" width="120">
      </el-table-column>
      <el-table-column prop="endDate2" label="评估结束日期" width="120">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleEdit(scope.row)"
            >编辑</el-button
          >
          <el-button
            type="text"
            style="color: red"
            size="small"
            @click="handleEdit(scope.row)"
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
          planName: "2020年度安全员考核计划",
          content: "年度无伤亡，无重大损失本月",
          date: "2020-1-8～2021-1-7",
          dutyName: "刘宗宪",
          startDate1: "2020-1-8",
          endDate1: "2021-1-7",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "年度阶段",
          type: "安全考核",
        },
        {
          planName: "2020年1月度组织考核",
          content: "召开职称及技能聘任会后，红头文发放，一次性奖励费用发放。",
          date: "2020-1-8～2020-2-7",
          dutyName: "王云",
          startDate1: "2020-1-8",
          endDate1: "2020-2-7",
          startDate2: "2020-1-15",
          endDate2: "2020-2-14",
          process: "月度阶段",
          type: "红头文件",
        },
        {
          planName: "2020年2月度培训考核",
          content: "通知参加领导干部和党支部书记十九大轮训班",
          date: "2020-2-8～2020-3-7",
          dutyName: "李青",
          startDate1: "2020-2-8",
          endDate1: "2020-3-7",
          startDate2: "2020-2-15",
          endDate2: "2020-3-14",
          process: "月度阶段",
          type: "参加培训",
        },
        {
          planName: "2020年3月度组织考核",
          content: "组织上岗考试（114人），合格者上岗证注册",
          date: "2020-3-8～2020-4-7",
          dutyName: "刘淑媛",
          startDate1: "2020-3-8",
          endDate1: "2020-4-7",
          startDate2: "2020-3-15",
          endDate2: "2020-4-14",
          process: "月度阶段",
          type: "发放上岗证",
        },
        {
          planName: "2020年4月度培训考核",
          content: "编写2018年培训计划",
          date: "2020-4-8～2020-5-7",
          dutyName: "陈思远",
          startDate1: "2020-4-8",
          endDate1: "2020-5-7",
          startDate2: "2020-4-15",
          endDate2: "2020-5-14",
          process: "月度阶段",
          type: "编写计划书",
        },
        {
          planName: "2020年5月度论文考核",
          content: "论文专利奖励费用统计",
          date: "2020-5-8～2020-6-7",
          dutyName: "任柯泽",
          startDate1: "2020-5-8",
          endDate1: "2020-6-7",
          startDate2: "2020-5-15",
          endDate2: "2020-6-14",
          process: "月度阶段",
          type: "发放奖励",
        },
        {
          planName: "2020年6月度实习生考核",
          content: "实习生月度考试，严肃学习纪律",
          date: "2020-6-8～2020-7-7",
          dutyName: "王建路",
          startDate1: "2020-6-8",
          endDate1: "2020-7-7",
          startDate2: "2020-6-15",
          endDate2: "2020-7-14",
          process: "月度阶段",
          type: "成绩确认公示",
        },
        {
          planName: "2020年7月度组织考核",
          content: "召开职称及技能聘任会后，红头文发放，一次性奖励费用发放。",
          date: "2020-1-8～2020-2-7",
          dutyName: "王云",
          startDate1: "2020-1-8",
          endDate1: "2020-2-7",
          startDate2: "2020-1-15",
          endDate2: "2020-2-14",
          process: "月度阶段",
          type: "红头文件",
        },
        {
          planName: "2020年8月度培训考核",
          content: "通知参加领导干部和党支部书记十九大轮训班",
          date: "2020-2-8～2020-3-7",
          dutyName: "李青",
          startDate1: "2020-2-8",
          endDate1: "2020-3-7",
          startDate2: "2020-2-15",
          endDate2: "2020-3-14",
          process: "月度阶段",
          type: "参加培训",
        },
        {
          planName: "2020年9月度组织考核",
          content: "组织上岗考试（114人），合格者上岗证注册",
          date: "2020-3-8～2020-4-7",
          dutyName: "刘淑媛",
          startDate1: "2020-3-8",
          endDate1: "2020-4-7",
          startDate2: "2020-3-15",
          endDate2: "2020-4-14",
          process: "月度阶段",
          type: "发放上岗证",
        },
        {
          planName: "2020年10月度培训考核",
          content: "编写2018年培训计划",
          date: "2020-4-8～2020-5-7",
          dutyName: "陈思远",
          startDate1: "2020-4-8",
          endDate1: "2020-5-7",
          startDate2: "2020-4-15",
          endDate2: "2020-5-14",
          process: "月度阶段",
          type: "编写计划书",
        },
        {
          planName: "2020年11月度论文考核",
          content: "论文专利奖励费用统计",
          date: "2020-5-8～2020-6-7",
          dutyName: "任柯泽",
          startDate1: "2020-5-8",
          endDate1: "2020-6-7",
          startDate2: "2020-5-15",
          endDate2: "2020-6-14",
          process: "月度阶段",
          type: "发放奖励",
        },
        {
          planName: "2020年12月度实习生考核",
          content: "实习生月度考试，严肃学习纪律",
          date: "2020-6-8～2020-7-7",
          dutyName: "王建路",
          startDate1: "2020-6-8",
          endDate1: "2020-7-7",
          startDate2: "2020-6-15",
          endDate2: "2020-7-14",
          process: "月度阶段",
          type: "成绩确认公示",
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