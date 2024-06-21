<script setup lang="ts">
import { BorderBox13 as DvBorderBox13 } from '@kjgl77/datav-vue3'
import Console from "./charts/Console.vue";
import RoseChart from "./charts/RoseChart.vue";
</script>

<template>
  <dv-border-box13>
    <div class="right-container">
      <!-- 圆形控制台 -->
      <Console/>
      <!-- 动态分割线 -->
      <dv-decoration2 :dur="4" style="width:95%;height:8px;"/>
      <!-- 玫瑰图 -->
      <RoseChart/>

    </div>
  </dv-border-box13>
</template>

<style scoped>
.right-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>