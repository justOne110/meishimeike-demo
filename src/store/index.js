import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchLog: [],// 历史记录
  },
  mutations: {
    // 添加
    setSearch(state, data) {
      if(data== "") return false
      if(state.searchLog.length>=10){
        state.searchLog.pop()
      }
      state.searchLog.unshift(data)
    },
    // 全部删除
    del(state){
      state.searchLog = []
    },
    // 删除
    delItem(state,data){
     let index = state.searchLog.findIndex(item=>{
       return item == data
     })

    //  console.log(index)
    state.searchLog.splice(index,1)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({
    storage: sessionStorage,
    key: "vuexxx"
  })],
  // plugins
})
