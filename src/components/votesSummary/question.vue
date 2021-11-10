<template>
  <div class="activitytype">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="编号" sortable width="180"></el-table-column>
      <el-table-column prop="name" label="活动主题名称" width="300"></el-table-column>
      <el-table-column prop="address" label="总票数" sortable width="300"></el-table-column>
      <el-table-column prop="option" label="选项"></el-table-column>
    </el-table>

    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dynamicTags: ["投票汇总", "投票类"],

      tableData: [
        {
          id: "1",
          name: "平运部门爱奇艺TV抽奖活动",
          address: "上海市普陀区金沙江路 1518 弄",
          option: "锄禾日当午"
        },
        {
          id: "2",
          name: "平运部门爱奇艺TV抽奖活动",
          address: "上海市普陀区金沙江路 1517 弄",
          option: "汗滴禾下土"
        },
        {
          id: "3",
          name: "平运部门爱奇艺TV抽奖活动",
          address: "上海市普陀区金沙江路 1519 弄",
          option: "谁知盘中餐"
        },
        {
          id: "4",
          name: "平运部门爱奇艺TV抽奖活动",
          address: "上海市普陀区金沙江路 1516 弄",
          option: "粒粒皆辛苦"
        }
      ]
    };
  },
  methods: {}
};
</script>
<style>
@import '../../../static/css/votesSummary.css';
</style>
