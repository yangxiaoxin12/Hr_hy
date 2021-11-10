<!-- 媒资查询组件 -->
<template>
  <div class="searchmedia">
    <el-dialog
      :title="titleMedia"
      :showMedia="showMedia"
      :visible.sync="visible"
      @close="$emit('update:showMedia', false)"
    >
      <el-form :model="searchData" :inline="true">
        <el-form-item label-width="0px">
          <el-input v-model="searchData.name" placeholder="输入搜索名称"></el-input>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-input v-model="searchData.code" placeholder="输入搜搜code码"></el-input>
        </el-form-item>
        <el-form-item label-width="0px">
          <el-button type="primary" @click="getList">搜素</el-button>
        </el-form-item>
      </el-form>
      <el-divider>搜索结果</el-divider>
      <!-- 查询结果 -->
      <ul class="searchResult">
            <!-- <template slot-scope="scope"> -->
        <li v-for="item in list" :key="item.code" @click="mediachecked" style="width:100%;height:20px;line-height:20px;">
          <span>{{item.name}}</span>
          &nbsp; &nbsp;
          <span>({{item.code}})</span>
        </li>
            <!-- </template> -->
      </ul>
      
      <!-- 分页 -->
      <pagination
        v-show="total>0"
        :total="total"
        :page.sync="listQuery.page"
        :limit.sync="listQuery.limit"
        @pagination="getList"
      />
      <el-divider></el-divider>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancle">取 消</el-button>
        <el-button type="primary" @click="onSure">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination

export default {
  components: { Pagination },
  mounted() {
    this.getList;
  },
  data() {
    return {
      visible: this.showMedia,

      searchData: {
        name: "",
        code: ""
      },
      list: [
        { name: "利刃出鞘", code: "01010001000000010000000057754124" },
        { name: "倩女幽魂-刘亦菲", code: "01010001000000010000000057778877" },
        { name: "少年的你", code: "01010001000000010000000050987362" }
      ],
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
    showMedia: {
      type: Boolean,
      default: false
    },
    titleMedia: {
      type: String,
      default: "媒资查询"
    }
  },
  watch: {
    showMedia() {
      console.log(this.showMedia);
      this.visible = this.showMedia;
      console.log(this.titleMedia);
    }
  },
  methods: {
    onSure() {
      this.$emit("MedidCode", this.searchData);
    },
    cancle() {
      //子---》父
      this.$emit("showMediaValue", this.false);
    },
    getList() {
      var param = this.searchData;
      param.pageNo = this.listQuery.page;
      param.pageSize = this.listQuery.limit;
      var sendParam = JSON.stringify(param);
      console.log(sendParam);
      
    },
    mediachecked() {
     
    }
  }
};
</script>
<style  scoped>
.el-form--inline .el-form-item {
  margin-right: 30px;
  width: 220px !important;
}
.el-form--inline .el-form-item__content {
  width: 220px !important;
}
.el-divider--horizontal {
  margin: 0 auto;
}
.searchResult {
  list-style: none;
  width: 100%;
  height: 300px;
}
</style>