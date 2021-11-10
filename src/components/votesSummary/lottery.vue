<template>
  <div class='activitytype'>
    <el-table :data='tableData'  border style='width: 100%'>
      <el-table-column prop='id' label='编号' sortable width='180'> </el-table-column>
      <el-table-column prop='name' label='活动主题名称'   width='300'> </el-table-column>
      <el-table-column prop='address' label='总票数' sortable width='300'> </el-table-column>
      <el-table-column prop='option' label='选项' >  </el-table-column>
    </el-table>

    <!-- 路由出口 -->
    <router-view> </router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dynamicTags: ['投票汇总', '投票类'],
      inputVisible: false,
      inputValue: '',
      tableData: [
        {
          id: '1',
          name: '平运部门爱奇艺TV抽奖活动',
          address: '12',
          option: '一等奖[人数:1] [中奖率:50.0%] \n 二等奖[人数:1]  [中奖率:50.0%] \n 未中奖[人数:2]  [中奖率:100.0%]'
        },
        {
          id: '2',
          name: '平运部门爱奇艺TV抽奖活动',
          address: '13',
          option: '一等奖[人数:1] [中奖率:30.0%] \n 二等奖[人数:1]  [中奖率:50.0%] \n 未中奖[人数:2]  [中奖率:100.0%]'
        },
        {
          id: '3',
          name: '平运部门爱奇艺TV抽奖活动',
          address: '16',
          option: '一等奖[人数:1] [中奖率:50.0%] \n 二等奖[人数:1]  [中奖率:50.0%] \n 未中奖[人数:2]  [中奖率:100.0%]'
        },
        {
          id: '4',
          name: '平运部门爱奇艺TV抽奖活动',
          address: '20',
          option: '一等奖[人数:1] [中奖率:50.0%] \n 二等奖[人数:1]  [中奖率:50.0%] \n 未中奖[人数:2]  [中奖率:100.0%]'
        }
      ]
    };
  },
  methods: {
    handleClose (tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },

    handleInputConfirm () {
      let inputValue = this.inputValue
      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    }
  }
}

</script>
<style>
@import '../../../static/css/votesSummary.css';
</style>
