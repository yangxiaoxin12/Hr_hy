<template>
  <div class="zhanghu">
    <div id="tab">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column align="center" prop="name" label="名称"></el-table-column>
        <el-table-column align="center" prop="user" label="用户"></el-table-column>
        <el-table-column align="center" prop="phone" label="手机号"></el-table-column>
                <el-table-column align="center" prop="yunying" label="运营商"></el-table-column>

        <el-table-column align="center" prop="wxnum" label="微信号"></el-table-column>

        <el-table-column align="center" prop="toudate" label="活动时间"></el-table-column>
        <el-table-column align="center" prop="mediaCapital" label="媒资"></el-table-column>
        <el-table-column align="center" prop="ip" label="IP地址"></el-table-column>
        <el-table-column align="center" prop="mac" label="MAC地址"></el-table-column>
        <el-table-column align="center" prop="describe" label="描述"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  user: "",

  components: {},

  data() {
    return {
      tableData: [
        {
          name: "NBA", //名称
          user: "test123", //用户
          phone: "14823231123", //手机号
          yunying:"联通",
          wxnum:"wx_123123",
          toudate: "2013-03-18 16:43", //投票时间
          mediaCapital: "-", //媒资
          ip: "192.168.0.01", //IP地址
          mac: "12.2131.23", //mac地址
          describe: "——" //描述
        },
        {
          name: "天下足球",
          user: "test123",
          phone: "14823231123",
           yunying:"联通",
          wxnum:"wx_123123",
          toudate: "2013-03-18 16:43",
          mediaCapital: "-",
          ip: "192.168.0.01",
          mac: "12.2131.23",
          describe: "——"
        },
        {
          name: "天下篮球",
          user: "test123",
          phone: "14823231123",
           yunying:"联通",
          wxnum:"wx_123123",
          toudate: "2013-03-18 16:43",
          mediaCapital: "-",
          ip: "192.168.0.01",
          mac: "12.2131.23",
          describe: "——"
        },
        {
          name: "国足大赛",
          user: "test123",
          phone: "14823231123",
           yunying:"联通",
          wxnum:"wx_123123",
          toudate: "2013-03-18 16:43",
          mediaCapital: "-",
          ip: "192.168.0.01",
          mac: "12.2131.23",
          describe: "——"
        }
      ]
      //新增和编辑弹框标题
    };
  },

  watch: {},

  methods: {},

  mounted() {},

  created() {}
};
</script>
<style lang='' scoped>
.demo-form-inline {
  margin-left: -600px;
}
.searchCss {
  background: rgba(10, 171, 149, 1);
}
</style>