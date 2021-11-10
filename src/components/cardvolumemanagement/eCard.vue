<template>
  <div>
    <div class="form-outer">
      <div class="label">姓名：</div>
      <el-input
        class="item"
        v-model="searchForm.name"
        placeholder="请输入姓名"
      ></el-input>
      <!-- <div class="label">所属部门：</div>
      <el-input
        class="item"
        v-model="searchForm.pub"
        placeholder="请输入所属部门"
      ></el-input> -->

      <br />
      <div class="label">入职日期：</div>
      <el-date-picker
        v-model="searchForm.startDate1"
        class="item"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </el-date-picker>
      <el-button class="button" @click="handleSearch">查询</el-button>
      <el-button class="button" @click="handleReset">重置</el-button>
      <el-button class="button" type="primary">新增</el-button>
    </div>

    <el-table border :data="tableData" style="width: 100%">
      <el-table-column fixed prop="name" label="员工姓名" width="150">
      </el-table-column>
      <el-table-column prop="pub" label="所属部门" width="150">
      </el-table-column>
      <el-table-column prop="planName" label="身份证号" width="200">
      </el-table-column>
      <el-table-column prop="content" label="工号" width="150">
      </el-table-column>
      <el-table-column prop="date" label="证件类型" width="200">
      </el-table-column>
      <el-table-column prop="process" label="手机号码" width="150">
      </el-table-column>
      <el-table-column prop="type" label="薪资" width="150"> </el-table-column>
      <el-table-column prop="startDate1" label="入职日期" width="120">
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleEdit(scope.row)"
            >编辑</el-button
          >
          <el-button type="text" size="small" @click="handleCheck(scope.row)"
            >详情</el-button
          >
          <el-button
            type="text"
            style="color: red"
            size="small"
            @click="handleEdit(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="员工详情" :visible.sync="showDialog" width="40%" center>
      <div class="dialog-outer">
        <div class="item">
          <span class="label">序号</span>
          <span class="value">19</span>
        </div>
        <div class="item">
          <span class="label">部门名称</span>
          <span class="value">{{ checkInfo.pub }}</span>
        </div>
        <div class="item">
          <span class="label">岗位名称</span>
          <span class="value">开发工程师</span>
        </div>
        <div class="item">
          <span class="label">人员编号</span>
          <span class="value">187876772</span>
        </div>
        <div class="item">
          <span class="label">姓名</span>
          <span class="value">{{ checkInfo.name }}</span>
        </div>
        <div class="item">
          <span class="label">单位工号</span>
          <span class="value">68686761</span>
        </div>
        <div class="item">
          <span class="label">单位工号</span>
          <span class="value">68686761</span>
        </div>
        <div class="item">
          <span class="label">工作地点</span>
          <span class="value">宜昌</span>
        </div>
        <div class="item">
          <span class="label">分类</span>
          <span class="value">派遣工</span>
        </div>
        <div class="item">
          <span class="label">单位工号</span>
          <span class="value">68686761</span>
        </div>
        <div class="item">
          <span class="label">性别</span>
          <span class="value">男</span>
        </div>
        <div class="item">
          <span class="label">民族</span>
          <span class="value">汉</span>
        </div>
        <div class="item">
          <span class="label">婚姻状况</span>
          <span class="value">已婚</span>
        </div>
        <div class="item">
          <span class="label">政治面貌</span>
          <span class="value">团员</span>
        </div>
        <div class="item">
          <span class="label">年龄</span>
          <span class="value">28</span>
        </div>
        <div class="item">
          <span class="label">出生日期</span>
          <span class="value">1993.2.5</span>
        </div>
        <div class="item">
          <span class="label">身份证号</span>
          <span class="value">32061119960714261X</span>
        </div>
        <div class="item">
          <span class="label">合同到期日期</span>
          <span class="value">2023.11.08</span>
        </div>
        <div class="item">
          <span class="label">参加工作时间</span>
          <span class="value">4年</span>
        </div>
        <div class="item">
          <span class="label">工龄</span>
          <span class="value">4</span>
        </div>
        <div class="item">
          <span class="label">工龄起算日</span>
          <span class="value">2016.8.8</span>
        </div>
        <div class="item">
          <span class="label">进入本单位</span>
          <span class="value">2017.8.4</span>
        </div>
        <div class="item">
          <span class="label">司龄</span>
          <span class="value">2</span>
        </div>
        <div class="item">
          <span class="label">政治面貌</span>
          <span class="value">团员</span>
        </div>
        <div class="item">
          <span class="label">学历</span>
          <span class="value">大专</span>
        </div>
        <div class="item">
          <span class="label">毕业院校</span>
          <span class="value">江苏大学</span>
        </div>
        <div class="item">
          <span class="label">专业</span>
          <span class="value">计算机科学与技术</span>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showDialog = false">取 消</el-button>
        <el-button type="primary" @click="showDialog = false">编 辑</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDialog: false,
      checkInfo: {},
      searchForm: {
        name: "",
        pub: "",
        startDate1: [],
      },
      tableData: [
        {
          name: "王陈奕",
          pub: "产品部",
          planName: "32061119960714261X",
          content: "7768166",
          date: "身份证",
          dutyName: "刘宗宪",
          startDate1: "2020-1-8",
          endDate1: "2021-1-7",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "15605293671",
          type: "15000",
        },
        {
          name: "李跃华",
          pub: "安全部",
          planName: "123123131312414214",
          content: "97686673",
          date: "身份证",
          dutyName: "刘宗宪",
          startDate1: "2020-1-8",
          endDate1: "2021-1-7",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "15605293671",
          type: "12000",
        },
        {
          name: "李却成",
          pub: "财务部",
          planName: "32061757723714261X",
          content: "123675812",
          date: "身份证",
          dutyName: "刘宗宪",
          startDate1: "2020-1-8",
          endDate1: "2021-1-7",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "15605293671",
          type: "180000",
        },
        {
          name: "李小琳",
          pub: "地理部",
          planName: "3206887812714261X",
          content: "878687213",
          date: "身份证",
          dutyName: "刘宗宪",
          startDate1: "2020-1-8",
          endDate1: "2021-1-7",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "15605293671",
          type: "8900",
        },

        {
          name: "成雪峰",
          pub: "金融部",
          planName: "320619971260714261X",
          content: "97686222",
          date: "身份证",
          dutyName: "刘宗宪",
          startDate1: "2020-1-8",
          endDate1: "2021-1-7",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "15605293671",
          type: "25000",
        },
        {
          name: "薛赵盘",
          pub: "成品部",
          planName: "32061109761220714261X",
          content: "876571223",
          date: "身份证",
          dutyName: "刘宗宪",
          startDate1: "2020-1-8",
          endDate1: "2021-1-7",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "15605293671",
          type: "14750",
        },
        {
          name: "王陈奕",
          pub: "产品部",
          planName: "32061119960714261X",
          content: "7768166",
          date: "身份证",
          dutyName: "刘宗宪",
          startDate1: "2020-1-8",
          endDate1: "2021-1-7",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "15605293671",
          type: "15000",
        },
        {
          name: "李跃华",
          pub: "安全部",
          planName: "123123131312414214",
          content: "97686673",
          date: "身份证",
          dutyName: "刘宗宪",
          startDate1: "2020-1-8",
          endDate1: "2021-1-7",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "15605293671",
          type: "12000",
        },
        {
          name: "李却成",
          pub: "财务部",
          planName: "32061757723714261X",
          content: "123675812",
          date: "身份证",
          dutyName: "刘宗宪",
          startDate1: "2020-1-8",
          endDate1: "2021-1-7",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "15605293671",
          type: "180000",
        },
        {
          name: "李小琳",
          pub: "地理部",
          planName: "3206887812714261X",
          content: "878687213",
          date: "身份证",
          dutyName: "刘宗宪",
          startDate1: "2020-1-8",
          endDate1: "2021-1-7",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "15605293671",
          type: "8900",
        },

        {
          name: "成雪峰",
          pub: "金融部",
          planName: "320619971260714261X",
          content: "97686222",
          date: "身份证",
          dutyName: "刘宗宪",
          startDate1: "2020-1-8",
          endDate1: "2021-1-7",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "15605293671",
          type: "25000",
        },
        {
          name: "薛赵盘",
          pub: "成品部",
          planName: "32061109761220714261X",
          content: "876571223",
          date: "身份证",
          dutyName: "刘宗宪",
          startDate1: "2020-1-8",
          endDate1: "2021-1-7",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "15605293671",
          type: "14750",
        },
        {
          name: "王陈奕",
          pub: "产品部",
          planName: "32061119960714261X",
          content: "7768166",
          date: "身份证",
          dutyName: "刘宗宪",
          startDate1: "2020-1-8",
          endDate1: "2021-1-7",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "15605293671",
          type: "15000",
        },
        {
          name: "李跃华",
          pub: "安全部",
          planName: "123123131312414214",
          content: "97686673",
          date: "身份证",
          dutyName: "刘宗宪",
          startDate1: "2020-1-8",
          endDate1: "2021-1-7",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "15605293671",
          type: "12000",
        },
        {
          name: "李却成",
          pub: "财务部",
          planName: "32061757723714261X",
          content: "123675812",
          date: "身份证",
          dutyName: "刘宗宪",
          startDate1: "2020-1-8",
          endDate1: "2021-1-7",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "15605293671",
          type: "180000",
        },
        {
          name: "李小琳",
          pub: "地理部",
          planName: "3206887812714261X",
          content: "878687213",
          date: "身份证",
          dutyName: "刘宗宪",
          startDate1: "2020-1-8",
          endDate1: "2021-1-7",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "15605293671",
          type: "8900",
        },

        {
          name: "成雪峰",
          pub: "金融部",
          planName: "320619971260714261X",
          content: "97686222",
          date: "身份证",
          dutyName: "刘宗宪",
          startDate1: "2020-1-8",
          endDate1: "2021-1-7",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "15605293671",
          type: "25000",
        },
        {
          name: "薛赵盘",
          pub: "成品部",
          planName: "32061109761220714261X",
          content: "876571223",
          date: "身份证",
          dutyName: "刘宗宪",
          startDate1: "2020-1-8",
          endDate1: "2021-1-7",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "15605293671",
          type: "14750",
        },
      ],
      saveData: [],
    };
  },
  mounted() {
    // 保存原始数据
    this.saveData = JSON.parse(JSON.stringify(this.tableData));
  },
  methods: {
    handleCheck(row) {
      console.log(row);
      this.checkInfo = row;
      this.showDialog = true;
    },
    handleEdit(row) {
      console.log(row);
    },
    handleSearch() {
      this.tableData = this.saveData.filter((item) => {
        let nameKey = "name";
        let contentKey = "pub";
        let dateKey = "startDate1";

        let nameIn = this.searchForm[nameKey]
          ? item[nameKey].indexOf(this.searchForm[nameKey]) >= 0
          : true;
        let contentIn = this.searchForm[contentKey]
          ? item[contentKey].indexOf(this.searchForm[contentKey]) >= 0
          : true;

        let sDate = this.searchForm[dateKey][0];
        let eDate = this.searchForm[dateKey][1];

        let getTimeFromStr = (str) => {
          return new Date(str).getTime();
        };

        let dateIn =
          sDate && eDate
            ? getTimeFromStr(item[dateKey]) <= eDate.getTime() &&
              getTimeFromStr(item[dateKey]) >= sDate.getTime()
            : true;

        return nameIn && contentIn && dateIn;
      });
    },
    handleReset() {
      this.tableData = JSON.parse(JSON.stringify(this.saveData));
      this.searchForm = {
        startDate1: [],
        name: "",
        pub: "",
      };
    },
  },
};
</script>

<style scoped lang="less">
.testplan {
  padding: 20px;
  text-align: left;
}
.form-outer {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 200px;
    margin-right: 10px;
  }
  .label {
    line-height: 40px;
  }
}
.dialog-outer {
  padding: 30px;
  height: 300px;
  overflow: scroll;
  display: flex;
  flex-wrap: wrap;
  .item {
    width: 50%;
    margin-bottom: 30px;
    font-size: 16px;
    .label {
      font-weight: bolder;
      line-height: 30px;
    }
    .value {
      line-height: 30px;
    }
  }
}
</style>