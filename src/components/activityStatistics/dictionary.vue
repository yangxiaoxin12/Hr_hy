<template>
  <div>
    <el-button id="tou" type="primary" @click="addPrize">字典分类录入</el-button>

    <el-table :data="tableData" style="width: 100%;margin-bottom: 20px;" row-key="id" border>
      <el-table-column type="index" :index="indexMethod"></el-table-column>
      <el-table-column prop="name" label="字典名称" width="180">
        <template slot-scope="scope">
          <i :class="scope.row.icon"></i>
          <span>{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="code" label="字典编码" width="180"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="handleDelete(scope.row)" size="small">删除</el-button>
          <el-button
            v-if="scope.row.id < 10"
            type="text"
            @click="handleLuru(scope.$index,scope.row)"
            size="small"
          >字典值录入</el-button>
          <el-button type="text" @click="gai(scope.$index,scope.row)" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="新增卡卷" :visible.sync="dialogFormVisible">
      <el-form ref="card" refs="card" label-width="100px" style="width:500px;" :model="card">
        <el-form-item label="字典名称:">
          <el-input v-model="card.name"></el-input>
        </el-form-item>
        <el-form-item label="字典编码:">
          <el-input v-model="card.code"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSave()">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="字典值录入" :visible.sync="chenyi">
      <el-form ref="ziji" refs="ziji" label-width="100px" style="width:500px;" :model="ziji">
        <el-form-item label="参数名称:">
          <el-input v-model="ziji.name"></el-input>
        </el-form-item>
        <el-form-item label="参数值:">
          <el-input v-model="ziji.code"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="chenyi = false">取 消</el-button>
        <el-button type="primary" @click="onSave1()">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="字典值录入" :visible.sync="yxx">
      <el-form ref="bianji" refs="bianji" label-width="100px" style="width:500px;" :model="bianji">
        <el-form-item label="参数名称:">
          <el-input v-model="bianji.name"></el-input>
        </el-form-item>
        <el-form-item label="参数值:">
          <el-input v-model="bianji.code"></el-input>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
          <el-button @click="yxx = false">取 消</el-button>
          <el-button type="primary" @click="onSave2(scope.row)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisibleDis: false,
      dialogFormVisible: false,
      chenyi: false,
      yxx:false,
      indexs: "",
      card: {
        code: "",
        name: "",
        id:"",
        icon: "el-icon-folder-opened"
      },
      bianji: {
        name: "",
        code: "",
      },
      ziji: {
        name: "",
        code: "",
        id: "",
        icon: "el-icon-document"
      },
      // data:{
      //   a:[{"name":"1",b:[{lv:"1"}]}]
      // },
      tableData: [
        {
          id: 1,
          icon: "el-icon-folder-opened",
          name: "奖品类型",
          code: "prizeType",
          children: [
            {
              icon: "el-icon-document",
              id: 11,
              name: "实物",
              code: "1"
            },
            {
              icon: "el-icon-document",
              id: 12,
              name: "电子卡券",
              code: "2"
            }
          ]
        },
        {
          id: 2,
          icon: "el-icon-folder-opened",
          name: "渠道",
          code: "channel",
          children: [
            {
              id: 21,
              icon: "el-icon-document",
              name: "移动",
              code: "1"
            },
            {
              id: 22,
              name: "联通",
              icon: "el-icon-document",
              code: "2"
            },
            {
              id: 23,
              name: "电信",
              icon: "el-icon-document",
              code: "3"
            }
          ]
        },
        {
          id: 3,
          icon: "el-icon-folder-opened",
          name: "会员卡状态",
          code: "cardState",
          children: [
            {
              id: 31,
              name: "正常",
              icon: "el-icon-document",
              code: "1"
            },
            {
              id: 32,
              name: "冻结",
              icon: "el-icon-document",
              code: "0"
            }
          ]
        },
        {
          id: 4,
          icon: "el-icon-folder-opened",
          name: "积分变更类型",
          code: "inteExType",
          children: [
            {
              id: 41,
              name: "做任务得积分",
              icon: "el-icon-document",
              code: "1"
            },
            {
              id: 42,
              name: "商城兑换减积分",
              icon: "el-icon-document",
              code: "0"
            },
            {
              id: 43,
              name: "管理员后台操作",
              icon: "el-icon-document",
              code: "3"
            },
            {
              id: 44,
              name: "签到得积分",
              icon: "el-icon-document",
              code: "4"
            }
          ]
        }
      ]
    };
  },
  methods: {
    indexMethod(index) {
      return index + 1;
    },
    convert(arr, name) {
      const newArr = arr.filter(item => item.name !== name);
      return newArr.map(item => {
        if (item.children) {
          item.children = this.convert(item.children, name);
        }
        return item;
      });
    },
    addPrize() {
      this.card = {
        code: "",
        name: "",
        id: "",
        icon: "el-icon-folder-opened"
      };
      this.dialogFormVisible = true;
    },

    onSave() {
      let that = this;
      that.card.id = that.tableData.length + 1;
      that.card.children = [];
      console.log(that.card.id);
      console.log(that.card.children.id);
      that.tableData.push(JSON.parse(JSON.stringify(this.card)));
      that.dialogFormVisible = false;
    },
    onSave1() {
      let a = (this.indexs - 1).toString(); //当前父级的索引；
      let b = this.tableData[a].children.length.toString();
      let c = Number(a + b) + 11;
      this.ziji.id = c;
      console.log(this.ziji);
      this.tableData[a].children.push(this.ziji);
      this.chenyi = false;
    },
    onSave2() {
        
    },
    handleDelete(row, index) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          const arr = this.convert(this.tableData, row.name);
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
    handleLuru(i, row) {
      this.indexs = row.id;
      this.ziji = {
        name: "",
        code: "",
        icon: "el-icon-document",
        id: ""
      };
      this.chenyi = true;
    },
    gai(i, row){
       console.log(row)
     this.bianji={
       name:row.name,
        code:row.code
     }
     this.yxx= true
    }
  }
};
</script>
<style>
.el-icon-document:before {
  content: "\E785";
  color: #d68d16;
}
.el-icon-folder-opened:before {
  content: "\E784";
  color: #d68d16;
}
#tou {
  border: 1px solid red;
  margin-left: -1048px;
  margin-bottom: 20px;
}
</style>