<template>
    <div>
        <h1>Todo-List</h1>
        <todo-item
            v-for="item of todoList"
            :key="item.id"
            :item="item"
            @removeTodo="removeTodo"
            @setStatus="setStatus"
            @setDoing="setDoing"
        />
    </div>
</template>

<script lang="ts">
    import { ITodo } from "../../../typings"
    import TodoItem from "./item.vue"
    import { defineComponent, PropType } from "vue"
import { IuseTodo, useTodo } from "../../hooks"
    export default defineComponent({
        name: "Todo-List",
        props:{
            // 断言注解传入参数
            todoList: Array as PropType<ITodo[]>
        },
        components: {
            TodoItem
        },
        setup(){
            // 解构拿到方法
            const { removeTodo, setStatus, setDoing }: IuseTodo = useTodo(); 
        
            return {
                removeTodo, 
                setStatus, 
                setDoing
            }
        },
    })
</script>

<style>

</style>