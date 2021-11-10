<template>
  <div class="eCard">
    
    <div class="main-header">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="">
          <el-input v-model="formInline.themeName" placeholder></el-input>
        </el-form-item>
        <el-form-itme>
          <el-button class="searchCss" type="success" @click="getList"
            >查询</el-button
          >
          <el-button class="addThemeCss" type="primary" @click="onSubmit"
            >重置</el-button
          >
          <el-button class="addThemeCss" @click="onSubmit">导出</el-button>
        </el-form-itme>
      </el-form>
    </div>
    <div class="content">
      <el-table
        class="tableDataCss"
        :data="tableData"
        border
        stripe

        :row-style="{ height: '47px' }"
        :cell-style="{ padding: '5px 0px' }"
        style="width: 100% "
      >
        <el-table-column prop="themeName" label="活动名称"></el-table-column>
        <el-table-column prop="prizeName" label="奖品名称"></el-table-column>
        <el-table-column prop="type" label="奖品类型"></el-table-column>
        <el-table-column prop="total" label="奖品总数"></el-table-column>
        <el-table-column prop="shiyong" label="已使用"></el-table-column>
        <el-table-column prop="stock" label="剩余"></el-table-column>
      </el-table>
    </div>
    <div class="bottom">
      <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="filterInput"
      
    />
    </div>
  </div>
</template>
<script>
import mainSidebar from "@/components/common/mainSidebar";
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination
export default {
  components: {
    mainSidebar,
    Pagination
  },
  mounted() {
    this.getList();
    this.send();
  },
  data() {
    return {
      dialogFormVisibleDis: false,
      dialogFormVisible: false,
      total: 1,
      listQuery: {
        page: 1,
        limit: 10,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "+No"
      },
      card: {
        themeName: "",
        prizeName: "",
        type: "",
        endTime: "",
        total: ""
      },
      formInline: {
        themeName: ""
      },
      tableData: [
        {
          themeName: "京东购物卡",
          prizeName: "108",
          total: "200",
          shiyong: "0",
          type: "2020-03-29",
          prizeName: "3",
          endTime: "2020-04-29"
        }
      ]
    };
  }, //data
  methods: {
    send() {
      const sendParams = this.formInline;
      sendParams.pageSize = this.listQuery.limit;
      sendParams.pageNo = this.listQuery.page;
      console.log(sendParams);
      this.$Service
        .get(
          "/api/getPrizeNum.action",
          //"http://localhost:8083/SX_activitycenter/api/getThemeList.action",
          {
            headers: {
              "Access-Control-Allow-Origin": "*", //解决cors头问题
              "Access-Control-Allow-Credentials": "true", //解决session问题
              "Content-productType": "application/json;charset=UTF-8" //将表单数据传递转化为form-data类型
            },
            withCredentials: true
          }
        )
        .then(res => {
          if (res.data.status === 0) {
            console.log(res.data);
            res.data.data.forEach(item => {
              if (item.type == 1) {
                item.type = "实物";
              } else if (item.type == 2) {
                item.type = "虚拟物品";
              } else {
                item.type = "未知";
              }
              if (item.total == null || item.total == "") {
                item.shiyong = 0;
              } else {
                item.shiyong = item.total - item.stock;
              }
            });
            this.tableData = res.data.data;
          }
        });
    },
    getList() {
      
      const virtualData = [
        {
          themeName: "订醇享抽大奖",
          prizeName: "京东购物卡",
          type: "虚拟兑换奖品",
          shiyong: 0,
          total: 30,
          stock: 22
        },
        {
          themeName: "醇享送送送",
          prizeName: "3天VIP醇享",
          type: "虚拟兑换奖品",
          shiyong: 0,
          total: 11,
          stock: 3
        },
        {
          themeName: "酬宾大福利",
          prizeName: "7天VIP醇享",
          type: "虚拟兑换奖品",
          shiyong: 0,
          total: 21,
          stock: 7
        }
      ];
      this.tableData = virtualData;
    }
  } //method
};
</script>
<style scoped>

.main-header {
  width: 1150px;
  height: 50px;
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
.el-pagination {
  padding: 32px 16px;
}
.content {
  width: 1150px;
  height: 520px;
  margin-top: 20px;
  overflow: hidden;
  
}
.bottom{
  margin-top:50px;
}
</style>
