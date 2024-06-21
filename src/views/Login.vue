<script setup lang="ts">
import {reactive} from 'vue'
import {onMounted} from "vue";
import httpRequest from "../api/http.ts";
import router from "../router";

const getScale = (width=2180, height=1080) => {
  // 计算宽高比例（相对于我浏览器全屏）
  let windowWidth = window.innerWidth / width
  let windowHeight = window.innerHeight / height

  // 三元运算符  本质是一个if-else ,  ?前面的是条件， ?和:中间的是条件满足时返回的值 :后面是else返回的值
  return windowWidth < windowHeight ? windowWidth : windowHeight
}

onMounted(() => {
  let mainContainer = document.getElementById('login-container') || new HTMLDivElement()
  mainContainer.style.transform = `scale(${getScale()}) translate(-50%, -50%)`
})

window.onresize = () => {
  let mainContainer = document.getElementById('login-container') || new HTMLDivElement()
  mainContainer.style.transform = `scale(${getScale()}) translate(-50%, -50%)`
}

let loginForm = reactive({
  username: '',
  password: ''
})


const login = () => {
  //  请求后台登录接口
  httpRequest({
    url: '/user/login',    // 请求路由(地址)
    method: 'post',   // 请求方式
    data: {username: loginForm.username, password: loginForm.password}  // 请求参数
  }).then( (res) => {
    const code = (res as any).code
    const message = (res as any).message
    if (code > 0){
      // 登录成功 跳转到首页
      router.push('/')
    }else {
      // 登录失败，显示错误信息
      alert(message)
    }
  })

}

</script>

<template>
  <div id="login-container">
    <div class="login-title">
      智慧果业数据管理中心
    </div>
    <div class="login-form">

      <div>账号：<input v-model="loginForm.username" type="text" style="width: 70%; height: 50px; border-radius: 15px"  placeholder="请输入账号"> </div>
      <br/>
      <div>密码：<input v-model="loginForm.password" type="password" style="width: 70%; height: 50px; border-radius: 15px"  placeholder="请输入密码"> </div>
      <div> <button @click="login" style="width: 96%; height: 50px; border-radius: 15px">登录</button></div>

    </div>
  </div>

</template>

<style scoped>
#login-container{
  position: fixed;
  width: 2180px;
  height: 1080px;
  left: 50%;
  top: 50%;
  transform-origin: left top;
  display: flex;
  flex-direction: column;
  align-items: center;

  .login-title{
    width: 100%;
    text-align: center;
    color: white;
    font-weight: bolder;
    font-size: 2.6em;
    margin-top: 8%;
    padding-bottom: 2% ;
  }

  .login-form{
    width: 25%;
    color: white;
    font-size: 2.2em;
    padding: 20px;
    border-radius: 25px;
    border: whitesmoke solid 1px;

    input{
      font-size: 22px;
      padding: 2px 2px 2px 20px;
      font-family: '幼圆', serif;
      font-weight: 800;
    }

    ::placeholder{
      color: darkgrey;
      font-size: 22px;
      font-family: '幼圆', serif;
    }

    button{
      background-color: deepskyblue;
      font-size: 25px;
      font-weight: 800;
      text-align: center;
      margin-top: 10%;
      color: white;
    }
  }



}

</style>