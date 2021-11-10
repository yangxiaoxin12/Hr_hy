<template>
  <div class="createIntegral">
    <!-- <div class="bartop">
      <mainSidebar></mainSidebar>
    </div>-->
    <div class="dao">创建积分</div>
    <div class="content">
      <div class="createPross">
        <el-steps :active="active" align-center space finish-status="success">
          <el-step title="积分设置" @click.native="on_click(0)"></el-step>
          <el-step title="规则配置" @click.native="on_click(1)"></el-step>
          <el-step title="积分管理" @click.native="on_click(2)"></el-step>
          <el-step title="完成" @click.native="on_click(3)"></el-step>
        </el-steps>
        <!-- <el-button style="margin-top: 12px;" @click="next">下一步</el-button> -->
      </div>
      <!-- //积分设置 -->
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
                placeolder="请输入活动名称"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" label="投放渠道:" prop="channel">
              <el-select
                style="width:400px"
                v-model="theme.channel"
                placeholder="请选择投放渠道"
              >
                <el-option label="移动" value="1"></el-option>
                <el-option label="联通" value="2"></el-option>
              </el-select>
            </el-form-item>
            
            
            <el-form-item
              label-width="100px"
              id="tiemCss"
              label="时间区间:"
              required
            >
              <el-col :span="11" style="width:180px">
                <el-form-item
                  label-width="0px"
                  style="width:180px"
                  prop="startTime"
                >
                  <el-date-picker
                    type="date"
                    placeholder="开始时间"
                    prop="startTime"
                    v-model="theme.startTime"
                    format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd"
                    style="width: 100%;"
                    
                  ></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col class="line" style="width: 35px;" :span="2">至</el-col>
              <el-col :span="11">
                <el-form-item
                  label-width="0px"
                  style="width:170px"
                  prop="endTime"
                >
                  <el-date-picker
                     type="date"
                    placeholder="结束时间"
                    prop="endTime"
                    v-model="theme.endTime"
                    format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd"
                    style="width: 100%;"
                   
                  ></el-date-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label-width="100px" prop="integral" label="获得积分:">
              <el-col :span="22">
                <el-input
                  placeholder="请输入获得积分"
                  v-model="theme.integral"
                ></el-input>
              </el-col>
              <el-col :span="2">分</el-col>
            </el-form-item>
           
            <el-form-item label-width="100px" label="备注：" prop="remark">
              <el-input
                type="textarea"
                placeholder="输入内容不得大于50字"
                maxlength="50"
                 show-word-limit
                v-model="theme.remark"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" class="optBtn">
              <el-button type="primary" @click="onSubmit('theme')"
                >保存</el-button
              >
              <el-button @click="backPrev('theme')">取消</el-button>
            </el-form-item>
          </el-form>
        </div>

        <div v-if="active === 1" class="stepTwo">
            <!-- 积分奖品设置 -->
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

            
            <el-form-item class="optBtn1">
              <el-button type="primary" @click="onSaveTwo()">保存</el-button>
              <el-button @click="backPrevTwo()">取消</el-button>
            </el-form-item>
          </el-form>
           

        </div>
        <!-- //积分管理 -->
        <div v-if="active === 2" class="stepTwo">
          <el-form ref="prize" :rules="rules" :model="prize">
            <el-form-item
              label-width="100px"
              class="restCss"
              prop="prizeName"
              label="奖品名称:"
            >
              <el-input
                v-model="prize.prizeName"
                placeholder="请输入名称"
              ></el-input>
            </el-form-item>
            <el-form-item
              label-width="100px"
              label="奖品类型:"
              required
              prop="type"
            >
              <el-select
                style="width:400px"
                v-model="prize.type"
                placeholder="请选择活动区域"
              >
                <el-option label="实物" value="0"></el-option>
                <el-option label="虚拟物" value="1"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item
              label-width="100px"
              class="restCss"
              prop="stock"
              label="奖品库存:"
            >
              <el-col :span="22">
                <el-input v-model="prize.stock" placeholder="请输入"></el-input>
              </el-col>
              <el-col :span="2">个</el-col>
            </el-form-item>
            <el-form-item
              label-width="100px"
              prop="prizeLimit"
              label="消耗积分:"
            >
              <el-col :span="22">
                <el-input
                  placeholder="请输入"
                  v-model="prize.prizeLimit"
                ></el-input>
              </el-col>
              <el-col :span="2">分</el-col>
            </el-form-item>
            <el-form-item label-width="100px" label="中奖概率：" prop="chance">
              <el-input
                type="number"
                placeholder="请输入数字"
                v-model="prize.chance"
              ></el-input>
            </el-form-item>
            <el-form-item label-width="100px" class="optBtn">
              <el-button type="primary" @click="onSave('prize')"
                >保存</el-button
              >
              <el-button @click="backPrev('prize')">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div v-else-if="active === 3" class="stepFour">
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
.createIntegral {
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
  width: 400px;
  height: 32px !important;
}
.optBtn {
  margin-top: 50px;
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
.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 182px;
}
</style>
<script>
import mainSidebar from "@/components/common/mainSidebar";
export default {
  components: {
    mainSidebar
  },
  data() {
    return {
      active: 0,
      give: {
        linkedId: "",
        type: null,
        explain: 1,
        days: 0,
        giveVote: 0,
        term: 5,
        productId: ""
      },
      rules: {
        themeName: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 2, max: 12, message: "长度在 2到 12 个字符", trigger: "blur" }
        ],
        channel: [
          { required: true, message: "请选择投放渠道", trigger: "change" }
        ],
        startTime: [
          {
            required: true,
            type: "string",
            message: "请选择开始时间",
            trigger: "change"
          }
        ],
        endTime: [
          {
            required: true,
            type: "string",
            message: "请选择结束时间",
            trigger: "change"
          }
        ],
        integral: [
          {
            required: true,
            message: "请输入数字",
            pattern: /^[0-999999999]*$/,
            trigger: "blur"
          },
          { required: true, message: "积分不能为空", trigger: "blur" }
        ],
        prizeName: [
          { required: true, message: "请输入奖品名称", trigger: "blur" },
          { min: 2, max: 12, message: "长度在 2到 12 个字符", trigger: "blur" }
        ], //奖品名称
        type: [{ required: true, message: "请选择奖品类型", trigger: "change" }] //奖品类型
      },
      theme: {
        themeName: "", //活动名称
        channel: "0", //投放渠道
        type: 14,
        startTime: "", //开始时间
        endTime: "", //结束时间
        integral: null, //获取积分
      
        remark: null, //备注
        
        
      },
      prize: {
        prizeName: "", //奖品名称
        type: "0", //奖品类型
        stock: "", //奖品库存
        prizeLimit: "", //消耗积分
        chance: "", //中奖概率单位为%
        image: null
      },
      themeForm: {
        theme: {},
        gives: [],
        prize: []
      } //themeForm
    }; //return
  }, //data
  methods: {
    
    on_click(num) {
      console.log(num);
      this.active = num;
      if (this.$refs.theme !== undefined) {
        this.$refs.theme.resetFields();
      } else if (this.$refs.setting !== undefined) {
        this.$refs.setting.resetFields();
      } else {
        this.$refs.setting.resetFields();
        this.$refs.theme.resetFields();
      }
    },
    backPrevTwo(){
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
    onSaveTwo(){
      this.themeForm.gives.push(this.give);
      this.active = 2;
      console.log(this.themeForm);
    },
    onSubmit(theme) {
      this.$refs[theme].validate(valid => {
        if (!valid) {
          return false;
        } else {
          this.active = 1;

          this.themeForm.theme = this.theme;
          console.log(this.themeForm);
        }
      });
    },
    onSave(prize) {
      this.$refs[prize].validate(valid => {
        if (!valid) {
          return false;
        } else {
          
          console.log(this.prize);
          //this.themeForm.prize = this.prize;
          this.themeForm.prize.push(this.prize);
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
              
              console.log(res);
              if (res.data.status == 0) {
                //console.log("原来只有三年")
                this.$message.success("创建积分活动成功!");
              } else {
                //console.log("不同地点")
                this.$message.error("创建积分活动失败!");
              }
            })
            .catch(error => {
              this.$message.error("创建积分活动失败,接口连接报错!");
            });
        }
      });
      this.active = 3;
    },
    createActivity() {
      // this.active=3;
      //alert("未开发");
      this.$router.push("/activitytheme");
    }, //
    checkActivity() {
      // this.active=3;
      //alert("未开发");
      //  this.$router.push({
      //   name: "voteDetails",
      //   params: {
      //     id: row.id,
      //     type: row.type
      //   }
      // });
     
      this.$router.push("/voteDetails");
    },
    backPrev(name) {
      this.$confirm("此操作将清空所填内容, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          if (name == "theme") {
            this.theme = {
              themeName: "", //活动名称
              channel: null, //投放渠道
              type: 14,
              startTime: "", //开始时间
              endTime: "", //结束时间
              integral: null, //获取积分
              
              remark: null, //备注
              
            };
            this.themeForm.theme = this.theme;
          } else if (name == "prize") {
            this.prize = {
              prizeName: "", //奖品名称
              type: "0", //奖品类型
              stock: "", //奖品库存
              prizeLimit: "", //消耗积分
              chance: "", //中奖概率单位为%
              image: null
            };
            this.themeForm.prize.push(this.prize);
          }
          if (this.active-- < 1) this.active = 0;
          this.$message({
            type: "success",
            message: "成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
      console.log(this.active);
      // if (this.active-- <1) this.active = 0;
      // this.active = 3;
    } //backPrev
  } //methods
};
</script>
