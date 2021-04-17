---
title : 开发一个WS-Server
---

## 如何开发一个WS-Server

框架设计基于接口设计,只需实现相关接口,并注册,即可实现一个新的server

## Server的接口约束

```go
package abstract

import (
    "github.com/go-developer/websocket/context"
)

// IWebsocket 接口约束
type IWebsocket interface {
    // Connect 建立连接时,处理的方法
    Connect(ctx *context.WSContext) error
    // Disconnect 断开连接时处理的方法
    Disconnect(ctx *context.WSContext)
    // Close 关闭连接
    Close(ctx *context.WSContext, code int, message string) error
    // HandshakeURL 注册的websocket路由
    HandshakeURL() []string
    // GetCommandList 注册长连接模块支持的命令
    GetCommandList() []ICommand
    // GetModuleFlag 获取模块标识,全局唯一
    GetModuleFlag() string
    // GetServerPort 获取长连接监听的端口,多个模块可监听不同的端口
    GetServerPort() int
    // GetWSServerConfig 获取WS-Server的配置
    GetWSServerConfig() []config.SetWSServerConfig
}
```

## 方法约束的说明

### 建立连接(Connect)

当有客户端尝试建立连接时,会调用  **`Connect`** 方法, 此方法返回一个  **`error`** ,可以理解为客户端  **`握手`** 是否成功, 当返回  **`异常`** 时, 系统会拒绝连接,并将此 error 作为异常信息, 返回给客户端.

### 断开连接(Disconnect)

当连接断开时(包括  **`服务端主动断开和客户端主动断开`** ), 系统会自动调用此方法, 执行此方法的相关逻辑

### 关闭连接(Close)

当连接被关闭时, 会自动调用此方法, 并携带相应的  **`closeCode`** 与  **`closeMessage`** , 这两个信息遵循 [RFC 6455规范](https://tools.ietf.org/html/rfc6455#section-7.4.1), 更多规范标准, 参见 [HTTP 资源与规范](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Resources_and_specifications)

### 获取模块标识(GetModuleFlag)

此方法向系统返回一个 **`全局唯一`** 的模块模块标识,用于标识模块身份, 此标识会参与  **`构建长连接地址`** , 以确保所有地址 **`全局唯一`**

### 获取长链接地址(HandshakeURL)

此方法与模块的全局唯一flag合并,注册成为支持长连接的路由地址,如 flag=test, url=ws, 则最终注册的路由为 /test/ws, 路由基于 [GIN框架](https://github.com/gin-gonic/gin)实现, 所以此处支持,所有GIN支持的路由模式.

### 加载指令列表(GetCommandList)

此方法返回当前模块支持的指令列表,会自动注册这一组指令,并进行调度,关于指令的实现约束,可参见 : [长连接指令的实现](/websocket/command.html)

### 读取长连接监听的服务端口(GetServerPort)

此方法,返回服务 **`监听的端口`** , 若是此端口和其他的模块端口一致, 在  **`获取模块标识`** 不同的情况下,会自动合并两个模块的监听端口, 同时,两个模块的指令按照  **`模块级别隔离`** , 也就是说, 模块间可以有相同的指令。

### 获取WS-Server配置(GetWSServerConfig)

此方法返回  **`WS-Server的配置`** , 用于替换系统默认配置, 具体的配置参照 : [WS-Server配置说明](/websocket/config.html#ws-server配置)

## 启动

在入口主方法内调用如下代码 :

```go
websocket.NewWebsocketServe(server1, server2, ...)
```

即可启动 Websocket服务, 其中, 一系列 server，均实现  **`IWebsocket`** 接口

至此, websocket server 开发完成
