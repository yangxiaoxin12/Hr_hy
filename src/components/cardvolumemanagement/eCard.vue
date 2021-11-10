<template>
  <div class="eCard">
    <div class="main-header">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="卡卷名称:">
          <el-input v-model="formInline.cardName" placeholder></el-input>
        </el-form-item>
        <el-form-itme>
          <el-button class="searchCss" type="success" @click="getList"
            >查询</el-button
          >
          <el-button class="addThemeCss" type="primary" @click="onSubmit"
            >重置</el-button
          >
        </el-form-itme>
      </el-form>

      <el-button type="primary" @click="addPrize">增加卡卷</el-button>
    </div>
    <div class="content">
          <el-dialog title="新增卡卷" :visible.sync="dialogFormVisible">
      <el-form
        ref="card"
        refs="card"
        label-width="100px"
        :rules="rules"
        style="width:500px;"
        :model="card"
      >
        <el-form-item label="卡卷名称:" prop="cardName">
          <el-input v-model="card.cardName"></el-input>
        </el-form-item>
        <el-form-item label-width="100px" label="投放渠道:" prop="opera">
          <el-select
            style="width:400px"
            v-model="card.opera"
            placeholder="请选择活动区域"
          >
            <el-option label="移动" value="0"></el-option>
            <el-option label="联通" value="1"></el-option>
            <el-option label="电信" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="开始时间:" prop="startTime">
          <el-date-picker
            type="date"
            style="width: 100%;"
            placeholder="开始时间"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            v-model="card.startTime"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间" prop="endTime">
          <el-date-picker
            type="date"
            placeholder="结束时间"
            format="yyyy-MM-dd"
            style="width: 100%;"
            value-format="yyyy-MM-dd"
            v-model="card.endTime"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="卡卷首编码:" prop="code">
          <el-input v-model="card.code"></el-input>
        </el-form-item>
        <el-form-item label="卡卷密码:" prop="password">
          <el-input v-model="card.password"></el-input>
        </el-form-item>

        <el-form-item label="产品ID:" prop="productId">
          <el-input v-model="card.productId"></el-input>
        </el-form-item>
        <el-form-item label="产品名称:" prop="productName">
          <el-input v-model="card.productName"></el-input>
        </el-form-item>
        <el-form-item label="总数量:" prop="cardCount" type="number">
          <el-input v-model="card.cardCount"></el-input>
        </el-form-item>
        <el-form-item label-width="100px" label="规则:" prop="rule">
          <el-select
            style="width:400px"
            v-model="card.rule"
            placeholder="参加活动次数"
          >
            <el-option label="活动期间领取一次" value="0"></el-option>
            <el-option label="每天领取一次" value="1"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSave">确 定</el-button>
      </div>
    </el-dialog>
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
      <el-table-column prop="opera" label="运营商"></el-table-column>
      <el-table-column prop="productName" label="产品名称"></el-table-column>
      <el-table-column prop="productId" label="产品ID"></el-table-column>
      <el-table-column prop="noUseNum" label="可用数量"></el-table-column>
      <el-table-column prop="cardCount" label="总数量"></el-table-column>
      <el-table-column prop="startTime" label="开始时间"></el-table-column>
      <el-table-column prop="endTime" label="结束时间"></el-table-column>

      <el-table-column label="操作" width="200px">
        <template slot-scope="scope">
          <el-button @click="checkList(scope.row)" type="text" size="small"
            >明细</el-button
          >
          <el-button type="text" @click="handleEdit(scope.row)" size="small"
            >上传</el-button
          >
          <el-button type="text" @click="handleDelete(scope.row,scope.$index)" size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="明细" :visible.sync="dialogFormVisibleDis">
      <el-form
        ref="card"
        refs="card"
        label-width="100px"
        :rules="rules"
        style="width:500px;"
        :model="card"
      >
        <el-form-item label="卡卷名称:" prop="cardName">
          <el-input v-model="card.cardName"></el-input>
        </el-form-item>
        <el-form-item label-width="100px" label="投放渠道:" prop="opera">
          <el-select
            style="width:400px"
            v-model="card.opera"
            placeholder="请选择活动区域"
          >
            <el-option label="移动" value="0"></el-option>
            <el-option label="联通" value="1"></el-option>
            <el-option label="电信" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="开始时间:" prop="startTime">
          <el-input v-model="card.startTime"></el-input>
        </el-form-item>
        <el-form-item label="结束时间:" prop="endTime">
          <el-input v-model="card.endTime"></el-input>
        </el-form-item>
        <el-form-item label="卡卷首编码:" prop="code">
          <el-input v-model="card.code"></el-input>
        </el-form-item>
        <el-form-item label="卡卷密码:" prop="password">
          <el-input v-model="card.password"></el-input>
        </el-form-item>
        <el-form-item label="产品ID:">
          <el-input v-model="card.productId"></el-input>
        </el-form-item>
        <el-form-item label="产品名称:" prop="productName">
          <el-input v-model="card.productName"></el-input>
        </el-form-item>
        <el-form-item label="总数量:">
          <el-input v-model="card.cardCount"  prop="cardCount" type="number" placeholder="请输入数字"></el-input>
        </el-form-item>
        <el-form-item label-width="100px" label="规则:" prop="rule">
          <el-select
            style="width:400px"
            v-model="card.rule"
            placeholder="参加活动次数"
          >
            <el-option label="活动期间领取一次" value="0"></el-option>
            <el-option label="每天领取一次" value="1"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="onCancel">取 消</el-button>
        <el-button type="primary" @click="onCheck">确 定</el-button>
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

export default {
  components: {
    Pagination
  },
  mounted() {
    this.getList();
    console.log("他往上 想明白那月光...");
  },
  data() {
    return {
      dialogFormVisibleDis: false,
      dialogFormVisible: false,
      card: {
        id: 0,
        cardName: "",
        code: "",
        password: "",
        cardCount: 0,
        opera: null,
        productId: null,
        productName: "",
        startTime: "",
        endTime: "",
        createTime: "",
        rule:null
      },
      formInline: {
        cardName: ""
      },
      tableData: [
        {
          id: null,
          cardName: "",
          code: null,
          password: null,
          userId: null,
          startTime: "",
          endTime: "",
          createTime: null,
          cardCount: null, //卡卷总数量
          noUseNum: null, //可用数量

          opera: 1,

          productId: null,
          productName: "",

          batch: null //批次
        }
      ],
      total: 1,
      listQuery: {
        page: 1,
        limit: 10,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "+No"
      },
      rules:{
        cardName:[
           { required: true, message: "请输入卡卷名称", trigger: "blur" },
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
        code:[
          { required: true, message: "请输入卡卷首编码名称", trigger: "blur" },
          { min: 2, max: 66, message: "长度在 2 到 66个字符", trigger: "blur" }
        ],
        password:[
          { required: true, message: "请输入卡卷首编码名称", trigger: "blur" },
          { min: 2, max: 66, message: "长度在 2 到 66个字符", trigger: "blur" }
        ],
        cardCount:[
           {
            required: true,
            message: "请输入1 到 999999 正整数",
            trigger: "blur"
          },
          {
            min: 1,
            max: 10,
            message: "1到 999999 正整数",
            trigger: "blur"
          }
        ],
        rule: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
      }
    };
  }, // data
  methods: {
    getList() {
      
      console.log("而我要实现她的愿望....");
      
      this.$Service.get(
        "/card/queryCardList.action?page=" +
          this.listQuery.page +
          "&pageSize=" +
          this.listQuery.limit +
          "&cardName=" +
          this.formInline.cardName
      )
        .then(res => {
          console.log(res);
          this.total = res.data.count;
          this.tableData = res.data.data;
        })
        .catch(error => {
          this.$message.error("获取卡卷失败,接口无法调用");
        });
    },
    onSubmit() {},
    checkList(row) {
      this.dialogFormVisibleDis = true;
      this.card = row;
    },
    onCheck() {
      this.dialogFormVisibleDis = false;
      
      let sendParams = this.card;
      sendParams.createTime=this.card.startTime
      console.log(JSON.stringify(sendParams))
       this.$Service.post(
          "/card/addcard.action",
          JSON.stringify(sendParams),
          //sendParams,
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
          
          if (res.data.status == "0" || res.data.status == 0) {
            this.$message({
              type: "success",
              message: "新增卡卷成功!"
            });
          } else {
            this.$message({
              type: "error",
              message: "新增卡卷失败!"
            });
          }
        })
        .catch(error => {
          this.$message.error("新增卡卷,接口无法调用");
        });
      this.card = {
        id: 0,
        cardName: "",
        code: "",
        password: "",
        cardCount: 0,
        opera: null,
        productId: null,
        productName: "",
        startTime: "",
        endTime: "",
        createTime: "",
        rule:null
      };
    },
    onCancel() {
      this.dialogFormVisibleDis = false;
      this.card = {
        id: 0,
        cardName: "",
        code: "",
        password: "",
        cardCount: 0,
        opera: null,
        productId: null,
        productName: "",
        startTime: "",
        endTime: "",
        createTime: "",
        rule:null
      };
    },
    addPrize() {
      this.dialogFormVisible = true;
      
      this.card = {
        id: 0,
        cardName: "",
        code: "",
        password: "",
        cardCount: 0,
        opera: null,
        productId: null,
        productName: "",
        startTime: "",
        endTime: "",
        createTime: "",
        rule:null
      };
    },
    handleEdit(row) {
      // this.$message({
      //   type: "success",
      //   message: "上传成功!"
      // });
      this.$message.warning("上传接口未提供!该功能未完善,敬请期待....")
    },
    handleDelete(row,i) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          console.log(row)
          this.$Service.get('/card/deletecard.action?cardId='+row.id
          ).then(res=>{
            console.log(res);
            if(res.data.status==0){
              this.$message.success("卡卷删除成功!")
            }else{
              this.$message.error("卡卷删除失败!")
            }
          }).catch(err=>{
            this.$message.error("卡卷删除失败!接口原因")
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除!"
          });
        });
    },
    onSave() {
      this.dialogFormVisible = false;
      console.log(this.card);
      let sendParams = this.card;
      sendParams.createTime=this.card.startTime
      console.log(JSON.stringify(sendParams))

      
       this.$Service.post(
          "/card/addcard.action",
          JSON.stringify(sendParams),
          //sendParams,
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
          /*
              {
                  "msg": "新增数据成功",
                  "status": 0,
                  "data": null,
                  "count": null
              }
          */
          if (res.data.status == "0" || res.data.status == 0) {
            this.$message({
              type: "success",
              message: "新增卡卷成功!"
            });
          } else {
            this.$message({
              type: "error",
              message: "新增卡卷失败!"
            });
          }
        })
        .catch(error => {
          this.$message.error("新增卡卷,接口无法调用");
        });
    }
  } // method
};
</script>
<style scoped>
.eCard {
  width: 100%;
  height: 900px;
  background-color: rgba(255, 255, 255, 0.2);
}
.main-header {
  width: 1150px;
  height: 108px;
  background-color: #fff;
  padding: 0px;
  text-align: left;
  font-size: 14px;
  color: rgba(60, 67, 83, 1);
  margin-top: 15px;
  box-sizing: border-box;
  overflow: hidden;
}
.content{
  width: 1150px;
  height:610px;
  margin-bottom: 50px;
}
.el-button--success {
  background: rgba(10, 171, 149, 1);
  border-radius: 4px;
}
</style>
