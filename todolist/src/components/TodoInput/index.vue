<template>
    <div>
        <input 
            type="text"
            v-model="todoValue"
            @keyup="setTodoValue"
        />
    </div>
</template>

<script lang="ts">
    import {
        defineComponent,
        ref,
    } from "vue";

    /**
     * 能找到hooks但是会报错
     * '@/hooks/'
     * 
     * **/
    
    import { IuseTodo, useTodo } from '../../hooks/'

    export default defineComponent({
        name: "TodoInput",
        setup(){
            const todoValue = ref<string>('');
            const { setTodo }: IuseTodo = useTodo();
            const setTodoValue = (e: KeyboardEvent): void => {
                //e.keyCode已弃用，但是部分浏览器还支持
                //推荐使用e.code，但是部分浏览器还不支持
                 if(e.keyCode === 13 && todoValue.value.trim().length){
                     setTodo(todoValue.value);
                     todoValue.value = "";
                 }
            }

            return {
                todoValue,
                setTodoValue
             }
        }
    })
</script>

<style>

</style>