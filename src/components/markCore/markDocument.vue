<template>
  <div>
    <div class="form-outer">
      <div class="label">姓名：</div>
      <el-input
        class="item"
        v-model="searchForm.name"
        placeholder="请输入姓名"
      ></el-input>
      <div class="label">所属部门：</div>
      <el-input
        class="item"
        v-model="searchForm.pub"
        placeholder="请输入所属部门"
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
      <el-table-column fixed prop="name" label="员工姓名" width="150">
      </el-table-column>
      <el-table-column prop="pub" label="所属部门" width="150">
      </el-table-column>
      <el-table-column prop="planName" label="考核计划" width="150">
      </el-table-column>
      <el-table-column prop="content" label="考核内容" width="150">
      </el-table-column>
      <el-table-column prop="date" label="计划日期" width="200">
      </el-table-column>
      <el-table-column prop="process" label="考核评价" width="150">
      </el-table-column>
      <el-table-column prop="type" label="考核得分" width="150">
      </el-table-column>
      <el-table-column prop="startDate1" label="考核日期" width="120">
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
        name: "",
        pub: "",
        startDate1: [],
      },
      tableData: [
        {
          name: "王陈奕",
          pub: "产品部",
          planName: "2020年度安全员考核计划",
          content: "年度无伤亡，无重大损失本月",
          date: "2020-1-8～2021-1-7",
          dutyName: "刘宗宪",
          startDate1: "2020-1-8",
          endDate1: "2021-1-7",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "合格",
          type: "87",
        },
        {
          name: "李春云",
          pub: "安全部",
          planName: "2020年1月度安全员考核计划",
          content: "本月无伤亡，无重大损失",
          date: "2020-1-8～2020-2-7",
          dutyName: "王云",
          startDate1: "2020-1-8",
          endDate1: "2020-2-7",
          startDate2: "2020-1-15",
          endDate2: "2020-2-14",
          process: "合格",
          type: "85",
        },
        {
          name: "刘烨",
          pub: "信息部",
          planName: "2020年2月度安全员考核计划",
          content: "本月无伤亡，无重大损失",
          date: "2020-2-8～2020-3-7",

          dutyName: "李青",
          startDate1: "2020-2-8",
          endDate1: "2020-3-7",
          startDate2: "2020-2-15",
          endDate2: "2020-3-14",
          process: "合格",
          type: "67",
        },
        {
          name: "陈李济",
          pub: "财务部",
          planName: "2020年3月度安全员考核计划",
          content: "本月无伤亡，无重大损失",
          date: "2020-3-8～2020-4-7",

          dutyName: "刘淑媛",
          startDate1: "2020-3-8",
          endDate1: "2020-4-7",
          startDate2: "2020-3-15",
          endDate2: "2020-4-14",
          process: "优秀",
          type: "96",
        },
        {
          name: "刘振权",
          pub: "产品部",
          planName: "2020年度安全员考核计划",
          content: "年度无伤亡，无重大损失本月",
          date: "2020-1-8～2021-1-7",
          dutyName: "刘宗宪",
          startDate1: "2020-1-8",
          endDate1: "2021-1-7",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "合格",
          type: "87",
        },
        {
          name: "华春就",
          pub: "安全部",
          planName: "2020年1月度安全员考核计划",
          content: "本月无伤亡，无重大损失",
          date: "2020-1-8～2020-2-7",
          dutyName: "王云",
          startDate1: "2020-1-8",
          endDate1: "2020-2-7",
          startDate2: "2020-1-15",
          endDate2: "2020-2-14",
          process: "合格",
          type: "85",
        },
        {
          name: "李玥涵",
          pub: "信息部",
          planName: "2020年2月度安全员考核计划",
          content: "本月无伤亡，无重大损失",
          date: "2020-2-8～2020-3-7",

          dutyName: "李青",
          startDate1: "2020-2-8",
          endDate1: "2020-3-7",
          startDate2: "2020-2-15",
          endDate2: "2020-3-14",
          process: "合格",
          type: "67",
        },
        {
          name: "陈晓丽",
          pub: "财务部",
          planName: "2020年3月度安全员考核计划",
          content: "本月无伤亡，无重大损失",
          date: "2020-3-8～2020-4-7",

          dutyName: "刘淑媛",
          startDate1: "2020-3-8",
          endDate1: "2020-4-7",
          startDate2: "2020-3-15",
          endDate2: "2020-4-14",
          process: "优秀",
          type: "96",
        },
        {
          name: "李晓峰",
          pub: "产品部",
          planName: "2020年度安全员考核计划",
          content: "年度无伤亡，无重大损失本月",
          date: "2020-1-8～2021-1-7",
          dutyName: "刘宗宪",
          startDate1: "2020-1-8",
          endDate1: "2021-1-7",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "合格",
          type: "87",
        },
        {
          name: "姜岑",
          pub: "安全部",
          planName: "2020年1月度安全员考核计划",
          content: "本月无伤亡，无重大损失",
          date: "2020-1-8～2020-2-7",
          dutyName: "王云",
          startDate1: "2020-1-8",
          endDate1: "2020-2-7",
          startDate2: "2020-1-15",
          endDate2: "2020-2-14",
          process: "合格",
          type: "85",
        },
        {
          name: "刘烨",
          pub: "信息部",
          planName: "2020年2月度安全员考核计划",
          content: "本月无伤亡，无重大损失",
          date: "2020-2-8～2020-3-7",

          dutyName: "李青",
          startDate1: "2020-2-8",
          endDate1: "2020-3-7",
          startDate2: "2020-2-15",
          endDate2: "2020-3-14",
          process: "合格",
          type: "67",
        },
        {
          name: "陈李济",
          pub: "财务部",
          planName: "2020年3月度安全员考核计划",
          content: "本月无伤亡，无重大损失",
          date: "2020-3-8～2020-4-7",

          dutyName: "刘淑媛",
          startDate1: "2020-3-8",
          endDate1: "2020-4-7",
          startDate2: "2020-3-15",
          endDate2: "2020-4-14",
          process: "优秀",
          type: "96",
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
        let nameKey = "name";
        let contentKey = "pub";
        let dateKey = "startDate1";

        let nameIn = this.searchForm[nameKey]
          ? item[nameKey].indexOf(this.searchForm[nameKey]) >= 0
          : true;
        let contentIn = this.searchForm[contentKey]
          ? item[contentKey].indexOf(this.searchForm[contentKey]) >= 0
          : true;

        let sDate = this.searchForm[dateKey][0];
        let eDate = this.searchForm[dateKey][1];

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
        name: "",
        pub: "",
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