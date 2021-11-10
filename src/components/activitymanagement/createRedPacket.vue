<template>
  <div class="application">
    <!-- <div class="bartop">
      <mainSidebar></mainSidebar>
    </div>-->
    <div class="dao">创建红包</div>
    <div class="content">
      <div class="createPross">
        <el-steps :active="active" align-center space finish-status="success">
          <el-step title="红包设置" @click.native="on_click(0)"></el-step>
          <el-step title="红包管理" @click.native="on_click(1)"></el-step>
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
                placeholder="请输入名称"
              ></el-input>
            </el-form-item>
            <el-form-item
              label-width="100px"
              label="投放渠道:"
              prop="channel"
            >
              <el-select
                style="width:400px"
                v-model="theme.channel"
                placeholder="请选择投放渠道"
              >
                <el-option label="移动" value=1></el-option>
                <el-option label="联通" value=2></el-option>
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
              prop="voteType"
             
              label="赠送方式:"
            >
              <el-col :span="11">
                <el-select style="width:180px" v-model="theme.voteType">
                  <el-option label="整个活动" value="1"></el-option>
                  <el-option label="每天" value="2"></el-option>
                </el-select>
              </el-col>
              <el-form-item label-width="170px" prop="votes">
                <el-col :span="11">
                  <el-input
                    style="width:170px"
                    v-model.number="theme.votes"
                    placeholder="请输入参加次数"
                  ></el-input>
                </el-col>
                <el-col :span="6">票</el-col>
              </el-form-item>
            </el-form-item>
            <el-form-item
              label-width="100px"
              label="开奖方式:"
              
              prop="lottery"
            >
              <el-select
                style="width:400px"
                v-model="theme.lottery"
                
              >
                <el-option label="每天一次" value="1"></el-option>
                <el-option label="整个活动一次" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item
              label-width="100px"
              style="width:400px"
              prop="shield"
              label="屏蔽测试号:"
            >
              <el-radio-group v-model="theme.shield">
                <el-radio label=true  >是</el-radio>
                <el-radio label=false  >否</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item
              label-width="100px"
              class="restCss"
             
              prop="themeLimit"
              label="中奖限制:"
            >
              <el-select
                style="width:400px"
                v-model="theme.themeLimit"
                placeholder="请输入中奖限制"
              >
                <el-option label="无限制" value="1"></el-option>
                <el-option label="限制一次" value="2"></el-option>
              </el-select>
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
          <el-form ref="prize" :rules="rules" :model="prize">
            <el-form-item
              label-width="100px"
              class="restCss"
              prop="prizeName"
              label="奖品名称:"
            >
              <el-input
                v-model="prize.prizeName"
                placeholder="请输入奖品名称"
              ></el-input>
            </el-form-item>
            <el-form-item
              label-width="100px"
              required
              prop="money"
              label="奖品金额:"
            >
              <el-col :span="22">
                <el-input v-model.number="prize.money" placeholder="请输入奖品金额"></el-input>
              </el-col>
              <el-col :span="2">元</el-col>
            </el-form-item>
            <el-form-item
              label-width="100px"
              class="restCss"
              required
              prop="stock"
              label="奖品库存:"
            >
              <el-col :span="22">
                <el-input v-model.number="prize.stock" placeholder="请输入奖品库存"></el-input>
              </el-col>
              <el-col :span="2">个</el-col>
            </el-form-item>
            <el-form-item
              label-width="100px"
              label="中奖条件:"
              required
              prop="prizeLimit"
            >
              <el-select style="width:400px" v-model="prize.prizeLimit">
                <el-option label="无限制" value="1"></el-option>
                <el-option label="有限制" value="2"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item
              label-width="100px"
              class="restCss"
              required
              prop="chance"
              label="中奖概率:"
            >
              <el-col :span="22">
                <el-input
                  v-model.number="prize.chance"
                  placeholder="请输入中奖概率"
                ></el-input>
              </el-col>
              <el-col :span="2">%</el-col>
            </el-form-item>
            <el-form-item label-width="100px" class="optBtn">
              <el-button type="primary" @click="onSubmit1('prize')"
                >保存</el-button
              >
              <el-button @click="backPrev('prize')">取消</el-button>
            </el-form-item>
          </el-form>
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
  margin-top: 50px;
}
#timeCss .el-form-item {
  width: 180px !important;
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
      theme: {
        themeName: "", //活动名称
        channel: 1, //选择活动区域
        type: 13,
        startTime: null, //开始时间
        endTime: null, //结束时间
        votes: 1, //赠送次数
        voteType: 2, //票数类型1：整个活动，2：每天
        themeLimit: null, ////限制中奖
        lottery: "", //开奖方式
        shield: 0, //测试屏蔽号

        remark: null //备注
      },
      prize: {
        prizeName: "",
        type: 1,
        money: null, //奖品金额
        stock: null, //奖品库存
        prizeLimit: "0", //中奖条件
        chance: null, //中奖概率
        // id: 1,
        // themeId: 1
      },
      themeForm: {
        theme: {},
        prize: []
      }, //themeForm
      rules: {
        themeName: [
          { required: true, message: "请输入账户名称", trigger: "blur" },
          { min: 2, max: 12, message: "长度在 2到 12 个字符", trigger: "blur" }
        ],
        channel: [
          { required: true,message: "请选择投放渠道", trigger: "change" }
        ],
        endTime: [
          {
            type: "string",
            required: true,
            message: "请选择结束时间",
            trigger: "blur"
          }
        ],
        startTime: [
          {
            type: "string",
            required: true,
            message: "请选择开始时间",
            trigger: "blur"
          }
        ],

        lottery: [
          { required: true, message: "请选择开奖方式", trigger: "blur" }
        ],
        themeLimit: [
          { required: true, message: "请输入票数", trigger: "blur" }
        ],
        shield: [
          { required: true, message: "是否屏蔽测试号",  trigger: "change" }
        ],
        
        prizeName: [
          { required: true, message: "请输入红包名称", trigger: "blur" }
        ],
        money: [{ required: true, type:"number", message: "请输入奖品金额", trigger: "blur" }],
        stock: [
          {
            required: true,
            type:"number",
            message: "请输入奖品库存",
            trigger: "blur"
          }
        ],
        prizeLimit: [
          { required: true, message: "请选择中奖条件", trigger: "blur" }
        ],
        chance: [{ required: true, message: "请输入中奖概率", trigger: "blur",type:"number" }]
      }
    }; //return
  }, //data
  methods: {
    on_click(num) {
      console.log(num);
      this.active = num;
      console.log(this.theme);
    },
    createActivity() {
      
      this.$router.push("/activitytheme");
    }, //
    checkActivity() {
      // this.active=3;

      this.$router.push("/voteDetails");
    },
    onSubmit(theme) {
      console.log(theme);
      this.$refs[theme].validate(valid => {
        if (!valid) {
          return false;
        } else {
          this.themeForm.theme = this.theme;
          console.log(this.themeForm);
          this.active = 1;
        }
      });
    }, //onSubmit
    onSubmit1(prize) {
      this.$refs[prize].validate(valid => {
        if (!valid) {
          return false;
        } else {
          this.active = 2;
          this.themeForm.prize.push(this.prize);

          const sendParams = this.themeForm;
          console.log(JSON.stringify(sendParams));
          
           this.$Service
            .post(
              "/api/addOrUpdateTheme.action",
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
                console.log("chenggng1")
                 this.$message.succuss("创建红包活动成功!");
                
              } else {
                 console.log("shibai")
                 this.$message.error("创建红包活动失败!");
              }
            })
            .catch(err => {
               console.log("catch")
               this.$message.error("创建红包活动失败,接口原因");
            });
        }
      });
    },
    backPrev(name) {
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
          //if (this.active-- < 1) this.active = 0;
          if (name == "theme") {
            this.active = 0;
            this.themeForm = {
              themeName: "", //活动名称
              channel: 1, //选择活动区域
              type: 10,
              startTime: null, //开始时间
              endTime: null, //结束时间
              votes: 1, //赠送次数
              voteType: 2, //票数类型1：整个活动，2：每天
              themeLimit: null, ////限制中奖
              lottery: '', //开奖方式
              shield: 0, //测试屏蔽号

              remark: null //备注
            };
            this.themeForm.theme = this.theme;
            this.active = 0;
          } else if (name == "prize") {
            this.prize = {
              prizeName: "",
              type: 1,
              money: null, //奖品金额
              stock: 0, //奖品库存
              prizeLimit: "0", //中奖条件
              chance: null //中奖概率
            };
            this.themeForm.prize.push(this.prize);
          } else {
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
      console.log(this.active);
    } //backPrev
  }
};
</script>
