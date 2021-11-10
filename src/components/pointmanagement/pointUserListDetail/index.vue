<!-- 会员明细 -->
<template>
  <div class="memberDetail">
    <el-dialog
      :title="title"
      :visible.sync="visible"
      @close="$emit('update:show', false)"
      :show="show"
      width="1050px"
    >
      <el-table :data="list" border height="500px">
        <el-table-column label="序号" prop="id"></el-table-column>
        <el-table-column label="昵称" prop="wxName"></el-table-column>
        <el-table-column label="会员等级" prop="lv"></el-table-column>
        <el-table-column label="变更前积分" prop="integral"></el-table-column>
        <el-table-column label="变更后积分" prop="userIntegral"></el-table-column>
        <el-table-column label="变更描述" prop="remark"></el-table-column>
        <el-table-column label="变更类型" prop="typeName"></el-table-column>
        <el-table-column label="变更时间" prop="createTime"></el-table-column>
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
  mounted(){
     this.filterInput();
  },
  data() {
    return {
      title:"用户积分明细",
      //curRowData:null,
      list: [
        {
          id: "1",
          wxName: "yonghu0",
          lv: null,
          integral: "500",
          userIntegral: "1000",
          remark: "",
          typeName: "",
          createTime: "2020-05-01",
          opt: "yonghu0"
        }
      ],
      userRow:{userId:""},
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
    curRow: {
      type: Object
    }
   
  },
  watch: {
    show() {
      this.visible = this.show;
      console.log(this.show);
      this.userRow.userId=this.curRow.userId;
      console.log(this.userRow);
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
        console.log(this.userRow);
        let sendParams={};
        sendParams.pageSize=this.listQuery.limit;
        sendParams.pageNo=this.listQuery.page;
        sendParams.userId=this.userRow.userId;
       // sendParams.userId="";
        console.log(JSON.stringify(sendParams));
       this.$Service.post(
        '/api/getIntegralList.action',
        JSON.stringify(sendParams),
        {headers: {
              "Access-Control-Allow-Origin": "*", //解决cors头问题
              "Access-Control-Allow-Credentials": "true", //解决session问题
              "Content-Type": "application/json;charset=UTF-8" //将表单数据传递转化为form-data类型
            },
            withCredentials: true}
            ).then(res=>{
              console.log(res);
              if(res.data.status==0){
                  this.list=res.data.data;
                  this.list.map((val)=>{
                    val.lv=this.userRow.lv;
                    val.opt=this.userRow.userName;
                  })
              }else{
                   this.$message.error("未获得数据");
              }
            })
     
      
    }
  }
};
</script>
<style  scoped>
</style>