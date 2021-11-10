<template>
  <div class="cashPointList">
    <div class="main-header">
      <el-form
        :inline="true"
        :model="cashForm"
        label-width="100px"
        class="demo-form-inline"
      >
        <el-form-item label="用户名称:">
          <el-input v-model="cashForm.userName" placeholder></el-input>
        </el-form-item>
        <el-form-item prop="mobile" label="手机号">
          <el-input v-model="cashForm.mobile"></el-input>
        </el-form-item>
        <el-form-item label-width="100px"  label="时间">
          <el-date-picker
            v-model="createTime"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions"
          ></el-date-picker>
        </el-form-item>
        <el-form-item style="width:200px!important">
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
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="userName" label="姓名"></el-table-column>
        <el-table-column prop="account" label="账号"></el-table-column>
        <el-table-column prop="mobile" label="手机号"></el-table-column>
        <el-table-column prop="prize" label="兑换奖品"></el-table-column>
        <el-table-column prop="consumeIntegral" label="消耗积分"></el-table-column>
        <el-table-column prop="createTime" label="时间"></el-table-column>
      </el-table>
    </div>
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

export default {
  components: {
    Pagination
  },
  mounted() {
    this.getList();
  },
  data() {
    return {
      total: 1,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "+No"
      },
      tableData: [
        {
          id: "1",
          userName: "admin",
          account: "op12",
          mobile: "13600177688",
          prize: "",
          consumeIntegral: 222,
          userIntegral: 3200,
          createTime: "2020-03-29"
        }
      ],
      time: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      cashForm: {
        mobile: null,
        userName: null,
        createTime: null
      }
    }; //return
  }, //methods
  methods: {
    getList() {
      let sendsParams = {};
      sendsParams.userName = this.cashForm.userName;
      sendsParams.mobile = this.cashForm.mobile;
      sendsParams.createTime = this.cashForm.createTime;
      console.log(JSON.stringify(sendsParams));
      
      this.$Service.post(
          "/api/getExchangeList.action",
          JSON.stringify(sendsParams),
          {
            headers: {
              "Access-Control-Allow-Origin": "*", //解决cors头问题
              "Access-Control-Allow-Credentials": "true", //解决session问题
              "Content-Type": "application/json;charset=UTF-8" //将表单数据传递转化为form-data类型
            },
            withCredentials: true
          }
        )
        .then(res => {
          console.log(res);
          if (res.data.status == 0) {
            console.log(res);
            this.tableData = res.data.data;
            this.total=res.data.count;
            console.log("用象形刻画成回忆...");
            console.log(this.total)
          } else {
            this.$message.error("未获得数据");
          }
        }).catch(err=>{
          this.$message.error("获取数据失败,接口原因!");
        })
    },
    res() {
      this.cashForm = {
        mobile: null,
        userName: null,
        createTime: null
      };
    }
  }
};
</script>
<style scoped>
.userPointList {
  width: 100%;
  height: 900px;
  background-color: rgba(255, 255, 255, 0.2);
}
.main-header {
  width: 1150px;
  height: 608px;
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
