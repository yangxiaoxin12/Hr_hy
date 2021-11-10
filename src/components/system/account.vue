<template>
  <div class="zhanghu">
    <div class="main-header">
      <el-form
        :inline="true"
        :model="cashForm"
        label-width="100px"
        class="demo-form-inline"
      >
        <el-form-item label="账户姓名:">
          <el-input v-model="cashForm.nickName" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="用户姓名:">
          <el-input v-model="cashForm.userName" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item prop="moblie" label="手机号码">
          <el-input v-model="cashForm.moblie"></el-input>
        </el-form-item>
        <el-form-item style="width:200px!important">
          <el-button class="searchCss" @click="getList" type="success"
            >查询</el-button
          >
          <el-button class="addThemeCss" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
      <el-button class="but" @click="addEquipment" type="primary"
        >新建账户</el-button
      >
    </div>
    <div class="content">
      <div id="tab">
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column
            align="center"
            prop="userName"
            label="账户名称"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="nickName"
            label="昵称"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="roleName"
            label="角色描述"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="moblie"
            label="手机号"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="email"
            label="邮箱"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="createTime"
            label="创建时间"
          ></el-table-column>
          <el-table-column align="center" prop="status" label="账户状态">
            <template slot-scope="scope">
              <span v-if="scope.row.status == 1">使用中</span>
              <span v-if="scope.row.status == 0" style="color:red;"
                >已停用</span
              >
            </template>
          </el-table-column>

          <el-table-column fixed="right" label="操作" width="130">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.$index, scope.row)"
                type="text"
                size="small"
                >修改</el-button
              >
              <el-button
                @click="handleEdit(scope.row)"
                style="fontSize:12px;"
                type="text"
                v-if="scope.row.status == '0'"
                >停用</el-button
              >
              <el-button
                style="fontSize:12px;"
                @click="handleEdi(scope.row)"
                type="text"
                v-if="scope.row.status == '1'"
                >启用</el-button
              >
              <el-button
                type="text"
                @click="handleDelete(scope.row)"
                size="small"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>

      <el-dialog
        :title="titleMap[dialogStatus]"
        :visible.sync="dialogFormVisible"
      >
        <el-form style="width:500px;" :model="form" :rules="rules" ref="form">
          <el-form-item
            label-width="100px"
            label="账户名称: "
            prop="userName"
            required
          >
            <el-input
              v-model="form.userName"
              placeholder="请输入"
              auto-complete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label-width="100px"
            label="设置密码: "
            prop="password"
            required
          >
            <el-input
              v-model="form.password"
              placeholder="请输入"
              auto-complete="off"
            ></el-input>
          </el-form-item>
          <!-- <el-form-item
          label-width="100px"
          label="确认密码: "
          prop="okpassword"
          required
        >
          <el-input
            v-model="form.okpassword"
            placeholder="请输入"
            auto-complete="off"
          ></el-input>
        </el-form-item> -->
          <el-form-item
            label-width="100px"
            label="真实姓名: "
            prop="nickName"
            required
          >
            <el-input
              v-model="form.nickName"
              placeholder="请输入真实姓名"
              auto-complete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label-width="100px"
            label="手机号: "
            prop="moblie"
          >
            <el-input
              v-model="form.moblie"
              placeholder="请输入联系方式"
              auto-complete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label-width="100px"
            label="邮箱: "
            prop="email"
            required
          >
            <el-input
              v-model="form.email"
              placeholder="请输入邮箱地址"
              auto-complete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label-width="100px"
            label="选择角色: "
            prop="role.roleId"
            required
          >
            <el-select
              style="width:400px"
              v-model="form.role.roleId"
              placeholder="请选择角色"
            >
              <el-option label="超级管理员" value="24"></el-option>
              <el-option label="报表管理员" value="2"></el-option>
              <el-option label="运营商" value="26"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="back()">取 消</el-button>
          <el-button type="primary" @click="onSave('form')">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />
  </div>
</template>

<script>
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination

export default {
  nickName: "",

  components: {Pagination},

  data() {
    let reg = /^[\w]{6,12}$/;
    var validateComfirmPwd = (rule, value, callback) => {
      if (!reg.test(value)) {
        callback(new Error("密码应是6-12位数字、字母或字符！"));
      } else if (this.form.password !== value) {
        callback(new Error("确认密码与密码不一致！"));
      } else {
        callback();
      }
    };
    return {
      num: "",
      tableData: [],
      total: 1,
      listQuery: {
        page: 1,
        limit: 10,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "+No"
      },
      rules: {
        userName: [
          { required: true, message: "请输入账户名称", trigger: "blur" },
          { min: 2, max: 12, message: "长度在 2到 12 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请设置密码", trigger: "blur" },
          { validator: validateComfirmPwd, trigger: "blur" }
        ],
        okpassword: [
          {
            type: "string",
            required: true,
            message: "请确认密码",
            trigger: "blur"
          },
          { validator: validateComfirmPwd, trigger: "blur" }
        ],
        nickName: [
          {
            type: "string",
            required: true,
            pattern: /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/,
            message: "请输入正确姓名",
            trigger: "blur"
          }
        ],
        moblie: [
          {
            type: "string",
            required: true,
            message: "请输入11位手机号",
            pattern: /^[1][3,4,5,7,8][0-9]{9}$/,
            trigger: "blur"
          }
        ],
        email: [
          {
            type: "string",
            required: true,
            pattern: /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
            message: "请输入正确的邮箱地址",
            trigger: "blur"
          }
        ],
        roleName: [{ required: true, message: "请选择角色", trigger: "change" }]
      },
      dialogFormVisible: false,
      nowDate: "", // 当前日期
      nowTime: "", // 当前时间
      nowWeek: "", // 当前星期
      form: {
        userName: "",
        password: "",
        moblie: "",
        email: "",
        nickName: "",

        role: {
          roleId: "",
          roleName: ""
        }
      },
      titleMap: ["新建账户", "修改账户"],
      //新增和编辑弹框标题
      dialogStatus: 0,
      cashForm: {
        nickName: "",
        userName: "",
        moblie: ""
      },
      total: 1,
      listQuery: {
        page: 1,
        limit: 10,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "+No"
      }
    };
  },

  watch: {},

  methods: {
    p(s) {
      return s < 10 ? "0" + s : s;
    },
    getList() {
      let sendParam = {};
      sendParam = this.cashForm;
      sendParam.currentPage = this.listQuery.page;
      sendParam.pageSize = this.listQuery.limit;
      console.log(JSON.stringify(sendParam));
      this.$Service
        .post("/api/adminList.action", JSON.stringify(sendParam), {
          headers: {
            "Access-Control-Allow-Origin": "*", //解决cors头问题
            "Access-Control-Allow-Credentials": "true", //解决session问题
            "Content-Type": "application/json"
            //"Content-productType": "application/json;charset=UTF-8" //将表单数据传递转化为form-data类型
          },
          withCredentials: true
        })
        .then(res => {
          console.log(res);
          if (res.data.status === 0) {
            //console.log(res.data);
            this.tableData = res.data.data;
            this.total = res.data.count;
          } else {
            this.$message.error("获取失败!");
          }
        })
        .catch(error => {
          this.$message.error("获取失败!接口原因");
        });
    },
    reset() {
      this.cashForm = {
        nickName: "",
        userName: "",
        moblie: ""
      };
    },

    getDate() {
      var _this = this;
      let yy = new Date().getFullYear();
      let mm = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let hh = new Date().getHours();
      let ss = new Date().getSeconds(); //millisecond

      let mf =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
      _this.nowTime = hh + ":" + mf;
      _this.nowDate = yy + "-" + this.p(mm) + "-" + dd;
      // _this.form.createTime = _this.nowDate + " " + _this.nowTime;
    },
    handleEdit(row) {
      console.log(row);
      row.status = "已停用";
    },
    handleEdi(row) {
      console.log(row);
      row.status = "使用中";
    },
    addEquipment() {
      //显示弹框
      this.dialogFormVisible = true;
      //新增弹框标题
      this.dialogStatus = 0;

      this.getDate();

      this.form = {
        userName: "",
        password: "",
        nickName: "",
        moblie: "",
        email: "",

        role: {
          roleId: "",
          roleName: ""
        }
      };
    },
    //修改
    handleClick(i, row) {
      this.num = i;
      console.log(row);
      this.form = this.tableData[i];
      //显示弹框
      this.dialogFormVisible = true;
      //编辑弹框标题
      this.dialogStatus = 1;
      // 清除自动触发的表单验证
    },
    //删除
    handleDelete(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          console.log(row);
          const delteIndex = this.tableData.findIndex(function(item) {
            item.id = row.id;
            return row.id;
          });
          // splice(开始删除的下标，删除的长度)
          this.tableData.splice(delteIndex, 1);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除!"
          });
        });
    },
    onSave(form) {
      let that = this;

      switch (this.form.role.roleId) {
        case 24:
        case "24":
          this.form.role.roleName = "超级管理员";
          break;
        case 2:
        case "2":
          this.form.role.roleName = "报表管理员";
          break;
        case 26:
        case "26":
          this.form.role.roleName = "运营商";
          break;
      }
      console.log(this.form);
      this.$refs[form].validate(valid => {
        if (valid && this.dialogStatus == 0) {
          console.log(this.getDate());
          that.tableData.push(JSON.parse(JSON.stringify(this.form)));
          that.dialogFormVisible = false;
          console.log(JSON.parse(JSON.stringify(this.form)));
        } else if (valid && this.dialogStatus == 1) {
          that.tableData[that.num] = JSON.parse(JSON.stringify(that.form));
          console.log(JSON.parse(JSON.stringify(this.form)));
          that.dialogFormVisible = false;
        } else {
          return false;
        }
        // this.$refs[form].resetFields();
      });
      console.log(JSON.stringify(this.form));
      this.$Service
        .post("/api/addAdmin.action", JSON.stringify(this.form), {
          headers: {
            "Access-Control-Allow-Origin": "*", //解决cors头问题
            "Access-Control-Allow-Credentials": "true", //解决session问题
            "Content-Type": "application/json;charset=UTF-8" //将表单数据传递转化为form-data类型
          },
          withCredentials: true
        })
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          this.$message.error("创建积分活动失败,接口连接报错!");
        });
    },
    back() {
      // this.$refs.form.resetFields();
      this.dialogFormVisible = false;
      // 清除自动触发的表单验证
      this.$nextTick(() => {
        this.$refs["form"].clearValidate();
      });
    }
  },

  mounted() {
    this.getList();
  },

  created() {}
};
</script>
<style lang="" scoped>
body {
  background: grey;
}
.demo-form-inline {
  margin-left: 0px;
}
.searchCss {
  background: rgba(10, 171, 149, 1);
}
.main-header {
  width: 1150px;
  height: 100px;
  background-color: #fff;
  padding: 0px;
  text-align: left;
  font-size: 14px;
  color: rgba(60, 67, 83, 1);
  margin-top: 15px;
  box-sizing: border-box;
  overflow: hidden;
}
.content {
  width: 1150px;
  height: 600px;
  margin-top: 20px;
  margin-bottom: 70px;
}
.el-table .cell {
  text-align: center;
}
.el-input__inner {
  height: 32px;
}
.but {
  position: relative;
  left: 0px;
  width: 150px;
}
#tab {
  margin-left: 0px;
  text-align: center;
  margin-top: 20px;
}
.searchCss {
  background: rgba(10, 171, 149, 1);
}
.cont {
  border: 1px solid red;
}
</style>
