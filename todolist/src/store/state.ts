import { IState } from "@/../typings";

export default <IState> {
    list:[],
}

/**
 * DATA
 *  -list:[]
 *      -listItem{}
 *          -id: number —— new Date().getTime
 *          -content: string —— todoValue
 *          -status:enum —— FINISHED DOING WILLDO
 * 
 * **/ 