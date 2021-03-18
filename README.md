# TodoList_TypeScript

## 引言

该项目是基于Vue3.x与Typescript开发的，核心逻辑是通过操作Vuex来完成视图的修改删除。其目的主要在于对Typescript的一个实操练习，同时初识Vue3.x。



## 技术栈

> Vue3.x
>
> Vuex
>
> TypeScript



## Vuex工作流

![Vuex工作流](https://vuex.vuejs.org/vuex.png)



>1. 组件派发（dispatch）一个action
>   - 派发（dispatch）要通过一个Type来确定派发谁（action）
>2. action通过commit方法来调用mutation中编写的逻辑方法
>
>3. mutation中的逻辑方法去修改中央数据管理池（state）中的数据
>
>4. 最终render方案（state --> 数据流 --> 视图）完成渲染



## 结构划分

#### 文件划分

- typings：给store.state中的属性定义接口
  - ITodo——List中每一项的结构（接口）
  - IState——State的结构（接口）
  - TODO_STATUS———枚举，保存todo的三种状态（WILLDO,DOING,FINISHED）
- hooks：钩子
  - watch()——用于监听list变化，一变化就调用setLocalList()更新localStorage里的数据
  - useTodo()
    - setTodo()——创建todo对象，派发SET_TODO
    - setTodoList()——派发SET_TODO_LIST
    - removeTodo()——派发REMOVE_TODO
    - setStatus()——派发SET_TODO_STATUS
    - setDoing()——派发SET_DOING
  - useLocalStorage()
    - getLocalList()——拿到todoList项，如果没有就给一个字符串空数组
    - setLocalList()——设置todoList项，通过getLocalList()拿到最新的数据然后更新
- store： Vuex仓库
  - actionTypes——定义type，dispatch将根据此type来确定action
  - actions——dispatch确定了action后调用commit方法来调用mutations中对应的方法
  - mutations——action调用了对应的方法后，修改state中的数据
  - state——中央数据管理池
  - index——将actions，mutations，state汇总于此进行管理

#### 组件划分

- App
  - todoInput
    - todoList
  - todoItem
    - checkbox——完成或未完成的选择
    - button——删除该项
    - button——确认正在做的按钮

## 总结

- 初识Vue3.x,了解一些新特性
- 熟悉了Vuex工作流
- 简单实操了一下TypeScript，虽然声明文件和一些特性还没用到
- 实操了更美观的代码编写

## 参考文档

[Vue3.x](https://v3.vuejs.org/)