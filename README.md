# Cook.ZhangJC.Tech

> 居家食用手册｜好的，今天我们来做菜 🥬

- 项目地址：[zjc17/cook.zhangjc.tech](https://github.com/zjc17/cook.zhangjc.tech)
- 网站链接：[cook.zhangjc.tech](https://cook.zhangjc.tech)
- 备用：[cook-zhangjc-tech.pages.dev](https://cook-zhangjc-tech.pages.dev/)

## Features

- 包含600+食用常见材料的菜谱视频，支持选择材料筛选视频；
- 包含20+居家种菜指南视频，帮助实现你的居家田园梦想（x；
- 包含老饭骨的10+类别200+菜谱视频
- 本项目支持 PWA，使用浏览器打开时，可将其添加到主屏幕以获得近原生 APP 的体验；

## 参考

- [隔离食用手册大全](https://docs.qq.com/sheet/DZUpJS0tQZm1YYWlt)

- [来做菜](https://github.com/YunYouJun/cook/)

## 说明

本项目初衷是方便特殊时期隔离在家而材料有限的小伙伴，因此菜谱材料会尽量限制在特定范围内。

更多可参见 [居家食用手册 | 关于](https://cook.zhangjc.tech/help)。

欢迎反馈更多菜谱数据：

- [菜谱数据](https://docs.qq.com/sheet/DZHViVEZhcnNKWFBO?tab=egx5av)
  - [新菜谱反馈](https://docs.qq.com/sheet/DZHViVEZhcnNKWFBO?tab=uykkic)
  - [晒晒你的菜](https://docs.qq.com/sheet/DZHViVEZhcnNKWFBO?tab=dmeahc)
  - [反馈建议](https://docs.qq.com/sheet/DZHViVEZhcnNKWFBO?tab=snaau2)
- 网站相关
  - 故障/新功能反馈：[Issues](https://github.com/zjc17/cook.zhangjc.tech/issues)
  - 交流/建议/分享：[Discussions](https://github.com/zjc17/cook.zhangjc.tech/discussions)

## 开发

```bash
# install dependencies
npm install

# start
npm run dev
# http://localhost:3000
```

## Docker

您可以选择从 Docker Hub 拉取最新的镜像，或本地自行构建。

### 从 Docker Hub 拉取最新的镜像

```bash
# 从 Docker Hub 拉取最新的镜像
docker pull zhangjc1999/cook:latest
# 新建并启动容器，然后打开 http://localhost:8080
docker run -it -d --name cook -p 8080:80 zhangjc1999/cook:latest

# 启动与停止
docker start cook
docker stop cook
```

### 自己本地构建

```bash
# 本地构建
docker build . -t yourname/cook:localdev
# 启动容器，然后打开 http://localhost:8080
docker run -it -d --name cook -p 8080:80 yourname/cook:localdev
```

## 致谢

感谢以下小伙伴为本项目提供的帮助

- [云游君](https://www.yunyoujun.cn/)