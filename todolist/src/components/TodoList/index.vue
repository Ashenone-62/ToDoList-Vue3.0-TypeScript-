<template>
    <div>
        <h1>Todo-List</h1>
        <todo-item></todo-item>
    </div>
</template>

<script>
    import TodoItem from "@/components/TodoList/TodoItem.vue"
import { defineComponent } from "vue"
    export default defineComponent({
        name: "Todo-List",
        components: {
            TodoItem
        },
    })
</script>

<style>

</style>