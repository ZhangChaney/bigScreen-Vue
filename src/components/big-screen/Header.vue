<script setup lang="ts">

</script>

<template>
<div class="container">
  <div class="left">
    <dv-decoration8 style="width:100%;height:40px;" />
  </div>

  <div class="main">
    <h2 class="title">智慧果业大数据平台</h2>
    <dv-decoration5 :dur="2" style="width:100%;height:30px;" />
  </div>

  <div class="right">
    <dv-decoration8 :reverse="true" style="width:100%;height:40px;" />
  </div>
</div>
</template>

<style scoped>
.container{
  width: 100%;
  height: 100%;
  display: flex;
  padding: 20px;

  .left{
    width: 35%;
  }

  .main{
    width: 30%;

    .title{
      font-size: 1.9em;
      font-weight: 600;
      color: whitesmoke;
      text-align: center;
    }
  }

  .right{
    width: 35%;
  }

}
</style>