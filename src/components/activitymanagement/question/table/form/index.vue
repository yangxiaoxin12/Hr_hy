<!-- 新增问题表单 -->
<template>
  <div class="dialog-form">
    <el-dialog
      :title.sync="name"
      :visible.sync="visible"
      @close="$emit('update:show', false)"
      :show="show"
    >
      <el-form :model="questionData">
        <el-form-item label="题目描述:" :label-width="formLabelWidth">
          <el-input v-model="questionData.question" placeolder="请输入" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="是否必选:" :label-width="formLabelWidth">
          <el-select style="width:380px" v-model="questionData.write" placeholder>
            <el-option label="否" value="0"></el-option>
            <el-option label="必选" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="可否多选:" :label-width="formLabelWidth">
          <el-select style="width:380px" v-model="questionData.multipleOption" placeholder>
            <el-option label="单选" value="0"></el-option>
            <el-option label="多选" value="1"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancle(add)">取 消</el-button>
        <el-button type="primary" @click="onSure(add)">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      visible: this.show,
      formLabelWidth: "120px",
      questionData: {
        question: "",
        write: "",
        number: null,
        logo: null,
        multipleOption: "",
        optionContentList: []
      }
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    add: {
      type: String,
      default: "新增"
    },
    curRow: {
      type: Object
    }
  },
  watch: {
    show() {
      this.visible = this.show;
      console.log(this.add);
      if (this.add == "new") {
        this.name = "新增问题";
        this.questionData = {
          question: "",
          write: "",
          number: null,
          logo: null,
          multipleOption: "",
          optionContentList: []
        };
      } else if (this.add == "update") {
        this.name = "修改";
        console.log(this.curRow);
        this.questionData = this.curRow;
      }
    },
    deep: true
  },
  methods: {
    cancle(name) {
      this.$emit("showValue", false);
    },
    onSure(name) {
      console.log(this.add);
      if (this.add == "new") {
        // 1.子组件触发父组件方法
        // $emit第一个参数为所要触发的父组件函数，函数名可自定义但要与父组件中对应函数名同名
        // $emit第二个参数就是子组件向父组件传递的参数
        this.$emit(
          "questionData",
          JSON.parse(JSON.stringify(this.questionData))
        );
      } else if (this.add == "update") {
        //console.log("00000");
        this.$emit(
          "updateQuestionData",
          JSON.parse(JSON.stringify(this.questionData))
        );
      }
    }
  },
  
};
</script>
<style  scoped>
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
</style>