---
title : 指令开发
---

## 指令的定义

**`指令`** 是客户端与服务端  **`数据通信协议`** , 双方均遵守这一约定, 实现双端通信, 在本框架中, 约定的通信协议数据格式如下 :

```go
{"command":"ping"}
```

数据以  **`JSON数据格式`** 进行通信, 必须包含  **`command`** 字段, 并且类型为  **`string`** , 系统基于此字段进行 **`指令调度`**, 其他业务属性的数据信息, 可在JSON对象内, 任意设置

## 指令的约束

**`指令`** 基于接口实现, 实现 **`ICommand`** 接口,即实现了一个指令, 接口的约束如下 :

```go
// Description : 长连接命令的约束
package abstract

import "github.com/go-developer/websocket/context"

// ICommand 指令
type ICommand interface {
    // GetCommand 注册的客户端指令
    GetCommand() string
    // GetConfigOption 获取指令的配置
    GetConfigOption() []config.SetCommandConfig
    // Execute 执行指令的逻辑
    Execute(ctx *context.WSContext, data []byte) error
}
```

## 方法约束的说明

### 获取指令标识(GetCommand)

此方法返回  **`指令的标识`** , 此标识需要保证在  **`模块内唯一`**

### 获取指令配置(GetConfigOption)

此方法返回  **`当前指令的配置`** , 此配置会覆盖默认的全局配置, 如需配置指令的  **`个性化配置`** , 请合理配置相关选项

### 指令逻辑(Execute)

此方法会接收客户端传入的  **`原始数据`** , 用于处理相关的业务, 返回一个  **`error`** 信息,  若业务处理失败, 系统会将error信息 **`自动推送给客户端`**

实现指令后,需要将当前指令注册到  **`WS-Server的加载指令列表(GetCommandList)中`** , 这样系统会自动加载指令, 并解析相应的指令逻辑
