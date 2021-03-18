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
     * 
     * '@/hooks/'
     * 能找到hooks但是会报错
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

                // 判断键盘指令是不是13且todoValue有无内容
                 if(e.keyCode === 13 && todoValue.value.trim().length){
                    // 设置todo对象
                     setTodo(todoValue.value);
                    //  清空input框里的内容
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