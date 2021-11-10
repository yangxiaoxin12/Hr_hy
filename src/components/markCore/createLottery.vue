<template>
  <div class="lottery">
    <!-- 步骤条 -->
    <div class="dao">创建抽奖</div>
    <div class="content">
      <div class="createPross">
        <el-steps :active="active" align-center space finish-status="success">
          <el-step title="活动设置" @click.native="on_click(0)"></el-step>
          <el-step title="添加赠票" @click.native="on_click(1)"></el-step>
          <el-step title="奖品管理" @click.native="on_click(2)"></el-step>
          <el-step title="完成" @click.native="on_click(3)"></el-step>
        </el-steps>
      </div>
      <!-- 活动设置 -->
      <div class="main-content">
        <!-- step1 -->
        <div v-if="!active" class="stepOne">
          <lottery @theme="getThemeData" />
        </div>

        <div v-if="active === 1" class="stepTwo">
          <el-form
            :model="give"
            status-icon
            ref="give"
            label-width="100px"
            class="demo-give"
          >
            <el-form-item
              label-width="100px"
              label="关联活动ID:"
              prop="linkedId"
              v-if="this.give.type == 1"
            >
              <el-input placeholder v-model="give.linkedId"></el-input>
              <!-- <el-select  v-model="give.linkedId"  style="width:400px" placeholder>
              <el-option label="投票" value="投票"></el-option>
              <el-option label="问卷" value="问卷"></el-option>
              <el-option label="点赞" value="点赞"></el-option>
              <el-option label="签到" value="签到"></el-option>
              <el-option label="抽奖" value="抽奖"></el-option>
              <el-option label="随机码" value="随机码"></el-option>
              <el-option label="报名" value="报名"></el-option>
              <el-option label="领红包" value="领红包"></el-option>
              <el-option label="积分" value="积分"></el-option>
            </el-select>-->
            </el-form-item>
            <el-form-item label-width="100px" label="规则类型:" prop="type">
              <el-select style="width:400px" v-model="give.type" placeholder>
                <el-option label="本月活跃度" value="1"></el-option>
                <el-option label="订购指定业务" value="2"></el-option>
              </el-select>
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
                  <el-input placeholder v-model="give.days"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="2">天</el-col>
            </el-form-item>

            <el-form-item
              v-if="this.give.type == 2"
              prop="productId"
              label="产品ID:"
            >
              <el-input placeholder v-model="give.productId"></el-input>
            </el-form-item>

            <el-form-item label-width="100px" label="赠送票数:">
              <el-col :span="22">
                <el-input v-model="give.giveVote"></el-input>
              </el-col>
              <el-col :span="2">分</el-col>
            </el-form-item>
            <el-form-item label-width="100px" prop="term" label="有效期限:">
              <el-select
                style="width:400px"
                v-model="give.term"
                placeholder="请选择"
              >
                <el-option label="5天内有效" value="0"></el-option>
                <el-option label="活动内有效" value="1"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="optBtn1">
              <el-button type="primary" @click="onSave('give')">保存</el-button>
              <el-button @click="backPrev('give')">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
        <!-- step2 -->
        <div v-if="active === 2" class="stepThree">
          <stepTable @toPrizeData="getPrizesData" />
        </div>
        <!-- step3 -->
        <div class="stepFour" v-if="active === 3">
          <span style="width:100px;height:100px">
            <svg-icon
              style="width:100px;height:100px"
              icon-class="complete"
            ></svg-icon>
            <!-- <i style="width:100px;height:100px" class="el-icon-success"></i> -->
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
<style scoped>
.lottery {
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
</style>
<script>
import lottery from "@/components/markCore/lottery";
import stepTable from "@/components/markCore/lottery/table";
export default {
  components: { lottery, stepTable },
  data() {
    return {
      active: 0,
      theme: null,
      prize: null,
      themeForm: { theme: {}, prize: [], gives: [] },
      give: {
        linkedId: "",
        type: "1",
        explain: null,
        days: null,
        giveVote: null,
        term: null
      }
    };
  }, //data
  methods: {
    on_click(num) {
      this.active = num;
    }, //on_click
    getThemeData(data) {
      this.theme = data;
      this.active = 1;
    },
    onSave(theme) {
      // console.log(theme);
      const themeFormData = new Object();
      //console.log(this.$refs[theme])
      if (theme == "give") {
        console.log(theme);
        this.active = 2;
        console.log(this.give);
        this.themeForm.gives.push(this.give);
      }
    },
    backPrev(name) {
      if (name == "give") {
        this.give = {
          linkedId: 0,
          type: "1",
          explain: null,
          days: 0,
          giveVote: 0,
          term: null,
          chanName: "",
          chanId: ""
        };
      }
      //else
    },
    getPrizesData(data) {
      this.prize = data;
      this.themeForm.theme = this.theme;
      this.themeForm.prize = this.prize;
      console.log(this.themeForm);
      this.sendServer();
    },
    //提交给服务器
    sendServer() {
      var sendParams = JSON.stringify(this.themeForm);

      console.log(sendParams);
      this.$Service
        .post("/api/addOrUpdateTheme.action", sendParams, {
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
            this.$message({
              message: "创建成功！",
              type: "success"
            });
            this.active = 3;
          } else {
            this.$message.error("创建活动失败");
          }
        })
        .catch(err => {
          this.$message.error("创建活动失败,接口问题!");
        });
      //this.active = 3;
    },
    createActivity() {
      this.$router.push("/testplan");
    },
    checkActivity() {
      this.$router.push("/voteDetails");
    }
  } //methods
};
</script>
