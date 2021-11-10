<template>
  <div class="question">
    <!-- 步骤条 -->
    <div class="dao">创建问卷</div>
    <div class="content">
      <div class="createPross">
        <el-steps :active="active" align-center space finish-status="success">
          <el-step title="问题设置" @click.native="on_click(0)"></el-step>
          <el-step title="问题管理" @click.native="on_click(1)"></el-step>
          <el-step title="完成" @click.native="on_click(2)"></el-step>
        </el-steps>
      </div>
      <!-- 问卷设置 -->
      <div class="main-content">
        <!-- step1 -->
        <div v-if="!active" class="stepOne">
          <question @theme="getThemeData" />
        </div>
        <!-- step2 -->
        <div v-if="active === 1" class="stepTwo">
          <stepTable :themeObject="themeForm" @getTableData="getTableData" />
        </div>
        <!-- step3 -->
        <div class="stepThree" v-if="active === 2">
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
.question {
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
import question from "@/components/activitymanagement/question";
import stepTable from "@/components/activitymanagement/question/table";
export default {
  components: {
    question,
    stepTable
  },
  data() {
    return {
      active: 0,
      theme: null,
      themeForm: {
        theme: {},
        questions: []
      }
    };
  }, //data
  methods: {
    on_click(num) {
      this.active = num;
    },
    getThemeData(data) {
      this.theme = data;
      this.active = 1;
      this.themeForm.theme = this.theme;
    },
    getTableData(data) {
      this.themeForm.questions = data;
      this.active = 2;
    },
    createActivity() {
      this.active = 0;
      this.theme = null;
      this.prize = null;
      this.themeForm = { theme: {}, prize: [] };
      this.$router.push("/createLottery");
    },
    checkActivity() {
      this.$router.push("/voteDetails");
    }
  }
};
</script>
