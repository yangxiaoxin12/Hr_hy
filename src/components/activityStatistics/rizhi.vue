<template>
  <div class="main-content">
    <el-table border :data="tableData" stripe style="width: 100% height:600px">
      <el-table-column prop="adminId" label="用户ID"></el-table-column>
      <el-table-column prop="logDesc" label="操作内容"></el-table-column>
      <el-table-column prop="ip" label="IP"></el-table-column>
      <el-table-column prop="createTime" label="时间"></el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="pageChange"
      :page-size="pageSize"
      :total="totalusers"
    />
  </div>
</template>

<script>
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination
export default {
  components: {
    Pagination,
  },
  created() {
    console.log("用象形刻画");
    // this.getList();
  },
  data() {
    return {
      totalusers: 0, //总行数
      pageSize: 7, //每页几行
      startpage: 1, //起始页
      // 这个列表组件，自己找啦）<el-table :data="formdata"></el-table>
      formdata: [], //table表格数据（获取到数据赋值给它就能显示数据列表）

      listQuery: {
        page: 1,
        limit: 10,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "+No",
      },
      tableData: [
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
      ],
    };
  },
  methods: {
    // getList() {
    //   this.total = 30;
    //   this.tableData = [
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //     {
    //       adminId: "7",
    //       logDesc: "admin(admin)访问了系统日志",
    //       ip: "192.123.01.42",
    //       createTime: "2020-5-05 14:10:43",
    //     },
    //   ];
    // },

    async pageChange(page) {
      console.log("page====>>" + page);
      this.startpage = page;
      //调用获取列表的方法
      this.getTaskList();
    },
    //获取分页列表
    getTaskList() {
      // let params = {
      //   page: this.startpage,
      //   limit: this.pageSize,
      // };
      //调用后台提供的接口方法（这里就不详说封装接口了）
        //赋值到formdata 数组
        this.formdata = [
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
        {
          adminId: "7",
          logDesc: "admin(admin)访问了系统日志",
          ip: "192.123.01.42",
          createTime: "2020-5-05 14:10:43",
        },
      ];;
        this.totalusers = 30;
        console.log(this.totalusers);
    },
  },
};
</script>
<style  scoped>
.main-content {
  height: 900px;
}
</style>