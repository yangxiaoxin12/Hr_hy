<template>
  <div>
    <div class="header">
      <div class="header-item ra">
        <div class="info">
          <div class="num">0人</div>
          <img src="./入职.svg" class="icon" />
        </div>
        <div class="status red">待入职</div>
      </div>
      <div class="header-item ra">
        <div class="info">
          <div class="num">7人</div>
          <img src="./转正.svg" class="icon" />
        </div>
        <div class="status purple">待转正</div>
      </div>
      <div class="header-item ra">
        <div class="info">
          <div class="num">3人</div>
          <img src="./调动.svg" class="icon" />
        </div>
        <div class="status blue">待调动</div>
      </div>
      <div class="header-item ra">
        <div class="info">
          <div class="num">2人</div>
          <img src="./离职.svg" class="icon" />
        </div>
        <div class="status deep">待离职</div>
      </div>
    </div>
    <div class="work-outer">
      <div class="work-item ra" id="myChart"></div>
      <div class="work-item ra"></div>
      <div class="work-item ra"></div>
      <div class="work-item ra"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.drawPic1();
  },
  methods: {
    drawPic1() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      });
    },
    drawPic2() {},
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
  .work-item {
    margin-top: 20px;
    width: calc(50% - 10px);
    height: 50%;
  }
}
</style>