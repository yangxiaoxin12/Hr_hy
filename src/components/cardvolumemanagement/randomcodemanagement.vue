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
        <el-form-item label="随机码名称:">
          <el-input v-model="cashForm.cardName" placeholder></el-input>
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
        height="621px"
        border
        stripe
        :row-style="{ height: '47px' }"
        :cell-style="{ padding: '5px 0px' }"
        style="width: 100%"
      >
        <el-table-column prop="codeName" label="随机码名称"></el-table-column>
        <el-table-column prop="randomCode" label="随机码"></el-table-column>
        <el-table-column prop="userId" label="使用用户账号"></el-table-column>
        <el-table-column prop="opera" label="运营商"></el-table-column>
        <el-table-column prop="productName" label="产品名称"></el-table-column>
        <el-table-column prop="productId" label="产品ID"></el-table-column>
        <el-table-column prop="startTime" label="开始时间"></el-table-column>
        <el-table-column prop="endTime" label="结束时间"></el-table-column>
        <el-table-column prop="status" label="使用状态"></el-table-column>
      </el-table>

      <div class="randomCodePanel">
        <i class="el-icon-plus"></i>
        <el-button
          class="addRandomCode"
          @click="addRandomCode"
          type="text"
          size="small"
          >新增随机码</el-button
        >
      </div>
      <el-dialog title="新增随机码" :visible.sync="dialogFormVisible">
        <el-form
          style="width:500px;"
          label-width="100px"
          :rules="rules"
          :model="formInline"
          ref="formInline"
        >
          <el-form-item prop="codeName" label="随机码名称:">
            <el-input
              v-model="formInline.codeName"
              placeholder="请输入随机码名称"
            ></el-input>
          </el-form-item>
          <el-form-item label-width="100px" label="投放渠道:" prop="opera">
            <el-select
              style="width:400px"
              v-model="formInline.opera"
              placeholder="请选择活动区域"
            >
              <el-option label="移动" value="0"></el-option>
              <el-option label="联通" value="1"></el-option>
              <el-option label="电信" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="规则:" prop="rule">
            <el-input
              v-model="formInline.rule"
              placeholder="一个用户可以领取次数"
              type="number"
            ></el-input>
          </el-form-item>

          <el-form-item label="开始时间" prop="startTime">
            <el-date-picker
              type="date"
              placeholder="开始时间"
              format="yyyy-MM-dd"
              style="width: 100%;"
              value-format="yyyy-MM-dd"
              v-model="formInline.startTime"
            ></el-date-picker>
          </el-form-item>

          <el-form-item label="结束时间" prop="endTime">
            <el-date-picker
              type="date"
              placeholder="结束时间"
              format="yyyy-MM-dd"
              style="width: 100%;"
              value-format="yyyy-MM-dd"
              v-model="formInline.endTime"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="产品ID:">
            <el-input v-model="formInline.productId"></el-input>
          </el-form-item>
          <el-form-item label="产品名称:">
            <el-input v-model="formInline.productName"></el-input>
          </el-form-item>
          <el-form-item label="生成数量:" prop="codeNum">
            <el-input
              v-model="formInline.codeNum"
              placeholder="请输入数字"
              type="number"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="onSave">确 定</el-button>
        </div>
      </el-dialog>
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
    console.log("当天空不再蓝...");
  },
  data() {
    return {
      total: 1,
      formInline: {
        codeName: "",
        startTime: "",
        endTime: "",
        codeNum: "",
        productId: null,
        productName: "",
        opera: null,
        rule: null
      },
      rules: {
        codeName: [
          { required: true, message: "请输入随机码名称", trigger: "blur" },
          { min: 2, max: 66, message: "长度在 2 到 66个字符", trigger: "blur" }
        ],
        opera: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        startTime: [
          {
            type: "string",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        endTime: [
          {
            type: "string",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        codeNum: [
          {
            required: true,
            message: "请输入1 到 99999999 正整数",
            trigger: "blur"
          },
          {
            min: 1,
            max: 99999999,
            message: "1 到 99999999 正整数",
            trigger: "blur"
          }
        ],
        rule: [
          {
            required: true,
            message: "请输入1 到 10 正整数",
            trigger: "blur"
          },
          {
            min: 1,
            max: 10,
            message: "1到 10 正整数",
            trigger: "blur"
          }
        ]
      },
      dialogFormVisible: false,
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
          id: 1,
          codeName: "618优惠券",
          randomCode: "cwC5rJ",
          userId: null,
          codeNum: null,
          status: 0,
          msg: null,
          endTime: "2020-06-26 00:00:00",
          createTime: "2020-06-16 00:00:00",
          startTime: "2020-06-17 00:00:00",
          receiveTime: null,
          rule: 1,
          batch: 1,
          opera: 1,
          productId: 100413,
          productName: "4K标清"
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
        startTime: "",
        endTime: ""
      }
    }; //return
  }, //methods
  methods: {
    getList() {
      //this.tableData = virtualData;
      console.log(this.cashForm.cardName)
      this.$Service.get(
        "/random/codeNameList.action?page=" +
          this.listQuery.page +
          "&pageSize=" +
          this.listQuery.limit +
          "&codeName=" +
          this.cashForm.cardName
      )
        .then(res => {
         // console.log(res);
          if (res.data.status == 0 || res.data.status == "0") {
            this.tableData = res.data.data;
            this.total = res.data.count;
            this.tableData.map(val => {
              switch (val.opera) {
                case 0:
                case "0":
                case null:
                case undefined:
                  val.opera = "移动";
                  break;
                case "1":
                case 1:
                  val.opera = "联通";
                  break;
                case 2:
                case "2":
                  val.opera = "电信";
                  break;
                default:
                  val.opera = "未知";
              }
            });
          } else {
            this.$message.error("查找随机码失败！");
          }
        })
        .catch(error => {
          this.$message.error("查找随机码失败！接口原因");
        });
    },

    res() {},
    addRandomCode() {
      this.dialogFormVisible = true;
    },
    onSave() {
      console.log(this.formInline);
      this.$refs["formInline"].validate(valid => {
        if (!valid) {
          return false;
        } else {
          // this.dialogFormVisible = false;
          this.$Service.post(
            "/random/addRandomCode.action",
            JSON.stringify(this.formInline),
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
              
              if (res.data.status == 0 || res.data.status == "0") {
                this.$message({
                  message: "创建成功！",
                  type: "success"
                });
              } else {
                this.$message.error("创建随机码失败");
              }
            })
            .catch(error => {
              this.$message.error("创建随机码失败！接口原因");
            });
          // getList();
          this.dialogFormVisible = false;
          //this.getList();
        }
      });
    } //save
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
  height: 760px;
  background-color: #fff;
  padding: 0px;
  text-align: left;
  font-size: 14px;
  color: rgba(60, 67, 83, 1);
  margin-top: 15px;
  box-sizing: border-box;
  overflow: hidden;
}
.randomCodePanel,
.addRandomCode {
  color: rgba(10, 171, 149, 1);
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  text-align: center;
}
.randomCodePanel {
  margin-top: 30px;
  border: 1px solid #ebeef5;
}
.el-button--success {
  background: rgba(10, 171, 149, 1);
  border-radius: 4px;
}
</style>
