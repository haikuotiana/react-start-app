import React from 'react'
// 在项目入口文件index.js或入口组件App.js里引入
import { BrowserRouter } from 'react-router-dom' // 引入官方路由组件
import RouterWaiter from 'react-router-waiter' // 引入该插件
import routes from '@/router' // 引入你的路由配置
import onRouteBefore from '@/router/onRouteBefore' // 引入你定义的路由拦截函数

function App () {
  return (
    <BrowserRouter>
      <RouterWaiter routes={routes} onRouteBefore={onRouteBefore} />
    </BrowserRouter>
  )
}

export default App