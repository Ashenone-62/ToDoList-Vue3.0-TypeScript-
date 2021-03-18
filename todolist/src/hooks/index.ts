import { SET_TODO, SET_TODO_LIST, REMOVE_TODO, SET_TODO_STATUS, SET_DOING } from "@/store/actionTypes"
import { ITodo, TODO_STATUS } from "@/../typings"
import { Store, useStore } from "vuex"
import { watch } from "@vue/runtime-core";

//定义useTodo钩子结构
export interface IuseTodo {
    setTodo: (value: string) => void;
    setTodoList: () => void;
    removeTodo: (id: number) => void;
    setStatus: (id: number) => void;
    setDoing: (id: number) => void;
}

//定义useLocalStorage钩子结构
interface IuseLocalStorage {
    getLocalList: () => ITodo[];
    setLocalList: (todoList: ITodo[]) => void;
}

//定义useTodo钩子
function useTodo(): IuseTodo{
    // 定义store
    const store: Store<any> = useStore();
    // 执行useLocalStorage后解构出setLocalList，getLocalList
    const { setLocalList, getLocalList }: IuseLocalStorage = useLocalStorage();
    // 获取localStorage的todoList
    const todoList: ITodo[] = getLocalList();

    /**
     * 
     * 监听
     * 两个参数，第一个参数返回要监听的数据
     * 第二参数，执行逻辑
     * 
     * **/ 
    watch(() => {
        return store.state.list;
    },(todoList) => {
        setLocalList(todoList)
    })

    // 创建todo对象，然后派发SET_TODO，参数为todo对象
    function setTodo(value: string): void {
        const todo: ITodo = {
            id: new Date().getTime(),
            content: value,
            status: TODO_STATUS.WILLDO
        }
        store.dispatch(SET_TODO,todo);
    }

    // 派发SET_TODO_LIST，参数为上面通过getLocalList获取的todoList
    function setTodoList(): void {
        store.dispatch(SET_TODO_LIST,todoList);
    }
    
    // 派发REMOVE_TODO，参数为点击时传入的id
    function removeTodo(id: number): void {
        store.dispatch(REMOVE_TODO,id);
    }

    // 派发SET_TODO_STATUS，参数为点击时传入的id
    function setStatus(id: number): void {
        store.dispatch(SET_TODO_STATUS,id);
    }

    // 派发SET_DOING，参数为点击时传入的id
    function setDoing(id: number): void {
        store.dispatch(SET_DOING,id);
    }

    // 导出
    return {
        setTodo,
        setTodoList,
        removeTodo,
        setStatus,
        setDoing,
    }
}

//定义useLocalStorage钩子
function useLocalStorage(): IuseLocalStorage {
    //  获取localStorage的todoList
    function getLocalList(): ITodo[] {
        // 返回localStorage的todoList，没有就给一个字符串空数组
        return JSON.parse(localStorage.getItem('todoList') || '[]')
    }
    // 设置localStorage的todoList
    function setLocalList(todoList: ITodo[]): void {
        localStorage.setItem('todoList',JSON.stringify(todoList))
    }
    // 返回
    return {
        getLocalList,
        setLocalList
    }
}

// 导出useTodo，useLocalStorage现在只在内部使用所以不导出
export {
    useTodo
}