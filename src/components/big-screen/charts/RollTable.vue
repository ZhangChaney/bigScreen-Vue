<template>

    <dv-scroll-ranking-board :config="config" style="width:90%;height:400px" />

</template>

<script setup>
import {reactive} from "vue";

const config = reactive({
  data: [
    {name: '信丰县',value: 875,},
    {name: '大余县',value: 765,},
    {name: '瑞金市',value: 920,},
    {name: '龙南市',value: 1212,},
    {name: '寻乌县',value: 1098,},
    {name: '南康区',value: 654,},
    {name: '崇义县',value: 387,},
  ],
  unit: '平方公里',
})

</script>

<style scoped>

</style>