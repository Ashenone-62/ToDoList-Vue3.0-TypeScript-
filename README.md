# ToDoList-Vue3.0-TypeScript-
基于vue3.0与typescript的todolist

## Vuex事件环

### Vuex工作流

1. 组件 --> dispatch(派发) -->action
   1. dispatch --> actionType --> 确定某一个action
2. action --> commit(调用) --> mutation
3. mutation --> change(修改) --> state
4. render方案（state --> 数据流 --> 视图）

### 文件集合

1. actionTypes——action类型
2. actions——调用mutation的方法
3. mutations——更改state的方法
4. state——中央数据管理池
5. store——将actions，mutation，state汇总于此进行管理

## 组件划分

- todoList
  - todoInput
  - todoList
    - todoItem
      - 完成或未完成的选择——checkbox
      - 删除该项——button
      - 确认正在做的按钮——button

## 参考文档

https://v3.vuejs.org/