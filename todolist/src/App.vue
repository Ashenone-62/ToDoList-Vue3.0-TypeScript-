<template>
  <div class="wrapper">
    <todo-input />
    <todo-list 
      :todoList="todoList"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import { Store, useStore } from 'vuex';
import TodoInput from "./components/TodoInput/index.vue"
import TodoList from "./components/TodoList/index.vue"
import { IuseTodo, useTodo } from './hooks';

// defineComponent包裹会获得更完善的提示
export default defineComponent({
  name: 'App',
  components:{
    TodoInput,
    TodoList
  },
  setup(){
    // 通过useTodo钩子解构获取setTodoList
    const { setTodoList }: IuseTodo = useTodo();
    // 定义store
    const store: Store<any> = useStore();

    onMounted(()=>{
      //页面挂载的时候设置List（将localStorage中的list赋值给state里的list）
      setTodoList();
    })

    //不是传入的属性，需要return出去
    return {
      //响应式，每次list改变会重新计算渲染
      todoList: computed(() => store.state.list)
    }
  }
})
</script>

