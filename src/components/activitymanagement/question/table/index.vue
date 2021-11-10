<!--抽奖table -->
<template>
  <div class="stepTable">
    <el-table :data="list" border fit highlight-current-row>
      <el-table-column label="问题名称" prop="question"></el-table-column>
      <el-table-column label="是否必选" prop="write"></el-table-column>
      <el-table-column label="可否多选" prop="multipleOption"></el-table-column>
      <el-table-column label="选项设置" prop="optionContentList">
        <template slot-scope="scope">
          <p v-for="item in scope.row.optionContentList" :key="item">{{ item }}</p>
        </template>
      </el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            @click="hadleEidt(scope.row, scope.$index)"
            type="text"
            size="small"
            >编辑选项</el-button
          >
          <el-button
            @click="hadleChange(scope.row, scope.$index)"
            type="text"
            size="small"
            >修改</el-button
          >
          <el-button
            @click="handleDelete(scope.row, scope.$index)"
            type="text"
            size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 新增问题按钮 -->
    <div class="questionPanel">
      <i class="el-icon-plus"></i>
      <el-button
        class="addQuestion"
        @click="addQuestion"
        type="text"
        size="small"
        >新增问题</el-button
      >
    </div>
    <!-- 新增问题 -->
    <dialogfprm
      :show.sync="show"
      :add.sync="add"
      :curRow="curRow"
      @questionData="formChild"
      @updateQuestionData="updateChild"
      @showValue="showChild"
    />

    <optionform
      :show.sync="showOption"
      @showComOption="showComOption"
      @optionContents="optionContents"
      :add.sync="add"
    />
    <!-- step2--弹窗操作按钮 -->
    <div class="questionOpt">
      <el-button type="primary" @click="onSubmit">确定</el-button>
      <el-button @click="backPrev">取消</el-button>
    </div>
  </div>
</template>

<script>

import Bus from "@/api/Bus"; //注意引入
import dialogfprm from "@/components/activitymanagement/question/table/form";
import optionform from "@/components/activitymanagement/question/table/form/option";
export default {
  components: {
    dialogfprm,
    optionform
  },
  created() {
    console.log(this.themeObject);
    this.themeForm = this.themeObject;
  },
  props: {
    themeObject: {
      type: Object
    }
  },
  data() {
    return {
      list: [],
      themeForm: null,
      listQuestions: [],
      show: false,
      showOption: false,
      singleQuestion: null,
      add: "new",
      curRow: null,
      curIndex: null
    };
  },
  methods: {
    hadleEidt(row, i) {
      console.log(row, i);
      this.showOption = true;
      this.add = "eidt";
      this.curRow = row;
      this.curIndex = i;
      console.log(this.curRow);
    },
    hadleChange(row, i) {
      this.show = true;
      this.add = "update";
      console.log(row);
      this.curRow = row;
      this.curIndex = i;
      console.log(this.curRow);
    },
    handleDelete(row, i) {
      this.$confirm("确认关闭？")
        .then(_ => {
          this.list.splice(i, 1);
          done();
        })
        .catch(_ => {});
    },
    addQuestion() {
      this.add = "new";
      this.show = true;
    },
    formChild(data) {
      this.singleQuestion = JSON.parse(JSON.stringify(data));
      this.show = false;
      let data_ = JSON.parse(JSON.stringify(data));
      switch (data_.write) {
        case 0:
        case null:
        case "":
        case false:
        case undefined:
          data_.write = "否";
          break;
        case 1:
        case "1":
        case true:
          data_.write = "是";
          break;
        default:
          data_.write = "否";
          break;
      }
      switch (data_.multipleOption) {
        case 0:
        case null:
        case "":
        case false:
        case undefined:
          data_.multipleOption = "否";
          break;
        case 1:
        case "1":
        case true:
          data_.multipleOption = "是";
          break;
        default:
          data_.multipleOption = "否";
          break;
      }
      //console.log(data_);
      this.list.push(data_);
    },
    showChild(data) {
      this.show = data;
    },
    showComOption(data) {
      this.showOption = data;
    },
    optionContents(data) {
      console.log(this.list);
      console.log(this.curIndex);

      data.forEach(item => {
        this.list[this.curIndex].optionContentList.push(item.percentage);
      });
    },
    updateChild(data) {
      this.singleQuestion = data;
      let data_ = JSON.parse(JSON.stringify(data));
      switch (data_.write) {
        case 0:
        case null:
        case "":
        case false:
        case undefined:
          data_.write = "否";
          break;
        case 1:
        case "1":
        case true:
          data_.write = "是";
          break;
        default:
          data_.write = "否";
          break;
      }
      switch (data_.multipleOption) {
        case 0:
        case null:
        case "":
        case false:
        case undefined:
          data_.multipleOption = "否";
          break;
        case 1:
        case "1":
        case true:
          data_.multipleOption = "是";
          break;
        default:
          data_.multipleOption = "否";
          break;
      }

      this.show = false;

      this.list[this.curIndex] = JSON.parse(
        JSON.stringify(this.singleQuestion)
      );
      console.log(this.list[this.curIndex]);
    },
    onSubmit() {
      console.log("tijiao");
      // console.log(this.list);
      this.$emit("getTableData", this.list);
      this.themeForm.questions = this.list;
      console.log(JSON.stringify(this.themeForm));
      this.themeForm.questions.map(val => {
        switch (val.multipleOption) {
          case "是":
            val.multipleOption = "1";
            break;
          case "否":
            val.multipleOption = "0";
            break;
          default:
            val.multipleOption = "0";
        }
        switch (val.write) {
          case "是":
            val.write = "1";
            break;
          case "否":
            val.write = "0";
            break;
          default:
            val.write = "0";
            break;
        }
        
      });
      

     // console.log(this.themeForm.questions.optionContents)
      console.log(JSON.stringify(this.themeForm))
      
      this.$Service.post(
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
            this.$message.success("问卷创建成功!");
          } else {
            this.$message.error("问卷创建失败!");
          }
        })
        .catch(err => {
          this.$message.error("问卷创建失败,接口原因!");
        });
    },
    backPrev() {}
  },
  mounted() {}
};
</script>
<style scoped>
.stepTable {
  width: 1150px;
}

.questionPanel,
.addQuestion {
  color: rgba(10, 171, 149, 1);
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
}
.questionPanel {
  margin-top: 10px;
  border: 1px solid #ebeef5;
}
.questionOpt {
  margin-top: 20px;
}
</style>
