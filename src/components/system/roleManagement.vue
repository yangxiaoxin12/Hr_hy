<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column
        prop="roleName"
        label="角色名称"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="roleDesc"
        label="角色描述"
        align="center"
      ></el-table-column>
      <el-table-column fixed="right" label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            @click="handleClick(scope.$index, scope.row)"
            type="text"
            size="small"
            >修改</el-button
          >
          <el-button type="text" @click="handleDelete(scope.row)" size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="newrole">
      <i class="el-icon-plus"></i>
      <el-button
        class="newrole_button"
        @click="addEquipment"
        type="text"
        size="small"
        >新增角色</el-button
      >
    </div>
    <el-dialog
      id="dialog"
      label-width="100px"
      style="text-align:left"
      :title="titleMap[dialogStatus]"
      :visible.sync="dialogFormVisible"
    >
      <el-form style="width:400px;" label-width="100px" :model="form">
        <el-form-item label="角色名称:">
          <el-input
            placeholder="请输入"
            v-model="form.roleName"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="角色描述:">
          <el-input
            placeholder="请输入"
            v-model="form.roleDesc"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <span class="quan">权限设置:</span>
      <el-tree
        class="tree"
        :data="data"
        show-checkbox
        node-key="id"
        :default-expanded-keys="[]"
        :default-checked-keys="[]"
        :props="defaultProps"
      ></el-tree>
      <div slot="footer" class="dialog-footer">
        <el-button @click="back">取 消</el-button>
        <el-button type="primary" @click="onSave('form')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

export default {
  data() {
    return {
      tableData: [
        {
          roleName: "超级管理员",
          roleDesc: "市场运营所有角色"
        },
        {
          roleName: "超级管理员",
          roleDesc: "所有权限"
        },
        {
          roleName: "超级管理员",
          roleDesc: "市场运营所有角色"
        },
        {
          roleName: "超级管理员",
          roleDesc: "内容商权限"
        }
      ],
      titleMap: ["新建账户", "修改账户"],
      dialogStatus: 0,
      data: [
        {
          id: 1,
          label: "活动管理",
          children: [
            {
              id: 2,
              label: "活动列表"
            },
            {
              id: 3,
              label: "新建活动"
            }
          ]
        },
        {
          id: 4,
          label: "积分管理",
          children: [
            {
              id: 5,
              label: "用户积分列表"
            },
            {
              id: 6,
              label: "用户兑换记录"
            },
            {
              id: 7,
              label: "积分奖品规则"
            }
          ]
        },
        {
          id: 3,
          label: "卡卷管理",
          children: [
            {
              id: 8,
              label: "电子卡劵"
            },
            {
              id: 9,
              label: "卡卷明细"
            },
            {
              id: 10,
              label: "随机码管理"
            }
          ]
        },
        {
          id: 4,
          label: "会员中心",
          children: [
            {
              id: 11,
              label: "会员管理"
            },
            {
              id: 12,
              label: "配置规则"
            },
            {
              id: 13,
              label: "等级管理"
            }
          ]
        },
        {
          id: 5,
          label: "数据中心",
          children: [
            {
              id: 14,
              label: "活动详情"
            },
            {
              id: 15,
              label: "中奖信息"
            },
            {
              id: 16,
              label: "库存统计"
            }
          ]
        },
        {
          id: 6,
          label: "系统管理",
          children: [
            {
              id: 17,
              label: "角色设置"
            },
            {
              id: 18,
              label: "账户管理"
            },
            {
              id: 19,
              label: "数据字典"
            },
            {
              id: 20,
              label: "系统日志"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        roleName: "", //角色名称
        roleDesc: "" //角色描述
      },
      total: 1,
      listQuery: {
        page: 1,
        limit: 10,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "+No"
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    newrole() {
      alert(123);
    },
    getList(){
      let sendParam={};
       sendParam.currentPage=this.listQuery.page;
       sendParam.pageSize=this.listQuery.limit;
      this.$Service.post("/api/roleListView.action",JSON.stringify(sendParam),{
              headers: {
                "Access-Control-Allow-Origin": "*", //解决cors头问题
                "Access-Control-Allow-Credentials": "true", //解决session问题
                "Content-Type": "application/json;charset=UTF-8" //将表单数据传递转化为form-data类型
              },
              withCredentials: true
            }).then(res=>{
              console.log(res);
              if(res.data.status==0){
                this.$message.success("获取数据成功!");
                this.tableData=res.data.data;
                this.total=res.data.count;
              }else{
                this.$message.error("未获得数据");
              }
            }).catch(error=>{
              this.$message.error("未获得数据,接口原因");
            })
    },

    //删除按钮事件
    handleDelete(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          console.log(row);
          let send = {};
          send.roleId = row.roleId;
          this.$Service.post("/api/delRole.action", JSON.stringify(send), {
            headers: {
              "Access-Control-Allow-Origin": "*", //解决cors头问题
              "Access-Control-Allow-Credentials": "true", //解决session问题
              "Content-Type": "application/json;charset=UTF-8" //将表单数据传递转化为form-data类型
            },
            withCredentials: true
          }).then(res=>{
            console.log(res);
            if(res.data.status==0){
                this.$message.success("删除成功!");
            }else{
              this.$message.error("删除失败!");
            }

          }).catch(error=>{
            this.$message({
                productType: "error",
                message: "删除失败!接口原因"
              });
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除!"
          });
        });
    },
    //模态框确认部分
    onSave(form) {
      console.log(this.form);
      if (this.dialogStatus == 0) {
        // this.tableData.push(this.form);
        this.$Service.post("/api/addRole.action", JSON.stringify(this.form), {
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
            this.$message.error("新增失败,接口原因");
          });
      }

      this.dialogFormVisible = false;
    },
    addEquipment() {
      //新增弹框标题
      //显示弹框
      this.dialogFormVisible = true;
      this.dialogStatus = 0;
    },
    //模态框修改部分
    handleClick(i, row) {
      console.log(row);
      this.form = row;
      // this.dialogStatus = 1;
      this.dialogFormVisible = true;
    },

    //模态框取消部分
    back() {
      this.dialogFormVisible = false;
      this.form = {
        roleName: "", //角色名称
        roleDesc: "" //角色描述
      };
    },
   
  },
  mounted() {
    this.getList();
  }
};
</script>
<style leng="less" scoped>
.el-table thead {
  color: "#909399";
  font-weight: 500;
  background-color: "#909399";
}
.tree {
  margin-left: 70px;
  margin-top: -20px;
}
.newrole,
.newrole_button {
  color: rgba(10, 171, 149, 1);
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
  text-align: center;
}
.newrole {
  margin-top: 40px;
  border: 1px dashed #ebeef5;
}
#dialog {
  border-bottom: 1px solid gray;
  /* width: 48%; */
  left: 200px;
}
.el-dialog .el-dialog__header .el-dialog__title {
  font-size: 14px;
}
.searchCss {
  background: rgba(10, 171, 149, 1);
}
</style>
