<template>
  <div class="zhanghu">
    
    <div class="main-header">
        <el-form class="demo-form-inline" :inline="true" :model="cashForm" label-width="100px">
      <el-form-item label="活动名称:">
        <el-input v-model="cashForm.prizeName" placeholder="请输入"></el-input>
      </el-form-item>
      <el-form-item style="width:200px!important">
        <el-button class="searchCss" type="success">查询</el-button>
        <el-button class="addThemeCss">重置</el-button>
      </el-form-item>
    </el-form>
    </div>
    <div class="content">
      <div id="tab">
      <el-table :data="tableData" stripe border style="width: 100%">
        <el-table-column align="center" prop="themeName" label="活动名称"></el-table-column>
        <el-table-column align="center" prop="prizeName" label="奖项名称"></el-table-column>
        <el-table-column align="center" prop="userId" label="用户"></el-table-column>
        <el-table-column align="center" prop="mobile" label="手机号"></el-table-column>
        <el-table-column align="center" prop="wxOpenId" label="微信号"></el-table-column>
        <el-table-column align="center" prop="createTime" width="220px" label="中奖时间"></el-table-column>
        <el-table-column align="center" prop="send" label="是否发放">
          <template slot-scope="scope">
            <span v-if="scope.row.send=='0'">已发放</span>
            <span v-if="scope.row.send=='1'" style="color:red;">未发放</span>
          </template>
        </el-table-column>

        <el-table-column fixed="right" label="操作" width="130">
          <template slot-scope="scope">
            <el-button
              @click="handleEdit(scope.row)"
              style="fontSize:12px;"
              type="text"
              v-if="scope.row.send=='1'"
            >改为未发放</el-button>
            <el-button
              style="fontSize:12px;"
              @click="handleEdi(scope.row)"
              type="text"
              v-if="scope.row.send=='0'"
            >改为发放</el-button>
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
      @pagination="getList(2)"
    />
  </div>
</template>

<script>
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination

export default {
  prizeName: "",

  components: {Pagination},

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
      tableData: [
        {
          themeName: "挚爱漫威", //活动名称
          prizeName: "电影票", //奖项名称
          userId: "test123", //用户
          mobile: "1482323123312", //手机号
          wxOpenId: "wx_12321312", //微信号
          createTime: "2013-03-18 16:43", //中间时间
          send: "已发放" //是否发放
        },
        {
          themeName: "我是戏剧王",
          prizeName: "笔记本电脑",
          userId: "test123",
          mobile: "1482323123312",
          wxOpenId: "wx_12321312",
          createTime: "2013-03-18 16:43",
          send: "已发放"
        },
        {
          themeName: "谁虎谁上",
          prizeName: "神舟模型",
          userId: "test12321",
          mobile: "1482323123312",
          wxOpenId: "wx_12321312",
          createTime: "2013-03-18 16:43",
          send: "已发放"
        },
        {
          themeName: "看谁跑的快",
          prizeName: "女朋友",
          userId: "test1123",
          mobile: "1482323123312",
          wxOpenId: "wx_123123",
          createTime: "2013-03-18 16:43",
          send: "已发放"
        }
      ],
      //新增和编辑弹框标题
      cashForm: {
        prizeName: "",
        userName: "",
        mobile: ""
      }
    };
  },

  watch: {},

  methods: {
    getList(){},
    handleEdit(row) {
      console.log(row);
      row.send = "0";
    },
    handleEdi(row) {
      console.log(row);
      row.send = "1";
    },
    //接口已完成
    send(){
      let a={};
      this.$Service
        .post(
          "/api/getWinners.action",a,
          // "http://localhost:8083/SX_activitycenter/api/getThemeList.action",
          {
            headers: {
              "Access-Control-Allow-Origin": "*", //解决cors头问题
              "Access-Control-Allow-Credentials": "true", //解决session问题
              "Content-Type": "application/json;charset=UTF-8" //将表单数据传递转化为form-data类型
            },
             withCredentials: true
          }
        ).then(res => {
          if (res.data.status === 0) {
            res.data.data.forEach(item=>{
                if(item.send== null){
                    item.send ="1"
                   
                }
            })
            // if(res.data)
            let b = JSON.stringify(res.data)
            this.tableData = res.data.data
          }
    })
  }
  },
  mounted() {
    this.send();
  },

  created() {}
};
</script>
<style lang='' scoped>
.demo-form-inline {
  margin-left: 0px;
}
.searchCss{
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
</style>