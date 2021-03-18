// todo项结构
interface ITodo {
    id: number;
    content: string;
    status: TODO_STATUS;
}

// todoList项结构
interface IState {
    list: ITodo[];
}

// todo项的status结构
enum TODO_STATUS {
    WILLDO = "willdo",
    DOING = "doing",
    FINISHED = "finished"
}

//导出接口
export {
    ITodo,
    IState,
    TODO_STATUS
}