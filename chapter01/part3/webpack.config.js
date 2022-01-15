// 引入包
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
//webpack 中所有配置信息都应该写在module.exports中
module.exports = {

  //指定入口文件
  entry: "./src/index.ts",
  //指定打包文件所在的目录
  output: {
    //指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
    //告诉webpack不要使用箭头函数
    environment: {
      arrowFunction: false,
    }
  },
  //指定webpack打包时要使用的模块
  module: {
    //指定要加载的规则
    rules: [
      {
        //test指定的是规则生效的文件
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              //设置预定义环境
              presets: [
                [
                  //指定环境插件
                  '@babel/preset-env',
                  //配置信息
                  {
                    //targets要兼容的浏览器
                    "targets": {
                      "chrome": "58",
                      "ie": "11"
                    },
                    //corejs的版本
                    "corejs": "3",
                    //使用corejs的方法  usage 按需加载
                    "useBuiltIns":"usage"
                  }
                ]
              ]
            }
          },
          {
            loader: 'ts-loader',
          }],
        //排除
        exclude: /node-modules/
      }
    ],
  },
  mode: "production",

  //配置webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './src/index.html'
    }),
  ],
  //设置引用模块
  resolve: {
    extensions: ['.ts', '.js'],
  }
}