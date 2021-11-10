<template>
  <div>
    <div id="echartContainer" style="width:1200px; height:700px"></div>
  </div>
</template>
        
<script>
const echarts = require("echarts");
export default {
  name: "line-chart",
  data() {
    return {};
  },
  methods:{

  

  },
  mounted() {
    //基于准备好的dom, 初始化echarts实例
    let myChart = echarts.init(document.getElementById("echartContainer"));
    myChart.setOption({
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
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
          data: [10, 20, 36, 10, 10, 20],
          itemStyle: {
            normal: {
              color: "hotpink"
            }
          }
        }
      ]
    });
  }
};
</script>
        
<style scoped>
</style>