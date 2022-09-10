---
author: scott
ms.author: scott # Microsoft employees only
ms.date: 9/10/2022
# A simple template for small feature specifications
---
# 内容

该文档主要记录将云服务数据迁移到home server的过程
## 更新服务器镜像

### 检查服务器版本

```bash
lsb_release -a
#output
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 20.04.5 LTS
Release:        20.04
Codename:       focal
```

### 更新阿里云sourcelist

```bash
#backup
sudo cp /etc/apt/sources.list /etc/ap/sources.list.back
sudo vi /etc/apt/sources.list
#按 i进入编辑模式，ctl+v粘体aliyun镜像地址
deb http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse

deb-src http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse

deb-src http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse

deb-src http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse

deb-src http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse

deb-src http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
#保存退出
#更新软件列表及软件
sudo apt update
sudo apt upgrade
```
## 安装frp

### 下载frp

下载地址 https://github.com/fatedier/frp/releases

#### 文件说明

```
#服务器端执行命令
frps.exe -c frps.ini

#客户端执行命令
frpc -c frpc.ini

#客户端作为服务运行

```

### 服务器配置
#### 配置方向代理
### 客户端配置

```bash
wget https://github.com/fatedier/frp/releases/download/v0.44.0/frp_0.44.0_linux_amd64.tar.gz
tar -xzvf v0.44.0/frp_0.44.0_linux_amd64.tar.gz 
mv v0.44.0/frp_0.44.0_linux_amd64 frp
cd frp

```

## 安装DOCKER



## 备份DOCKER 镜像



## 恢复DOCKER镜像

## 域名重定向


## 笔记


<a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet">git wiki sytax</a>
<a href="https://blogs.msdn.microsoft.com/friis/2016/08/25/setup-iis-with-url-rewrite-as-a-reverse-proxy-for-real-world-apps/">windows server iis如何创建反向代理</a>
