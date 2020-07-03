---
  title: 浅析webpack
  tags: 
    - webpack
    - 前端工程化
  date: 2020-6-18
---
# 浅析webpack

## 一，webpack源码分析总览

我把webpack分为三个部分理解，首先是webpack的运行机制（流程的控制  Tapable），loader机制，plugins机制。

## 二，运行机制

webpack`本质上是一种事件流的机制，它的工作流程就是将各个插件串联起来，而实现这一切的核心就是`Tapable。


### 	tapable

​		什么是Tapable，事件流程处理方法。

​		提供事件流钩子（同步，异步钩子）

## 二，loader分析

​	文章推荐：https://juejin.im/post/5e40161a6fb9a07cce74d3db

Webpack对`loader`的处理主要在模块构建期间，另外做了缓存和监听操作，主要有下面三个流程：

- `RuleSet`：初始化时解析loader相关配置；
- `NormalModuleFactory.create`：根据配置匹配当前模块用到的loader，并将初始化好的`loader`数组通过构造函数传入；
- `NormalModule`：构建模块时使用`loader-runner`解析loader，获取处理后的文件内容；

## 三，plugin

插件关键点：

1. apply（compiler）方法；
2. compiletion Hooks
3. compiler Hooks

## 四，针对性的性能优化



