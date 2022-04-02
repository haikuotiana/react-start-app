const Index = () => import(/* webpackChunkName: "index" */ '@/page/index/index.jsx')
const Login = () => import(/* webpackChunkName: "login" */ '@/page/login/index')
const ErrorPage = () => import(/* webpackChunkName: "errorPage" */ '@/page/error/index')

const routes = [
  {
    path: '/',
    redirect: '/index', // redirect，要重定向的路由路径
  },
  {
    path: '/',
    element: <PageLayout />,
    children: [
      {
        path: 'index',
        component: Index,
        meta: {
          title: '首页',
          icon: <Index />,
          accessId: '10000',
        },
      }
    ]
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
  
export default routes