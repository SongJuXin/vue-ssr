# vue-ssr
基于vue-cli v3.6.3的，@vue/cli-service v4.1.0,node v10.15.3的vue项目服务端渲染的改造。


## 运行方式

### 安装依赖
```
npm install
```

### 启动开发时的热加载服务
```
npm run serve
```

### 服务端渲染的build
```
npm run build
```

### 启动服务端渲染的服务
```
npm run start
```

## dist目录的结构
`npm run build`之后:
```
dist
│───css
│       app.xxx.css
│       chunk-xx.xx.css
│       ...
│───js
│   │   app.xx.js
│   │   app.xx.js.map
│   │   ...
│   index.html
│   vue-ssr-client-manifest.json
└   vue-ssr-client-manifest.json
```
