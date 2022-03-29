const path = require('path');
const HtmlWebPackPlugin=require('html-webpack-plugin');
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    // 设置别名
    alias: {
      '@': resolve('src')// 这样配置后 @ 可以指向 src 目录
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,//js｜jsx编译
        exclude: /node_modules/,//不需要对node_modules打包
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,//html编译
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.css$/,//css编译
        use: [{
          loader: 'style-loader'  // 可以把css放在页面上
        },{
          loader: 'css-loader'    // 放在后面的先被解析
        }]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,//图片编译
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'react app',
      filename: 'index.html',
      template: './public/index.html'
    })
  ],
  devServer: {
    open: true,
    port: 8090,
    hot: true,
    // historyApiFallback: true,
    historyApiFallback:{
      rewrites: [{
        from: /error/,
        to: '/404.html'
      }]
    }
  }
};