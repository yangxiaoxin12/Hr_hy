<template>
  <div>
    <div class="form-outer">
      <div class="label">岗位：</div>
      <el-input
        class="item"
        v-model="searchForm.content"
        placeholder="请输入岗位名称"
      ></el-input>
      <el-button class="button" @click="handleSearch">查询</el-button>
      <el-button class="button" @click="handleReset">重置</el-button>
      <el-button class="button" type="primary">新增</el-button>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
    >
      <el-table-column
        v-for="(item, index) in tableList"
        :key="index"
        :label="item.label"
        :prop="item.prop"
      ></el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button
            @click="handleClick(scope.row, scope.$index)"
            type="primary"
            size="mini"
            v-if="!scope.row.date"
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
      tableList: [
        {
          label: "部门",
          prop: "date",
        },
        {
          label: "岗位",
          prop: "name",
        },
        {
          label: "下发时间",
          prop: "alias",
        },
        {
          label: "岗位说明书",
          prop: "operator",
        },
      ],
      tableData: [
        {
          id: 1,
          date: "数字化工作室",
          children: [
            {
              id: 11,
              name: "产品经理",
              alias: "2020-12-18",
              operator: "数字化工作室-产品经理-岗位说明书",
            },
            {
              id: 12,
              name: "转译员",
              alias: "2020-12-28",
              operator: "数字化工作室-转译员-岗位说明书",
            },
            {
              id: 13,
              name: "敏捷教练",
              alias: "2020-11-28",
              operator: "数字化工作室-敏捷教练-岗位说明书",
            },
          ],
        },
        {
          id: 2,
          date: "生产管理部",
          children: [
            {
              id: 21,
              name: "生产经理",
              alias: "2020-12-18",
              operator: "生产管理部-生产经理-岗位说明书",
            },
            {
              id: 22,
              name: "经理助理",
              alias: "2020-12-28",
              operator: "生产管理部-经理助理-岗位说明书",
            },
            {
              id: 23,
              name: "仪表技术专家",
              alias: "2020-11-28",
              operator: "生产管理部-仪表技术专家-岗位说明书",
            },
          ],
        },

        {
          id: 3,
          date: "安全环保部 ",
          children: [
            {
              id: 21,
              name: "经理",
              alias: "2020-12-18",
              operator: "安全环保部-经理-岗位说明书",
            },
            {
              id: 22,
              name: "安全环保管理员",
              alias: "2020-12-28",
              operator: "安全环保部-安全环保管理员-岗位说明书",
            },
            {
              id: 23,
              name: "消防队长",
              alias: "2020-11-28",
              operator: "安全环保部-消防队长-岗位说明书",
            },
            {
              id: 24,
              name: "质检中心班长",
              alias: "2020-11-28",
              operator: "安全环保部-质检中心班长-岗位说明书",
            },
          ],
        },
        {
          id: 4,
          date: "研究所 ",
          children: [
            {
              id: 41,
              name: "所长",
              alias: "2020-12-18",
              operator: "研究所-所长-岗位说明书",
            },
            {
              id: 42,
              name: "副所长",
              alias: "2020-12-28",
              operator: "研究所-副所长-岗位说明书",
            },
            {
              id: 43,
              name: "研发技术员",
              alias: "2020-11-28",
              operator: "研究所-研发技术员-岗位说明书",
            },
            {
              id: 44,
              name: "实验员",
              alias: "2020-11-28",
              operator: "研究所-实验员-岗位说明书",
            },
          ],
        },
        {
          id: 5,
          date: "技术部 ",
          children: [
            {
              id: 51,
              name: "经理",
              alias: "2020-12-18",
              operator: "技术部-经理-岗位说明书",
            },
            {
              id: 52,
              name: "副经理",
              alias: "2020-12-28",
              operator: "技术部-副经理-岗位说明书",
            },
            {
              id: 53,
              name: "经理助理",
              alias: "2020-11-28",
              operator: "技术部-经理助理-岗位说明书",
            },
            {
              id: 54,
              name: "实验员",
              alias: "2020-11-28",
              operator: "技术部-实验员-岗位说明书",
            },
          ],
        },
        {
          id: 6,
          date: "发展部 ",
          children: [
            {
              id: 61,
              name: "发展部经理",
              alias: "2020-12-18",
              operator: "发展部-发展部经理-岗位说明书",
            },
            {
              id: 62,
              name: "发展部副经理",
              alias: "2020-12-28",
              operator: "发展部-发展部副经理-岗位说明书",
            },
            {
              id: 63,
              name: "经理助手",
              alias: "2020-11-28",
              operator: "发展部-经理助手-岗位说明书",
            },
          ],
        },
        {
          id: 7,
          date: "人力资源部 ",
          children: [
            {
              id: 71,
              name: "经理",
              alias: "2020-12-18",
              operator: "人力资源部-经理-岗位说明书",
            },
          ],
        },
        {
          id: 8,
          date: "财务部 ",
          children: [
            {
              id: 81,
              name: "经理",
              alias: "2020-12-18",
              operator: "财务部-经理-岗位说明书",
            },
          ],
        },
        {
          id:9,
          date: "纪委 ",
          children: [
            {
              id:91,
              name: "纪检监察干事",
              alias: "2020-12-18",
              operator: "纪委-纪检监察干事-岗位说明书",
            },
          ],
        },
        {
          id:10,
          date: "工会 ",
          children: [
            {
              id:101,
              name: "工会主席",
              alias: "2020-12-18",
              operator: "工会-工会主席-岗位说明书",
            },
            {
              id:102,
              name: "工会干事",
              alias: "2020-12-18",
              operator: "工会-工会干事-岗位说明书",
            },
          ],
        },
        {
          id:11,
          date: "团委 ",
          children: [
            {
              id:111,
              name: "团委书记",
              alias: "2020-12-18",
              operator: "团委-团委书记-岗位说明书",
            },
            {
              id:112,
              name: "团委委员",
              alias: "2020-12-18",
              operator: "团委-团委委员-岗位说明书",
            },
          ],
        },
        {
          id:12,
          date: "党委办公室 ",
          children: [
            {
              id:121,
              name: "党办主任",
              alias: "2020-12-18",
              operator: "党委办公室-党办主任-岗位说明书",
            },
          ],
        },
        {
          id:13,
          date: "组织部 ",
          children: [
            {
              id:131,
              name: "组织部长",
              alias: "2020-12-18",
              operator: "组织部-组织部长-岗位说明书",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    // 保存原始数据
    this.saveData = JSON.parse(JSON.stringify(this.tableData));
  },
  methods: {
    handleClick(row, i) {
      const link = document.createElement("a");
      link.style.display = "none";
      if (i == 1) {
        link.href = "../../../static/file/0.docx";
        link.setAttribute("download", "数字化工作室—产品经理—岗位说明书.docx");
      }
      if (i == 2) {
        link.href = "../../../static/file/1.docx";
        link.setAttribute("download", "数字化工作室-转译员-岗位说明书.docx");
      }
      if (i == 5) {
        link.href = "../../../static/file/2.docx";
        link.setAttribute("download", "生产管理部-经理-岗位说明书.docx");
      }
      if (i == 10) {
        link.href = "../../../static/file/3.docx";
        link.setAttribute(
          "download",
          "安全环保部-安全环保管理-岗位说明书.docx"
        );
      }
      if (i == 24) {
        link.href = "../../../static/file/5.docx";
        link.setAttribute("download", "发展部-经理-岗位说明书.docx");
      }
      if (i == 25) {
        link.href = "../../../static/file/4.docx";
        link.setAttribute("download", "发展部-副经理-岗位说明书.docx");
      }
      if (i == 26) {
        link.href = "../../../static/file/6.docx";
        link.setAttribute("download", "发展部-经理助理-岗位说明书.docx");
      }
      if (i == 28) {
        link.href = "../../../static/file/7.docx";
        link.setAttribute("download", "人力资源部-经理-岗位说明书.docx");
      }

      document.body.appendChild(link);
      link.click();

      // document.body.appendChild(link);
      // link.click();
    },
    handleSearch() {
      this.tableData = this.saveData.filter((item) => {
        let nameKey = "planName";
        let contentKey = "content";
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