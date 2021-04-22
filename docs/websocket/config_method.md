---
title : 配置方法
---

## WS-Server 配置方法

### 启用文件日志记录

- 配置方法 : github.com/go-developer/websocket/config.SetWSServerLogEnable
- 参数 :

**`logPath :`** 文件日志存储的路径, 注意, 是路径, 不要带具体文件名, 默认值是和 可执行文件同级的logs目录, 当配置的路径不存在时, 会 `自动创建`

**`logFile :`** 日志文件名, 注意, 系统会给日志文件名拼接前缀, 如 : 按照小时切割日志, 文件名为 test.log, 则最终文件名为 2021-04-22-22-test.log , 表示 2021年4月22日22点的日志

**`splitInterval :`** 日志切割方式, 建议按照天或者小时切,具体取决于服务流量大小

**`logLevel :`** 日志记录级别, 这个和 [zap 日志库](https://github.com/uber-go/zap) 保持一致

### 启用终端日志输出

- 配置方法 : github.com/go-developer/websocket/config.EnableConsoleLog
- 说明 : 开发环境建议开启, 方便调试, 生产环境建议关闭

### 启用 pprof 服务状态监测

- 配置方法 : github.com/go-developer/websocket/config.EnablePprof
- 参数 : pprofPort , 在那个端口启动 pprof

### 禁用连接存储

- 配置方法 : github.com/go-developer/websocket/config.DisableStoreConnection

### 连接管理实例

- 配置方法 : github.com/go-developer/websocket/config.SetConnectionManager
- 参数 : 连接管理的实例, 实现管理接口, 默认值为 : github.com/go-developer/websocket/storage.connection

### 设置单条消息体最大值

- 配置方法 : github.com/go-developer/websocket/config.SetMaxMessageSize
- 参数 : maxMessageSize, 单条消息最大大小, 单位 `byte` , 默认值 `4096`

### 设置消息缓冲区大小

- 配置方法 : github.com/go-developer/websocket/config.SetMaxMessageBufferSize
- 参数 : maxMessageBufferSize , 缓冲区域大小, 单位 `byte` , 默认值 `8192`

### 设置消息写入的等待时间

- 配置方法 : github.com/go-developer/websocket/config.SetWriteWait
- 参数 : 最大等待时间, 单位 `秒` , 默认值 `10`

### 设置探活等待响应时间

- 配置方法 : github.com/go-developer/websocket/config.SetPongWait
- 参数 : 最大等待时间, 单位 `秒` , 默认值 `10`

### 设置探活事件间隔

- 配置方法 : github.com/go-developer/websocket/config.SetPongWait
- 参数 : 最大等待时间, 单位 `秒` , 默认值 `10`

## WS-Command 配置方法

### 关闭推送指令执行异常消息

- 配置方法 : github.com/go-developer/websocket/config.ClosePushCommandErrorMessage
- 说明 : 默认配置中, 当指令执行异常, 会给客户端推送异常消息, 如果需要关闭, 可在指令中独立配置关闭

### 关闭上行日志记录

- 配置方法 : github.com/go-developer/websocket/config.CloseLogUpData
- 说明 : 此配置依赖于 WS-Server 开启日志记录, 默认开启数据记录, 可在指令独立关闭

### 关闭下行日志记录

- 配置方法 : github.com/go-developer/websocket/config.CloseLogDownData
- 说明 : 此配置依赖于 WS-Server 开启日志记录, 默认开启数据记录, 可在指令独立关闭

### 关闭向客户端发送响应数据

- 配置方法 : github.com/go-developer/websocket/config.CloseResponseData
- 说明 : 默认配置中, 当指令执行成功时, 会将指令的返回结果推送给客户端, 如果客户端不需要返回结果, 可在指令中配置关闭
