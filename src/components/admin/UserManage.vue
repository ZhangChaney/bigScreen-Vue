<script setup lang="ts">

import {onMounted, reactive} from "vue";
import httpRequest from "../../api/http.ts";

let tableData = reactive([])

onMounted(() => {
  //  页面加载后先请求后台接口获取所有用户数据
  getAllUser()
})

const getAllUser = () => {
  // axios 请求后台获取所有用户数据
  httpRequest({
    url: '/user/getAll',
    method: 'get'
  }).then( (res) => {
    //  将请求回来的用户列表数据 渲染到taleData里面
    const code = (res as any).code
    const data = (res as any).data
    const message = (res as any).message
    // 请求成功，将返回的数据合并渲染到tableData里
    if (code > 0){
      Object.assign(tableData, data)
    }else {
    // 请求失败，将返回的错误信息弹出
      alert(message)
    }


  })
}

</script>

<template>
  <div class="user-table">
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="userid" label="用户序号" width="180" />
      <el-table-column prop="username" label="用户名" width="180" />
      <el-table-column prop="phone" label="手机号码" />
      <el-table-column prop="email" label="电子邮箱" />
    </el-table>
  </div>
</template>

<style scoped>

</style>