
<template>
  <div class="content">
    <div class="login">
      <!-- 登录表单 -->
      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="loginForm"
        label-width="10px"
        class="demo-ruleForm"
      >
        <!-- <i class="el-icon-setting"></i>图标 -->
        <!-- <image style="width:48px;height:48px" :src='iconUrl'></el-image> -->

        <h1 class="title" style="margin:-10px 0px 20px 0px">
          <img src="../assets/login/icon.png" style="vertical-align:middle" alt srcset />
          <span
            style="width:302px;height:37px;font-size:38px;font-family:PingFang SC;font-weight:bold;color:rgba(40,52,67,1);"
          >优地互动活动中心</span>
        </h1>
        <el-form-item prop="username" style="width:369px;height:39px;">
          <!-- <span class="svg-container">
          <svg-icon icon-class="user" />
          </span>-->
          <el-input type="text" v-model="loginForm.username" tabindex="1" auto-complete="on"></el-input>
        </el-form-item>

        <el-form-item prop="password" style="width:369px;height:39px;">
          <el-input type="password" v-model="loginForm.password" auto-complete="on"></el-input>
        </el-form-item>

        <el-form-item style="text-align:left; width:369px;height:39px;">
          <el-checkbox
            v-model="loginForm.checkedType"
            label="记住密码"
            @change="checkedType=>remember(checkedType)"
            name="type"
          ></el-checkbox>

          <!-- <el-button type="primary" @click="tiaozhuan()">登录</el-button> -->
          <!-- <el-button @click="resetForm('loginForm')">记住密码</el-button> -->
        </el-form-item>
        <el-form-item style="margin-left:-20px;">
          <el-button
            type="success"
            style=" width:359px;height:39px;background:rgba(10,171,149,1);border-radius:4px;"
            @click="submitForm('loginForm')"
          >登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //assets
      iconUrl: "../assets/login/icon.png",
      // 登录表单数据
      loginForm: {
        username: "",
        password: "",
        type: [],
        userInformaction: null,
        checkedType: 0
      },
      // 验证规则
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }, //非空验证
          { min: 5, max: 12, message: "长度在 5到 12个字符", trigger: "blur" } //长度验证
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 5, max: 12, message: "长度在 5到 12个字符", trigger: "blur" }
        ]
      }
    };
  },
  mounted() {
    let userInformaction = JSON.parse(localStorage.getItem("userInformaction"));

    this.loginForm.checkedType = userInformaction.checkedType;
    this.loginForm.username = userInformaction.userName;
    this.loginForm.password = userInformaction.password;
    // console.log(userInformaction.username)
  },
  methods: {
    //记住密码：
    remember(checkedType) {
      //console.log(`checked:${checkedType}`)
      this.loginForm.checkedType = checkedType;
      if (!checkedType) {
        localStorage.setItem(
          "userInformaction",
          JSON.stringify({
            checkedType: this.loginForm.checkedType,
            userName: this.loginForm.checkedType ? this.loginForm.username : "",
            password: this.loginForm.checkedType ? this.loginForm.password : ""
          })
        );
      }
    },
    tiaozhuan() {
      this.$router.push("/markDocument");
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //保留this
          let _this = this;
          /* 使用axios发送请求
             发送请求给后台，
             查询用户名是否存在
             密码是否正确
             返回登录成功和失败
          */
          const userIn =
            '{"userName": "' +
            _this.loginForm.username +
            '","password": "' +
            _this.loginForm.password +
            '"}';

          const userInfo = JSON.parse(userIn);
          console.log(userInfo);
          //后端请求接口查询用户数据
          _this.$Service
            .post(
             
              "/userLogin.action",
              //"http://localhost:8083/SX_activitycenter/userLogin.action",
              JSON.stringify(userInfo),
              {
                headers: {
                  "Access-Control-Allow-Origin": "*", //解决cors头问题
                  "Access-Control-Allow-Credentials": "true", //解决session问题
                  "Content-Type": "application/json;charset=UTF-8" //将表单数据传递转化为form-data类型
                },
                withCredentials: true
              }
            )
            .then(response => {
              /*
                {
                  "msg": "登录成功",
                  "status": 0,
                  "data": {
                     "adminType": 1
                    },
                   "count": null
                 }
              */
              console.log(response.data);
              if (response.data.status === 0) {
                localStorage.setItem(
                  "userInformaction",
                  JSON.stringify({
                    checkedType: _this.loginForm.checkedType,
                    userName: _this.loginForm.checkedType
                      ? _this.loginForm.username
                      : "",
                    password: _this.loginForm.checkedType
                      ? _this.loginForm.password
                      : ""
                  })
                );
                let userInformaction = JSON.parse(
                  localStorage.getItem("userInformaction")
                );
                // 当前用户数据保存用户信息
                //_this.$store.commit("SAVE_USERINFO", _this.loginForm.username);
                const userInfoData = { userName: _this.loginForm.username };
                this.$store.dispatch("saveGetUserInfoData", userInfoData);
                console.log(
                  this.$store.dispatch("saveGetUserInfoData", userInfoData)
                );
                _this.$message({
                  message: "恭喜你，登陆成功！",
                  type: "success"
                });
                //跳转到首页
                //_this.$router.push('/index');
                _this.$router.push("/index");
              } else {
                //alert("登陆失败");
                _this.$message.error("登陆失败,请检查用户名和密码！");
              }
            });
        } else {
          _this.$message.error("请检查用户名和密码！");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      //console.log("000")
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  /* background: url("../assets/bg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%; */
  /* background-color: #283443; */
    
}
html,
body,
#app {
  height: 100%;
  width: 100%;
 
  color: #fff;
  overflow: hidden;
}
.svg-container {
  color: red;
  overflow: hidden;
}
.content {
  width: 1920px;
  height: 1080px;
  /* background-color: #283443; */
  overflow: hidden;
}
.content{
   background-image: url("../assets/login/bg.png");
  background-repeat:no-repeat;
  background-size:100%  100%;
}
.login {
  width: 100%;
  height: 100%;

  color: #fff;
  position: relative;
  
    
    overflow: hidden;
;
   
}

.demo-ruleForm {
  /* position: absolute; */
  width: 400px;
  max-width: 100%;
  padding: 20% 35px 0;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
}
.el-form-item el-input {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #454545;
}
.el-form-item {
  margin-bottom: 15px !important;
}
.el-form h1.title {
  width: 370px;
  font-family: PingFangSC-Semibold;
  font-size: 38px !important;
  color: #409eff;
  padding: 0px 0px 20px !important;
  line-height: 50px;

  height: 40px;

  font-weight: bold;
  color: rgba(40, 52, 67, 1);
}

.content .el-form-item__label {
  font-size: 20px !important;
  color: #fff !important;
}
.el-checkbox {
  padding: 0 40px 0 0px !important;
  color: #606266;
}
.el-button {
  background: rgba(10, 171, 149, 1);
  border-radius: 4px;

  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
  border-color: rgba(10, 171, 149, 1);
}
</style>
