import { IState, ITodo, TODO_STATUS } from "../../typings";
import { SET_TODO, SET_TODO_LIST, REMOVE_TODO, SET_TODO_STATUS, SET_DOING } from "./actionTypes";

export default {
    // SET_TODO
    [SET_TODO](state: IState,todo: ITodo): void{
        // 将todo项与当前list合并
        // 此处是一个坑
        state.list = [todo, ...state.list];
    },
    // SET_TODO
    [SET_TODO_LIST](state: IState,todoList: ITodo[]): void{
        // 将localStorage中的todoList给state.list
        state.list = todoList;
    },
    // REMOVE_TODO
    [REMOVE_TODO](state: IState,id: number): void{
        // 通过filter，如果点击项的id不相同就放过，相同就删除
        state.list = state.list.filter((item: ITodo) => item.id != id )
    },
    // SET_TODO_STATUS
    [SET_TODO_STATUS](state: IState,id: number): void{
        // 使用map来管理状态
        state.list = state.list.map((item: ITodo) => {
            // 如果点击项的id是用一个
            if(item.id === id){
                // 通过Switch的case分支来切换状态
                switch (item.status) {
                    case TODO_STATUS.FINISHED:
                        item.status = TODO_STATUS.WILLDO;
                        break;
                    case TODO_STATUS.WILLDO:
                    case TODO_STATUS.DOING:
                        item.status = TODO_STATUS.FINISHED;
                        break;
                
                    default:
                        break;
                }
            }
            // 将设置好的项返回出去
            return item;
        })
    },
    // SET_DOING
    [SET_DOING](state: IState,id: number): void{
        // 操作和上类似
        state.list = state.list.map((item: ITodo) => {
            if(item.id !== id){
                if(item.status === TODO_STATUS.DOING){
                    item.status = TODO_STATUS.WILLDO;
                }
            }else{
                item.status = item.status === TODO_STATUS.WILLDO
                ? TODO_STATUS.DOING
                : TODO_STATUS.WILLDO
            }

            return item;
        })
    },
}