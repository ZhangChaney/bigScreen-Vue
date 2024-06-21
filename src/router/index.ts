import {createRouter, createWebHistory} from "vue-router";
import Index from "../views/Index.vue";
import Login from "../views/Login.vue";
import Admin from "../views/Admin.vue";
import UserManage from "../components/admin/UserManage.vue";
import UserAdd from "../components/admin/UserAdd.vue";


const routes = [
    {
        path: '/',      //路由路径
        name: 'index',   // 路由名称
        component: Index,  // 组件名称
    },
    // 登录界面路由
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    // 后台管理路由
    {
        path: '/admin',
        name: 'admin',
        component: Admin,
        children: [
            {
                path: '/userManage',
                name: 'userManage',
                component: UserManage,
            },
            {
                path: '/userAdd',
                name: 'userAdd',
                component: UserAdd,
            }
        ]
    },

]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

export default router


