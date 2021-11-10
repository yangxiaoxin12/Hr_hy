<template>
  <div class="cashPointList">
    <div class="main-header">
      <el-form
        :inline="true"
        :model="cashForm"
        label-width="100px"
        class="demo-form-inline"
      >
        <el-form-item label="会员账号:">
          <el-input v-model="cashForm.userName" placeholder></el-input>
        </el-form-item>
        <el-form-item prop="phoneNumber" label="运营商:">
          <el-select
            style="width:180px"
            v-model="cashForm.isp"
            placeholder="全部"
          >
            <el-option label="联通" value="0"></el-option>
            <el-option label="移动" value="1"></el-option>
            <el-option label="电信" value="2"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item style="width:400px!important">
          <el-button class="searchCss" type="success" @click="getList"
            >查询</el-button
          >
          <!-- <el-button class="addThemeCss" type="primary" @click="res">重置</el-button> -->
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
        <el-table-column prop="userName" label="账号"></el-table-column>
        <el-table-column prop="rank" label="成长值"></el-table-column>
        <el-table-column prop="integral" label="积分"></el-table-column>
        <el-table-column prop="lv" label="等级"></el-table-column>
        <el-table-column prop="wxName" label="微信号"></el-table-column>
        <el-table-column prop="isp" label="运营商"></el-table-column>

        <el-table-column prop="opt" width="190px" label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >明细</el-button
            >
            <el-button type="text" @click="handleEdit(scope.row)" size="small"
              >会员信息</el-button
            >
            <el-button type="text" @click="handleDelete(scope.row)" size="small"
              >人工干预</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <!-- 明细 -->
      <memberDetail :show.sync="show" :curRow="curRow" @showValue="showValue" />
      <el-dialog title="会员信息" :visible.sync="dialogFormVisible">
        <el-form
          style="width:500px;"
          label-width="100px"
          :model="formInline"
          ref="formInline"
        >
          <el-form-item label="姓名:">
            <el-input
              v-model="formInline.userName"
              placeholder="请输入姓名"
            ></el-input>
          </el-form-item>
          <el-form-item label="性别:">
            <el-select
              style="width:400px"
              v-model="formInline.sex"
              placeholder="请输入性别"
            >
              <el-option label="女" value="1"></el-option>
              <el-option label="男" value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="出生日期:">
            <el-date-picker
              type="date"
              placeholder="请选择"
              format="yyyy-MM-dd"
              style="width: 100%;"
              value-format="yyyy-MM-dd"
              v-model="formInline.birthday"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="学历:">
            <el-select
              style="width:400px"
              v-model="formInline.education"
              placeholder="请选择"
            >
              <el-option label="小学" value="1"></el-option>
              <el-option label="初中" value="0"></el-option>
              <el-option label="高中/中专" value="2"></el-option>
              <el-option label="专科" value="3"></el-option>
              <el-option label="本科" value="4"></el-option>
              <el-option label="硕士研究生" value="5"></el-option>
              <el-option label="博士研究生" value="6"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="手机号:">
            <el-input
              v-model="formInline.mobile"
              placeholder="请输入联系方式"
            ></el-input>
          </el-form-item>
          <el-form-item label="地址:">
            <el-input
              v-model="formInline.address"
              placeholder="请输入地址信息"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false"
            >确 定</el-button
          >
        </div>
      </el-dialog>
      <el-dialog title="人工干预" :visible.sync="dialogFormVisible1">
        <el-form
          style="width:500px;"
          label-width="100px"
          :model="formInlinedata"
          ref="formInlinedata"
        >
          <el-form-item label="会员表id:">
            <el-input
              v-model="formInlinedata.id"
              placeholder="会员表id"
            ></el-input>
          </el-form-item>
          <el-form-item label="成长倍数:">
            <el-input
              v-model="formInlinedata.multiple"
              placeholder="请输入1-99之间的数"
            ></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible1 = false">取 消</el-button>
          <el-button type="success" @click="onSure"
            >保存</el-button
          >
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

import memberDetail from "@/components/membercenter/memberDetail";
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination
import mainSidebar from "@/components/common/mainSidebar";
export default {
  components: {
    Pagination,
    mainSidebar,
    memberDetail
  },
  mounted() {
    this.getList();
  },
  data() {
    return {
      curRow: null,
      show: false,
      dataForm: null,
      dialogFormVisible1: false,
      formInline: {
        name: "",
        sex: "",
        birthday: "",
        deucation: "",
        phone: "",
        area: ""
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
          id: "",
          memberAccount: "",
          channel: "",
          rule: "",
          type: "",
          count: "",
          growth: "",
          endTime: "",
          level: ""
        }
      ],
      time: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      },
      cashForm: {
        userName: "",
        isp: null
      },
      formInlinedata:{
        id:null,
        multiple:null,
      }
    }; //return
  }, //methods
  methods: {
    showValue(data) {
      this.show = data;
    },
    getList() {
      const sendParams = this.cashForm;

      sendParams.pageSize = this.listQuery.limit;
      sendParams.pageNo = this.listQuery.page;
      console.log(sendParams);
      this.$Service.post("/api/getUserList.action", JSON.stringify(sendParams), {
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
            this.dataForm = res.data.data;
            this.tableData = res.data.data;
            this.total = res.data.count;
            this.tableData.map(val => {
              switch (val.isp) {
                case "0":
                case 0:
                  val.isp = "移动";
                  break;
                case "1":
                case 1:
                  val.isp = "联通";
                  break;
                case "2":
                case 2:
                  val.isp = "电信";
                  break;
              }
            });
          } else {
            this.$message.error("获取数据失败!");
          }
        })
        .catch(error => {
          this.$message.error("未获得数据,接口原因");
        });
      
    },
    res() {},
    handleClick(row) {
      this.show = true;
      console.log(row);
      this.curRow = row;
    },
    handleEdit(row) {
      const Info={};
      Info.userId=row.userId;
      this.$Service.post("/api/getUserInfo.action",JSON.stringify(Info),{
        headers: {
          "Access-Control-Allow-Origin": "*", //解决cors头问题
          "Access-Control-Allow-Credentials": "true", //解决session问题
          "Content-Type": "application/json;charset=UTF-8" //将表单数据传递转化为form-data类型
        },
        withCredentials: true
      }).then(res=>{
        console.log(res);
        if(res.data.status==0){
           this.formInline = res.data.data;
        }else{
          this.$message.error("未获得数据!");
        
        }
        this.dialogFormVisible = true;
       
      }).catch(error=>{
        this.$message.error("未获得数据,接口原因");
        this.formInline = row;
      })
      
    },
    handleDelete(row) {
      
      this.formInlinedata.id=row.id;
      this.formInlinedata.multiple;
      this.dialogFormVisible1 = true;
      
    },
    onSure(){
      console.log(JSON.stringify(this.formInlinedata))
      this.$Service.post("/api/addOrUpdateUser.action",JSON.stringify(this.formInlinedata), {
        headers: {
          "Access-Control-Allow-Origin": "*", //解决cors头问题
          "Access-Control-Allow-Credentials": "true", //解决session问题
          "Content-Type": "application/json;charset=UTF-8" //将表单数据传递转化为form-data类型
        },
        withCredentials: true
      }).then(res=>{
        console.log(res)
      }).catch(_=>{
        this.$message.error("未获得数据,接口原因");
      })
      this.dialogFormVisible1 = false;
    },
    onSave() {}
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
