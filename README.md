## 项目简介

基于 react.js 的前端开发环境，用于前后端分离后的单页应用开发，可以在开发时使用 ES2015、Promise 等最新语言特性。项目包含：

- 基础库: `React`、`Redux`、`React-Redux`、`Reacr-Router`
- 工具库: `axios`、`marked`、`uuid`、`redux-thunk`
- 编程语言: `ES2015`、`ES2016`、`LESS`
- 编译/打包工具：`webpack`、`webpack-dev-server`、`babel`
- 单元测试工具：`mocha`
- 本地服务器：`express`、`webpack-dev-middleware`、`webpack-hot-middleware`

---

### 目录结构

    ├── ReactApp                            构建脚本目录
    │   ├── app
    │   │   ├───actions                     action和actionCreator 
    │   │   │   ├── a.js
    │   │   │   ├── ...
    │   │   │   └── z.js
    │   │   │  
    │   │   ├──components                   公用组件文件夹    
    │   │   │   ├── component-A                                       
    │   │   │   ├── component-...
    │   │   │   └── component-X
    │   │   │  
    │   │   ├──constants                    常量action.type
    │   │   │   ├──
    │   │   │   ├──
    │   │   │   └── 
    │   │   │  
    │   │   ├──containers                   容器组件
    │   │   │   ├──
    │   │   │   ├──
    │   │   │   └── index.js                用于导出所有容器的文件
    │   │   │  
    │   │   ├──mock                         mock数据
    │   │   │   ├──
    │   │   │   ├──
    │   │   │   └── 
    │   │   │  
    │   │   ├──reduces                      reducer和combineReducers
    │   │   │   ├──reduces-A
    │   │   │   ├──reduces-X
    │   │   │   └── index.js                在此文件组织combineReducers
    │   │   │  
    │   │   ├──router
    │   │   │   ├──
    │   │   │   ├──
    │   │   │   └──  
    │   │   │  
    │   │   ├──store
    │   │   │   ├──
    │   │   │   ├──
    │   │   │   └── 
    │   │   │  
    │   │   ├──utils
    │   │   │   ├──
    │   │   │   ├──
    │   │   │   └──
    │   │   │  
    │   │   ├──index.html
    │   │   ├──index.js
    │   │   │             
    │   ├── example
    │   │   ├──
    │   │   └── 
    │   │
    │   ├──
    │   ├──
    │   ├──
    │   ├──
    │   ├──                 
    │   ├── .babelrc                 
    │   ├── package.json                   
    │   ├── server.js                       
    │   ├── webpack.dev.conf.js             wabpack开发环境配置
    │   └── webpack.prod.conf.js            wabpack生产环境配置

---

### 环境配置

本项目依赖Nodejs。先安装nodejs[注:国内请安装cnpm]

1. 先安装[Node.js](https://nodejs.org/zh-cn/)
2. 再安装cnpm

```js
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install
```
---

### 命令列表

---


### 代码约定
> 待补充



### 发布方式
> 待补充