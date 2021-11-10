<template>
  <div>
    <div class="form-outer">
      <div class="label">提案名称：</div>
      <el-input
        class="item"
        v-model="searchForm.planName"
        placeholder="请输入计划名称"
      ></el-input>
      <div class="label">提案人</div>
      <el-input
        class="item"
        v-model="searchForm.content"
        placeholder="请输入考核内容"
      ></el-input>

      <br />
      <div class="label">提案日期：</div>
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
      <el-table-column prop="endDate1" label="提出时间" width="150">
      </el-table-column>
      <el-table-column prop="content" label="提案内容" width="300">
      </el-table-column>
      <el-table-column prop="dutyName" label="提案人" width="200">
      </el-table-column>
      <el-table-column prop="process" label="提案是否落地" width="150">
      </el-table-column>
      <el-table-column prop="type" label="公司收益" width="150">
      </el-table-column>
      <el-table-column prop="grade" label="公司评估" width="120">
      </el-table-column>
      <el-table-column prop="back" label="反馈" width="120"> </el-table-column>
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
          content: ` U300不合格料回收系统
MMA装置U300在100%负荷下P344不合格料排放量约为250kg/h，此部分废液与废水混合后直接去热氧化炉进行焚烧，该过程中虽然会产生一部分热量，但不合格料废液内含有60~70wt%MAA，因此设法从不合格料内提取出MAA进行回收，会大幅降低装置的物耗水平，有着显著的经济效益。
方案：设计P344不合格料与废水按照一定比例稀释后，再与甲苯混合进行萃取分层，萃取出不合格料内的MAA，含MAA和甲苯的油相进行回收利用。`,
          date: "2020-1-8～2021-1-7",
          back: "奖金人力应该有统计，个人不知道，算在年终奖里面了。",
          grade: `评估结果：采用甲苯萃取U300不合格料内的MAA方法可行，回收率较高，甲苯跑损率较低。并且萃取后油相和水相分层时间短、分层情况较好，水相内虽然会析出固体黏稠物，但流动性较好，能够用机泵输送。
最终评为当年合理化建议1等奖。`,
          dutyName: "山东玉皇",
          startDate1: "2020-1-8",
          endDate1: "2020年",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "已落地",
          type: "估算经济效益节约：1485.2万元/年。实际918万元/年",
        },
        {
          planName: "2020年1月度安全员考核计划",
          content: `622焚烧炉系统节能及长周期运行优化改进
内容：本项目对622焚烧炉温度控制进行优化，由原950-1000℃优化至830-850℃；622废水枪雾化型式改为内混式，原822废水枪为外混式；提高622焚烧炉第一通道烟气停留时间，其多于822焚烧炉；停用炉底熔盐枪。`,
          date: "2020-1-8～2020-2-7",
          grade: `评估结果：622范围焚烧炉能够稳定连续稳定运行，液化气用量大幅降低。
最终评为当年合理化建议2等奖。`,
          back: "同上",
          dutyName: `上海新材料技术部
（赵兵兵）`,
          startDate1: "2020-1-8",
          endDate1: "2019年",
          startDate2: "2020-1-15",
          endDate2: "2020-2-14",
          process: "已落地",
          type: "节省液化气约200万元/年。",
        },
        {
          planName: "2020年2月度安全员考核计划",
          content: `氧化阻聚剂调整项目
方案：逐渐降低111/113D13和111/113D15的阻聚剂加入量，降低阻聚剂单耗和过滤器拆洗频率。将HQ/AA单耗从4.0kg/t降至3.8kg/t； AI61A/AA单耗从1.2kg/t降至1.1kg/t；AI61R/AA单耗从0.19kg/t降至0.17kg/t。`,
          date: "2020-2-8～2020-3-7",
          grade: `评估结果：在年初阻聚剂单耗水平上，逐渐降低阻聚剂单耗。
最终评为当年合理化建议3等奖。`,
          back: "同上",

          dutyName: `上海新材料生产装置
（具体人员待确定）`,
          startDate1: "2020-2-8",
          endDate1: "2020年",
          startDate2: "2020-2-15",
          endDate2: "2020-3-14",
          process: "已落地",
          type: '节省阻聚剂单耗成本约445万元/年。',
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