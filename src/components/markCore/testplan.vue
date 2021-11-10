<template>
  <div>
    <div class="form-outer">
      <div class="label">计划名称：</div>
      <el-input
        class="item"
        v-model="searchForm.planName"
        placeholder="请输入计划名称"
      ></el-input>
    </div>

    <el-table border :data="tableData" style="width: 100%" height="700">
      <el-table-column fixed prop="planName" label="计划名称" width="150">
      </el-table-column>
      <el-table-column prop="content" label="考核内容" width="150">
      </el-table-column>
      <el-table-column prop="date" label="考核期" width="200">
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
      <el-table-column prop="endDate1" label="目标结束日期" width="120">
      </el-table-column>
      <el-table-column prop="endDate2" label="评估结束日期" width="120">
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
          planName: "安全员考核计划",
          content: "无伤亡，无重大损失",
          date: "2020-1-8～2021-1-7",
          name: "王小虎",
          dutyName: "刘宗宪",
          startDate1: "2020-1-8",
          endDate1: "2021-1-7",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "年度阶段",
          type: "安全考核",
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
    width: 200px;
  }
  .label {
    line-height: 50px;
  }
}
</style>