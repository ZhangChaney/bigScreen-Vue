<script setup lang="ts">
import { BorderBox13 as DvBorderBox13 } from '@kjgl77/datav-vue3'
import RollTable from "./charts/RollTable.vue";
import BarChart from "./charts/BarChart.vue";
</script>

<template>
  <dv-border-box13>
    <div class="left-container">
        <BarChart/>
        <RollTable/>
    </div>
  </dv-border-box13>
</template>

<style scoped>
.left-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>