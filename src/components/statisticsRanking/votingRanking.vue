<template>
  <div class="votingDetails">
    <div style="width:100%;">搜索条件</div>
    <div class="searchBar">
      <span>类型:</span>
      <el-select v-model="options[0].value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <span>名称:</span>
      <el-input v-model="inputValue" placeholder="请输入内容"></el-input>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>
    <!-- <div id="myChart-voting" :style="{ width: '100%', height: '600px' }"></div> -->
    <div id="myChart-voting" style="width:100%;height:400px"></div>

  </div>
</template>
<script>
import bus from "../common/bus";
import { mapState } from "vuex";
    export default {
        data() {
            return {
                inputValue: "",
                options: [{
                    value: "选项1",
                    label: "全部"
                }, {
                    value: "选项2",
                    label: "选项一"
                }],
                routers: ""
            }
        },
        mounted() {
            this.routers = this.$route.name
            this.drawLine()
        },
        watch: {
            // routers:function(newVal,oldVal){
            //     console.log("HHHHHHHHHHHHHh")
            //     this.drawLine()
            // }
        },
        methods: {
            // 条形图
            drawLine() {
                var echarts = require("echarts");

                this.$nextTick(function(){
                     const el = document.getElementById("myChart-voting")
                //      console.log(el)
                // console.log(el.offsetHeight)
                // console.log(el.offsetWidth)
                })

                const el = document.getElementById("myChart-voting")

                var myChart = echarts.init(el);
                
                myChart.setOption({
                    tooltip: { // 鼠标经过提示
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross',
                            label: {
                                backgroundColor: '#008acd'
                            }
                        }
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
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [{
                        type: "category",
                        data: ["投票", "测试投票", "测试181205投过票", "投票测试", "测试增值投票", "投票类型"],
                        axisLine:{
                            lineStyle:{
                                color:'#3fa7d9',
                                // width:8,//这里是为了突出显示加上的
                            }
                        }
                    }],
                    yAxis: [{
                        name: '票数（票）',
                        type: "value",
                        axisLine:{
                            lineStyle:{
                                color:'#3fa7d9',
                                // width:8,//这里是为了突出显示加上的
                            }
                        } 
                    }],
                    series: [{
                        data: [120, 195, 150, 80, 70, 110],
                        type: "bar",
                        smooth: true,
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
                    }],
                });
                // console.log(myChart.getOption())
            }
        }
    };
</script>
