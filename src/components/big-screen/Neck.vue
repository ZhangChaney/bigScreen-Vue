<script setup lang="ts">
import { BorderBox8 as DvBorderBox8 } from '@kjgl77/datav-vue3'
</script>

<template>
  <dv-border-box8 :dur="5">
    <div class="button-group">
      <dv-button  border="Border5" color="orange">智慧果业</dv-button>
      <dv-button  border="Border5" color="pink">智慧医疗</dv-button>
      <dv-button  border="Border5" color="lightgreen">智慧政务</dv-button>
      <dv-button  border="Border5" color="yellow"><RouterLink to="/admin">数据中心</RouterLink></dv-button>
    </div>
  </dv-border-box8>
</template>

<style scoped>
.button-group{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  a{
    text-decoration: none;
    color: white;
  }
}
</style>