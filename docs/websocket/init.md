---
title: 快速上手
---

## 运行项目

### 方案一

```shell
git clone git@github.com:go-developer/websocket.
cd websocket/example
go run server.go
```

### 方案二

- 创建项目 : mkdir my_webxocket && cd my_websocket && go mod init my_websocket
- 创建server.go, 并将下面的代码放入server.go
- go run server.go

```go
package main

import (
    "fmt"

    "github.com/go-developer/websocket/message"

    "github.com/go-developer/websocket"
    "github.com/go-developer/websocket/abstract"
    "github.com/go-developer/websocket/context"
)

func main() {
    websocket.NewWebsocketServe(&Example{})
}

type Example struct {
}

func (e Example) Connect(ctx *context.WSContext) error {
    fmt.Println("建立连接成功")
    message.Response(ctx, map[string]interface{}{"say": "hello world!", "cid": ctx.ConnectionID})
    return nil
}

func (e Example) Disconnect(ctx *context.WSContext) {
    fmt.Println("断开连接成功")
}

func (e Example) Close(ctx *context.WSContext, code int, message string) error {
    fmt.Println("关闭连接成功")
    return nil
}

func (e Example) HandshakeURL() []string {
    return []string{
        "/ws/test",
    }
}

func (e Example) GetCommandList() []abstract.ICommand {
    return []abstract.ICommand{&exampleCommand{}}
}

func (e Example) GetModuleFlag() string {
    return "example"
}

func (e Example) GetServerPort() int {
    return 10099
}

func (e Example) GetWSServerConfig() []config.SetWSServerConfig {
    return []config.SetWSServerConfig{
        config.SetWSServerLogEnable("./logs", e.GetModuleFlag()+".log", zapcore.DebugLevel, logger.TimeIntervalTypeHour),
    }
}

type exampleCommand struct {
}

func (e exampleCommand) GetCommand() string {
    return "ping"
}

func (e exampleCommand) GetConfigOption() []config.SetCommandConfig {
    return []config.SetCommandConfig{config.ClosePushCommandErrorMessage()}
}


func (e exampleCommand) Execute(ctx *context.WSContext, data []byte) error {
    message.Response(ctx, map[string]interface{}{"ping": "pong"})
    return nil
}
```

## 测试

推荐一个长连接在线测试网站 : [Websocket长连接在线测试](http://www.websocket-test.com)

连接地址框内输入 :  **`ws://localhost:10099/example/ws/test`**

点击连接, 会收到类似 `{\cid\:\19216806-20210416220530-bb563e745de89e595e02bb7b791677b0\,\say\:\hello world!\}` 服务端响应

在输入框内输入  **`{"command":"ping"}`** , 会收到服务端响应 : `{\ping\:\pong\}`

## 完成

至此一个基本的场链接服务已经成功搭建,并开始运行
