<template>
  <div >
    <div class="header">
      <div class="header-item ra">
        <div class="info">
          <div class="num">235人</div>
          <img src="./入职.svg" class="icon" />
        </div>
        <div class="status red">待入职</div>
      </div>
      <div class="header-item ra">
        <div class="info">
          <div class="num">219人</div>
          <img src="./转正.svg" class="icon" />
        </div>
        <div class="status purple">已转正</div>
      </div>
      <div class="header-item ra">
        <div class="info">
          <div class="num">310人</div>
          <img src="./调动.svg" class="icon" />
        </div>
        <div class="status blue">待调动</div>
      </div>
      <div class="header-item ra">
        <div class="info">
          <div class="num">274人</div>
          <img src="./离职.svg" class="icon" />
        </div>
        <div class="status deep">待离职</div>
      </div>
    </div>
    <div class="work-outer">
      <div class="work-row">
        <div class="work-item ra">
          <div class="title">人员构成分析</div>
          <div id="myChart" style="height: 100%"></div>
        </div>
        <div class="work-item ra">
          <div class="title">薪酬统计分析</div>
          <div id="myChart2" style="height: 100%"></div>
        </div>
      </div>
      <div class="work-row">
        <div class="work-item ra" style="height: auto">
          <el-calendar style="height: 100%"> </el-calendar>
        </div>
        <div class="work-item ra" style="height: 300px">
          <div class="title">快捷入口</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.drawPic1();
    this.drawPic2();
  },
  methods: {
    drawPic1() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        series: [
          {
            name: "访问来源",
            type: "pie", // 设置图表类型为饼图
            radius: "55%", // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 55% 长度。
            data: [
              // 数据数组，name 为数据项名称，value 为数据项值
              { value: 235, name: "已入职235人" },
              { value: 274, name: "待离职274人" },
              { value: 310, name: "待调动310人" },
              { value: 335, name: "试用期335人" },
            ],
          },
        ],
      });
    },
    drawPic2() {
      let manuChart = this.$echarts.init(document.getElementById("myChart2"));
      const option = {
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "value",
          min: 0,
          max: 40,
          axisLabel: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: "category",
          inverse: true,
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          data: [
            "总经理",
            "经理",
            "技术总监",
            "财务总监",
            "市场经理",
            "董事会秘书",
            "采购员",
          ],
        },
        series: [
          {
            name: "销量",
            type: "bar",
            barWidth: 20,
            data: [35, 25, 28, 26, 8, 10, 5, 5, 3, 3, 3, 2, 2, 2, 1, 1, 1, 1],
            label: {
              show: true,
              formatter: "{c}k", //显示数据带上百分比
              position: "right",
            },
          },
        ],
        grid: {
          x: "20%",
          y: 0,
          x2: 0,
          y2: 0,
        },
        // dataZoom: {
        //   yAxisIndex: [0],
        //   type: "inside",
        //   start: 0,
        // //   end: 30,
        //   zoomLock: true,
        // },
      };
      manuChart.setOption(option);
    },
  },
};
</script>

<style scoped lang="less">
div {
  text-align: left;
}

.ra {
  border-radius: 8px;
  border: 1px solid #f0f0f0;
}

.header {
  display: flex;
  justify-content: space-between;
  .header-item {
    box-sizing: border-box;
    width: 24%;
    height: 100px;
    margin-bottom: 10rpx;
    overflow: hidden;
    .info {
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      .num {
        font-size: 32px;
        font-weight: bolder;
      }
      .icon {
        width: 48px;
        height: 48px;
      }
    }
    .status {
      width: 100%;
      line-height: 30px;
      color: #ffffff;
      text-align: right;
      padding-right: 20px;
      box-sizing: border-box;
    }
    .red {
      background: #d81e06;
    }
    .blue {
      background: #1296db;
    }
    .purple {
      background: #d4237a;
    }
    .deep {
      background: #13227a;
    }
  }
}
.work-outer {
  width: 100%;
  height: 760px;
  display: flex;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: wrap;
  .work-row {
    margin-top: 20px;
    width: calc(50% - 10px);
  }
  .work-item {
    margin-top: 20px;
    width: 100%;
    height: 500px;
    position: relative;

    .title {
      position: absolute;
      left: 10px;
      top: 10px;
    }
  }
}
</style>