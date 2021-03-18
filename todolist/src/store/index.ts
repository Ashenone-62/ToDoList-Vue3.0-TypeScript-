import { createStore } from 'vuex';
import state from "@/store/state";
import mutations from "@/store/mutations";
import actions from "@/store/actions";
// 分包导入
export default createStore({
  state,
  mutations,
  actions,
})
