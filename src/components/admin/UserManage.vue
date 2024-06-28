<script setup lang="ts">
import {onMounted, reactive, ref} from "vue";
import httpRequest from "../../api/http.ts";
import {ElNotification} from 'element-plus'



onMounted(() => {
  //  页面加载后先请求后台接口获取所有用户数据
  getAllUser()
})

/////////////////////  数据定义  //////////////////////////
const drawerVisible = ref(false)  // 抽屉控制开关
const loading = ref(false)  // 按钮加载动画开关
const formLabelWidth = ref('180px')
const roleOptions = [{ value: 1, label: '管理员' }, { value: 2, label: '普通用户' }]
let tableData = ref([])
let userForm = reactive({
  userid: '',
  username: '',
  password: '',
  phone: '',
  email: '',
  role: null,
})
/////////////////////////////////////////////////////////


// 根据标识匹配角色
const roleLabel = (role: number) => {
  switch (role) {
    case 1 :
      return '管理员';
    case 2 :
      return '普通用户';
  }
}
// 获取所有用户
const getAllUser = () => {
  // axios 请求后台获取所有用户数据
  httpRequest({
    url: '/user/getAll',
    method: 'get'
  }).then((res) => {
    //  将请求回来的用户列表数据 渲染到taleData里面
    const code = (res as any).code
    const data = (res as any).data
    const message = (res as any).message
    // 请求成功，将返回的数据合并渲染到tableData里
    if (code > 0) {
      tableData.value = data
    } else {
      // 请求失败，将返回的错误信息弹出
      alert(message)
    }


  })
}
// 根据id获取用户
const getUserById = (userid: number) => {
  drawerVisible.value = true
  httpRequest({
    url: '/user/getUserById/' + userid,
    method: 'get',
  }).then((res) => {
    const code = (res as any).code
    const data = (res as any).data
    if (code > 0){
      Object.assign(userForm, data)
    }
  })
}
// 更新用户
const updateUser = (user: any) => {
    loading.value = true
    httpRequest({
      url: '/user/update',
      method: 'put',
      data: user,
    }).then((res) => {
      loading.value = false
      drawerVisible.value = false
      const code = (res as any).code
      const message = (res as any).message
      ElNotification({
        message: message,
        type: 'success',
      })
      if (code > 0){
        getAllUser()
      }
    })
}
// 删除用户
const deleteUser = (userid: number) => {
  loading.value = true
  httpRequest({
    url: '/user/delete/' + userid,
    method: 'delete'
  }).then((res) => {
    loading.value = false
    const code = (res as any).code
    const message = (res as any).message
    if (code > 0){
      getAllUser()
      ElNotification({
        message: message,
        type: 'success',
      })
    }else {
      ElNotification({
        message: message,
        type: 'error',
      })
    }
  })
}

</script>

<template>
  <div class="user-manage-container">
    <div class="user-manage-header">
      <div> 用户数据管理中心</div>
    </div>

    <div class="user-table">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column type="index" fixed align="center" label="用户序号" width="150px">
          <template #default="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column prop="username" label="用户名" width="auto" align="center"/>
        <el-table-column prop="phone" label="手机号码" width="auto" align="center"/>
        <el-table-column prop="email" label="电子邮箱" width="auto" align="center"/>
        <el-table-column label="角色" width="auto" align="center">
          <template #default="scope">
            {{ roleLabel(scope.row.role) }}
          </template>
        </el-table-column>

        <el-table-column label="操作" width="auto" align="center" fixed="right">
          <template #default="scope">
            <el-button plain type="primary" size="small" @click="getUserById(scope.row.userid)">
              更新
            </el-button>


            <el-button type="danger" size="small" @click="deleteUser(scope.row.userid)" :loading="loading">删除</el-button>
          </template>
        </el-table-column>

      </el-table>
      <el-drawer v-model="drawerVisible" :modal="true" title="更新用户">
        <el-form :model="userForm">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="userForm.username" disabled autocomplete="off" />
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input v-model="userForm.password" type="password" autocomplete="off" clearable/>
          </el-form-item>
            <el-form-item label="手机号码" :label-width="formLabelWidth">
              <el-input v-model="userForm.phone" autocomplete="off" clearable/>
          </el-form-item>
            <el-form-item label="电子邮箱" :label-width="formLabelWidth">
            <el-input v-model="userForm.email" autocomplete="off" clearable/>
          </el-form-item>

          <el-form-item label="用户类型" :label-width="formLabelWidth">
            <el-select v-model="userForm.role" placeholder="请选择用户类型">
              <el-option v-for="item in roleOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </el-form>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="drawerVisible = false">取消</el-button>
            <el-button type="primary" :loading="loading" @click="updateUser(userForm)">
              更新
            </el-button>
          </div>
        </template>
      </el-drawer>
    </div>
  </div>
</template>

<style scoped>
.user-manage-container {
  padding: 20px;

  .user-manage-header {
    height: 60px;
    text-align: center;
    align-items: center;
    font-size: 1.6em;
    font-weight: bold;
  }
}
</style>