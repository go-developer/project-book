---
title : 连接管理
---

## 连接管理实例的配置

- 首先, 长连接模块需要  **`开启连接存储`**
- 使用默认的 ConnectionManager, 或者自行注入管理实例

如果开启连接存储, 但是注入的连接管理实例为 nil , 也视为 关闭连接管理功能

## 连接管理的接口约束

```go
// IConnection 连接管理接口定义
type IConnection interface {
    // Store 存储
    Store(ctx *context.WSContext)
    // Del 移除
    Del(ctx *context.WSContext, message string)
    // GetCtxList 获取连接列表
    GetCtxList(cidList ...string) []*context.WSContext
    // Clear 清空连接
    Clear(message string)
}
```

### 存储连接(Store)

将连接存入内存中

### 删除连接(Del)

从内存中删除一个连接, 同时会  **`主动关闭当前连接`** , 如果传入的  **`message`** 不为空, 在关闭连接前, 会主动向客户端发送一条消息

### 查询连接列表(GetCtxList)

根据传入的连接ID, 查询对应的连接, 注意 : 连接ID对应的连接可能已经不存在, 注意对异常的检测

### 清空连接

清除全部的在线连接, 如果传入的  **`message不为空`** , 会向所有客户端写入一条消息
