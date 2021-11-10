<template>
  <div class="singup">
    <div class="dao">创建签到</div>
    <div class="content">
      <!-- 步骤条 -->
      <div class="createPross">
        <el-steps :active="active" align-center space finish-status="success">
          <el-step title="签到设置" @click.native="on_click(0)"></el-step>
          <el-step title="奖品管理" @click.native="on_click(1)"></el-step>
          <el-step title="完成" @click.native="on_click(2)"></el-step>
        </el-steps>
      </div>
      <!-- 签到设置 -->
      <div class="main-content">
        <!-- step1 -->
        <div v-if="!active" class="stepOne">
          <singUp @theme="getThemeData" />
        </div>
        <!-- step2 -->
        <div v-if="active===1" class="stepTwo">
          <stepTable @toPrizeData="getPrizesData" />
        </div>
        <!-- step3 -->
        <div class="stepThree" v-if="active===2">
          <span style="width:100px;height:100px">
            <svg-icon style="width:100px;height:100px" icon-class="complete"></svg-icon>
            <!-- <i style="width:100px;height:100px" class="el-icon-success"></i> -->
          </span>

          <div class="title" style="margin-top:10px;font-size: 30px;">
            <span>活动创建完成</span>
          </div>
          <div class="opt" style="margin-top:50px;">
            <el-button type="primary" @click="createActivity">再次创建活动</el-button>
            <el-button @click="checkActivity">查看活动</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style  scoped>
.singup {
  width: 100%;
  height: 900px;
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

.stepTwo {
  width: 1150px;
}
</style>
<script>

import singUp from "@/components/markCore/singUp";
import stepTable from "@/components/markCore/singUp/table";
//import singUp from "@/components/singUp";
export default {
  components: {
    singUp,
    stepTable
  },
  created() {},
  data() {
    return {
      active: 0,
      theme: null,
      prize: null,
      themeForm: { theme: {}, prize: [] },
      jumpID:null,
      jumpType:9,
    };
  },
  methods: {
    on_click(num) {
      this.active = num;
    },
    getThemeData(data) {
      this.theme = data;
      this.active = 1;
    },
    getPrizesData(data) {
      // 获取导数据-并提交给服务器
      this.prize = data;
      this.themeForm.theme = this.theme;
      this.themeForm.prize = this.prize;
      console.log(this.themeForm);
      this.sendServer();
    },
    //提交给服务器
    sendServer() {
      var sendParams = JSON.stringify(this.themeForm);
      /*{
    "theme":{
        "themeName":"1签到活动测试接口",
        "channel":null,
        "type":9,
        "startTime":"2020-05-05",
        "endTime":"2020-05-15",
        "integral":null,
        "media":null,
        "remark":null
    },
    "prize":[
        {
            "prizeName":"兑换卡",
            "type":1,
            "stock":2,
            "image":null,
            "prizeLimit":null,
            "consumeIntegral":100
            
        }
    ]
}
     */
      console.log(sendParams);
     this.$Service
        .post(
         
          "/api/addOrUpdateTheme.action",
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
          /*
          将数据添加到data中
          {data: {…}, status: 200, statusText: "OK", headers: {…}, config: {…}, …}
                */
          var resData=res.data;
          console.log(resData);
          if(resData.status==0){
            this.jumpID=resData.data.id;
            console.log(this.jumpID);
            this.$message({
                  message: "创建成功！",
                  type: "success"
                });
                this.active=2;
          }else{
             this.$message.error("创建活动失败");
          }
        });
    },
    createActivity(){
      this.active=0;
      this.theme=null;
      this.prize=null;
      this.themeForm={ theme: {}, prize: [] };
      this.$router.push("/createSignIn");
    },
    checkActivity(){
      
      this.$router.push("/voteDetails");
    
      

    }
  }
};
</script>

 
