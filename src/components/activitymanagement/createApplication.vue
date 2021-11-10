<template>
  <div class="application">
    <!-- <div class="bartop">
      <mainSidebar></mainSidebar>
    </div>-->
    <div class="dao">创建报名</div>
    <div class="content">
      <div class="createPross">
        <el-steps :active="active" align-center space finish-status="success">
          <el-step title="报名设置" @click.native="on_click(0)"></el-step>
          <el-step title="媒资管理" @click.native="on_click(1)"></el-step>
          <el-step title="完成" @click.native="on_click(2)"></el-step>
        </el-steps>
        <!-- <el-button style="margin-top: 12px;" @click="next">下一步</el-button> -->
      </div>
      <div class="main-content">
        <div v-if="!active" class="stepOne">
          <el-form ref="theme" :rules="rules" :model="theme">
            <el-form-item
              label-width="100px"
            
              class="restCss"
              prop="themeName"
              label="活动名称:"
            >
              <el-input
                v-model="theme.themeName"
                  placeholder="请输入活动名称"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="投放渠道:" prop="channel">
              <el-select
                style="width:400px"
                v-model.number="theme.channel"
                placeholder="请选择投放渠道"
              >
                <el-option label="移动" value="0"></el-option>
                <el-option label="联通" value="1"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label-width="100px" id="timeCss" label="时间区间:">
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
              prop="themeLimit"
              label="报名限制:"
            >
              <el-col :span="22">
                <el-input v-model="theme.themeLimit" placeholder="请输入报名限制"></el-input>
              </el-col>
              <el-col :span="2">次</el-col>
            </el-form-item>
            <el-form-item
              label-width="100px"
              prop="numberLimit"
              label="人数限制:"
            >
              <el-col :span="22">
                <el-input v-model.number="theme.numberLimit" placeholder="请输入人数限制数字"></el-input>
              </el-col>
              <el-col :span="2">人</el-col>
            </el-form-item>
            <el-form-item label-width="100px" label="备注：" prop="remark">
              <el-input type="textarea"  placeholder="请输入备注说明 在 1 到 20 字符" maxlength="20" show-word-limit v-model="theme.remark"></el-input>
            </el-form-item>
            <el-form-item label-width="100px" class="optBtn">
              <el-button type="primary" @click="onSubmit('theme')"
                >保存</el-button
              >
              <el-button @click="backPrev('theme')">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
        <!-- 报名设置 -->
        <div v-if="active === 1" class="stepTwo">
          <el-form
            :model="signUp"
            status-icon
            :rules="rules"
            ref="signUp"
            label-width="100px"
            class="demo-themeForm"
            label-position="right"
          >
            <el-form-item
              label-width="100px"
              class="restCss"
              v-model="signUp.movieName"
              prop="movieName"
              label="影片名称:"
            >
              <el-input
                v-model="signUp.movieName"
                placeholder="请输入影片名称"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="活动类型:" prop="type">
              <el-select style="width:400px" v-model.number="signUp.type">
                <!-- <el-option label="观影回顾" value="2"></el-option> -->
                <el-option label="观影会" value="1"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item
              label-width="120px"
              style="margin-left:-20px;"
              class="restCss"
              prop="movieUrl"
              label="媒资预告:"
            >
              <el-col :span="10">
                <el-form-item rop="movieUrl" style="width:280px">
                  <el-input
                    v-model="signUp.movieUrl"
                    placeholder="请输入媒资预告"
                  ></el-input>
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
            <el-form-item class="restCss" prop="viewing" label="观影人数:">
              <el-input
                v-model.number="signUp.viewing"
                placeholder="请输入观影人数"
              ></el-input>
            </el-form-item>

            <el-form-item class="restCss" prop="cinema" label="线下影院:">
              <el-input
                v-model="signUp.cinema"
                placeholder="请输入线下影院"
              ></el-input>
            </el-form-item>
            <el-form-item class="restCss" prop="viewingTime " label="观影时间:">
              <el-date-picker
                type="date"
                placeholder="观影时间"
                v-model="signUp.viewingTime"
                format="yyyy-MM-dd"
                value-format="yyyy-MM-dd"
                style="width:400px;"
              ></el-date-picker>
            </el-form-item>
            <el-form-item
              class="restCss"
              prop="viewingAddress"
              label="观影地址:"
            >
              <el-input
                v-model="themeForm.signUp.viewingAddress"
                placeholder="请输入观影地址"
              ></el-input>
            </el-form-item>
            <el-form-item class="restCss" prop="number" label="序列号:">
              <el-input
                v-model.number="signUp.number"
                placeholder="请输入序列号数字"
              ></el-input>
            </el-form-item>
            <el-form-item class="restCss" prop="linkedId" label="关联产品ID:">
              <el-input
                v-model.number="signUp.linkedId"
                placeholder="请输入产品ID"
              ></el-input>
            </el-form-item>
            <el-form-item label="简介：" prop="describe">
              <el-input type="textarea" v-model="signUp.describe" placeholder="请输入备注说明 在 1 到 30 字符" maxlength="30" show-word-limit></el-input>
            </el-form-item>
            <el-form-item
              label-width="100px"
              style="margin-top:50px"
              class="restCss"
              prop="imageUrl"
              label="上传图片:"
            >
              <el-upload
                :action="uplodadUrl"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
                :on-success="handleSuccss"
                :on-error="handleErr"
                :auto-upload="true"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt />
              </el-dialog>
            </el-form-item>
            <el-form-item label-width="100px" class="optBtn">
              <el-button type="primary" @click="onSubmit('signUp')"
                >保存</el-button
              >
              <el-button @click="backPrev('signUp')">取消</el-button>
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
        <div v-else-if="active === 2" class="stepFour">
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
  margin-top: 130px;
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
  mounted() {
    this.uplodadUrl = sessionStorage.getItem("BASE_URL") + "/uploadFile.action";
    console.log(this.uplodadUrl);
  },
  data() {
    return {
      active: 0,
     
      showMedia: false,
      titleMedia: "媒资查询",
      uplodadUrl: null,
      theme: {
        themeName: "",

        channel: 1,

        type: 12,

        startTime: null,

        endTime: null,

        themeLimit: null,

        numberLimit: 10,

        remark: null
      },
      signUp: {
        id: null,
        themeId: null,
        movieName: "",
        type: 1,
        viewing: 10,
        movieUrl: null,
        cinema: "",
        viewingTime: "",
        viewingAddress: "",
        number: 1,
        linkedId: 1,
        describe: ""
      },
      themeForm: {
        theme: {},
        signUp: {}
      }, //themeForm
      rules: {
        themeName: [
          {
            required: "true",
            type: "string",
            message: "请输入活动名称",
            trigger: "blur"
          },
          {
            min: 2,
            max: 22,
            message: "长度在 2 到 22 个字符",
            trigger: "blur"
          }
        ],
        movieName: [
          {
            required: "true",
            type: "string",
            message: "请输入影片名称",
            trigger: "blur"
          },
          {
            min: 1,
            max: 255,
            message: "长度在 1 到 225 个字符",
            trigger: "blur"
          }
        ],
        viewing: [
          {
            required: "true", type:"number", message: "请输入观影人数",trigger: "blur"
          }
        ],
        type: [
          {
            required: true,message: "请选择类型",trigger: "blur",type:"number"
          }
        ],
        channel: [
          { required: true, type:"number", message: "请选择投放渠道", trigger: "change" }
        ],
        startTime: [
          {
            type: "string",
            required: true,
            message: "请选择日期",
            trigger: "blur"
          }
        ],
        endTime: [
          {
            type: "string",
            required: true,
            message: "请选择日期",
            trigger: "blur"
          }
        ],

        numberLimit: [
          { required: true, type:"number", message: "人数限制不能位空" },
          
        ]
      }, //rules
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false
    }; //return
  }, //data
  methods: {
    on_click(num) {
      this.active = num;
      if (this.$refs.theme !== undefined) {
        this.$refs.theme.resetFields();
      } else if (this.$refs.signUp !== undefined) {
        this.$refs.signUp.resetFields();
      } else {
        this.$refs.signUp.resetFields();
        this.$refs.theme.resetFields();
      }
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
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      console.log(this.dialogImageUrl);
      this.dialogVisible = true;
    },
    handleSuccss(res, file, fileList) {
      console.log(res);
      if (res.status == 0) {
        this.$message.success("上传成功,没有意义");
      } else {
        this.$message.error("上传失败接口错了");
      }
    },
    handleErr(res, file, fileList) {
      console.log(res);
      this.$message.error("图片上传失败!");
    },
    onSubmit1() {
      console.log(this.active);
      this.active = 2;
      console.log(this.themeForm);
    }, //
    onSubmit(theme) {
      // console.log(this.active);
      console.log(theme);
      // this.active = 1;
      if (theme == "theme") {
        this.$refs[theme].validate(valid => {
          if (!valid) {
            console.log("Error");
            return false;
          } else {
            this.themeForm.theme = this.theme;
            console.log(this.themeForm);
            this.active = 1;
          }
        });
      } else if (theme == "signUp") {
        this.$refs[theme].validate(valid => {
          if (!valid) {
            console.log("error");
            return false;
          } else {
            this.themeForm.signUp = this.signUp;
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
              .then(res => {
                  console.log(res)
                  
                if (res.data.status == 0) {
                  console.log("原来只有三年")
                  this.$message({
                    message: "新增数据成功！",
                    type: "success"
                  });
                  //this.active = 2;
                } else {
                  this.$message.error("创建报名失败");
                  console.log("不同地点")
                }
              })
              .catch(error => {
                this.$message.error("由于接口原因,创建报名失败!");
                console.log("catch")
              });
          }
          this.active = 2;
        });
      }
    },
    backPrev(theme) {
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
          // if (this.active-- < 1) this.active = 0;
          if (theme == "theme") {
            this.theme = {
              themeName: "",

              channel: 1,

              type: 12,

              startTime: null,

              endTime: null,

              themeLimit: null,

              numberLimit: 10,

              remark: null
            };
            this.themeForm.theme = {};
            this.active = 0;
          } else if (theme == "prize") {
            this.signUp = {
              id: null,
              themeId: null,
              movieName: "",
              type: 1,
              viewing: 10,
              movieUrl: null,
              cinema: "",
              viewingTime: "",
              viewingAddress: "",
              number: 1,
              linkedId: 1,
              describe: ""
            };
            this.themeForm.signUp = {};
            this.active = 0;
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
      console.log(this.active);
    },
    createActivity() {
      this.$router.push("/testplan");
    }, //
    checkActivity() {
      alert("未开发");
      this.$router.push("/voteDetails");
    }
  }
}; //methods
</script>
