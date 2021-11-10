<template>
  <div class="activitytype">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="id" label="编号" sortable width="180"></el-table-column>
      <el-table-column prop="name" label="活动主题名称" width="300"></el-table-column>
      <el-table-column prop="address" label="总票数" sortable width="300"></el-table-column>
      <el-table-column prop="average" sortable label="平均分" ></el-table-column>
      <el-table-column prop="option" label="选项"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "1",
          name: "平运部门爱奇艺TV抽奖活动",
          address: "12",
          average: "2",
          option: "1星[0票]\n2星[0票]\n3星[0票]\n4星[2票]\n5星[2票]"
        },
        {
          id: "2",
          name: "平运部门爱奇艺TV抽奖活动",
          address: "13",
          average: "2",
          option: "1星[0票]\n2星[0票]\n3星[0票]\n4星[2票]\n5星[2票]"
        },
        {
          id: "3",
          name: "平运部门爱奇艺TV抽奖活动",
          address: "16",
          average: "2",
          option: "1星[0票]\n2星[0票]\n3星[0票]\n4星[2票]\n5星[2票]"
        },
        {
          id: "4",
          name: "平运部门爱奇艺TV抽奖活动",
          address: "20",
          average: "2",
          option: "1星[0票]\n2星[0票]\n3星[0票]\n4星[2票]\n5星[2票]"
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
