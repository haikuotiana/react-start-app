const Index = () => import(/* webpackChunkName: "index" */ '@/page/index/index.jsx')
const Login = () => import(/* webpackChunkName: "login" */ '@/page/login/index')
const ErrorPage = () => import(/* webpackChunkName: "errorPage" */ '@/page/error/index')

const routes = [
  {
    path: '/',
    redirect: '/index', // redirect，要重定向的路由路径
  },
  {
    path: '/index',
    component: Index, // component，懒加载方式引入的组件
    meta: { // meta，自定义的数据
      title: '首页',
      needLogin: true
    },
  },
  {
    path: '/login',
    component: Login, 
    meta: {
      title: '登录',
    },
  },
  {
    path: '*',
    component: ErrorPage, 
    meta: {
      title: '404',
    },
  },
]
/**
 * @description: 全局路由拦截
 * @param {string} pathname 当前路由路径
 * @param {object} meta 当前路由自定义meta字段
 * @return {string} 需要跳转到其他页时，就返回一个该页的path路径，或返回resolve该路径的promise对象
 */
const onRouteBefore = ({ pathname, meta }) => {
    // 动态修改页面title
    if (meta.title !== undefined) {
        document.title = meta.title
    }
    // 判断未登录跳转登录页
    if (meta.needLogin) {
        if (!isLogin) {
        return '/login'
        }
    }
}
  
export default routes