<template>
  <div id="createVote" class="createVote">
    <div class="dao">创建投票</div>
    <div class="content">
      <div class="createPross">
        <el-steps :active="active" align-center space finish-status="success">
          <el-step @click.native="on_click(0)" title="活动设置"></el-step>
          <el-step @click.native="on_click(1)" title="增票设置"></el-step>
          <el-step @click.native="on_click(2)" title="分组设置"></el-step>
          <el-step @click.native="on_click(3)" title="完成"></el-step>
        </el-steps>
      </div>
      <div class="main-content">
        <div class="stepOne" v-if="!active">
          <el-form
            :model="theme"
            label-width="100px"
            status-icon
            ref="theme"
            :rules="rules"
          >
            <el-form-item class="restCss" prop="themeName" label="活动名称:">
              <el-input
                v-model="theme.themeName"
                placeholder="请输入名称"
              ></el-input>
            </el-form-item>
            <el-form-item label="投放渠道:" prop="channel">
              <el-select
                style="width:400px"
                v-model="theme.channel"
                placeholder="请选择活动区域"
              >
                <el-option label="移动" value="0"></el-option>
                <el-option label="联通" value="1"></el-option>
                <el-option label="电信" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item
              label-width="100px"
              id="timeCss"
              label="时间区间:"
              required
            >
              <el-col :span="11" style="width:180px">
                <el-form-item label-width="0px" prop="startTime">
                  <el-date-picker
                    type="date"
                    style="width: 100%;"
                    placeholder="开始时间"
                    format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd"
                    v-model="theme.startTime"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col class="line" style="width: 35px;" :span="2">至</el-col>
              <el-col :span="11">
                <el-form-item prop="endTime">
                  <el-date-picker
                    type="date"
                    placeholder="结束时间"
                    format="yyyy-MM-dd"
                    style="width: 100%;"
                    value-format="yyyy-MM-dd"
                    v-model="theme.endTime"
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item
              label-width="100px"
              id="timeCss"
              label="基础票数:"
              required
            >
              <el-col :span="10">
                <el-form-item label-width="0px" prop="voteType">
                  <el-select
                    style="width:170px"
                    v-model="theme.voteType"
                    prop="voteType"
                    placeholder
                  >
                    <el-option label="每天" value="1"></el-option>
                    <el-option label="整个活动" value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="2" class="line">至</el-col>
              <el-col :span="10">
                <el-form-item prop="votes">
                  <el-input
                    style="width:160px"
                    prop="votes"
                    v-model="theme.votes"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="2">票</el-col>
            </el-form-item>
            <el-form-item label-width="100px" label="获得积分:">
              <el-col :span="22">
                <el-input
                  v-model="theme.integral"
                  placeholder="请输入数字"
                ></el-input>
              </el-col>

              <el-col :span="2">分</el-col>
            </el-form-item>
            <el-form-item
              label-width="100px"
              prop="themeInterval"
              label="间隔时间:"
            >
              <el-col :span="22">
                <el-input
                  v-model="theme.themeInterval"
                  placeholder="请输入数字"
                ></el-input>
              </el-col>
              <el-col :span="2">时</el-col>
            </el-form-item>
            
            <el-form-item label-width="100px" class="optBtn">
              <el-button type="primary" @click="onSaveOne()">保存</el-button>
              <el-button @click="backPrevone()">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div v-if="active === 1" class="stepTwo">
          <el-form
            :model="give"
            status-icon
            ref="give"
            label-width="100px"
            class="demo-give"
          >
            <el-form-item label-width="100px" label="规则类型:" prop="type">
              <el-select
                style="width:400px"
                v-model="give.type"
                placeholder="本月活跃度"
              >
                <el-option label="本月活跃度" value="1"></el-option>
                <el-option label="订购指定业务" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item
              v-if="this.give.type == 1"
              label-width="100px"
              label="关联活动ID:"
              v-model="give.linkedId"
              prop="linkedId"
            >
              <el-input
                v-model="give.linkedId"
                placeholder="请输入关联活动ID"
              ></el-input>
            </el-form-item>

            <el-form-item
              v-if="this.give.type == 2"
              label-width="100px"
              label="产品ID:"
              prop="productId"
            >
              <el-input v-model="give.productId"></el-input>
            </el-form-item>

            <el-form-item label="规则说明:" prop="explain">
              <el-col :span="10">
                <el-select style="width:170px;" v-model="give.explain">
                  <el-option label="连续参加活动" value="1"></el-option>
                  <el-option label="累计参加活动" value="2"></el-option>
                </el-select>
              </el-col>
              <el-col :span="2">-</el-col>
              <el-col :span="10">
                <el-form-item style="width:160px;">
                  <el-input
                    placeholder="请输入天数"
                    v-model="give.days"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="2">天</el-col>
            </el-form-item>

            <el-form-item label-width="100px" prop="giveVote" label="赠送票数:">
              <el-col :span="22"
                ><el-input
                  placeholder="请输入赠送票数"
                  v-model="give.giveVote"
                ></el-input
              ></el-col>
              <el-col :span="2">票</el-col>
            </el-form-item>
            <el-form-item label-width="100px" prop="term" label="有效期限:">
              <el-col :span="22">
                <el-input
                  placeholder="请输入具体有效天数"
                  v-model="give.term"
                ></el-input>
              </el-col>

              <el-col :span="2">天</el-col>
            </el-form-item>
            <el-form-item class="optBtn1">
              <el-button type="primary" @click="onSaveTwo()">保存</el-button>
              <el-button @click="backPrevTwo()">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div v-if="active === 2" class="stepThree">
          <el-table :data="tableData" height="350" border style="width: 100%">
            <el-table-column
              prop="optionName"
              label="奖品名称"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="imageUrl"
              label="图片路径:"
              width="180"
            ></el-table-column>
            <el-table-column
              prop="describe"
              label="描述:"
              width="180"
            ></el-table-column>
            <el-table-column prop="options" label="选项设置:" width="180">
              <template slot-scope="scope">
                <p v-for="item in scope.row.options" :key="item">
                  {{ item.optionName }}
                </p>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  @click="hadleEidt(scope.row, scope.$index)"
                  type="text"
                  size="small"
                  >编辑选项</el-button
                >
                <el-button
                  @click="hadleChange(scope.row, scope.$index)"
                  type="text"
                  size="small"
                  >修改题目</el-button
                >
                <el-button
                  type="text"
                  @click="handleDelete(scope.row, scope.$index)"
                  size="small"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <!-- 新增分组 -->
          <div class="votePanel">
            <i class="el-icon-plus"></i>
            <el-button
              class="addGroup"
              type="text"
              size="small"
              @click="addGroup"
              >新增分组</el-button
            >
          </div>
          <!-- 提交按钮/提交 -->
          <div class="btnsOpt">
            <el-button class="submitPlane" @click="submitPlane">提交</el-button>
            <el-button class="canlePlane" @click="canlePlane">取消</el-button>
          </div>
          <!-- 新增分组 -->
          <el-dialog :title.sync="title" :visible.sync="dialogGroupVisible">
            <el-form :model="parentOption">
              <el-form-item label="分组名称" :label-width="formLabelWidth">
                <el-input
                  v-model="parentOption.optionName"
                  placeolder="请输入"
                  autocomplete="off"
                ></el-input>
              </el-form-item>

              <el-form-item label="描述" :label-width="formLabelWidth">
                <el-input
                  type="textarea"
                  v-model="parentOption.describe"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="cancleAddGroup()">取 消</el-button>
              <el-button type="primary" @click="sureAddGroup()"
                >确 定</el-button
              >
            </div>
          </el-dialog>
          <el-dialog :title.sync="name" :visible.sync="dialogEidtOptionVisible">
            <el-table :data="gridData" border ref="gridData">
              <el-table-column
                property="optionName"
                label="名称"
              ></el-table-column>
              <el-table-column
                property="imageUrl"
                label="路径"
              ></el-table-column>
              <el-table-column property="code" label="code"></el-table-column>
              <el-table-column property="media" label="媒资"></el-table-column>
              <el-table-column
                property="describe"
                label="描述"
              ></el-table-column>
              <el-table-column width="180" label="操作">
                <template slot-scope="scope">
                  <el-button
                    @click="handleoptionEidt(scope.row, scope.$index)"
                    type="text"
                    size="small"
                    >修改</el-button
                  >
                  <!-- <el-button @click="handleSure(scope.row)" type="text" size="small">确认</el-button> -->
                  <el-button
                    type="text"
                    @click="handleoptionDelete(scope.row, scope.$index)"
                    size="small"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
            <!-- 新增选项按钮 -->
            <div class="optionPanle">
              <i class="el-icon-plus"></i>
              <el-button
                class="addOption"
                @click="addOption"
                type="text"
                size="small"
                >新增选项</el-button
              >
            </div>
            <!-- 添加确认和取消第三步 -->
            <div slot="footer" class="dialog-footer">
              <el-button type="primary" @click="onSure">确定</el-button>
              <el-button @click="back">取消</el-button>
            </div>
          </el-dialog>
          <!-- 添加选项内容的form -->
          <el-dialog
            :visible="this.dialogshowDialog"
            :title="this.showDialogTitle"
          >
            <el-form :model="option">
              <el-form-item label="名称" :label-width="formLabelWidth">
                <el-input
                  v-model="option.optionName"
                  autocomplete="off"
                ></el-input>
              </el-form-item>

              <el-form-item
                :label-width="formLabelWidth"
                class="restCss"
                p
                label="媒资:"
              >
                <el-col :span="10">
                  <el-form-item rop="media" style="width:120px">
                    <el-input v-model="option.media" placeolder></el-input>
                  </el-form-item>
                </el-col>
                

                <el-col :span="2">
                  <el-button
                    type="primary"
                    style="margin-left:30px;"
                    @click="onSearch"
                    icon="el-icon-search"
                    circl
                  ></el-button>
                </el-col>
              </el-form-item>
              <el-form-item label="路径:" :label-width="formLabelWidth">
                <el-input
                  v-model="option.imageUrl"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
              <el-form-item label="描述:" :label-width="formLabelWidth">
                <el-input
                  type="textarea"
                  v-model="option.describe"
                  placeolder="请输入你的描述"
                  autocomplete="off"
                ></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="optionBack">取 消</el-button>
              <el-button type="primary" @click="optionSure">确 定</el-button>
            </div>
          </el-dialog>
        </div>
        <div v-if="active == 3">
          <span style="width:100px;height:100px">
            <svg-icon
              style="width:100px;height:100px"
              icon-class="complete"
            ></svg-icon>
          </span>

          <div class="title" style="margin-top:10px;font-size: 30px;">
            <span>活动创建完成</span>
          </div>
          <div class="opt" style="margin-top:50px;">
            <el-button type="primary" @click="createActivity"
              >再次创建活动</el-button
            >
            <el-button @click="checkActivity">查看活动</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      showDialogTitle: "新增选项内容",
      name: "编辑选项",
      title: "新增分组",
      dialogGroupVisible: false,
      dialogEidtOptionVisible: false,
      dialogshowDialog: false,

      active: 0,
      formLabelWidth: "120px",
      curIndex: null,
      curOptionIndex: 0,
      option: {
        lv: 2,
        optionName: "狮子王",
        media: "aaa11122",
        imageUrl: "test124",
        describe: null,
        
      },
      parentOption: {
        lv:1,
        optionName: "",
        
        describe: "",
        options: []
      },
      dialogFormVisible: false,
      gridData: [],
      tableData: [],
      themeForm: {
        theme: null,
        gives: [],
        parentOptions: []
      },
      rules: {
        themeName: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 2, max: 22, message: "长度在 2 到 22 个字符", trigger: "blur" }
        ],
        channel: [
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
        voteType: {
          type: "string",
          required: true,
          message: "请选择",
          trigger: "change"
        },
        votes: {
          type: "number",
          required: true,
          message: "请输入",
          trigger: "change"
        },
        integral: {
          required: false,
          pattern: /^[0-999999999]*$/,
          message: "请输入数字",
          trigger: "blur"
        }
      },
      theme: {
        themeName: "调查喜欢电影",
        channel: null,
        type: 6,
        startTime: "",
        endTime: "",
        votes: 2,
        voteType:null,
        integral: null,
        themeInterval: null
      },
      give: {
        linkedId: "",
        type: null,
        explain: null,
        days: null,
        giveVote: null,
        term: null,
        productId: null
      }
    }; //return
  }, //data
  methods: {
    on_click(e) {
      console.log(e);
      //e.preventDefault();
      this.active = e;
      console.log(this.active);
    },
    onSaveOne() {
      this.$refs["theme"].validate(valid => {
        if (valid) {
          this.themeForm.theme = this.theme;
          this.active = 1;
          console.log(this.themeForm);
        } else {
          this.$message.error("请检查输入选项");
          return false;
        }
      });
    },
    backPrevone() {
      this.themeForm.theme = {};
    },
    onSaveTwo() {
      this.themeForm.gives.push(this.give);
      this.active = 2;
      console.log(this.themeForm);
    },
    backPrevTwo() {
      this.themeForm.gives = [];
      this.give = {
        linkedId: "1",
        type: null,
        explain: null,
        days: null,
        votes: 1,
        term: null,
        productId: null
      };
    },
    addGroup() {
      this.dialogGroupVisible = true;
      this.title = "新增分组";
    },
    sureAddGroup() {
      if (this.title == "新增分组") {
        this.themeForm.parentOptions.push(this.parentOption);
        this.tableData.push(this.parentOption);
        this.parentOption = {
          optionName: "",
          
          describe: "",
          options: []
        };
        this.dialogGroupVisible = false;
        console.log("新增分组");
      } else if (this.title == "修改分组") {
        this.tableData[this.curIndex] = this.parentOption;
        this.themeForm.parentOptions[this.curIndex] = this.parentOption;
        this.parentOption = {
          optionName: "",
          
          describe: "",
          options: []
        };
        this.dialogGroupVisible = false;
        console.log("修改分组");
      }
      console.log(this.themeForm);
    },
    cancleAddGroup() {
      this.parentOption = {
        optionName: "",
       
        describe: "",
        options: []
      };
      console.log(this.themeForm);
      this.dialogGroupVisible = false;
    },
    hadleChange(row, i) {
      this.parentOption = row;
      this.curIndex = i;
      this.dialogGroupVisible = true;
      this.title = "修改分组";
    },
    handleDelete(row, i) {
      this.$confirm("确认删除？")
        .then(_ => {
          this.tableData.splice(i, 1);
          this.themeForm.parentOptions.splice(i, 1);
          done();
        })
        .catch(_ => {});
      console.log("确认删除");
      console.log(this.themeForm);
      console.log("删除后数据");
    },
    //编辑选项
    hadleEidt(row, i) {
      this.dialogEidtOptionVisible = true;
      this.curIndex = i;
      this.gridData=[];
      //console.log(this.themeForm.parentOptions[i])
    },
    // 新增选项内容
    addOption() {
      this.dialogshowDialog = true;
      this.showDialogTitle = "新增选项内容";
      this.curOptionIndex=this.curOptionIndex +1
    },
    onSearch() {},
    handleoptionEidt(row, i) {
      this.showDialogTitle = "修改选项内容";
      this.dialogshowDialog = true;
      this.curOptionIndex = i;
      this.option=row;
    },
    handleoptionDelete(row, i) {
      this.$confirm("确认删除?")
        .then(_ => {
          this.gridData.splice(i, 1);
          this.curoptionRow.options.splice(i, 1);
          done();
        })
        .catch(_ => {});
    },
    optionBack() {
      console.log("00000");
      this.dialogEidtOptionVisible = true;
      this.dialogshowDialog = false;
    },
    optionSure() {
      if (this.showDialogTitle == "新增选项内容") {
        console.log(this.curIndex);
        this.themeForm.parentOptions[this.curIndex].options.push(this.option);
        this.dialogshowDialog = false;
        this.dialogEidtOptionVisible = true;
        this.gridData.push(this.option);
        console.log(this.themeForm);
        this.option = {
          lv: 2,
          optionName: "",
          media: "",
          imageUrl: "",
          describe: null,
          
        };
      } else if (this.showDialogTitle == "修改选项内容") {
        this.themeForm.parentOptions[this.curIndex].options[
          this.curOptionIndex
        ] = this.option;
        this.dialogshowDialog = false;
        this.dialogEidtOptionVisible = true;
        this.gridData[this.curOptionIndex] = this.option;
        console.log(this.themeForm);
        this.option = {
          lv: 2,
          optionName: "",
          media: "",
          imageUrl: "",
          describe: null,
       
        };
      }
    },
    onSure() {
      this.dialogshowDialog = false;
      this.dialogEidtOptionVisible = false;
      console.log(this.themeForm);
    },
    back() {
      this.dialogshowDialog = false;
      this.dialogEidtOptionVisible = false;
    },
    submitPlane() {
      console.log(this.themeForm);
      console.log(JSON.stringify(this.themeForm));
      this.$Service.post("/api/addOrUpdateTheme.action",JSON.stringify(this.themeForm),{
            headers: {
              "Access-Control-Allow-Origin": "*", //解决cors头问题
              "Access-Control-Allow-Credentials": "true", //解决session问题
              "Content-Type": "application/json;charset=UTF-8" //将表单数据传递转化为form-data类型
            },
            withCredentials: true
          }).then(res=>{
            console.log(res);
            if(res.data.status==0){
               this.$message({
                  message: "创建成功！",
                  type: "success"
                });
                this.active=3;
                
            }else{
              this.$message.error("创建活动失败");
            }

      }).catch(error=>{
        this.$message.error("创建活动失败！接口原因");
      })
    },
    canlePlane() {}
  }
};
</script>
<style scoped>
.createVote {
  width: 100%;
  height: 900px;
}
.el-form-item__label {
  padding: 0px !important;
  height: 32px !important;
}
.content {
  width: 1200px;
  height: 800px;
  margin-top: 22px;
}
.createPross {
  width: 1200px;
  height: 50px;
  margin-bottom: 50px;
}
.main-content {
  width: 1200px;
  height: 700px;
  /* border: 1px solid red; */
  margin: 0px auto;
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
}
.stepOne,
.stepTwo,
.stepThree,
.stepFour {
  width: 600px;
  height: 420px;
  /* margin-top: 30px; */
  margin: 0 auto;
}
.stepThree {
  width: 1150px;
}
.el-form {
  width: 600px;
  height: 420px;
}
.el-form-item__content {
  width: 600px !important;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(200, 202, 204, 1);
  border-radius: 4px;
  height: 32px !important;
}
.el-form-item {
  width: 500px;
  height: 32px !important;
  margin-bottom: 30px !important;
}
#timeCss .el-form-item {
  width: 180px !important;
}
.rest .el-form-item {
  width: 162px !important;
}
.optBtn {
  margin-top: 50px;
}
.votePanel,
.addOption {
  color: rgba(10, 171, 149, 1);
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
}
.votePanel {
  margin-top: 10px;
  border: 1px solid #ebeef5;
}
.optBtn1 {
  margin-top: 50px;
}
.optBtn2 {
  margin-top: 70px;
}
.el-upload-list {
  display: none !important;
}
.el-step__head:hover {
  color: rgba(10, 171, 149, 1);
  border-color: rgba(10, 171, 149, 1);
}
.btnsOpt {
  color: rgba(10, 171, 149, 1);
  border-color: rgba(10, 171, 149, 1);
  margin-top: 20px;
}
.submitPlane {
  background: rgba(10, 171, 149, 1);
  color: #fff;
}
.opt {
  margin-top: 20px;
}
.votePanel,
.addGroup {
  color: rgba(10, 171, 149, 1);
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
}
.votePanel {
  margin-top: 10px;
  border: 1px solid #ebeef5;
}
.btnsOpt {
  color: rgba(10, 171, 149, 1);
  border-color: rgba(10, 171, 149, 1);
  margin-top: 20px;
}
.submitPlane {
  background: rgba(10, 171, 149, 1);
  color: #fff;
}
.optionPanle,
.addOption {
  color: rgba(10, 171, 149, 1);
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
}
.optionPanle {
  margin-top: 10px;
  border: 1px solid #ebeef5;
}
.opt {
  margin-top: 20px;
}
</style>
