<template>
  <div class="zhanghu">
    <div class="main-header">
      <el-form
        v-show="isShow"
        class="demo-form-inline"
        :inline="true"
        :model="cashForm"
        label-width="100px"
      >
        <el-form-item label="活动名称:">
          <el-input
            v-model="cashForm.activityName"
            placeholder="请输入"
          ></el-input>
        </el-form-item>
        <el-form-item label="活动类型:">
          <!-- <el-input v-model="cashForm.leixing" placeholder="请输入"></el-input> -->
          <el-select v-model="cashForm.leixing" placeholder="活动类型">
            <el-option label="投票" value="6"></el-option>
            <el-option label="问卷" value="7"></el-option>
            <el-option label="点赞" value="8"></el-option>
            <el-option label="签到" value="9"></el-option>
            <el-option label="抽奖" value="10"></el-option>
            <el-option label="随机码" value="11"></el-option>
            <el-option label="报名" value="12"></el-option>
            <el-option label="领红包" value="13"></el-option>
            <el-option label="积分" value="14"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="width:200px!important">
          <el-button class="searchCss" type="success">查询</el-button>
          <el-button class="addThemeCss">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="content">
      <div id="tab">
        <el-table
          v-show="isShow"
          :data="tableData"
          border
          stripe
          style="width: 100%"
        >
          <el-table-column
            align="center"
            prop="activityId"
            label="主题活动"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="activityName"
            label="活动名称"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="type"
            label="类型"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="startime"
            label="开始时间"
          ></el-table-column>
          <el-table-column
            align="center"
            prop="endtime"
            label="结束时间"
          ></el-table-column>
          <el-table-column fixed="right" label="操作" width="130">
            <template slot-scope="scope">
              <el-button @click="xiangqing" style="fontSize:12px;" type="text"
                >详情</el-button
              >
              <el-button style="fontSize:12px;" type="text">导出详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div>
        <button v-if="isShow == true" class="butn" @click="tubiao">
          查看图表
        </button>
        <button v-if="isShow == false" class="butn" @click="tu">
          查看详情
        </button>
      </div>
      <div
        v-show="isxian"
        id="echartContainer"
        style="width:1200px; height:700px"
      ></div>
    </div>
    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />
  </div>
</template>

<script>
import Pagination from "@/components/Pagination"; // secondary package based on el-pagination

const echarts = require("echarts");
export default {
  activityName: "",

  components: {
    Pagination
  },

  data() {
    return {
        total: 1,
      listQuery: {
        page: 1,
        limit: 10,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: "+No"
      },
      isShow: true,
      isxian: false,
      isZu: [],
      tableData: [
        {
          activityId: "挚爱漫威", //活动名称
          activityName: "电影票", //奖项名称
          type: "test123", //用户
          startime: "2020-03-20  19:20", //手机号
          endtime: "2020-03-20  19:20" //微信号
          //中间时间
          //是否发放
        },
        {
          activityId: "我是戏剧王",
          activityName: "笔记本电脑",
          type: "test123",
          startime: "2020-03-20  19:20",
          endtime: "2020-03-20  19:20"
        },
        {
          activityId: "谁虎谁上",
          activityName: "神舟模型",
          type: "test12321",
          startime: "2020-03-20  19:20",
          endtime: "2020-03-20  19:20"
        },
        {
          activityId: "看谁跑的快",
          activityName: "女朋友",
          type: "test1123",
          startime: "2020-03-20  19:20",
          endtime: "2020-03-20  19:20"
        }
      ],
      //新增和编辑弹框标题
      cashForm: {
        activityName: "",
        leixing: ""
      }
    };
  },

  watch: {},

  methods: {
    getList(){},
    xiangqing() {
      this.$router.push("/participation");
    },
    tubiao() {
      this.isShow = false;
      this.isxian = true;
    },
    tu() {
      this.isShow = true;
      this.isxian = false;
    },
    ha() {
      let myChart = echarts.init(document.getElementById("echartContainer"));
      this.tableData.forEach(item => {
        this.isZu.push(item.activityId);
        console.log(item.activityId);
        console.log(this.isZu);
      });
      myChart.setOption({
        xAxis: {
          data: this.isZu
        },
        title: {
          show: true, //显示折线图
          text: "", //标题文字
          link: "http://echarts.baidu.com/option.html#title.link", //主标题超文本链接,
          // subtext: "熟悉title的配置项", //副标题
          left: 50, //配置title的位置
          padding: [5, 20, 5, 10] //title的padding值
        },
        toolbox: {
          show: true, //是否显示工具栏组件
          orient: "vertical", //工具栏icon的布局朝向
          itemSize: 18, //工具栏icon的大小
          itemGap: 20, //item之间的间距
          right: 20, //toolbox的定位位置
          feature: {
            saveAsImage: { show: true }, //导出图片
            dataView: { show: true }, //数据视图
            magicType: {
              //动态类型切换
              type: ["line", "bar"]
            },
            dataZoom: { show: true }, //数据区域缩放
            restore: { show: true } //重置
          }
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "line",
            data: [10, 20, 36, 10],
            itemStyle: {
              normal: {
                color: "hotpink"
              }
            }
          }
        ]
      });
    }
  },

  mounted() {
    //基于准备好的dom, 初始化echarts实例
    this.ha();
  },

  created() {}
};
</script>
<style lang="" scoped>
.demo-form-inline {
  margin-left: -270px;
}
.searchCss {
  background: rgba(10, 171, 149, 1);
}
.butn {
  margin-top: 10px;
  border-radius: 5px;
}
.main-header {
  width: 1150px;
  height: 70px;
  background-color: #fff;
  padding: 0px;
  text-align: left;
  font-size: 14px;
  color: rgba(60, 67, 83, 1);
  margin-top: 15px;
  box-sizing: border-box;
  overflow: hidden;
}
.content {
  width: 1150px;
  height: 600px;
  margin-top: 20px;
  margin-bottom: 70px;
}
</style>
