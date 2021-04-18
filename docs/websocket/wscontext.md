---
title: 请求上下文
---

## 什么是请求上下文

上下文贯穿整个连接的  **`生命周期`** , 存储必要的  **`元信息`** 或者  **`业务信息`**

## 请求上下文的定义

```go
// WSContext 请求上下文
type WSContext struct {
    ConnectionID string            // 请求ID
    Flag         string            // 长连接模块
    GinCtx       *gin.Context      // 基于gin实现websocket, gin的上下文
    Session      *melody.Session   // 长连接的会话
    Server       *melody.Melody    // ws server
    Data         easymap.EasyMap   // 上下文中存储的数据
    Lock         easylock.EasyLock // 数据锁
}
```

## 请求上下文属性的详细说明

### 连接ID(ConnectionID)

连接ID  **`全局唯一`** , 用来唯一 **`标识`** 一个连接, 生成规则如下:

连接ID按照  **`四段式生成`** , 具体是  **`模块标识-连接所在服务器IP-当前格式化时间戳-随机字符串md值`** , 如 : example-19216806-20210418145856-ac57a705191af83eab9e1c2c8002efe3 , 其代表的含义是 , 连接所属模块为 example , 与 192.168.0.6 机器 在 2021年4月18日14时58分56秒 建立连接

### 模块标识(Flag)

即为 WS-Server GetModuleFlag 方法中定义的模块标识

### GinCtx

完全是 **`gin.Context`** , 具体使用规则参照 GIN 即可

### 当前长连接会话(Session)

当前连接的实例, 此实例有  **`推送消息`** 、 **`关闭连接`** 等相关能力

### 模块 WS-Server 实例(Server)

当前模块的Server实例, 业务逻辑一般使用不上

### 数据存储(Data)

 **`Data`** 可以用来存储业务的数据, 此属性是  **`并发安全`** 的 , 并且同步提供了各种  **`读取数据`** 的方法, 可直接读取  **`指定类型`** 的数据.

### 逻辑锁(Lock)

 每个连接 **`独享`** 一把锁 , 当对一个连接数据或逻辑做  **`竞态`** 处理时, 可以共用此锁
