<template>
  <div>
    <div class="form-outer">
      <div class="label">姓名：</div>
      <el-input
        class="item"
        v-model="searchForm.name0"
        placeholder="请输入姓名"
      ></el-input>

      <el-button class="button" @click="handleSearch">查询</el-button>
      <el-button class="button" @click="handleReset">重置</el-button>
      <el-button class="button" type="primary">新增</el-button>
    </div>

    <el-table border :data="tableData" style="width: 100%">
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column prop="name0" label="姓名" width="100"> </el-table-column>
      <el-table-column prop="name1" label="培训内容" width="150">
      </el-table-column>
      <el-table-column prop="name2" label="培训时间" width="150">
      </el-table-column>
      <el-table-column prop="name3" label="考试内容" width="150">
      </el-table-column>
      <el-table-column prop="name4" label="考试时间" width="150">
      </el-table-column>
      <el-table-column prop="name5" label="考试成绩" width="150">
      </el-table-column>
      <el-table-column prop="name6" label="反馈" width="200"> </el-table-column>
      <!-- <el-table-column prop="name1" label="附件"> </el-table-column> -->
      <el-table-column fixed="right" label="附件" >
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="handleEdit(scope.row, scope.$index)"
            >下载</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchForm: {
        planName: "",
        content: "",
        startDate1: [],
      },
      tableData: [
        {
          name0: "王集超",
          name1: "“智能工厂集成技术与应用”新技能项目培训",
          name2: "2021/6/19",
          name3: "证书考试取证",
          name4: "/",
          name5: "/",
        },
        {
          name0: "徐齐田",
          name1: "“智能工厂集成技术与应用”新技能项目培训",
          name2: "2021/6/19",
          name3: "证书考试取证",
          name4: "/",
          name5: "/",
        },
        {
          name0: "杨菁池",
          name1: "“智能工厂集成技术与应用”新技能项目培训",
          name2: "2021/6/19",
          name3: "证书考试取证",
          name4: "/",
          name5: "/",
        },
        {
          name0: "汪勇",
          name1: "“智能工厂集成技术与应用”新技能项目培训",
          name2: "2021/6/19",
          name3: "证书考试取证",
          name4: "/",
          name5: "/",
        },
        {
          name0: "秦春华",
          name1: "“智能工厂集成技术与应用”新技能项目培训",
          name2: "2021/6/19",
          name3: "证书考试取证",
          name4: "/",
          name5: "/",
        },
        {
          name0: "胡亦超",
          name1: "“智能工厂集成技术与应用”新技能项目培训",
          name2: "2021/6/19",
          name3: "证书考试取证",
          name4: "/",
          name5: "/",
        },
        {
          name0: "许明炜",
          name1: "“智能工厂集成技术与应用”新技能项目培训",
          name2: "2021/6/19",
          name3: "证书考试取证",
          name4: "/",
          name5: "/",
        },
        {
          name0: "赵兵兵",
          name1: "华谊集团数据分析、数据工程培训",
          name2: "2021/7/2",
          name3: "随堂测验",
          name4: "2021/7/2",
          name5: "85",
        },
        {
          name0: "胡亦超",
          name1: "华谊集团数据分析、数据工程培训",
          name2: "2021/7/2",
          name3: "随堂测验",
          name4: "2021/7/2",
          name5: "88",
        },
        {
          name0: "路顺利",
          name1: "华谊集团数据分析、数据工程培训",
          name2: "2021/7/2",
          name3: "随堂测验",
          name4: "2021/7/2",
          name5: "87",
        },
        {
          name0: "王集超",
          name1: "华谊集团数据分析、数据工程培训",
          name2: "2021/7/2",
          name3: "随堂测验",
          name4: "2021/7/2",
          name5: "95",
        },
        {
          name0: "杨菁池",
          name1: "华谊集团数据分析、数据工程培训",
          name2: "2021/7/2",
          name3: "随堂测验",
          name4: "2021/7/2",
          name5: "89",
        },
        {
          name0: "汪勇",
          name1: "华谊集团数据分析、数据工程培训",
          name2: "2021/7/2",
          name3: "随堂测验",
          name4: "2021/7/2",
          name5: "90",
        },
        {
          name0: "马振轲",
          name1: "华谊集团数据分析、数据工程培训",
          name2: "2021/7/2",
          name3: "随堂测验",
          name4: "2021/7/2",
          name5: "85",
        },
        {
          name0: "陈文良",
          name1: "华谊集团数据分析、数据工程培训",
          name2: "2021/7/2",
          name3: "随堂测验",
          name4: "2021/7/2",
          name5: "88",
        },
        {
          name0: "张健",
          name1: "华谊集团数据分析、数据工程培训",
          name2: "2021/7/2",
          name3: "随堂测验",
          name4: "2021/7/2",
          name5: "90",
        },
        {
          name0: "谈金辉",
          name1: "华谊集团数据分析、数据工程培训",
          name2: "2021/7/2",
          name3: "随堂测验",
          name4: "2021/7/2",
          name5: "87",
        },
        {
          name0: "朱铭燕",
          name1: "华谊集团数据分析、数据工程培训",
          name2: "2021/7/2",
          name3: "随堂测验",
          name4: "2021/7/2",
          name5: "92",
        },
        {
          name0: "赵倩",
          name1: "华谊集团数据分析、数据工程培训",
          name2: "2021/7/2",
          name3: "随堂测验",
          name4: "2021/7/2",
          name5: "94",
        },
        {
          name0: "王集超",
          name1: "工业控制系统网络安全培训",
          name2: "2021/10/27",
          name3: "线上考试",
          name4: "2021/10/28",
          name5: "90",
        },
        {
          name0: "徐齐田",
          name1: "工业控制系统网络安全培训",
          name2: "2021/10/27",
          name3: "线上考试",
          name4: "2021/10/28",
          name5: "90",
        },
        {
          name0: "杨菁池",
          name1: "工业控制系统网络安全培训",
          name2: "2021/10/27",
          name3: "线上考试",
          name4: "2021/10/28",
          name5: "85",
        },
        {
          name0: "汪勇",
          name1: "工业控制系统网络安全培训",
          name2: "2021/10/27",
          name3: "线上考试",
          name4: "2021/10/28",
          name5: "95",
        },
        {
          name0: "谈金辉",
          name1: "工业控制系统网络安全培训",
          name2: "2021/10/27",
          name3: "线上考试",
          name4: "2021/10/28",
          name5: "80",
        },
        {
          name0: "王集超",
          name1: "华谊集团信息安全意识培训",
          name2: "2021/10/28",
          name3: "线上考试",
          name4: "2021/10/28",
          name5: "90",
        },
        {
          name0: "徐齐田",
          name1: "华谊集团信息安全意识培训",
          name2: "2021/10/28",
          name3: "线上考试",
          name4: "2021/10/28",
          name5: "95",
        },
        {
          name0: "杨菁池",
          name1: "华谊集团信息安全意识培训",
          name2: "2021/10/28",
          name3: "线上考试",
          name4: "2021/10/28",
          name5: "89",
        },
        {
          name0: "汪勇",
          name1: "华谊集团信息安全意识培训",
          name2: "2021/10/28",
          name3: "线上考试",
          name4: "2021/10/28",
          name5: "88",
        },
        {
          name0: "曹嘉文",
          name1: "华谊集团信息安全意识培训",
          name2: "2021/10/28",
          name3: "线上考试",
          name4: "2021/10/28",
          name5: "90",
        },
        {
          name0: "金涛",
          name1: "华谊集团信息安全意识培训",
          name2: "2021/10/28",
          name3: "线上考试",
          name4: "2021/10/28",
          name5: "81",
        },
        {
          name0: "蒋庆智",
          name1: "华谊集团信息安全意识培训",
          name2: "2021/10/28",
          name3: "线上考试",
          name4: "2021/10/28",
          name5: "82",
        },
        {
          name0: "瞿红",
          name1: "华谊集团信息安全意识培训",
          name2: "2021/10/28",
          name3: "线上考试",
          name4: "2021/10/28",
          name5: "85",
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
    handleEdit(row, i) {
      const link = document.createElement("a");
      link.style.display = "none";
      if (i >= 0 && i < 10) {
        link.href = "../../../static/ks/0.docx";
        link.setAttribute("download", "培训通知.docx");
      }
      if (i >= 10 && i < 20) {
        link.href = "../../../static/ks/1.pdf";
        link.setAttribute("download", "试卷1.pdf");
      }
      if (i >= 20 && i < 30) {
        link.href = "../../../static/ks/2.pdf";
        link.setAttribute("download", "试卷2.pdf");
      }
      if (i >= 30) {
        link.href = "../../../static/ks/3.png";
        link.setAttribute("download", "网络安全知识竞赛截图.PNG");
      }

      document.body.appendChild(link);
      link.click();
    },
    handleSearch() {
      this.tableData = this.saveData.filter((item) => {
        let nameKey = "name0";
        let contentKey = "name0";
        let dateKey = "startDate1";

        let nameIn = this.searchForm[nameKey]
          ? item[nameKey].indexOf(this.searchForm[nameKey]) >= 0
          : true;
        let contentIn = this.searchForm[contentKey]
          ? item[contentKey].indexOf(this.searchForm[contentKey]) >= 0
          : true;

        let sDate = this.searchForm[dateKey][0];
        let eDate = this.searchForm[dateKey][1];

        console.log(sDate);

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
        planName: "",
        content: "",
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
</style>