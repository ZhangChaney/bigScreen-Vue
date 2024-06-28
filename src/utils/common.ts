import httpRequest from "../api/http.ts";
import router from "../router";

export const auth = () => {
    httpRequest({
        url: '/user/auth',    // 请求路由(地址)
        method: 'post',   // 请求方式
    }).then( (res) => {
        const code = (res as any).code
        // code < 0 表示认证失败，跳转到登录页面
        if (code < 0) { router.replace('/login')}
    })
}

export const suitable = () => {

}
