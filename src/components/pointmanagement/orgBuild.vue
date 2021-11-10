/* 组织架构 */
<template>
  <div class="orgBuild">
    <div class="main-header">
      <img src="../../assets/zz.jpg" style="width: 65%" />
    </div>
    <div id="remark" style="text-align: left">
      <p>
        备注：<br />
        （1）党委办公室、宣传部、纪委办公室、工会、团委合署办公，称作党群工作部；<br />
        （2）组织部与人力资源部合署办公；<br />
        （3）武装保卫部与安全环保部合署办公。
      </p>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  mounted() {
    this.getList();
  },
  data() {
    return {
      show: false,
      listLoading: true,
      total: 1,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 2,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "+No",
      },
      userForm: {
        userName: "",
        mobile: "",
      }, // userForm
      tableData: [
        {
          id: "1",
          // "No":"1",
          userName: "抽奖",
          userNumber: "you11",
          mobile: "1390019569",
          score: "3908",
          time: "2020-03-27",
          wxName: "wx11",
          integral: "111",
          account: null,
        },
      ],
      curRow: null,
    };
  },
  methods: {
    showValue(data) {
      this.show = data;
    },
    getList() {
      let sendParams = {};
      sendParams.userName = this.userForm.userName;
      sendParams.mobile = this.userForm.mobile;
      sendParams.pageNo = this.listQuery.page;
      sendParams.pageSize = this.listQuery.limit;

      console.log(sendParams);
      console.log(JSON.stringify(sendParams));
      /*
      {"userName":"","mobile":"","pageSize":"","pageNo":""}
      {"userName":"","mobile":"","pageNo":10,"pageSize":1}传递值报错
      */
      this.$Service
        .post("/api/getUserList.action", JSON.stringify(sendParams), {
          headers: {
            "Access-Control-Allow-Origin": "*", //解决cors头问题
            "Access-Control-Allow-Credentials": "true", //解决session问题
            "Content-Type": "application/json;charset=UTF-8", //将表单数据传递转化为form-data类型
          },
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          if (res.data.status === 0) {
            this.tableData = res.data.data;
            this.total = res.data.count;
          } else {
            this.$message.error("未获得数据");
          }
        })
        .catch((err) => {
          this.$message.error("未获得数据,链接接口报错!");
        });
    },
    res() {},
    handleClick(row) {
      this.curRow = row;

      this.show = true;
    },
  },
};
</script>
<style scoped>
.orgBuild {
  width: 100%;
  /* height: 860px; */
}
.main-header {
  width: 100%;
  height: 80%;
  background-color: #fff;
  padding: 0px;
  text-align: center;
  font-size: 14px;
  color: rgba(60, 67, 83, 1);
  margin-top: 15px;
  box-sizing: border-box;
  overflow: hidden;
}
.el-button--success {
  background: rgba(10, 171, 149, 1);
  border-radius: 4px;
}
#remark {
  margin-left: 21%;
  width: 80%;
  font-size: 18px;
}
</style>
