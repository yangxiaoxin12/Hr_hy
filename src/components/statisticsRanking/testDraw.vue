<template>
  <div class="votingDetails">
    <div id="myChart" :style="{ width: '100%', height: '600px' }"></div>
    <div class="testTable">
      <div>选项汇总</div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" :index="indexMethod"> </el-table-column>
        <el-table-column prop="name" label="名称" width="180">
        </el-table-column>
        <el-table-column prop="totalVotes" label="总票数" width="180">
        </el-table-column>
        <el-table-column prop="generalTicket" label="其中：普票"> </el-table-column>
        <el-table-column prop="valueAddedTicket" label="其中：增值票"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'testDraw',
  data () {
    return {
      tableData: [
        {
          name: '一等奖',
          totalVotes: '100',
          generalTicket: '40',
          valueAddedTicket: '60'
        },
        {
          name: '二等奖',
          totalVotes: '50',
          generalTicket: '20',
          valueAddedTicket: '30'
        }
      ]
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {
    // 序号显示
    indexMethod (index) {
      return index + 1
    },
    // 条形图
    drawLine () {
      console.log(document.querySelector('#myChart'))
      var myChart = this.$echarts.init(document.querySelector('#myChart'))
      myChart.setOption({
        // backgroundColor: '#394056',
        title: {
          text: '测试抽奖'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['销量']
        },
        brush: {
          toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
          xAxisIndex: 0
        },
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: 'none'
            },
            mark: true,
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: {},
            markline: true
          }
        },
        calculable: true,
        xAxis: {
          type: 'category',
          axisLine:{
            lineStyle:{
                color:'#3fa7d9',
                // width:8,//这里是为了突出显示加上的
            }
          },
          data: [
            '衬衫',
            '羊毛衫',
            '雪纺衫',
            '裤子',
            '高跟鞋',
            '袜子',
            '华为',
            '中兴',
            '李白',
            '中国',
            '成都',
            '北京',
            '山西',
            '湖北'
          ]
        },
        yAxis: [
          {
            type: 'value',
            axisLine:{
              lineStyle:{
                  color:'#3fa7d9',
                  // width:8,//这里是为了突出显示加上的
              }
            } 
          }
        ],
        series: [
          {
            name: '销量',
            type: 'bar',
            smooth: true,
            data: [40, 20, 36, 10, 100, 20, 46, 77, 66, 56, 43, 27, 55, 57],
            areaStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(219, 50, 51, 0.3)'
                }, {
                  offset: 0.8,
                  color: 'rgba(219, 50, 51, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
              }
            },
            itemStyle: {
              normal: {
                color: 'rgb(219,50,51)',
                borderColor: 'rgba(219,50,51,0.2)',
                borderWidth: 5

              }
            },
            
            // itemStyle: {
            //   normal: {
            //     color: '#3888fa',
            //     lineStyle: {
            //       color: '#3888fa',
            //       width: 2
            //     },
            //     areaStyle: {
            //       color: '#3888fa'
            //     }
            //   }
            // },
          }
        ]
      })
    }
  }
}
</script>
