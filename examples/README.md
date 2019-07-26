# 目录说明
```
project
│
│   README.md   说明文件
│
└───android     Android原生目录包
│
└───app     React-Native开发目录
│   │  
│   │   index.js
│   │  
│   │   router.js
│   │   
│   └───components      自定义组件
│   │   
│   └───config      配置文件
│   │   
│   └───containers      界面
│   │   
│   └───models      网络数据处理
│   │   
│   └───res     资源文件
│   │  
│   │   colors      颜色资源
│   │  
│   │   images      图片资源
│   │  
│   │   styles      样式资源
│   │   
│   └───services        网络请求
│   │   
│   └───utils       工具类集合
│   
└───ios     iOS原生目录包
|
|
```
# 版本推送

### Android 版本推送
##### 1.正式版本推送
（1）code-push 的Key：LMC1os4o5Pb5ZfCTXYKfO1d1cGuqBy-KxpduKE

（2）推送命令：appcenter codepush release-react -a 572919350/dvaFrame -d Production
##### 2.开发版本推送
（1）code-push 的Key：DdvioVJiJCBukzno32z9gl65dQStr1FgpOdFE

（2）推送命令：appcenter codepush release-react -a 572919350/dvaFrame -d Staging

### iOS 版本推送
##### 1.正式版本推送
（1）code-push 的Key：keE4K2hdAdbYJC8a5dGQcLHVkY6gH1vAnqdKN

（2）推送命令：appcenter codepush release-react -a 572919350/dvaFrame-ios -d Production
##### 2.开发版本推送
（1）code-push 的Key：agtWTm_irvVcQ9PivItHApWfygMwH1DR35_YN

（2）推送命令：appcenter codepush release-react -a 572919350/dvaFrame-ios -d Staging