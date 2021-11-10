<template>
  <div class="singup-form">
    <div class="content">
      <el-form ref="theme" :rules="rules" :model="theme">
        <el-form-item label-width="100px" class="restCss" prop="themeName" label="活动名称:">
          <el-input v-model="theme.themeName" placeolder="请输入名称"></el-input>
        </el-form-item>
        <el-form-item label-width="100px" label="投放渠道:" required prop="channel">
          <el-select style="width:400px" v-model="theme.channel" placeholder="请选择活动区域">
            <el-option label="移动" value="0"></el-option>
            <el-option label="联通" value="1"></el-option>
            <el-option label="电信" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label-width="100px" id="timeCss" label="时间区间:" required>
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
        <el-form-item label-width="100px" id="voteCss" label="赠送次数:" required>
          <el-col :span="10">
            <el-form-item prop="voteType">
              <el-select style="width:100%" v-model="theme.voteType" placeholder="每天">
                <el-option label="每天" value="2"></el-option>
                <el-option label="整个活动" value="1"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="2" style="width:35px">&nbsp;</el-col>
          <el-col :span="10">
            <el-form-item prop="votes">
              <el-input style="width:100%" prop="votes" v-model="theme.votes" placeholder="请输入"></el-input>
            </el-form-item>
          </el-col>
          <el-col style="width:23px;padding-left:20px" :span="2">票</el-col>
        </el-form-item>
        <el-form-item label-width="100px" label="获得积分:">
          <el-col :span="22">
          <el-input v-model="theme.integral"></el-input>
           </el-col>
              <el-col :span="2">分</el-col>
        </el-form-item>
        <el-form-item label-width="100px" required prop="themeInterval" label="间隔时间:">
          
           <el-col  :span="22"><el-input v-model="theme.themeInterval"></el-input></el-col>
          <el-col style="width:23px;padding-left:15px" :span="2">时</el-col>
        </el-form-item>
        <el-form-item label-width="100px" required prop="themeLimit" label="中奖机制:">
          <!-- <el-input v-model="theme.prizeLimit"></el-input> -->
          <el-select
            style="width:400px"
            prop="themeLimit"
            v-model="theme.themeLimit"
            placeholder="整个活动一次"
          >
            <el-option label="整个活动一次" value="1"></el-option>
            <!-- <el-option label="mei" value="2"></el-option> -->
          </el-select>
        </el-form-item>
        <el-form-item label-width="100px" label="备注：" prop="desc">
          <el-input type="textarea" v-model="theme.remark"></el-input>
        </el-form-item>
        <el-form-item label-width="100px" style="margin-top:50px;">
          <el-button type="primary" @click="onSave">保存</el-button>
          <el-button @click="backPrev">取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style  scoped>
.singup-form {
  width: 100%;
  height: 900px;
}
.content {
  width: 1200px;
  height: 800px;
  margin-top: 22px;
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
}
#timeCss .el-form-item {
  width: 180px !important;
}
#voteCss .el-form-item {
  width: 180px !important;
}
</style>
<script>
export default {
  created() {},
  data() {
    return {
      active: 0,
      theme: {
        themeName: "抽奖活动",//str
        channel: null,//int
        type: 10,//int
        startTime: "2020-04-01",//str
        endTime: "2020-04-21",//str
        voteType: null,//int
        votes: 1,//int
        integral: 1,//int
        themeInterval: 1,////int
        themeLimit:null,//中奖限制int
        numberLimit:null,
        remark: ""
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
        voteType: [
              { required: true, message: "请选择", trigger: "blur" }
              ],
        votes: [
              { required: true, message: "请输入", trigger: "blur" },
              
              ],
        themeLimit: [{ required: true, message: "请选择", trigger: "blur" }]
      }
    };
  },
  methods: {
    on_click(num) {
      this.active = num;
    },
    //确认
    onSave(teme) {
      this.$refs["theme"].validate(valid => {
        if (!valid) {
          return false;
        } else {
          this.$emit("theme", this.theme);
        }
      });
    },
    //取消
    backPrev() {}
  }
};
</script>

 
