<script setup lang="ts">
import * as echarts from 'echarts';
import {onMounted} from "vue";

onMounted(() => {
  initRose()
})

function initRose() {
  type EChartsOption = echarts.EChartsOption;

  let chartDom = document.getElementById('rose')!;
  let myChart = echarts.init(chartDom);
  let option: EChartsOption;

  // 玫瑰图配置项
  option = {
    title: {
      text: '各区县种植面积分别',
      //top: 5,
      left: 15,
      textStyle: {
        color: 'white',
      }
    },
    toolbox: {
      show: true,
      feature: {
        mark: {show: true},
        dataView: {show: true, readOnly: false},
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [15, 100],  // 第一个参数是内心圆半径，第二个是外心圆半径
        center: ['50%', '55%'], // 第一个参数是图中心距离左边框的边距，第二个是上边框
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: [
          {name: '信丰县', value: 875,},
          {name: '大余县', value: 765,},
          {name: '瑞金市', value: 920,},
          {name: '龙南市', value: 1212,},
          {name: '寻乌县', value: 1098,},
          {name: '南康区', value: 654,},
          {name: '崇义县', value: 387,},
        ]
      }
    ]
  };

  option && myChart.setOption(option);
}

</script>

<template>
  <div id="rose"></div>
</template>

<style scoped>
#rose {
  width: 100%;
  height: 558px;
}
</style>