<template>
  <div class="stepTable">
    <el-table :data="list" border fit highlight-current-row>
      <el-table-column label="奖品名称" prop="prizeName"></el-table-column>
      <el-table-column label="奖品图片" prop="imageUrl"></el-table-column>
      <el-table-column label="奖品类型" prop="type"></el-table-column>
      <el-table-column label="奖品库存" prop="stock"></el-table-column>
      <el-table-column label="中奖条件" prop="prizeLimit"></el-table-column>
      
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="hadleEidt(scope.row,scope.$index)" type="text" size="small">修改</el-button>
          <el-button @click="handleDelete(scope.row,scope.$index)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 新增选项按钮 -->
    <div class="votePanel">
      <i class="el-icon-plus"></i>
      <el-button class="addPrize" @click="addPrize" type="text" size="small">新增奖品</el-button>
    </div>
    <!-- 新增/修改form的dialog -->
    <dialogFprm
      :show.sync="show"
      :add.sync="add"
      :curRow.sync="curRow"
      :curIndex.sync="curIndex"
      @UpdatePrizeData="UpdateChild"
      @prizeData="fromChild"
      @showValue="showChild"
    />
    <!-- step2--操作按钮 -->
    <div class="prizeOpt">
      <el-button type="primary" @click="onSubmit">确定</el-button>
      <el-button @click="backPrev">取消</el-button>
    </div>
     
  </div>
</template>
<style  scoped>
.stepTable {
  width: 1150px;
}
.votePanel,
.addPrize {
  color: rgba(10, 171, 149, 1);
  font-size: 14px;
  font-family: PingFang SC;
  font-weight: 500;
}
.votePanel {
  margin-top: 10px;
  border: 1px solid #ebeef5;
}
.prizeOpt{
  margin-top: 20px;
}
</style>
<script>
import dialogFprm from "@/components/activitymanagement/lottery/table/form";
export default {
  components: {
    dialogFprm
  },
  data() {
    return {
      list: [],
      show: false,
      add: "new",
      singlePrize: null,
      curRow: null,
      curIndex: null
    };
  },
  methods: {
    onSubmit(){
      // 1.子组件触发父组件方法
        // $emit第一个参数为所要触发的父组件函数，函数名可自定义但要与父组件中对应函数名同名
        // $emit第二个参数就是子组件向父组件传递的参数
        console.log(this.list);
        this.$emit('toPrizeData',this.list);

    },
    backPrev(){
      // this.list=[];
      this.$confirm("此操作将清空所填内容, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      }).then(() => {
          this.$message({
            type: "success",
            message: "成功!"
          });
          this.list=null;
          
      })
      
    },
    hadleEidt(row, i) {
      this.show = true;
      this.add = "update";
      this.curRow = row;
      this.curIndex = i;
    },
    handleDelete(row, i) {
      //console.log(row);
      const delteIndex = this.list.findIndex(function(item) {
        item.id = row.id;
        return row.id;
      });
      // splice(开始删除的下标，删除的长度)
      this.list.splice(delteIndex, 1);
    },
    addPrize() {
      this.add = "new";
      this.show = true;
    }, //
    fromChild(data) {
      this.singlePrize = data;
      this.show = false;
      let data_ = JSON.parse(JSON.stringify(this.singlePrize));
      this.list.push(data_);
    },
    UpdateChild(data) {
      this.singlePrize = data;
      this.show = false;

      console.log(data);
    },
    showChild(data){
          this.show=data;
    }
  }
};
</script>