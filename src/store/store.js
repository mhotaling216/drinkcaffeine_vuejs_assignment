import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//States: https://vuex.vuejs.org/en/state.html
const state = {
  count: 1
}

//Getters: https://vuex.vuejs.org/en/getters.html
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd' // => (arrow syntax defines)  % (modulus) === (check if remainder is 0) ? '' (return a string) : (opposite case return odd)
}

//Mutations: https://vuex.vuejs.org/en/mutations.html
const mutations = {
  increment (state){
    state.count++;
  },
  decrement(state){
    state.count--;
  }
}

//Actions: https://vuex.vuejs.org/en/actions.html
const actions = {
  //increment: (context) => context.commit('increment'), //Can also pass in payload parameter (e.g.(context, payload)) which can contain object properties
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd: ({commit, state}) => {
    if((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync: ({ commit }) => {
    return new Promise((response, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }

}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
