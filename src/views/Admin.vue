<template>
  <el-container class="layout-container-demo" style="height: 100%;">
    <el-aside width="200px" style="background-color: chocolate">
      <el-scrollbar >
        <el-menu :default-openeds="['1','2', '3']" style="background-color: chocolate; font-weight: bolder">
          <el-sub-menu index="1" >
            <template #title>
              <el-icon><user /></el-icon>用户管理
            </template>
            <el-menu-item-group style="background-color: darkorange; font-weight: bolder">
              <el-menu-item index="1-1"><RouterLink :to="{name: 'userManage'}">用户管理</RouterLink></el-menu-item>
              <el-menu-item index="1-2"><RouterLink :to="{name: 'userAdd'}">添加用户</RouterLink></el-menu-item>
            </el-menu-item-group>

          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><icon-menu /></el-icon>数据中心
            </template>
            <el-menu-item-group style="background-color: darkorange; font-weight: bolder">
              <el-menu-item index="2-1"><RouterLink :to="{name: 'userManage'}">产值产量</RouterLink></el-menu-item>
              <el-menu-item index="2-2"><RouterLink :to="{name: 'userManage'}">种植区域</RouterLink></el-menu-item>
              <el-menu-item index="2-3"><RouterLink :to="{name: 'userManage'}">产业分布</RouterLink></el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>

          <el-sub-menu index="3">
            <template #title>
              <el-icon><setting /></el-icon>系统设置
            </template>
            <el-menu-item-group style="background-color: darkorange; font-weight: bolder">
              <el-menu-item index="3-1"><RouterLink :to="{name: 'userManage'}">产品文档</RouterLink></el-menu-item>
              <el-menu-item index="3-2"><RouterLink :to="{name: 'userManage'}">帮助中心</RouterLink></el-menu-item>
              <el-menu-item index="3-3"><RouterLink :to="{name: 'userManage'}">关于我们</RouterLink></el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 16px;font-weight: bolder;background-color: cyan; color: black">
        <el-icon style="margin-right: 8px; margin-top: 5px;float: left; font-size: 40px">
          <Place />
        </el-icon>
        <span style="float: left;font-size: 1.5em;margin-top: 10px">智慧果业数据管理中心</span>
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px; color: black">
              <setting />
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>个人设置</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>admin</span>
        </div>
      </el-header>

      <el-main style="background-color: white">
        <el-scrollbar>
          <RouterView/>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { Menu as IconMenu, User, Setting, Place } from '@element-plus/icons-vue'
import {onMounted} from "vue";
import {auth} from "../utils/common.ts";

onMounted(() => {
  auth()
})

</script>

<style scoped>
a{
  text-decoration: none;
  color: black;
}
.layout-container-demo {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}
.layout-container-demo  {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
}
.layout-container-demo {
  border-right: none;
}
.layout-container-demo {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
