<script setup lang="ts">
import * as echarts from 'echarts';
import {onMounted} from "vue";
import GanzhouMap from '../../../assets/geo/Ganzhou.json'

onMounted(() => {
  initMap()
})

const initMap = () =>{
  type EChartsOption = echarts.EChartsOption;
  let chartDom = document.getElementById('map')!;
  // // 读取地图
  echarts.registerMap('GanzhouMap', GanzhouMap as any)
  let myChart = echarts.init(chartDom);
  let option: EChartsOption;

  option = {
    geo: {
      type: 'map',  // 标注图表类型为地图
      map: 'GanzhouMap',  // 上面注册的地图叫什么这里就写什么
      label:{  // 标签配置
        show:false,
      },
      itemStyle: {
        areaColor: 'darkgreen', // 区域颜色
        borderColor: 'white'  // 边界颜色
      },
      zoom: 1.2, // 地图缩放
      emphasis: {  // 高亮配置
        label: { // 标签
          show: true,
          fontSize: 12,
          color: 'black'
        },
        itemStyle: {
          // 区域
          areaColor: 'cyan'
        }
      }
      },
    series: [
      // 高亮点位
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        label:{  // 点位标签
          fontSize: 15,
          formatter: '{b}',  // 格式化文本标签
          color: 'white',
          position: 'right',  // 标签位置
          show: true
        },
        itemStyle: { // 点位样式
          shadowBlur: 15,  // 波纹大小
          shadowColor: 'pink',  // 波纹颜色
          // opacity: 0.2,  //透明度
          color:'orange'  //点位中心颜色
        },
        symbolSize: 16,
        data:[
          {name: '章贡区', value: [114.93872, 25.851367],},
        ]
      },
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        label:{  // 点位标签
          fontSize: 12,
          formatter: '{b}',  // 格式化文本标签
          color: 'white',
          position: 'bottom',  // 标签位置
          show: true
        },
        itemStyle: { // 点位样式
          shadowBlur: 15,  // 波纹大小
          shadowColor: 'pink',  // 波纹颜色
          // opacity: 0.2,  //透明度
          color:'yellow'  //点位中心颜色
        },
        symbolSize: 10,
        data:[
          {name: '信丰县', value: [114.930893,25.38023]},
          {name: '寻乌县', value: [115.651399,24.954136]},
          {name: '宁都县', value: [116.018782,26.472054]},
          {name: '会昌县', value: [115.791158,25.599125]},
          {name: '崇义县', value: [114.307348,25.687911]},
        ]
      },
      // 航线动画
      {
        type: 'lines',  // 航线类型
        effect:{  // 动画效果
          show: true,
          period: 2, // 动画速度，越小越快
          symbol: 'arrow',  // 箭头标记符号
          symbolSize: 5   // 符号大小
        },
        lineStyle: {  // 线条样式
          width: 1,
          color: 'gold',
          opacity: 0.8,    // 透明度
          curveness: 0.3,  // 弯曲度
        },
        data:[  // 数据点位
          //  [起点坐标, 终点坐标]
          {coords: [[114.93872, 25.851367],[115.651399,24.954136]]},
          {coords: [[114.93872, 25.851367],[114.930893,25.38023]]},
          {coords: [[114.93872, 25.851367],[116.018782,26.472054]]},
          {coords: [[114.93872, 25.851367],[115.791158,25.599125]]},
          {coords: [[114.93872, 25.851367],[114.307348,25.687911]]},

        ]
      }
    ]

  }

  option && myChart.setOption(option)
}

</script>

<template>
 <div id="map"></div>
</template>

<style scoped>
#map{
  width: 100%;
  height: 450px;
}
</style>