<script setup lang="ts">

import {reactive} from "vue";
import httpRequest from "../../api/http.ts";

let ruleForm = reactive({
  username: '',
  password: '',
  phone: '',
  email: '',
})

const addUser = () => {
  // 封装请求参数
  let username = ruleForm.username
  let password = ruleForm.password
  let phone = ruleForm.phone
  let email = ruleForm.email
  // 给后台发送请求
  httpRequest({
    url: '/user/add',
    method: 'post',
    data: { username, password, phone, email }
  }).then( (res) => {
    const code = (res as any).code
    const message = (res as any).message
    if (code > 0){
      alert('添加成功！')
    }else {
      alert(message)
    }
  })
}

</script>

<template>
  <el-form
      ref="ruleFormRef"
      style="max-width: 600px"
      :model="ruleForm"
      status-icon
      label-width="auto"
      class="demo-ruleForm"
  >
    <el-form-item label="用户名" prop="checkPass">
      <el-input
          v-model="ruleForm.username"
          type="text"
      />
    </el-form-item>
    <el-form-item label="用户密码" prop="pass">
      <el-input v-model="ruleForm.password" type="password" autocomplete="off"/>
    </el-form-item>

    <el-form-item label="电话号码" prop="age">
      <el-input v-model.number="ruleForm.phone"/>
    </el-form-item>
    <el-form-item label="电子邮箱" prop="age">
      <el-input v-model.number="ruleForm.email"/>
    </el-form-item>
    <el-form-item>
      <el-button type="primary"  @click="addUser()">
        确认添加
      </el-button>

    </el-form-item>
  </el-form>

</template>

<style scoped>

</style>