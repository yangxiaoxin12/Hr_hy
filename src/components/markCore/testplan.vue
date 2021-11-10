<template>
  <div>
    <div class="form-outer">
      <el-input
        class="item"
        v-model="searchForm.planName"
        placeholder="请输入计划名称"
      ></el-input>
    </div>
    <el-table border :data="tableData" style="width: 100%" height="700">
      <el-table-column fixed prop="planName" label="计划名称" width="150">
      </el-table-column>
      <el-table-column prop="date" label="考核期" width="150">
      </el-table-column>
      <el-table-column prop="process" label="所属阶段" width="150">
      </el-table-column>
      <el-table-column prop="type" label="计划考核类型" width="150">
      </el-table-column>
      <el-table-column prop="dutyName" label="计划负责人" width="120">
      </el-table-column>
      <el-table-column prop="startDate1" label="目标起始日期" width="120">
      </el-table-column>
      <el-table-column prop="startDate2" label="评估起始日期" width="120">
      </el-table-column>
      <el-table-column prop="endDate1" label="目标结束日期" width="300">
      </el-table-column>
      <el-table-column prop="endDate2" label="目标结束日期" width="300">
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
      },
      tableData: [
        {
          planName: "采购员考核计划",
          date: "2016-05-03",
          name: "王小虎",
          dutyName: "刘宗宪",
          startDate1: "2020-11-07",
          endDate1: "2021-11-06",
          startDate2: "2020-12-25",
          endDate2: "2021-12-24",
          process: "阶段",
          type: "类型",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          planName: "采购员考核计划",
          date: "2016-05-03",
          name: "王小虎",
          dutyName: "刘宗宪",
          startDate1: "2020-11-07",
          endDate1: "2021-11-06",
          startDate2: "2020-12-25",
          endDate2: "2021-12-24",
          process: "阶段",
          type: "类型",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          planName: "采购员考核计划",
          date: "2016-05-03",
          name: "王小虎",
          dutyName: "刘宗宪",
          startDate1: "2020-11-07",
          endDate1: "2021-11-06",
          startDate2: "2020-12-25",
          endDate2: "2021-12-24",
          process: "阶段",
          type: "类型",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          planName: "采购员考核计划",
          date: "2016-05-03",
          name: "王小虎",
          dutyName: "刘宗宪",
          startDate1: "2020-11-07",
          endDate1: "2021-11-06",
          startDate2: "2020-12-25",
          endDate2: "2021-12-24",
          process: "阶段",
          type: "类型",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
      ],
    };
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
    width: 300px;
  }
}
</style>