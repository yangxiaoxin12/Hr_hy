<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="2">
        <el-select v-model="month" filterable placeholder="请选择" @change="handleMonthChange">
          <el-option
            v-for="item in monthOptions"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="22">

      </el-col>
    </el-row>
    <div class="chart" ref="chart"></div>

    <el-dialog
      title="详情"
      :visible.sync="dialogVisible"
      width="300px"
      :before-close="handleClose"
      style="z-index: 1000">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="日期">
          <el-input v-model="form.a"></el-input>
        </el-form-item>
        <el-form-item label="当日库存">
          <el-input v-model="form.value"></el-input>
        </el-form-item>
        <el-form-item label="日用量" v-if="form.c">
          <el-input v-model="form.c"></el-input>
        </el-form-item>
        <el-form-item label="日到货量" v-if="form.d">
          <el-input v-model="form.d"></el-input>
        </el-form-item>
        <el-form-item label="订单数量" v-if="form.e">
          <el-input v-model="form.e"></el-input>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import echarts from 'echarts'
import option from './options'
import { data8, data9 } from './data'

export default {
  name: 'index',
  data() {
    return {
      option: undefined,
      month: 8,
      monthOptions: [
        {id: 8, name: '2021年8月'},
        {id: 9, name: '2021年9月'}
      ],
      dialogVisible: false,
      form: {}
    }
  },
  watch: {
    option: {
      handler: function(newVal, oldVal){
        console.log(newVal)
        this.$nextTick(() => {
          this.echarts.setOption(newVal, true)
        })
      },
      deep: true
    }
  },
  mounted () {
    this.echarts = echarts.init(this.$refs['chart'])

    let vm = this
    this.echarts.on('click', function (params) {
      console.log('---图表点击---', params.data);
        vm.$nextTick(() => {
          vm.form = params.data
          vm.dialogVisible = true
        })

    })

    let xData = data8.map(item => {
      let temp = item.a.substring(item.a.indexOf('月') + 1, item.a.length - 1)
      return '8/' + temp
    })
    option.xAxis[0].data = xData
    option.series[0].data = data8
    option.series[0].markLine.data[0].yAxis = 500
    option.series[0].markLine.data[1].yAxis = 500
    this.option = option
  },
  methods: {
    deepClone(source) {
      const targetObj = source.constructor === Array ? [] : {}
      Object.keys(source).forEach(keys => {
        if (source[keys] && typeof source[keys] === 'object') {
          targetObj[keys] = this.deepClone(source[keys])
        } else {
          targetObj[keys] = source[keys]
        }
      })
      return targetObj
    },
    getDays(month) {
      let thisDate = new Date(new Date().getFullYear(),month,0); //当天数为0 js自动处理为上一月的最后一天
      return thisDate.getDate();
    },
    handleMonthChange(evt) {
      let xData = []
      if(evt === 8) {
        xData = data8.map(item => {
          let temp = item.a.substring(item.a.indexOf('月') + 1, item.a.length - 1)
          return '8/' + temp
        })
        option.series[0].data = data8
        option.series[0].markLine.data[0].yAxis = 500
        option.series[0].markLine.data[1].yAxis = 500
      } else if(evt === 9) {
        xData = data9.map(item => {
          let temp = item.a.substring(item.a.indexOf('月') + 1, item.a.length - 1)
          return '9/' + temp
        })
        option.series[0].data = data9
        option.series[0].markLine.data[0].yAxis = 600
        option.series[0].markLine.data[1].yAxis = 600
      }
      option.xAxis[0].data = xData
      this.option = option
    },
    handleClose() {
      this.dialogVisible = false
      this.form = {}
    }
  }
}
</script>

<style scoped>
.chart{
  width: 100%;
  height: 700px;
}
</style>
