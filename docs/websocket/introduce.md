---
title: 项目简介
---

## 这是一个什么项目

本项目提供 **`websocket`** 框架, 基于 **`gin`** 和 **`melody`** 实现, 旨在帮助开发者快速搭建 websocket服务, 专注于业务本身, 忽略底层细节

## 项目地址

[Github项目仓库](https://github.com/go-developer/websocket)

## 项目特性

### 已实现

<a-checkbox checked>集成ginCtx/melody.Session的wsContext</a-checkbox>
<br/>
<a-checkbox checked>多长连接路由</a-checkbox>
<br/>
<a-checkbox checked>基于内存的连接管理</a-checkbox>
<br/>
<a-checkbox checked>一对一消息推送</a-checkbox>
<br/>
<a-checkbox checked>一对多消息广播</a-checkbox>
<br/>
<a-checkbox checked>指令自动调度</a-checkbox>
<br/>
<a-checkbox checked>服务内部记录异常日志,支持外部注入日志实例</a-checkbox>
<br/>
<a-checkbox checked>pprof状态监控</a-checkbox>
<br/>

### TODO 任务

<a-checkbox>管理类API,通过API管理在线连接</a-checkbox>
<br/>
<a-checkbox>推送类API,通过API进行消息推送</a-checkbox>
<br/>


## 项目迭代时间线

<a-timeline>
  <a-timeline-item>2021-04-18 连接管理与command调度</a-timeline-item>
  <a-timeline-item>2021-04-11 具备基础的连接与响应能力</a-timeline-item>
  <a-timeline-item>2021-04-01 创建项目</a-timeline-item>
</a-timeline>
