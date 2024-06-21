<script setup lang="ts">

</script>

<template>
  <div class="container">
    计划果业产值完成情况
    <div class="complete">
      累计完成 <span class="num">3367898</span> 万元
    </div>
  </div>

  <div class="console">
    <dv-decoration-9 style="width:150px;height:150px;">
      66%
    </dv-decoration-9>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  color: white;
  font-weight: 600;
  font-size: 1.5em;
  padding: 15px;

  .complete {
    font-weight: 400;

    .num {
      font-weight: 800;
      font-size: 1.2em;
      color: hotpink;
    }
  }

}

.console {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>