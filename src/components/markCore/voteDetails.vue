<template>
  <div class="voteDetails">
    <!-- <div class="bartop">
      <mainSidebar></mainSidebar>
    </div>-->
    <div class="mainContent">
      <div class="activityDetail">
        <el-card class="box-card cardone">
          <div slot="header" class="header" style="width:600px">
            <span class="title" style="float:left">投票</span>
            <div class="optBtn">
              <el-button
                style="float: left; margin-right：10px;"
                v-if="showSure"
                type="warning"
                @click="handelSure"
                >确定</el-button
              >
              <el-button
                style="float: left; margin-right：10px;"
                type="primary"
                @click="handelEidt"
                >编辑</el-button
              >
              <el-button
                style="float: left; margin-right：10px;"
                type="success"
                @click="handelsoldOut"
                >下架</el-button
              >
              <el-button
                style="float: left; margin-right：10px;"
                type="danger"
                @click="handelDelete"
                >删除</el-button
              >
            </div>
          </div>
          <div class="bottom clearfix">
            <div class="userNamePanel" style="float: left;">
              <span>用户：</span>
              <span class="userName">admin</span>
            </div>
            <div class="creatTimePanel" style="float: left;">
              <span>创建时间：</span>
              <span class="createTime">2020-02-07</span>
            </div>
            <div class="userNamePanel" style="float: left;">
              <span>活动类型：</span>
              <span class="userName">投票</span>
            </div>
            <div class="creatTimePanel" style="float: left;">
              <span>发布状态：</span>
              <span class="createTime">已发布</span>
            </div>
          </div>
        </el-card>
      </div>
      <div class="activitySetting">
        <el-card class="box-card cardtwo">
          <div slot="header" class="header" style="width:600px height:40px;">
            <div class="title">
              <span
                style="float:left;text-align:left;width:140px;height:40px;font-size: 20px; font-weight: bold; color: rgba(60, 67, 83, 1);"
                >活动设置</span
              >
            </div>
          </div>
          <div class="bottom clearfix">
            <el-form
              :model="activitySettingForm"
              :rules="rules"
              ref="activitySettingForm"
              label-width="100px"
            >
              <el-form-item
                class="themeName"
                style="float:left"
                label="活动名称"
                prop="themeName"
              >
                <el-input
                  :disabled="isEdit"
                  v-model="activitySettingForm.theme.themeName"
                ></el-input>
              </el-form-item>
              <el-form-item style="float:left" label="活动渠道" prop="channel">
                <el-input
                  :disabled="isEdit"
                  v-model="activitySettingForm.theme.channel"
                ></el-input>
              </el-form-item>
              <el-form-item style="float:left" label="活动时间" prop="time">
                <el-col :span="11">
                  <el-input
                    :disabled="isEdit"
                    v-model="activitySettingForm.theme.startTime"
                  ></el-input>
                </el-col>
                <el-col :span="2">至</el-col>
                <el-col :span="11">
                  <el-input
                    :disabled="isEdit"
                    v-model="activitySettingForm.theme.endTime"
                  ></el-input>
                </el-col>
              </el-form-item>
              <el-form-item
                class="basicVotes"
                label="基础票数"
                style="float:left"
              >
                <el-col :span="11">
                  <el-input
                    :disabled="isEdit"
                    v-model="activitySettingForm.theme.voteType"
                  ></el-input>
                </el-col>
                <el-col :span="2">至</el-col>
                <el-col :span="11">
                  <el-input
                    :disabled="isEdit"
                    v-model="activitySettingForm.theme.votes"
                  ></el-input>
                </el-col>
              </el-form-item>

              <el-form-item
                class="integral"
                style="float:left"
                label="获得积分"
                prop="integral"
              >
                <el-col :span="22">
                  <el-input
                    :disabled="isEdit"
                    v-model="activitySettingForm.theme.integral"
                  ></el-input>
                </el-col>
                <el-col :span="2">分</el-col>
              </el-form-item>
              <el-form-item
                class="themeInterval"
                style="float:left"
                label="间隔时间"
                prop="themeInterval"
              >
                <el-input
                  :disabled="isEdit"
                  v-model="activitySettingForm.theme.themeInterval"
                ></el-input>
              </el-form-item>
              <el-form-item
                class="remark"
                style="float:left"
                label="活动备注"
                prop="remark"
              >
                <el-input
                  :disabled="isEdit"
                  type="textarea"
                  v-model="activitySettingForm.theme.remark"
                ></el-input>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </div>
      <div class="givesSetting"  v-for="(item,i) in activitySettingForm.gives" :key="i">
        <el-card class="box-card cardthree">
          <div slot="header" class="header" style="width:600px height:40px;">
            <div class="title">
              <span
                style="float:left;text-align:left;width:140px;height:40px;font-size: 20px; font-weight: bold; color: rgba(60, 67, 83, 1);"
                >增票设置{{i+1}}</span
              >
            </div>
          </div>
          <div class="bottom clearfix">
            <el-form
              :model="activitySettingForm"
              :rules="rules"
              ref="activitySettingForm"
              label-width="100px"
            >
              <el-form-item
                class="linkName"
                style="float:left"
                label="参加活动"
                prop="linkName"
              >
                <el-input
                  :disabled="isEdit"
                  v-model="item.linkName"
                ></el-input>
              </el-form-item>
              <el-form-item
                class="type"
                style="float:left"
                label="参加活动"
                prop="type"
              >
                <el-input
                  :disabled="isEdit"
                  v-model="item.type"
                ></el-input>
              </el-form-item>
              <el-form-item
                class="explain"
                style="float:left"
                label="规则说明"
                prop="explain"
              >
                <el-col :span="11">
                  <el-input
                    :disabled="isEdit"
                    v-model="item.explain"
                  ></el-input>
                </el-col>
                <el-col :span="2">-</el-col>
                <el-col :span="11">
                  <el-input
                    :disabled="isEdit"
                    v-model="item.days"
                  ></el-input>
                </el-col>
              </el-form-item>
              <el-form-item
                class="votes"
                style="float:left"
                label="获得票数"
                prop="votes"
              >
                <el-input
                  :disabled="isEdit"
                  v-model="item.votes"
                ></el-input>
              </el-form-item>
              <el-form-item
                class="term"
                style="float:left"
                label="有效期限"
                prop="term"
              >
                <el-input
                  :disabled="isEdit"
                  v-model="item.term"
                ></el-input>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </div>
      <div v-for="(item,index) in (activitySettingForm.option)"  :key="index" class="optionsSetting">
        <!-- <p v-for="item in scope.row.optionContent" :key="item">{{item}}</p> -->
        <el-card class="box-card cardtfour">
          <div slot="header" class="header" style="width:600px height:40px;">
            <div  class="title">
              <span
                style="float:left;text-align:left;width:140px;height:40px;font-size: 20px; font-weight: bold; color: rgba(60, 67, 83, 1);"
                >选项设置{{index+1}}</span
              >
              <!-- <p v-for="(item,i) in list">--索引值--{{i}}   --每一项--{{item}}</p> -->
            </div>
          </div>
          <div class="bottom clearfix">
            <el-form
              :model="activitySettingForm"
              :rules="rules"
              ref="activitySettingForm"
              label-width="100px"
            >
              <el-form-item
                class="optionName"
                label="选项名称"
                style="float:left"
              >
                <el-select
                  :disabled="isEdit"
                  v-model="item.optionName"
                  placeholder
                >
                  <el-option label="电影" value="0"></el-option>
                  <el-option label="----" value="1"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item
                class="media"
                style="float:left"
                label="媒资"
                prop="media"
              >
                <el-input
                  :disabled="isEdit"
                  v-model="item.media"
                ></el-input>
              </el-form-item>
              <el-form-item
                class="code"
                style="float:left"
                label="节目code"
                prop="code"
              >
                <el-input
                  :disabled="isEdit"
                  v-model="item.code"
                ></el-input>
              </el-form-item>
              <el-form-item
                class="imageUrl"
                style="float:left"
                label="图片路径"
                prop="imageUrl"
              >
                <el-input
                  :disabled="isEdit"
                  v-model="item.imageUrl"
                ></el-input>
              </el-form-item>
              <el-form-item
                class="describe"
                style="float:left"
                label="描述"
                prop="describe"
              >
                <el-input
                  :disabled="isEdit"
                  v-model="item.describe"
                ></el-input>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </div>
    </div>
    <!--main-->
  </div>
  <!--vote-->
</template>
<style scoped>
.voteDetails {
  width: 1200px;
  background-color: #fff;
  font-family: PingFang SC;
  font-weight: 500;
  font-size: 14px;
}
.mainContent {
  width: 1200px;
  height: 700px;
  /* border: 1px solid red; */

  padding: 0px;
  text-align: left;
  font-size: 14px;
  color: rgba(60, 67, 83, 1);
  margin-top: 15px;
  box-sizing: border-box;
  /* overflow: hidden;
  border: 1px solid red; */
}
.cardone {
  height: 125px !important;
}
.cardtwo {
  height: 220px !important;
}
.cardthree {
  height: 160px !important;
}
.cardtfour {
  height: 160px !important;
}
.el-form-item {
  margin-bottom: 10px !important;
}

.header {
  padding: 2px 2px !important;
  height: 40px !important;
}
.el-button {
  width: 75px !important;
  height: 32px !important;
  padding: 0px !important;
  font-size: 12px !important;
}
.el-card__body {
  padding: 0px !important;
}
.activityDetail,
.activitySetting,
.givesSetting,
.optionsSetting {
  width: 1200px;
  margin-bottom: 10px;

  background: rgba(255, 255, 255, 1);
  box-sizing: border-box;
  font-family: PingFang SC;
}

.title {
  width: 140px;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  color: rgba(60, 67, 83, 1);
  text-align: left;
}
.optBtn {
  width: 600px;
  height: 40px;
  margin-left: 800px;
  text-align: right;
}
.userNamePanel {
  width: 600px;
  height: 40px;

  text-align: left;
}

.creatTimePanel {
  width: 500px;
  height: 40px;
  text-align: left;
}

.el-form-item {
  width: 360px !important;
}
</style>
<script>
//<!-- <h1>从getters获取数据：{{this.$store.getters.tellData}}</h1> -->
import mainSidebar from "@/components/common/mainSidebar";

export default {
  components: {
    mainSidebar
  }, //component

  data() {
    return {
      dataForm: null,
      showSure:false,
      show:true,
      isEdit: true,
      activitySettingForm: {
        theme: {
          id: "",
          themeName: "",
          channel: "",
          startTime: "",
          endTime: "",
          pageStart: null,
          pageSize: null,
          votes: null,
          voteType: null,
          integral: null,
          themeInterval: null,
          themeLimit: null,
          numberLimit: null,
          status: null,
          remark: null,

          total: null
        },
        gives: [
          {
            linkName: "",
            linkedId: 8,
            type: "",
            explain: 1,
            days: 5,
            votes: 1,
            term: ""
          }
        ],
        option: [
          {
            id: 1,
            themeId: 1,
            parentId: null,
            lv: 1,
            optionName: "电影",
            media: null,
            code: null,
            imageUrl: null,
            describe: null,
            createTime: null,
            options: [
              {
                id: 2,
                themeId: 1,
                parentId: 1,
                lv: 2,
                optionName: "狮子王111",
                media: "aaa11122",
                code: null,
                imageUrl: "test124",
                describe: null,
                createTime: null,
                options: null
              }
            ]
          } //
        ] //选项组
      }, //form
      rules: {} //rules
    };
  }, //data
  methods: {
    send() {
      console.log(this.$route.params.id);
      console.log(this.$route.params.type);
      switch (this.$route.params.type) {
        case "投票":
          this.$route.params.type = 6;
          break;
        case "问卷":
          this.$route.params.type = 7;
          break;
        case "点赞":
          this.$route.params.type = 8;
          break;
        case "签到":
          this.$route.params.type = 9;
          break;
        case "抽奖":
          this.$route.params.type = 10;
          break;
        case "随机码":
          this.$route.params.type = 11;
          break;
        case "报名":
          this.$route.params.type = 12;
          break;
        case "领红包":
          this.$route.params.type = 13;
          break;
        case "积分":
          this.$route.params.type = 14;
          break;
        default:
          this.$route.params.type = 0;
      }
      
      const sendParams = {};
      sendParams.id = this.$route.params.id;
      sendParams.type = this.$route.params.type;
      console.log(JSON.stringify(sendParams));
      
     this.$Service
        .post(
          "/api/getThemeDetail.action",
          JSON.stringify(sendParams),
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
            //console.log("shujuhuilai1");
            this.activitySettingForm = res.data.data;
            this.dataForm = res.data.data;

            
            switch (this.dataForm.theme.type){
                 case 7:
                 case "7":
                  this.activitySettingForm.option=this.dataForm.question;
                  //问卷
                  for(var i=0;i< this.activitySettingForm.option.length;i++){
                    this.activitySettingForm.option[i].options=this.dataForm.question[i].optionContent;
                  }
                  break;
                  case 6:
                  case "6":
                  this.activitySettingForm.option=this.dataForm.parentOptions;
                 //投票
                  for(var i=0;i< this.activitySettingForm.option.length;i++){
                    this.activitySettingForm.option[i].options=this.dataForm.parentOptions[i].options;
                  }
                  break;
                  case 8:
                 case "8":
                  this.activitySettingForm=this.dataForm
                 //点赞心碎活动"
                  
                  break;
                  case 9:
                  case "9":
                  this.activitySettingForm.option=this.dataForm.prize;
                 //签到
                  
                  break;
                  case 10:
                  case "10":
                    //抽奖
                  this.activitySettingForm.option=this.dataForm.prize;
                  break;
                  case 11:
                  case "11":
                    //随机码
                  this.activitySettingForm.option=this.dataForm.prize;
                  break;
                  case 12:
                  case "12":
                    //报名
                  this.activitySettingForm.option=this.dataForm.signUp;
                  break;
                  case 13:
                  case "13":
                    //13：领红包
                  this.activitySettingForm.option=this.dataForm.prize;
                  break;
                  case 14:
                  case "14":
                    //积分
                  this.activitySettingForm.option=this.dataForm.prize;
                  break;


            }
            
            console.log(this.activitySettingForm);
          } else {
            this.$message.error("未获得数据");
          }
        });
    },
    handelEidt() {
      this.isEdit = false;
      this.showSure=true;
    },
    handelSure(){
      console.log(this.activitySettingForm);
      console.log("sure")
    },
    handelsoldOut() {
      //https://xxx.xxx.xxx:8080/项目命名/api/cancelTheme.action
      let sendParams = {};
      sendParams.id = this.$route.params.id;
      console.log(sendParams);
     this.$Service
        .post(
          "/api/cancelTheme.action",
          JSON.stringify(sendParams),
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
        })
        .catch(error => {
          console.log(error);
        });
    },
    handelDelete() {
      //https://xxx.xxx.xxx:8080/项目命名/api/deleteTheme.action
      this.$Service
        .get("/api/deleteTheme.action", {
          params: {
            id: this.$route.params.id,
            type: this.$route.params.type
          }
        })
        .then(res => {
          console.log(res);
          this.$message.success("未获得数据");
        })
        .catch(error => {
          this.$message.error("请求出错!");
        });
    }
  },
  mounted() {
    this.send();
  }
}; //export
</script>
