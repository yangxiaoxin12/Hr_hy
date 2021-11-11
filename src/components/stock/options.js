export default  {
  tooltip: {
    trigger: 'axis',
    formatter: function(params) {
      let html = `<div style='width: 160px;'><div style="color: #8c8c8c;text-align: left; padding-left: 10px;">${params[0].axisValue}</div>`;
      params.forEach(v => {
        html += `<div style='display: flex;align-items: center;'>
                  <div style='width: 120px;text-align: left;margin: 0 10px;color: #8c8c8c;'>${v.seriesName}</div>
                  <div style='color: #8c8c8c;'>${v.value}</div>
                </div>`
        if(v.data.c) {
          html += `<div style='display: flex;align-items: center;'>
                    <div style='width: 120px;text-align: left;margin: 0 10px;color: #8c8c8c;'>日用量</div>
                    <div style='color: #8c8c8c;'>${v.data.c}</div>
                  </div>`
        }
        if(v.data.d) {
          html += `<div style='display: flex;align-items: center;'>
                    <div style='width: 120px;text-align: left;margin: 0 10px;color: #8c8c8c;'>日到货量</div>
                    <div style='color: #8c8c8c;'>${v.data.d}</div>
                  </div>`
        }
        if(v.data.e) {
          html += `<div style='display: flex;align-items: center;'>
                    <div style='width: 120px;text-align: left;margin: 0 10px;color: #8c8c8c;'>日到货量</div>
                    <div style='color: #8c8c8c;'>${v.data.e}</div>
                  </div>`
        }
      })
      html += `</div>`
      return html
},
    backgroundColor: '#ffffff',
    textStyle: {
      color: '#000000',
    },
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: { containLabel: true, top: 40, right: 30, bottom: 20, left: 10 },
  color: ['#6d96f2'],
  xAxis: [
    {
      type: 'category',
      axisTick: { show: true },
      axisLabel: { color: '#8c8c8c' },
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        color: '#8c8c8c'
      },
    }
  ],
  series: [
    {
      name: '当日库存',
      type: 'bar',
      barWidth: 18,
      barGap: 0,
      emphasis: {
        focus: 'series'
      },
      markLine: {
        lineStyle: {
          color: '#DC143C'
        },
        data: [
          {yAxis: 500},
          {yAxis: 500},
        ]
      }
    }

  ]
}
