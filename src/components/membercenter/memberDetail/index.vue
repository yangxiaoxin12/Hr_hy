<!-- 会员明细 -->
<template>
  <div class="memberDetail">
    <el-dialog
      :visible.sync="visible"
      @close="$emit('update:show', false)"
      :show="show"
      width="1050px"
    >
      <el-table :data="list" border height="500px">
        <el-table-column label="序号" prop="id"></el-table-column>
        <el-table-column label="昵称" prop="name"></el-table-column>
        <el-table-column label="会员等级" prop="level"></el-table-column>
        <el-table-column label="变更前积分" prop="before"></el-table-column>
        <el-table-column label="变更后积分" prop="after"></el-table-column>
        <el-table-column label="变更描述" prop="remark"></el-table-column>
        <el-table-column label="变更类型" prop="type"></el-table-column>
        <el-table-column label="变更时间" prop="time"></el-table-column>
        <el-table-column label="操作人" prop="opt"></el-table-column>
      </el-table>
      <pagination
        v-show="total>0"
        :total="total"
        :page.sync="listQuery.page"
        :limit.sync="listQuery.limit"
        @pagination="filterInput"
      />
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancle()">取 消</el-button>
        <el-button type="primary" @click="onSure()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

import Pagination from "@/components/Pagination"; // secondary package based on el-pagination
export default {
  created(){
    this.filterInput();
  },
  data() {
    return {
      rowlist:{userId:""},
      list: [
            {
          id: "1",
          name: "yonghu0",
          level: 2,
          before: "500",
          after: "1000",
          remark: "订购baby业务",
          type: "订购",
          time: "2020-05-01",
          opt: "yonghu0"
        }
      ],
      visible: false,
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
  props: {
    show: {
      type: Boolean,
      default: false
    },
    curRow:{
      type:Object
    }
  },
  watch: {
    show() {
      this.visible = this.show;
      console.log(this.curRow);
      this.rowlist.userId=this.curRow.userId;
    
    }
  },
  components: { Pagination },
  methods: {
    cancle() {
          // 1.子组件触发父组件方法
        // $emit第一个参数为所要触发的父组件函数，函数名可自定义但要与父组件中对应函数名同名
        // $emit第二个参数就是子组件向父组件传递的参数
          this.$emit("showValue",false);
    },
    onSure() {
          this.$emit("showValue",false);
    },
    filterInput() {
      const send={};
      send.userId=this.rowlist.userId;
      send.pageSize=this.listQuery.limit;
      send.pageNo=this.listQuery.page;
      this.$Service.post('/api/getIntegralDetail.action',JSON.stringify(send),{
        headers: {
          "Access-Control-Allow-Origin": "*", //解决cors头问题
          "Access-Control-Allow-Credentials": "true", //解决session问题
          "Content-Type": "application/json;charset=UTF-8" //将表单数据传递转化为form-data类型
        },
        withCredentials: true
      }).then(res=>{
        console.log("在等待一句....")
        console.log(res);
        if(res.data.status==0){
            this.list =res.data.data;
            this.total=res.data.count;
        }else{
            this.$message.error("未获得数据!");
        }
      }).catch(error=>{
                 this.$message.error("未获得数据,接口原因");
      })
      
      
    }
  }
};
</script>
<style  scoped>
</style>