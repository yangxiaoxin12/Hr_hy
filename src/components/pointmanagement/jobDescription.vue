<!--
  功能：调用日志
  作者：yxx
  时间：2021年08月20日 16:53:44
  版本：v1.0
-->
<template>
  <div class="div3">
    <el-container>
      <el-main style="width: 100%">
        <el-table
          class="abc"
          highlight-current-row
          border
          :fit="true"
          size="mini"
          style="width: 100%"
          max-height="720"
          :data="fileLog"
        >
          <el-table-column align="center" prop="num" label="序号">
          </el-table-column>
          <el-table-column align="center" prop="time" label="对比日期">
          </el-table-column>
          <el-table-column align="center" label="操作">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row, scope.$index)"
                type="text"
                size="small"
                >下载</el-button
              >
                          </template
            >
                      </el-table-column
          >
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  // 组件名称
  name: "demo",
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    return {
      dialogVisible: false,
      currentPage: 1, //初始页
      pagesize: 10, //    每页的数据
      fileLog: [
        {
          num: 1,
          time: "2021-09-25",
        },
        {
          num: 2,
          time: "2021-10-25",
        },
      ],
      fileName: "",
      totals: 0,
      beginTime: "",
      endTime: "",
    };
  },
  // 计算属性
  created() {
    // this.getShu();
  },
  // 侦听器
  watch: {},
  // 组件方法
  methods: {},
  // 以下是生命周期钩子   注：没用到的钩子请自行删除
  /**
   * 在实例初始化之后，组件属性计算之前，如data属性等
   */
  beforeCreate() {},
};
</script> 

<style lang="less" scoped>
.div3 {
  width: 1500px;
  height: 800px;
  // border: 2px solid gray;
  text-align: center;
  margin: 0 auto;
  font-size: 16px;
  margin-top: 30px;
}
</style>
