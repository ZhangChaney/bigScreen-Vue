<script setup lang="ts">
import Header from "../components/big-screen/Header.vue";
import LeftSide from "../components/big-screen/LeftSide.vue";
import Center from "../components/big-screen/Center.vue";
import RightSide from "../components/big-screen/RightSide.vue";
import Bottom from "../components/big-screen/Bottom.vue";
import Neck from "../components/big-screen/Neck.vue";
import {onMounted} from "vue";
import {auth} from "../utils/common.ts"

const getScale = (width=2180, height=1080) => {
  // 计算宽高比例（相对于我浏览器全屏）
  let windowWidth = window.innerWidth / width
  let windowHeight = window.innerHeight / height

  // 三元运算符  本质是一个if-else ,  ?前面的是条件， ?和:中间的是条件满足时返回的值 :后面是else返回的值
  return windowWidth < windowHeight ? windowWidth : windowHeight
}


onMounted(() => {
  auth()  // 页面加载前， 先校验登录，请求/auth接口
  let mainContainer = document.getElementById('main-container') || new HTMLDivElement()
  mainContainer.style.transform = `scale(${getScale()}) translate(-50%, -50%)`
})

window.onresize = () => {
  let mainContainer = document.getElementById('main-container') || new HTMLDivElement()
  mainContainer.style.transform = `scale(${getScale()}) translate(-50%, -50%)`
}

</script>

<template>
  <div class="main-container" id="main-container">
    <div class="grid-container">
      <div class="header">
        <Header/>
      </div>
      <div class="neck">
        <Neck/>
      </div>
      <div class="left"><LeftSide/></div>
      <div class="center"><Center/></div>
      <div class="right"><RightSide/></div>
      <div class="bottom"><Bottom/></div>
    </div>
  </div>

</template>

<style scoped>
.main-container{
  position: fixed;
  width: 2180px;
  height: 1080px;
  left: 50%;
  top: 50%;
  transform-origin: left top;

  .grid-container {
    height: 100%;
    width: 100%;
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);

    .header{
      margin-top: 1%;
      grid-column: 1 / 9;
      grid-row: 1 / 2;
    }
    .neck{
      grid-column: 1 / 9;
      grid-row: 2 / 3;
    }

    .left{
      grid-column: 1 / 3;
      grid-row: 3 / 9;
    }

    .center{
      grid-column: 3 / 7;
      grid-row: 3 / 7;
    }

    .right{
      grid-column: 7 / 9;
      grid-row: 3 / 9;
    }

    .bottom{
      grid-column: 3 / 7;
      grid-row: 7 / 9;
    }
  }

}


</style>