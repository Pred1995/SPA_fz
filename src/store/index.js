import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packages: null,
    currentPage: 0,
    lastPage: 1,
    error: null,
    show: false
  },
  mutations: {
    setPackages(state, data) {
      state.packages = data
    },
    setLastPage(state, {lastPage}) {
      state.lastPage = lastPage
    },
    setCurrentPage(state, currentPage) {
      state.currentPage = currentPage
    },
    setError(state, data) {
      state.error = data
    },
    setShow(state, bool) {
      state.show = bool
    },
    Reset(state) {
      state.currentPage = 0
      state.lastPage = 1
      state.packages = null
    }
  },
  getters: {
    packages: s => s.packages,
    lastPage: s => s.lastPage
  },
  actions: {
    async getPackages ({ commit }, packages) {
      try {
        commit("setShow", true)
        commit("Reset")
        const response = await axios.get(`https://data.jsdelivr.com/v1/package/npm/${packages || null}/stats`)
        if (response.data.total === 0) {
          commit("setShow", false)
          return commit("setError", "Пакет не найден")
        }
        const lastPage = Math.ceil(Object.keys(response.data.versions).length / 10)
        commit("setLastPage", {lastPage})
        const array = [],
          result = []
        for (let x = 1; x < Object.keys(response.data.versions).length; x++) array.push(Object.keys(response.data.versions).map(key => ({id: key, rank: response.data.rank, name: packages, total: response.data.versions[key].total}))[x]);
        while(array.length) result.push(array.splice(0, 10));
        commit("setPackages", result)
        commit("setShow", false)
      } catch (e) {
        commit("setShow", false)
        throw e
      }
    }
  }
})
