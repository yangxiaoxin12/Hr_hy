// 活动参与与详情
<template>
  <div class="zhanghu">
    <div class="main-header">
         <el-form
      class="demo-form-inline"
      :inline="true"
      :model="cashForm"
      label-width="100px"
    >
      <el-form-item label="活动名称:">
        <el-input v-model="cashForm.themeName" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="活动类型:">
        <el-input v-model="cashForm.type" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item style="width:200px!important">
        <el-button class="searchCss" type="success" @click="getList"
          >查询</el-button
        >
        <el-button class="addThemeCss">重置</el-button>
      </el-form-item>
    </el-form>
    </div>
    <div class="content">
      <div id="tab">
      <el-table :data="tableData" stripe border style="width: 100%">
        <el-table-column
          align="center"
          prop="id"
          label="主题活动"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="themeName"
          label="活动名称"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="type"
          label="类型"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="startTime"
          label="开始时间"
        ></el-table-column>
        <el-table-column
          align="center"
          prop="endTime"
          label="结束时间"
        ></el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button @click="tuli" style="fontSize:12px;" type="text"
              >查看图列</el-button
            >
            <el-button @click="xiangqing" style="fontSize:12px;" type="text"
              >详情</el-button
            >
            <el-button style="fontSize:12px;" type="text">导出详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
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
  activityName: "",

  components: { Pagination },
  mounted() {
    this.getList();
  },
  data() {
    return {
      total: 1,
      listQuery: {
        page: 1,
        limit: 10,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "+No"
      },
      tableData: [],
      //新增和编辑弹框标题
      cashForm: {
        themeName: "",
        type: ""
      }
    };
  },

  watch: {},

  methods: {
    xiangqing() {
      this.$router.push("/participation");
    },
    getList() {
      
      let sendParams={};
      sendParams.themeName = this.cashForm.themeName;
      sendParams.type = this.cashForm.type;
      sendParams.pageNo = this.listQuery.page;
      sendParams.pageSize = this.listQuery.limit;
      
      console.log(JSON.stringify(sendParams));
      console.log("河流不再流淌");
      this.$Service.post(
        "/api/getThemeList.action",
        JSON.stringify(sendParams),
        //"http://localhost:8083/SX_activitycenter/api/getWinners.action",{},
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
          if (res.data.status === 0) {
            console.log(res.data);
            this.tableData = res.data.data;
            this.total = res.data.count;
            this.tableData.map((val)=>{
                switch(val.type){
                  case 6:
                    val.type="投票"
                    break;
                     case 7:
                    val.type="问卷"
                    break;
                     case 8:
                    val.type="点赞"
                    break;
                     case 9:
                    val.type="签到"
                    break;
                     case 10:
                    val.type="抽奖"
                    break;
                     case 11:
                    val.type="随机码"
                    break;
                    case 12:
                    val.type="报名"
                    break;
                    case 13:
                    val.type="领红包"
                    break;
                    case 14:
                    val.type="积分"
                    break;
                    default:
                      val.type="未知"
                }
            })
          } else {
            this.$message.warning("未获得数据");
          }
        })
        .catch(err => {
          this.$message.error("未获得数据，接口原因!");
        });
    },
    tuli() {
      this.$router.push("/incos");
    }
  }
};
</script>
<style lang="" scoped>
.demo-form-inline {
  margin-left: 0px;
}
.searchCss {
  background: rgba(10, 171, 149, 1);
}
.main-header {
  width: 1150px;
  height: 70px;
  background-color: #fff;
  padding: 0px;
  text-align: left;
  font-size: 14px;
  color: rgba(60, 67, 83, 1);
  margin-top: 15px;
  box-sizing: border-box;
  overflow: hidden;
}
.content {
  width: 1150px;
  height: 600px;
  margin-top: 20px;
   margin-bottom: 70px;
}
.tab{
  width: 1150px;
  height: 600px;
}
</style>
