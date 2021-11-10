<template>
  <div>
    <el-table
      border
      :data="tableData"
      style="width: 100%"
      :span-method="objectSpanMethod"
    >
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column align="center" prop="planName" label="部门" width="150">
      </el-table-column>
      <el-table-column
        align="center"
        prop="content"
        label="部门编制"
        width="150"
      >
      </el-table-column>
      <el-table-column prop="date" label="岗位名称" width="200">
      </el-table-column>
      <el-table-column prop="process" label="岗位定编" width="150">
      </el-table-column>
      <el-table-column prop="type" label="预算人数" width="150">
      </el-table-column>
      <el-table-column prop="dutyName" label="现有人数" width="120">
      </el-table-column>
      <el-table-column prop="startDate1" label="缺编人数" width="120">
      </el-table-column>
      <el-table-column prop="startDate1" label="外聘人数" width="120">
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
          planName: "综合办公室",
          content: "12",
          date: "办公室副主任",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "综合办公室",
          content: "12",
          date: "市区秘书",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "综合办公室",
          content: "12",
          date: "行政管理",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "综合办公室",
          content: "12",
          date: "法务管理",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "综合办公室",
          content: "12",
          date: "工会干事",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "综合办公室",
          content: "12",
          date: "宣传干事",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "综合办公室",
          content: "12",
          date: "内控管理",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "综合办公室",
          content: "12",
          date: "纪检监察干事",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "综合办公室",
          content: "12",
          date: "秘书和后勤",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "综合办公室",
          content: "12",
          date: "IT信息管理",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "综合办公室",
          content: "12",
          date: "档案管理",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "综合办公室",
          content: "12",
          date: "办公室主任",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "产品研发部",
          content: "12",
          date: "办公室副主任",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "产品研发部",
          content: "12",
          date: "市区秘书",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "产品研发部",
          content: "12",
          date: "行政管理",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "产品研发部",
          content: "12",
          date: "法务管理",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "产品研发部",
          content: "12",
          date: "工会干事",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "产品研发部",
          content: "12",
          date: "宣传干事",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "产品研发部",
          content: "12",
          date: "内控管理",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "产品研发部",
          content: "12",
          date: "纪检监察干事",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "产品研发部",
          content: "12",
          date: "秘书和后勤",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "产品研发部",
          content: "12",
          date: "IT信息管理",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "产品研发部",
          content: "12",
          date: "档案管理",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "产品研发部",
          content: "12",
          date: "办公室主任",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "财务部",
          content: "12",
          date: "办公室副主任",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "财务部",
          content: "12",
          date: "市区秘书",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "财务部",
          content: "12",
          date: "行政管理",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "财务部",
          content: "12",
          date: "法务管理",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "财务部",
          content: "12",
          date: "工会干事",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "财务部",
          content: "12",
          date: "宣传干事",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "财务部",
          content: "12",
          date: "内控管理",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "财务部",
          content: "12",
          date: "纪检监察干事",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "财务部",
          content: "12",
          date: "秘书和后勤",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "财务部",
          content: "12",
          date: "IT信息管理",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "财务部",
          content: "12",
          date: "档案管理",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
        {
          planName: "财务部",
          content: "12",
          date: "办公室主任",
          dutyName: "1",
          startDate1: "1",
          endDate1: "1",
          startDate2: "2020-1-15",
          endDate2: "2021-1-14",
          process: "1",
          type: "1",
        },
      ],
      saveData: [],
    };
  },
  mounted() {
    // 保存原始数据
    this.saveData = JSON.parse(JSON.stringify(this.tableData));
    this.tableData.forEach((item) => {
      item.startDate1 = 0;
    });
  },
  methods: {
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex == 1 || columnIndex == 2) {
        if (rowIndex % 12 === 0) {
          return {
            rowspan: 12,
            colspan: 1,
          };
        } else {
          return {
            rowspan: 0,
            colspan: 0,
          };
        }
      }
    },
    handleEdit(row) {
      console.log(row);
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