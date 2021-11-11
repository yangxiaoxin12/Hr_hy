<template>
  <div>
    <div class="form-outer">
      <div class="label">提案人：</div>
      <el-input
        class="item"
        v-model="searchForm.planName"
        placeholder="请输入提案人"
      ></el-input>
      <div class="label">创新内容：</div>
      <el-input
        class="item"
        v-model="searchForm.content"
        placeholder="请输入创新内容"
      ></el-input>

      <br />
      <div class="label">提出时间：</div>
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
      <el-table-column prop="content" label="创新内容" >
      </el-table-column>
      <el-table-column prop="dutyName" label="提案人" width="200">
      </el-table-column>
      <el-table-column prop="process" label="提案是否落地" width="150">
      </el-table-column>
      <el-table-column prop="type" label="公司收益" width="150">
      </el-table-column>
      <el-table-column prop="grade" label="公司评估" width="120">
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
          content: `气相系统PTA脱除研究项目
本项目针对现有的MMA装置吸收系统的工艺流程，提高气相中PTA的脱除效果，延长吸收系统的运行周期，减少检维修费用。技术指标：
（1）T230塔的运行周期由3个月提高至4个月；
（2）G220、S230设备在4个月的运行周期中压降不超过8kpa。`,
          date: "2020-1-8～2021-1-7",
          back: "给项目团队的奖励人力知道吧，个人不知奖励。",
          grade: "待确认",
          dutyName: `项目负责人：刘恒
项目主要参与人员：
杨利德、袁超 `,
          startDate1: "2020-1-8",
          endDate1: "2019年",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "已落地",
          type: "待确认",
        },
        {
          planName: "2020年1月度安全员考核计划",
          content: `丙烯酸重酯合成反应萃取技术开发
本项目协同华东理工大学漆志文教授研发一种低腐蚀等级的双效溶剂，其能够在丙烯酸重酯的反应动力学及萃取热力学两方面优化现有工艺体系，达到提高装置运行经济性的目的，具体技术指标为：（1）形成具有工业化能力的丙烯酸正丁酯或丙烯酸异辛酯反应萃取新工艺；
（2）丙烯酸正丁酯新工艺中丙烯酸转化率≥98%、选择性≥97.5%，或者丙烯酸异辛酯新工艺中丙烯酸转化率≥97%、选择性≥98%；`,
          date: "2020-1-8～2020-2-7",
          grade: "/",
          back: "/",
          dutyName: `项目负责人：储志刚
项目主要参与人：技术部：李海涛、张岚、陆嘉豪`,
          startDate1: "2020-1-8",
          endDate1: "2020年",
          startDate2: "2020-1-15",
          endDate2: "2020-2-14",
          process: "尚未落地，华东理工在实验开发阶段",
          type: "/",
        },
        {
          planName: "2020年2月度安全员考核计划",
          content: `废气催化氧化系统优化改造
本项目针对丙烯酸工艺废气的排放特点和特征污染因子特性，测定评价不同配方的高效催化剂的催化性能；同时，结合催化焚烧装置的开车、运行经验和高效净化催化剂的催化效果，解决大风量VOCs 净化工艺过程开发中的相关应用和工程问题，提高优化改造后的丙烯酸装置废气催化氧化系统的废气处理效果与稳定性。技术指标：
（1) 改造后的丙烯酸废气催化氧化系统，在温和的反应条件下（第一反应器入口温度为240～280℃，第二反应器床温位120～150℃），非甲烷总烃NMHC出口浓度＜30mg/m3，甲醛出口浓度＜3 mg/m3；
（2) 运用于主装置的新增甲醛氧化催化剂床层压降需＜2Kpa。`,
          date: "2020-2-8～2020-3-7",
          grade: "经项目评估，本项目达到项目初期设定的技术指标。",
          back: "给项目团队的奖励人力知道吧，个人不知奖励。",
          dutyName: `项目负责人：汤杰
项目主要参与人员：汤杰、张岚、贾苗苗`,
          startDate1: "2020-2-8",
          endDate1: "2020年",
          startDate2: "2020-2-15",
          endDate2: "2020-3-14",
          process: "已落地",
          type: "待确认",
        },
        
      ],
      saveData: [],
    };
  },
  mounted() {
    this.tableData.forEach((item) => {
      
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