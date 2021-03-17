import { SET_TODO, SET_TODO_LIST, REMOVE_TODO, SET_TODO_STATUS } from "@/store/actionTypes"
import { ITodo, TODO_STATUS } from "@/../typings"
import { Store, useStore } from "vuex"

export interface IuseTodo {
    setTodo: (value: string) => void;
    setTodoList: () => void;
    removeTodo: (id: number) => void;
    setStatus: (id: number) => void;
    setDoing: (id: number) => void;
}

interface IuseLocalStorage {
    getLocalList: () => ITodo[];
    setLocalList: (todoList: ITodo[]) => void;
}

function useTodo(): IuseTodo{
    const store: Store<any> = useStore();
    const { setLocalList, getLocalList }: IuseLocalStorage = useLocalStorage();
    const todoList: ITodo[] = getLocalList();

    function setTodo(value: string): void {
        const todo: ITodo = {
            id: new Date().getTime(),
            content: value,
            status: TODO_STATUS.WILLDO
        }
        store.dispatch(SET_TODO,todo)
        setLocalList(store.state.list)
    }

    function setTodoList(): void {
        store.dispatch(SET_TODO_LIST,todoList);
    }

    function removeTodo(id: number): void {
        store.dispatch(REMOVE_TODO,id)
        setLocalList(store.state.list)
    }

    function setStatus(id: number): void {
        store.dispatch(SET_TODO_STATUS,id)
        setLocalList(store.state.list)
    }

    function setDoing(id: number): void {
        console.log("setDoing")
    }

    return {
        setTodo,
        setTodoList,
        removeTodo,
        setStatus,
        setDoing,
    }
}

function useLocalStorage(): IuseLocalStorage {
    
    function getLocalList(): ITodo[] {
        
        return JSON.parse(localStorage.getItem('todoList') || '[]')
    }

    function setLocalList(todoList: ITodo[]): void {
        localStorage.setItem('todoList',JSON.stringify(todoList))
    }

    return {
        getLocalList,
        setLocalList
    }
}

export {
    useTodo
}