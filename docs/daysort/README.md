# 每日整理

## 2020

### 10月

#### 01号

## 2021

### 1月

#### 13号

1. vue使用代理,解决本地跨域问题.

   ```js
   //设置axios的baseURL
   axios.defaults.baseURL = '/api'
   
   //在vue.config.js中	
     devServer: {
       host: "localhost",
       port: 8081, // 端口号
       open: true, //配置自动启动浏览器
       proxy: {
         "/api": { //是否使用代理标识,/api开头的才用代理
           target: "http://0.0.0.0:9527",
           ws: false,// 启用websockets
           changeOrigin: true, //跨域
           pathRewrite: {
             '^/api': '' // 将/api开头的请求地址的/api替换为''
           },
         }
       }
     },
   ```

   

