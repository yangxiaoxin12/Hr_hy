
<template>
  <div class="application">
    <!-- <div class="bartop">
      <mainSidebar></mainSidebar>
    </div>-->
    <div class="dao">创建点赞</div>
    <div class="content">
      <div class="createPross">
        <el-steps :active="active" align-center space finish-status="success">
          <el-step title="点赞设置" @click.native="on_click(0)"></el-step>
          <el-step title="完成" @click.native="on_click(1)"></el-step>
        </el-steps>
        <!-- <el-button style="margin-top: 12px;" @click="next">下一步</el-button> -->
      </div>
      <div class="main-content">
        <div v-if="!active" class="stepOne">
          <el-form ref="theme" :rules="rules" :model="theme">
            <el-form-item label-width="100px" class="restCss" prop="themeName" label="活动名称:">
              <el-input v-model="theme.themeName" placeholder="请输入名称"></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="投放渠道:" prop="channel">
              <el-select style="width:400px" v-model="theme.channel" placeholder="请选择活动区域">
                <el-option label="移动" value="0"></el-option>
                <el-option label="联通" value="1"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label-width="100px" required id="timeCss" label="时间区间:">
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
            <el-form-item label-width="100px" class="restCss" prop="rule" label="点赞规则:">
              <el-input v-model="theme.rule" placeholder="请输入规则"></el-input>
            </el-form-item>
            <!-- <el-form-item label-width="100px" class="restCss" prop="media" label="媒资信息:">
              <el-input v-model="theme.media" placeholder="请输入名称"></el-input>
            </el-form-item>-->
            <el-form-item label-width="100px" class="restCss" label="媒资信息:">
              <!-- <el-input v-model="theme.media" placeholder></el-input> -->
              <el-col :span="10">
                <el-form-item rop="media" style="width:300px">
                  <el-input v-model="theme.media" placeholder></el-input>
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

            <el-form-item label-width="100px" label="备注：" prop="remark">
              <el-input type="textarea" placeholder="输入内容不得大于50字" maxlength="50" show-word-limit v-model="theme.remark"></el-input>
            </el-form-item>
            <el-form-item label-width="100px" class="optBtn">
              <el-button type="primary" @click="onSubmit('theme')">保存</el-button>
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
        <div v-else-if="active===1" class="stepFour">
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
<style scoped>
.application {
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
.optBtn {
  margin-top: 50px;
}
#timeCss .el-form-item {
  width: 180px !important;
}
</style>
<script>
import mainSidebar from "@/components/common/mainSidebar";
import searchmedia from "@/components/common/searchmedia";
export default {
  components: {
    mainSidebar,
    searchmedia
  },
  mounted() {},
  data() {
    return {
      active: 0,
      showMedia: false,
      titleMedia: "媒资查询",
      theme: {
        themeName: "点赞心碎活动",
        channel: null,
        type: 8,

        startTime: null,
        endTime: null,
        media: null,
        rule: null, //新增投票规则
        remark: null
      },
      themeForm: {}, //themeForm
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
        ]
      }
    }; //return
  }, //data
  methods: {
    on_click(num) {
      this.active = num;
    },
    onSubmit(theme) {
      console.log(this.active);
      this.$refs[theme].validate(valid => {
        if (!valid) {
          console.log("error");
          return false;
        } else {
         
          this.themeForm.theme = this.theme;
          console.log(JSON.stringify(this.themeForm));
          this.$Service
            .post(
              "/api/addOrUpdateTheme.action",
              
              JSON.stringify(this.themeForm),
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
              response.data = {
                msg: "新增数据成功",
                status: 0,
                data: null,
                count: null
              };
              if (response.data.status === 0) {
                this.$message({
                  message: "新增数据成功！",
                  type: "success"
                });
                // this.active = 1;
              } else {
                this.$message.error("添加失败,请检查参数！");
              }
            });
        }
        this.active = 1;
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
    backPrev() {
      this.$confirm("此操作将清空所填内容, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "成功!"
          });
          if (this.active-- < 1) this.active = 0;
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
      console.log(this.active);
      
    }, //
    createActivity() {
      
      this.$router.push("/testplan");
    },
    //backPrev
    checkActivity() {
      //alert("未开发");
      this.$router.push("/voteDetails");
    }
  } //methods
};
</script>