---
title : 配置说明
---

## 写在前面

涉及到枚举类的配置, 强烈建议使用程序中的  **`枚举值`** , 而不要手动输入, 这样可以  **`保证后续包升级时,程序的兼容性`**

## WS-Server配置

|      配置项      |          类型           |              默认值               |                                            功能                                            |
| :--------------: | :---------------------: | :-------------------------------: | :----------------------------------------------------------------------------------------: |
|       Mode       |         string          |        config.RunModeDebug        |                            设置运行模式, 只支持 product / debug                            |
|    LogEnable     |          bool           |               false               |                   是否开启文件日志记录, 默认  **`false, 关闭文件日志`**                    |
|    LogConsole    |          bool           |               true                |                 是否开启控制台的日志输出, 默认  **`true, 开启控制台日志`**                 |
|     LogLevel     |      zapcore.Level      |        zapcore.DebugLevel         |        日志基于zap库,  **`不指定`** 或者指定  **`非法level`** , **`均使用默认值`**         |
|     LogPath      |         string          |          文件日志的路径           |                                项目目录下的**`logs`** 目录                                 | 开启文件日志时, 文件日志的存储路径 |
|     LogFile      |         string          | wsInstance.GetModuleFlag()+".log" |           开启文件日志时, 文件名称, 不手动设置, 默认值为 :  **`当前模块名.log`**           |
| LogSplitInterval | logger.TimeIntervalType |    logger.TimeIntervalTypeHour    | 开启文件日志时,日至自动切割的时间间隔,不指定或者指定非法配置,会使用  **`按小时`** 切割日志 |

### Mode值枚举

|   值    |                         常量定义                          | 含义     |
| :-----: | :-------------------------------------------------------: | :------- |
| product | (github.com/go-developer/websocket/config).RunModeProduct | 生产环境 |
|  debug  |  (github.com/go-developer/websocket/config).RunModeDebug  | 调试环境 |

### LogLevel值枚举

|  值   |               常量定义                | 含义                  |
| :---: | :-----------------------------------: | :-------------------- |
|  -1   | (go.uber.org/zap/zapcore).DebugLevel  | debug级别的日志记录   |
|   0   |  (go.uber.org/zap/zapcore).InfoLevel  | info级别的日志记录    |
|   1   |  (go.uber.org/zap/zapcore).WarnLevel  | warn级别的日志记录    |
|   2   | (go.uber.org/zap/zapcore).ErrorLevel  | error级别的日志记录   |
|   3   | (go.uber.org/zap/zapcore).DPanicLevel | DPanic 级别的日志记录 |
|   4   | (go.uber.org/zap/zapcore).PanicLevel  | Panic 级别的日志记录  |
|   5   |    (go.uber.org/zap/zapcore).Fatal    | Fatal 级别的日志记录  |

### LogSplitInterval 日志切割枚举

|  值   |                           常量定义                            | 含义                                       |
| :---: | :-----------------------------------------------------------: | :----------------------------------------- |
|   0   | (github.com/go-developer/gopkg/logger).TimeIntervalTypeMinute | 按 **`分钟`** 切割日志, 看看就行, 基本没用 |
|   1   |  (github.com/go-developer/gopkg/logger).TimeIntervalTypeHour  | 按 **`小时`** 切割日志                     |
|   2   |  (github.com/go-developer/gopkg/logger).TimeIntervalTypeDay   | 按 **`天`** 切割日志                       |
|   3   | (github.com/go-developer/gopkg/logger).TimeIntervalTypeMonth  | 按 **`月`** 切割日志                       |
|   4   |  (github.com/go-developer/gopkg/logger).TimeIntervalTypeYear  | 按 **`年`** 切割日志                       |

## 指令配置

|        配置项        | 类型  | 默认值 |                             功能                             |
| :------------------: | :---: | :----: | :----------------------------------------------------------: |
| PushMessageWithError | bool  |  true  | 指令执行失败时,是否向客户端推送失败信息,默认  **`开启推送`** |
