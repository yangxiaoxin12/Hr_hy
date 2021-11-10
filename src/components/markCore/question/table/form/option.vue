<!--  -->
<template>
  <div class="dialog-form">
    <el-dialog
      :title.sync="name"
      :visible.sync="visible"
      @close="$emit('update:show', false)"
      :show="show"
    >
      <el-form>
        <el-row v-for="(item,i) in optionContent" :key="i">
          <el-col :span="12">
            <!-- {{item}} -->
            <el-form-item :label="`选项${i+1}:`" :label-width="formLabelWidth">
              <el-input placehoder="请输入" v-model="item.percentage"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-button
              width="20px"
              @click="deleteOption(i)"
              height="20px"
              icon="el-icon-delete"
              circle
            ></el-button>
          </el-col>
        </el-row>
      </el-form>
      <!-- 新增选项按钮 -->
      <div class="optionPanle">
        <i class="el-icon-plus"></i>
        <el-button class="addOption" @click="addOption" type="text" size="small">新增问题</el-button>
      </div>
      <!-- step2--添加选项弹窗操作按钮 -->
      <div class="optionOpt">
        <el-button type="primary" @click="onSure">确定</el-button>
        <el-button @click="back">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Bus from "@/api/Bus"; //注意引入
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    add: {
      type: String,
      default: "编辑选项"
    }
  },
  watch: {
    show() {
      this.visible = this.show;
      console.log(this.add);
      if (this.add == "eidt") {
        this.optionContent=[
        {
          percentage: "1.",
          group: ""
        },
        {
          percentage: "2.",
          group: ""
        },
        {
          percentage: "3.",
          group: ""
        }
      ]
      }
    }
  },
  data() {
    return {
      name: "",
      name1: "",
      visible: this.show,
      formLabelWidth: "120px",
      optionContent: [
        {
          percentage: "1",
          group: ""
        },
        {
          percentage: "2",
          group: ""
        },
        {
          percentage: "3",
          group: ""
        }
      ]
    };
  },

  components: {},

  methods: {
    addOption() {
      this.optionContent.push({
        percentage: "",
        group: ""
      });
    },
    deleteOption(i) {
      // splice(开始删除的下标，删除的长度)
      this.optionContent.splice(i, 1);
    },
    onSure() {
      this.$emit("optionContents", this.optionContent);
      this.$emit("showComOption", false);
    },
    back() {
      this.$emit("showComOption", false);
    }
  }
};
</script>
<style  scoped>
.optionPanle,
.addOption {
  color: rgba(10, 171, 149, 1);
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
}
.optionPanle {
  margin-top: 10px;
  border: 1px solid #ebeef5;
}
.optionOpt {
  margin-top: 20px;
}
</style>