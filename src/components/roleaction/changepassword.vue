<template>
  <div class="changepassword">
    <el-header style="text-align: left; font-size: 12px">
      <el-tag
        :key="tag"
        v-for="tag in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
      >{{tag}}</el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      ></el-input>
    </el-header>
    <el-main class="fromChange">
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
  <el-form-item label="旧密码:">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="新密码:">
    <el-input v-model="formLabelAlign.region"></el-input>
  </el-form-item>
  <el-form-item label="确认密码:">
   
    <el-input v-model="formLabelAlign.type"></el-input>
  
    
      <el-button type="primary" @click="onSubmit">保存</el-button>
    
    
  </el-form-item>
</el-form>
    </el-main>

    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dynamicTags: ["活动管理", "活动主题"],
      inputVisible: false,
      inputValue: "",
      labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      tableData: [
        {
          id: "1",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: "2",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          id: "3",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          id: "4",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    onSubmit() {
      console.log("submit!");
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    }
  }
};
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  width:100%;
}
.changepassword {
  width: 100%;
}
.serachTab {
  width: 100%;
  height: 50px;
  background-color: #b3c0d1;
  text-align: left;

  line-height: 50px;
}
.serach-content {
  width: 100%;
  height: 50px;
  line-height: 50px;
}
.demo-input-suffix {
  display: inline !important;
}
.el-col p {
  margin: 0;
}
.el-main{
  /* width:50%; */
}
.surePass{
    display:inline!important;
}


</style>