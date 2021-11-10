<template>
  <div class="markDocument">
    <div class="main-header">
      <el-form
        :inline="true"
        v-bind:formInline="formInline"
        class="demo-form-inline"
      >
        <el-form-item label="活动名称:">
          <el-input
            v-model="formInline.themeName"
            placeholder="活动名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="活动类型:">
          <el-select v-model="formInline.type" placeholder="活动类型">
            <el-option label="投票" value="6"></el-option>
            <el-option label="问卷" value="7"></el-option>
            <el-option label="点赞" value="8"></el-option>
            <el-option label="签到" value="9"></el-option>
            <el-option label="抽奖" value="10"></el-option>
            <el-option label="随机码" value="11"></el-option>
            <el-option label="报名" value="12"></el-option>
            <el-option label="领红包" value="13"></el-option>
            <el-option label="积分" value="14"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发布状态:">
          <el-select v-model="formInline.status" placeholder="发布状态">
            <el-option label="发布" value="1"></el-option>
            <el-option label="未发布" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-button class="searchCss" type="success" @click="filterInput()"
          >搜索</el-button
        >
        <el-button class="addThemeCss" type="primary" @click="addActivity()"
          >添加活动</el-button
        >
      </el-form>
      <el-table
        class="tableDataCss"
        :data="tableData"
        border
        stripe
        :row-style="{ height: '47px' }"
        :cell-style="{ padding: '5px 0px' }"
        style="width: 100%;height:600px"
      >
        <!-- <el-table-column prop="No" sortable label="序号" width="80"></el-table-column> -->
        <el-table-column
          prop="id"
          sortable
          label="ThemeID"
          width="120"
        ></el-table-column>
        <el-table-column
          prop="themeName"
          sortable
          label="活动名称"
          width="220"
        ></el-table-column>
        <el-table-column
          prop="type"
          sortable
          label="活动类型"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="startTime"
          sortable
          label="开始时间"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="endTime"
          sortable
          label="结束时间"
          width="150"
        ></el-table-column>
        <el-table-column
          prop="status"
          label="状态"
          width="130"
        ></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              @click="handleClick(scope.row, scope.$index)"
              type="text"
              size="small"
              >查看</el-button
            >
            <el-button type="text" @click="handleEdit(scope.row)" size="small">
              <span v-if="scope.row.status == '未发布'">发布</span>
              <span v-if="scope.row.status == '发布'">下架</span>
            </el-button>
            <el-button
              type="text"
              @click="handleDelete(scope.$index, scope.row)"
              size="small"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="filterInput"
    />
  </div>
</template>
<style scoped>
.markDocument {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  font-family: PingFang SC;
  font-weight: 500;
  font-size: 14px;
}
.main-header {
  width: 1150px;
  height: 635px;
  background-color: rgba(255, 255, 255, 1);
  padding: 0px;
  text-align: left;
  font-size: 14px;
  color: rgba(60, 67, 83, 1);
  margin-top: 15px;
  box-sizing: border-box;
  overflow: hidden;
}

.searchCss {
  width: 75px;
  height: 40px;
  font-size: 14px;
  text-align: center;
  padding: 0px;
}
.addThemeCss {
  width: 90px;
  height: 40px;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  text-align: center;
  padding: 0px;
}

.el-button--success {
  background: rgba(10, 171, 149, 1);
  border-radius: 4px;
}

.el-pagination {
  padding: 32px 16px;
}
</style>
<script>
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination
import mainSidebar from "@/components/common/mainSidebar";
export default {
  components: {
    Pagination,
    mainSidebar
  },
  created() {
    this.filterInput();
    console.log("河流不再笑着流淌");
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

      resData: [],
      tableData: [],
      formInline: {
        themeName: "",
        type: "",
        status: null //status:0
      } //formInline
    }; //re
  },
  methods: {
    handleEdit(row, i) {
      console.log("bianji");
      console.log(row);
      let EditId = {};
      EditId.id = row.id;
      if (row.status == "发布") {
        this.$Service
          .post("/api/cancelTheme.action", JSON.stringify(EditId), {
            headers: {
              "Access-Control-Allow-Origin": "*", //解决cors头问题
              "Access-Control-Allow-Credentials": "true", //解决session问题
              "Content-Type": "application/json;charset=UTF-8" //将表单数据传递转化为form-data类型
            },
            withCredentials: true
          })
          .then(res => {
            console.log(res);
            if (res.data.status == 0) {
              this.$message.success(res.data.msg);
            } else {
              this.$message.error("下架失败");
            }
          })
          .catch(eeror => {
            this.$message.error("下架失败,接口无法调用");
          });
      } else if (row.status == "未发布") {
        this.$Service
          .post("/api/generateTheme.action", JSON.stringify(EditId), {
            headers: {
              "Access-Control-Allow-Origin": "*", //解决cors头问题
              "Access-Control-Allow-Credentials": "true", //解决session问题
              "Content-Type": "application/json;charset=UTF-8" //将表单数据传递转化为form-data类型
            },
            withCredentials: true
          })
          .then(res => {
            console.log(res);
            if (res.data.status == 0) {
              this.$message.success(res.data.msg);
            } else {
              this.$message.error("发布失败");
            }
          })
          .catch(error => {
            this.$message.error("发布失败,接口无法调用");
          });
      } else {
        this.$message.info("无法编辑");
      }
    },
    handleClick(row, i) {
      this.$router.push({
        name: "voteDetails",
        params: {
          id: row.id,
          type: row.type
        }
      });
    },
    handleDelete(index, row) {
      console.log(row);
      let deleType = row.ype;

      switch (deleType) {
        case "投票":
          deleType = 6;
          break;
        case "问卷":
          deleType = 7;
          break;
        case "点赞":
          deleType = 8;
          break;
        case "签到":
          deleType = 9;
          break;
        case "抽奖":
          deleType = 10;
          break;
        case "随机码":
          deleType = 11;
          break;
        case "报名":
          deleType = 12;
          break;
        case "领红包":
          deleType = 13;
          break;
        case "积分":
          deleType = 14;
          break;
        default:
          deleType = 0;
      }

      this.$Service.get(
        "/api/deleteTheme.action?themeId=" +
          Number(row.id) +
          "&type=" +
          Number(deleType)
      )
        .then(res => {
          console.log(res);

          if (res.data.status == 0) {
            this.$message({
              type: "success",
              message: "删除成功!"
            });
          } else {
            this.$message({
              type: "error",
              message: "删除失败!"
            });
          }
        })
        .catch(error => {
          this.$message.error("删除失败,接口无法调用");
        });
    },
    // 添加活动
    addActivity() {
      this.$router.push("/testplan");
    },
    filterInput() {
      const sendParams =
        '{"themeName":"' +
        this.formInline.themeName +
        '","type":"' +
        this.formInline.type +
        '","status":' +
        this.formInline.status +
        ',"pageSize":"' +
        this.listQuery.limit +
        '","pageNo":"' +
        this.listQuery.page +
        '"}';

      console.log(sendParams);

      this.$Service
        .post(
          "/api/getThemeList.action",
          sendParams,

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
            this.tableData = res.data.data;
            this.resData = res.data.data;
            this.total = res.data.count;
            this.tableData.map(function(val) {
              console.log(val);
              if (
                val.status == 0 ||
                val.status == false ||
                val.status == null
              ) {
                val.status = "未发布";
              } else if (val.status == 1 || val.status == true) {
                val.status = "发布";
              } else {
                val.auditStatus = "未知状态";
              }
            });
            this.tableData.map(function(val) {
              if (val.type == 6 || val.type == "6") {
                val.type = "投票";
              } else if (val.type == 7 || val.type == "7") {
                val.type = "问卷";
              } else if (val.type == 8 || val.type == "8") {
                val.type = "点赞";
              } else if (val.type == 9 || val.type == "9") {
                val.type = "签到";
              } else if (val.type == 10 || val.type == "10") {
                val.type = "抽奖";
              } else if (val.type == 11 || val.type == "11") {
                val.type = "随机码";
              } else if (val.type == 12 || val.type == "12") {
                val.type = "报名";
              } else if (val.type == 13 || val.type == "13") {
                val.type = "领红包";
              } else if (val.type == 14 || val.type == "14") {
                val.type = "积分";
              } else {
                val.type = "未知类型";
              }
            });
          } else {
            this.$message.error("未获得数据");
          }
        })
        .catch(error => {
          this.$message.error("未获得数据,接口原因");
        });
    } //chazah1
  }
};
</script>
