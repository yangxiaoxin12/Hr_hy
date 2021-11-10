<template>
  <div class="cashPointList">
    <div class="bartop">
      <mainSidebar></mainSidebar>
    </div>
    <div class="main-header">
      <el-form
        :inline="true"
        :model="cashForm"
        label-width="100px"
        class="demo-form-inline"
      >
        <el-form-item label="卡券名称:">
          <el-input v-model="cashForm.cardName" placeholder></el-input>
        </el-form-item>
        <el-form-item prop="phoneNumber" label="使用状态">
          <el-select
            style="width:180px"
            v-model="cashForm.status"
            placeholder="请选择状态"
          >
            <el-option label="使用过" value="0"></el-option>
            <el-option label="未使用" value="1"></el-option>
          </el-select>
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
        <el-table-column prop="cardName" label="卡卷名称"></el-table-column>
        <el-table-column prop="code" label="卡卷编号"></el-table-column>
        <el-table-column prop="password" label="卡卷密码"></el-table-column>
        <el-table-column prop="status" label="使用状态"></el-table-column>

        <el-table-column prop="startTime" label="开始时间"></el-table-column>
        <el-table-column prop="endTime" label="到期时间"></el-table-column>
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
import mainSidebar from "@/components/common/mainSidebar";
export default {
  components: {
    Pagination,
    mainSidebar
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
          cardName: "",
          cardNo: "",
          pass: "",
          type: "",
          startTime: "",
          endTime: ""
        }
      ],
      time: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      cashForm: {
        cardName: "",
        cardNo: "",
        pass: "",
        type: "",
        status: "",
        startTime: "",
        endTime: ""
      }
    }; //return
  }, //methods
  methods: {
    getList() {
      
      this.$Service.get(
        "/card/cardList.action?cardName=" +
          this.cashForm.cardName +
          "&status=" +
          this.cashForm.status +
          "&page=" +
          this.listQuery.page +
          "&pageSize=" +
          this.listQuery.limit
      )
        .then(res => {
          console.log(res);
          if (res.data.status == 0) {
            this.$message.success("获取成功获取数据");
            this.tableData = res.data.data;
            this.total = res.data.count;
            this.tableData.map(val => {
              switch (val.status) {
                case 0:
                case "":
                case null:
                case undefined:
                  val.status = "未使用";
                  break;
                case 1:
                case "1":
                  val.status = "已使用";
                  break;
                  defaule;
                  val.status = "未知";
              }
            });
          } else {
            this.$message.warring("获取数据失败");
          }
        })
        .catch(err => {
          this.$message.error("未获得数据,接口原因");
        });
      //this.tableData = virtualData;
    },
    res() {
      this.cashForm = {
        cardName: "",
        cardNo: "",
        pass: "",
        type: "",
        status: null,
        startTime: "",
        endTime: ""
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
