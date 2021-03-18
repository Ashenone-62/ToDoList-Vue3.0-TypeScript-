import { IState, ITodo } from "typings";
import { Commit } from "vuex";
import { SET_TODO, SET_TODO_LIST, REMOVE_TODO, SET_TODO_STATUS, SET_DOING } from "./actionTypes";

// ICtx结构
interface ICtx {
    commit: Commit;
    state: IState;
}
// ctx中第二项一定会有state，所以写也行不写也行，这里我们只是调用commit方法，所以选择了不写
export default {
    [SET_TODO]({ commit }: ICtx,todo: ITodo): void{
        commit(SET_TODO,todo)
    },
    [SET_TODO_LIST]({ commit }: ICtx,todoList: ITodo[]): void{
        commit(SET_TODO_LIST,todoList)
    },
    [REMOVE_TODO]({ commit }: ICtx,id: number): void{
        commit(REMOVE_TODO,id)
    },
    [SET_TODO_STATUS]({ commit }: ICtx,id: number): void{
        commit(SET_TODO_STATUS,id)
    },
    [SET_DOING]({ commit }: ICtx,id: number): void{
        commit(SET_DOING,id)
    }

}