<template>
  <div class="cashPointList">
    <div class="main-header">
      <el-table
        class="tableDataCss"
        :data="tableData"
        border
        stripe
        :row-style="{ height: '47px' }"
        :cell-style="{ padding: '5px 0px' }"
        style="width: 100%"
      >
        <el-table-column
          prop="topLimit"
          align="center"
          label="成长值"
        ></el-table-column>
        <el-table-column
          prop="lv"
          align="center"
          label="等级"
        ></el-table-column>
        <el-table-column prop="opt" align="center" width="190px" label="操作">
          <template slot-scope="scope">
            <el-button
              type="text"
              @click="handleEdit(scope.$index, scope.row)"
              size="small"
              >修改</el-button
            >
            <el-button type="text" @click="handleDelete(scope.row)" size="small"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>

      <el-dialog title="修改" :visible.sync="dialogFormVisible">
        <el-form
          style="width:500px;"
          label-width="100px"
          :model="formInline"
          ref="formInline"
        >
          <el-form-item label="等级:">
            <el-input v-model="formInline.lv" placeholder="等级"></el-input>
          </el-form-item>
          <el-form-item label="成长值下限:">
            <el-input
              v-model="formInline.topLimit"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
          <el-form-item label="成长值上限:">
            <el-input
              v-model="formInline.lowLimit"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="onSave1">确 定</el-button>
        </div>
      </el-dialog>
      <div class="addRulePlane">
        <i class="el-icon-plus"></i>
        <el-button class="addRule" @click="addRule" type="text" size="small"
          >新增等级</el-button
        >
      </div>

      <el-dialog title="新增等级" :visible.sync="dialogFormVisible1">
        <el-form
          style="width:500px;"
          label-width="100px"
          :model="dataFormInline"
          ref="dataFormInline"
        >
          <el-form-item label="等级:">
            <el-input v-model="dataFormInline.lv" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="成长值下限:">
            <el-input
              v-model="dataFormInline.topLimit"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
          <el-form-item label="成长值上限:">
            <el-input
              v-model="dataFormInline.lowLimit"
              placeholder="请输入"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible1 = false">取 消</el-button>
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
    //this.send();
  },
  data() {
    return {
      num: "",
      addOne: {},
      dialogFormVisible1: false,
      formInline: {
        lowLimit: "",
        topLimit: "",
        lv: ""
      },
       dataFormInline: {
        lowLimit: "",
        topLimit: "",
        lv: ""
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
      tableData: [{}],
      dataCopy: null,
      time: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      }
    }; //return
  }, //methods
  methods: {
    getList() {
      this.$Service.get("/api/getRankList.action")
        .then(res => {
          console.log(res);
          if (res.data.status == 0) {
            this.$message.success("获取数据成功!");
            this.dataCopy = res.data.data;
            this.tableData = res.data.data;
            //this.total=res.data.count;
            // this.tableData.map(val=>{
            //   val.growth=val.lowLimit+"-"+val.topLimit
            // })
          } else {
            this.$message.error("未获得数据");
          }
        })
        .catch(error => {
          this.$message.error("未获得数据,接口原因");
        });
    },
    handleEdit(i, row) {
      this.num = i;
      console.log(i, row);
      this.dialogFormVisible = true;
      this.formInline =row;
    },
    handleDelete(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          const sendparams={};
                sendparams.id=row.id;
                console.log(sendparams);
          this.$Service.post("/api/deleteRank.action.action",JSON.stringify(sendparams),{
            headers: {
              "Access-Control-Allow-Origin": "*", //解决cors头问题
              "Access-Control-Allow-Credentials": "true", //解决session问题
              "Content-Type": "application/json;" //将表单数据传递转化为form-data类型
            },
            withCredentials: true
          })
            .then(res => {
              if (res.data.status == 0) {
                this.$message.success("删除成功!");
              } else {
                this.$message.error("删除失败!");
              }
            })
            .catch(error => {
              this.$message({
                productType: "error",
                message: "删除失败!接口原因"
              });
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除!"
          });
        });
    },
    onSave() {
      this.$Service.post('/api/addOrUpdateRank.action',JSON.stringify(this.dataFormInline),{
      headers: {
        "Access-Control-Allow-Origin": "*", //解决cors头问题
        "Access-Control-Allow-Credentials": "true", //解决session问题
        "Content-Type": "application/json;charset=UTF-8" //将表单数据传递转化为form-data类型
      },
      withCredentials: true
    }).then(res=>{
      console.log(res);
      if(res.data.status==0){
        this.$message.success("新增新增!")
      }else{
         this.$message.error("新增失败!");
      }
    }).catch(error=>{
      this.$message.error("新增失败,接口原因");
    })
      this.dialogFormVisible1 = false;
    },

    onSave1() {
      this.$Service.post('/api/addOrUpdateRank.action',JSON.stringify(this.formInline),{
      headers: {
        "Access-Control-Allow-Origin": "*", //解决cors头问题
        "Access-Control-Allow-Credentials": "true", //解决session问题
        "Content-Type": "application/json;charset=UTF-8" //将表单数据传递转化为form-data类型
      },
      withCredentials: true
    }).then(res=>{
      console.log(res);
      if(res.data.status==0){
        this.$message.success("修改成功!")
      }else{
        this.$message.error("修改失败!");
      }
    }).catch(error=>{
      this.$message.error("修改失败,接口原因");
    })
      this.dialogFormVisible = false;

     
    },
    addRule() {
      this.dialogFormVisible1 = true;
      this.formInline = {
        lv: "",
        topLimit: "",
        lowLimit: "",
        levnum: ""
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
