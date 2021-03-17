<template>
  <div>
    <input 
      type="checkbox"
      :checked="item.status === FINISHED"
      @click="setStatus(item.id)"
    />

    <span :class="item.status === FINISHED ? 'line-through' : ''">
      {{item.content}}
    </span>

    <button 
      @click="removeTodo(item.id)"
    >删除</button>

    <button
      @click="setDoing(item.id)" 
      v-if="item.status !== FINISHED"
      :class="item.status === DOING ? 'doing' : 'willdo'"
    >
      {{item.status === DOING ? "正在做" : "马上做"}}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ITodo, TODO_STATUS } from "../../../typings";

interface IStatusState {
  DOING: TODO_STATUS,
  WILLDO: TODO_STATUS,
  FINISHED: TODO_STATUS
}

export default defineComponent( {
    name:"Todo-Item",
    props:{
      item: Object as PropType<ITodo>
    },
    setup(props, { emit }){
      const statusState: IStatusState = {
        DOING: TODO_STATUS.DOING,
        WILLDO: TODO_STATUS.WILLDO,
        FINISHED: TODO_STATUS.FINISHED
      }

      const removeTodo = (id: number): void => {
        emit('removeTodo',id)
      }

      const setStatus = (id: number): void => {
        emit('setStatus',id)
      }

      const setDoing = (id: number): void => {
        emit('setDoing',id)
      }

      return{
        ...statusState,
        removeTodo,
        setDoing,
        setStatus
      }
    }
})
</script>

<style>
  .line-through {
    text-decoration: line-through;
  }
  .doing{
    background-color: #b4b4b4;
    color: white;
  }
  .willdo{
    background-color: orange;
    color: white;
  }
</style>