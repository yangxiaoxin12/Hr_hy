/* 组织架构 */
<template>
  <div class="orgBuild">
    <div class="main-header">
      <el-form
        :inline="true"
        :model="userForm"
        label-width="100px"
        class="demo-form-inline"
      >
        <el-form-item label="用户名称:">
          <el-input v-model="userForm.userName" placeholder></el-input>
        </el-form-item>
        <el-form-item prop="mobile" label="手机号">
          <el-input v-model="userForm.mobile"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="searchCss" type="success" @click="getList"
            >查询</el-button
          >
          <el-button class="addThemeCss" type="primary" @click="res"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
      <el-table
        class="tableDataCss"
        :data="tableData"
        border
        stripe
        :row-style="{ height: '47px' }"
        :cell-style="{ padding: '5px 0px' }"
        style="width: 100%"
      >
        <el-table-column prop="id" sortable label="id"></el-table-column>

        <el-table-column prop="wxname" label="微信昵称"></el-table-column>

        <el-table-column
          prop="integral"
          sortable
          label="总积分"
        ></el-table-column>

        <el-table-column prop="userName" label="用户名"></el-table-column>
        <el-table-column prop="userNumber" label="账号"></el-table-column>
        <el-table-column prop="mobile" label="手机号"></el-table-column>
        <el-table-column prop="opt" width="190px" label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >明细</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <memberDetail
      :show.sync="show"
      :curRow.sync="curRow"
      @showValue="showValue"
    />
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />
  </div>
</template>
<script>
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination
import memberDetail from "@/components/pointmanagement/pointUserListDetail";
export default {
  components: {
    Pagination,
    memberDetail,
  },
  mounted() {
    this.getList();
  },
  data() {
    return {
      show: false,
      listLoading: true,
      total: 1,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 2,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "+No",
      },
      userForm: {
        userName: "",
        mobile: "",
      }, // userForm
      tableData: [
        {
          id: "1",
          // "No":"1",
          userName: "抽奖",
          userNumber: "you11",
          mobile: "1390019569",
          score: "3908",
          time: "2020-03-27",
          wxName: "wx11",
          integral: "111",
          account: null,
        },
      ],
      curRow: null,
    };
  },
  methods: {
    showValue(data) {
      this.show = data;
    },
    getList() {
      let sendParams = {};
      sendParams.userName = this.userForm.userName;
      sendParams.mobile = this.userForm.mobile;
      sendParams.pageNo = this.listQuery.page;
      sendParams.pageSize = this.listQuery.limit;

      console.log(sendParams);
      console.log(JSON.stringify(sendParams));
      /*
      {"userName":"","mobile":"","pageSize":"","pageNo":""}
      {"userName":"","mobile":"","pageNo":10,"pageSize":1}传递值报错
      */
      this.$Service
        .post("/api/getUserList.action", JSON.stringify(sendParams), {
          headers: {
            "Access-Control-Allow-Origin": "*", //解决cors头问题
            "Access-Control-Allow-Credentials": "true", //解决session问题
            "Content-Type": "application/json;charset=UTF-8", //将表单数据传递转化为form-data类型
          },
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          if (res.data.status === 0) {
            this.tableData = res.data.data;
            this.total = res.data.count;
          } else {
            this.$message.error("未获得数据");
          }
        })
        .catch((err) => {
          this.$message.error("未获得数据,链接接口报错!");
        });
    },
    res() {},
    handleClick(row) {
      this.curRow = row;

      this.show = true;
    },
  },
};
</script>
<style scoped>
.orgBuild {
  width: 100%;
  height: 860px;
}
.main-header {
  width: 100%;
  height: 80%;
  background-color: #fff;
  padding: 0px;
  text-align: left;
  font-size: 14px;
  color: rgba(60, 67, 83, 1);
  margin-top: 15px;
  box-sizing: border-box;
  overflow: hidden;
}
.el-button--success {
  background: rgba(10, 171, 149, 1);
  border-radius: 4px;
}
</style>
