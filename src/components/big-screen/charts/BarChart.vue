<script setup lang="ts">
import * as echarts from 'echarts';
import {onMounted} from "vue";

onMounted(() => {
  initBar()
})

const initBar = () => {
  type EChartsOption = echarts.EChartsOption;

  let chartDom = document.getElementById('bar')!;
  let myChart = echarts.init(chartDom);
  let option: EChartsOption;


  option = {
    //  标题配置
    title: {
      text: '果业种植产量统计',
      top: 15,
      left: 15,
      textStyle: {
        color: 'white',
      }
    },
    // x轴配置
    xAxis: {
      type: 'value',
      axisLabel:{
        color: 'white',
      }
    },
    // y轴配置
    yAxis: {
      type: 'category',
      axisLabel:{
        color: 'white',
      },
      data: ['脐橙', '柚子', '蜜桔', '桔柚', '鹰嘴桃'].reverse()
    },
    // 图表边距配置
    grid: {
      left: '15%'
    },
    // 工具箱配置
    toolbox:{
      top: 12,
      right: 15,
      show: true,
      feature: {
        saveAsImage: {show: true},
        dataView: { show: true, readOnly: true },
        restore: {show: true},
        magicType: { show: true, type: ['line', 'bar'] },
      }
    },

    // 数据项配置
    series: [
      {
        data: [
          {value: 1752, itemStyle: {color: 'pink', borderRadius: [0, 25, 25 ,0]}},
          {value: 1125, itemStyle: {color: 'yellow', borderRadius: [0, 25, 25 ,0]}},
          {value: 876, itemStyle: {color: 'lightgreen', borderRadius: [0, 25, 25 ,0]}},
          {value: 766, itemStyle: {color: 'gold', borderRadius: [0, 25, 25 ,0]}},
          {value: 423, itemStyle: {color: 'lightsalmon', borderRadius: [0, 25, 25 ,0]}}
        ].reverse(),
        type: 'bar',
        barWidth: 15,  // 每个柱子的宽度
      },

    ]
  };

  option && myChart.setOption(option);
}

</script>

<template>

  <div id="bar" style="width: 100%;height:368px"></div>

</template>

<style scoped>
#bar{
  color: lightsalmon;
}
</style>