<template>
  <div class="cashPointList">
    <!-- <div class="bartop">
      <mainSidebar></mainSidebar>
    </div>-->
    <div class="main-header">
      <el-form
        :inline="true"
        :model="cashForm"
        label-width="100px"
        class="demo-form-inline"
      >
        <el-form-item prop="phoneNumber" label="运营商:">
          <el-select v-model="cashForm.isp" placeholder="--请选择--">
            
            <el-option label="移动" value="1"></el-option>
            <el-option label="联通" value="2"></el-option>
            <el-option label="电信" value="3"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="phoneNumber" label="规则类型:">
          <el-select v-model="cashForm.productType" placeholder="--请选择--">
            <el-option label="订购" value="1"></el-option>
            <el-option label="包月" value="2"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item style="width:200px!important">
          <el-button class="searchCss" productType="success" @click="getList"
            >查询</el-button
          >
          <el-button class="addThemeCss" productType="primary" @click="res"
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
        <el-table-column prop="productType" label="规则类型"></el-table-column>
        <el-table-column
          prop="isp"
          width="70px"
          label="运营商"
        ></el-table-column>
        <el-table-column prop="productName" label="规则名称"></el-table-column>
        <el-table-column prop="productId" label="产品编号"></el-table-column>
        <el-table-column prop="productRank" label="成长值"></el-table-column>
        <el-table-column prop="productIntegral" label="积分"></el-table-column>
        <el-table-column prop="opt" width="190px" label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="handleEdit(scope.row)" size="small"
              >修改</el-button
            >
            <el-button type="text" @click="handleDelete(scope.row)" size="small"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <el-dialog title="配置规则" :visible.sync="dialogFormVisible">
        <el-form
          style="width:500px;"
          label-width="100px"
          :model="formInline"
          ref="formInline"
        >
          <el-form-item label="规则类型:">
            <el-input
              v-model="formInline.productType"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
          <el-form-item label="运营商:">
            <el-select
              style="width:400px"
              v-model="formInline.isp"
              placeholder="请选择"
            >
              <el-option label="移动" value="1"></el-option>
              <el-option label="联通" value="2"></el-option>
              <el-option label="电信" value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="产品名称:">
            <el-input
              v-model="formInline.productName"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
          <el-form-item label="产品ID:">
            <el-input
              v-model="formInline.productId"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
          <el-form-item label="成长值:">
            <el-input
              v-model="formInline.productRank"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
          <el-form-item label="积分:">
            <el-input
              v-model="formInline.productIntegral"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="onSave('change')">确 定</el-button>
        </div>
      </el-dialog>
      <div class="addRulePlane">
        <i class="el-icon-plus"></i>
        <el-button class="addRule" @click="addRule" type="text" size="small"
          >新增规则</el-button
        >
      </div>

      <el-dialog title="新增规则" :visible.sync="dialogFormVisible1">
        <el-form
          style="width:500px;"
          label-width="100px"
          :model="addFormInline"
          ref="addFormInline"
        >
          <el-form-item label="规则类型:">
            <el-select
              style="width:400px"
              v-model="addFormInline.productType"
              placeholder="请选择"
            >
              <el-option label="订购" value="1"></el-option>
              <el-option label="包月" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="运营商:">
            <el-select
              style="width:400px"
              v-model="addFormInline.isp"
              placeholder="请选择"
            >
              <el-option label="移动" value="1"></el-option>
              <el-option label="联通" value="2"></el-option>
              
              <el-option label="电信" value="3"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="产品名称:">
            <el-input
              v-model="addFormInline.productName"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
          <el-form-item label="产品ID:">
            <el-input
              v-model="addFormInline.productId"
              placeholder="请输入"
            ></el-input>
          </el-form-item>

          <el-form-item label="成长值:">
            <el-input
              v-model="addFormInline.productRank"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
          <el-form-item label="增加积分:">
            <el-input
              v-model="addFormInline.productIntegral"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible1 = false">取 消</el-button>
          <el-button type="primary" @click="onSave('new')">确 定</el-button>
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
   
  },
  data() {
    return {
      addOne: {},
      dialogFormVisible: false,
      dialogFormVisible1: false,
      addFormInline: {
        productId: "",
        productName: "",
        productType: "",
        productRank: "",
        productIntegral: "",
        isp: ""
      },
      formInline: {
        productId: "",
        productName: "",
        productType: "",
        productRank: "",
        productIntegral: "",
        isp: ""
      },

      total: 1,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 10,
        importance: undefined,
        title: undefined,
        productType: undefined,
        sort: "+productId"
      },
      tableData: [
        {
          id: "1",
          productId: "",
          isp: "",
          productName: "",
          productIntegral: "",
          productType: "",
          productRank: "",
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
        isp: "",
        productType: ""
      }
    }; //return
  }, //methods
  methods: {
    getList() {
      this.$Service.post(
        "/api/getProductList.action",
        JSON.stringify(this.cashForm),
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
            this.tableData = res.data.data;
            //this.total=res.data.count;
            this.tableData.map(val => {
              switch (val.productType) {
                case 1:
                case "1":
                  val.productType = "订购";
                  break;
                case 2:
                case "2":
                  val.productType = "包月";
                  break;
                default:
                  val.productType = "未知";
              }
            });
            this.tableData.map(val => {
              switch (val.isp) {
                case 1:
                case "1":
                  val.isp = "移动";
                  break;
                case 2:
                case "2":
                  val.isp = "联通";
                  break;
                case 3:
                case "3":
                  val.isp = "电信";
                  break;
                default:
                  val.isp = "未知";
              }
            });
          } else {
            this.$message.error("未获得数据");
          }
        })
        .catch(error => {
          this.$message.error("未获得数据,接口原因");
        });
    },

  handleEdit(row) {
    console.log(row);
    this.dialogFormVisible = true;
    this.formInline = row;
    switch (this.formInline.isp) {
      case "移动":
        this.formInline.isp = 1;
        break;

      case "联通":
        this.formInline.isp = 2;
        break;

      case "电信":
        this.formInline.isp = 3;
        break;
      default:
        this.formInline.isp = 0;
    }
    switch (this.formInline.productType) {
      case "订购":
        this.formInline.productType = 1;
        break;

      case "包月":
        this.formInline.productType = 2;
        break;

      default:
        this.formInline.productType = 0;
    }
  },

  handleDelete(row) {
    this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning"
    })
      .then(() => {
        this.$Service.get(
          "/api/deleteProduct.action?id=" + row.id,
          //"http://localhost:8083/SX_activitycenter/api/getThemeList.action",
          {
            headers: {
              "Access-Control-Allow-Origin": "*", //解决cors头问题
              "Access-Control-Allow-Credentials": "true", //解决session问题
              "Content-productType": "application/json;charset=UTF-8" //将表单数据传递转化为form-data类型
            },
            withCredentials: true
          }
        ).then(res => {
          if (res.data.status == 0) {
            this.$message({
              productType: "success",
              message: "删除成功!"
            });
          } else {
            this.$message({
              productType: "error",
              message: "删除失败!"
            });
          }
        });
      })
      .catch(() => {
        this.$message({
          type: "info",
          message: "已取消删除!"
        });
      });
  },
  onSave(name) {
    console.log(name);

    let sendParams;
    if (name == "change") {
      sendParams = this.formInline;
    } else if (name == "new") {
      sendParams = this.addFormInline;
    }
    console.log(JSON.stringify(sendParams));
    this.$Service.post("/api/addOrUpdateProduct.action", JSON.stringify(sendParams), {
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
          this.$message.success("成功!");
        } else {
          this.$message.error("未获得数据");
        }
      })
      .catch(error => {
        this.$message.error("未获得数据,接口原因");
      });
    this.dialogFormVisible = false;
    this.dialogFormVisible1 = false;
  },
  addRule() {
    console.log("添加规则")
    this.dialogFormVisible1 = true;
  },
  res(){
    this.cashForm= {
        isp: "",
        productType: ""
      }
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
.addRulePlane,
.addRule {
  color: rgba(10, 171, 149, 1);
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  text-align: center;
}
.addRulePlane {
  margin-top: 40px;
  border: 1px solid #ebeef5;
}
</style>
