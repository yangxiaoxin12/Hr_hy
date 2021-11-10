<template>
  <div class="votingDetails">
    <div class="searchBar">
      <span>名称:</span>
      <el-input v-model="seachValue" placeholder="请输入内容"></el-input>
      <span>类型:</span>
      <el-select v-model="options[0].value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>
    <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      type="index"
      :index="indexMethod">
    </el-table-column>
    <el-table-column
      prop="date"
      label="主题名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="类型"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="开始时间">
    </el-table-column>
    <el-table-column
      prop="address"
      label="结束时间">
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">选项</el-button>
        <el-button
          size="mini"
          @click="handleProportion(scope.$index, scope.row)">占比</el-button>
        <el-button
          size="mini"
          @click="handleDetails(scope.$index, scope.row)">详情</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination style="margin-top:20px"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>
<script>
export default {
  name: 'votingDvetails',
  data () {
    return {
      seachValue: '',
      currentPage: 2, // 当前页数
      options: [
        {
          value: '选项1',
          label: '全部'
        },
        {
          value: '选项2',
          label: '选项一'
        }
      ],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333,
        tag: '家'
      }]
    }
  },
  mounted () {
    this.getVotingDvetails()
  },
  methods: {
    // 获取详情接口
    getVotingDvetails(){
      const userIn='{"userName": "'+'admin'+'","password": "'+'admin'+'"}'
      const userInfo=JSON.parse(userIn)
      // http://localhost:8083/SX_activitycenter/userLogin.action
      // SX_activitycenter/userLogin.action
      this.$Service.post('http://localhost:8083/SX_activitycenter/userLogin.action',userInfo,{
        headers: {
          "Access-Control-Allow-Origin": "*", //解决cors头问题
          "Access-Control-Allow-Credentials": "true", //解决session问题
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" //将表单数据传递转化为form-data类型
        },
        withCredentials: true
      }).then(res => {
        console.log(res)
      })
    },
    // 序号显示
    indexMethod (index) {
      return index + 1
    },
    // 选项
    handleEdit (index, row) {
      console.log(index)
      console.log(row)
      this.$router.push({path: '/testDraw', query: {index: index, row: row}})
    },
    // 占比
    handleProportion (index, row) {
      this.$router.push({path: '/proportion', query: {index: index, row: row}})
    },
    // 详情
    handleDetails (index, row) {
      // tableVotingDetails
      this.$router.push({path: '/tableVotingDetails', query: {index: index, row: row}})
      // this.$router.push({path:'/tableVotingDetails',query:{index:index, row:row}});
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }

}
</script>
