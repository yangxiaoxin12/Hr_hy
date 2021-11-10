<template>
  <div class="content">
    <el-form ref="theme" :rules="rules" :model="theme">
      <el-form-item label-width="100px" class="restCss" prop="themeName" label="活动名称:">
        <el-input v-model="theme.themeName" placeolder="问卷名称"></el-input>
      </el-form-item>
      <el-form-item label-width="100px" label="投放渠道:" required prop="channel">
        <el-select style="width:400px" v-model="theme.channel" placeholder="请选择活动区域">
          <el-option label="移动" value="0"></el-option>
          <el-option label="联通" value="1"></el-option>
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
      <!-- <el-form-item label-width="100px" class="restCss" prop="media" label="媒资信息:">
          <el-input v-model="theme.media" placeolder></el-input>
      </el-form-item>-->

      <el-form-item label-width="100px" class="restCss" p label="媒资信息:">
        <!-- <el-input v-model="theme.media" placeolder></el-input> -->
        <el-col :span="10">
          <el-form-item rop="media" style="width:300px">
            <el-input v-model="theme.media" placeolder></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="2">
          <el-button
            type="primary"
            style="margin-left:150px;"
            @click="onSearch"
            icon="el-icon-search"
            circl
          ></el-button>
        </el-col>
      </el-form-item>

      <el-form-item label-width="100px" label="获得积分:">
        <el-col :span="22">
        <el-input v-model="theme.integral"></el-input>
         </el-col>
              <el-col :span="2">分</el-col>
      </el-form-item>
      <el-form-item label-width="100px" label="问卷简介:" prop="remark">
        <el-input type="textarea" placeolder="输入内容不得大于50字" v-model="theme.remark"></el-input>
      </el-form-item>
      <el-form-item label-width="100px" style="margin-top:50px;">
        <el-button type="primary" @click="onSave">保存</el-button>
        <el-button @click="backPrev">取消</el-button>
      </el-form-item>
    </el-form>
    <!-- 媒资查询 -->
    <searchmedia
      :showMedia="showMedia"
      :titleMedia="titleMedia"
      @showMediaValue="showMediaValue"
      @MedidCode="MedidCode"
    />
  </div>
</template>
<style scoped>
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
</style>
<script>
import searchmedia from "@/components/common/searchmedia";

export default {
  components: { searchmedia },

  data() {
    return {
      showMedia: false,
      titleMedia: "媒资查询",
      active: 0,
      theme: {
        themeName: "",
        channel: null,
        type: 7,
        startTime: null,
        endTime: null,
        integral: null,
        media: null,
        remark: null
      },
      rules: {
        themeName: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          {
            min: 2,
            max: 22,
            message: "长度在 2 到 22 个字符",
            trigger: "blur"
          }
        ],
        channel: [
          {
            required: true,
            message: "请选择活动区域",
            trigger: "change"
          }
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
        ]
      }
    };
  }, //data
  methods: {
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
    onSearch() {
      this.showMedia = true;
    },
    showMediaValue(data) {
      this.showMedia = data;
      // this.showMedia=false;
    },
    MedidCode(data) {
      this.media = data.code;
    },
    //取消
    backPrev() {}
  } //methods
};
</script>