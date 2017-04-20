import Vue from 'vue'
import Vuex from 'vuex'

import App from './vue/App.vue'

import { SOME_MUTATION } from './mutation/mutation-types'

import myPlugin from './plugin/myPlugin'
const DEBUG_MODE = process.env.NODE_ENV !== 'production';

Vue.use(Vuex)

const counterModule = {
  plugins: [myPlugin],
  state: {
    count: 0
  },
  mutations: {
    [SOME_MUTATION] (state) {
      state.count += 1000
    },
    increment (state,payload) {
      // state.count += payload.amount
      state.count++
    },
    decrement (state,payload) {
      // state.count -= payload.amount
      state.count--
    }
  },
  actions: {
    increment ({ commit },payload) {
      return new Promise( (resolve, reject) => {
          commit('increment',payload)
          console.log(store.state.counter.count)
          resolve()
        }
      )
    },
    decrement ({ dispatch, commit },payload) {
      return new Promise( (resolve, reject) => {
          commit('decrement',payload)
          console.log(store.state.counter.count)
          resolve()
        }
      )
      // return dispatch({
      //   type: 'increment',
      //   amount: 0
      // }).then(() => {
      //   commit('decrement',payload)
      // })
      // console.log(context)
      // context.commit('decrement')
    },
    SOME_MUTATION (context) {
      console.log(store.state.counter.count)
      context.commit('SOME_MUTATION')
    }
  }
}

const todosModule = {
  state: {
    todos: [
      {
        id: 1,
        text: 'todo01',
        done: true
      },
      {
        id: 2,
        text: 'todo02',
        done: false
      }

    ]
  },
  getters: {
    doneTodos: (state,getters) => {
      return state.todos.filter((todo) => {
        return todo.done
      })
    }
  }
}

const inputModule = {
  state: {
    message: 'メッセージを入力してください'
  },
  mutations: {
    input (state,payload) {
      state.message = payload.message
    },
  },
  actions: {
    input (context,payload) {
      context.commit('input',payload)
    }
  }
}


const store = new Vuex.Store({
  strict: DEBUG_MODE,
  modules: {
    counter: counterModule,
    todos: todosModule,
    input: inputModule
  },


  // state: {
  //   count: 0,
  //   todos: [
  //     {
  //       id: 1,
  //       text: 'todo01',
  //       done: true
  //     },
  //     {
  //       id: 2,
  //       text: 'todo02',
  //       done: false
  //     }

  //   ]
  // },
  // mutations: {
  //   [SOME_MUTATION] (state) {
  //     state.count += 1000
  //   },
  //   increment (state,payload) {
  //     state.count += payload.amount
  //     // state.count++
  //   },
  //   decrement (state,payload) {
  //     // state.count -= payload.amount
  //     state.count--
  //   }
  // },
  // actions: {
  //   increment ({ commit },payload) {
  //     return new Promise( (resolve, reject) => {
  //         commit('increment',payload)
  //         resolve()
  //       }
  //     )
  //   },
  //   decrement ({ dispatch, commit },payload) {
  //     return dispatch({
  //       type: 'increment',
  //       amount: 1000
  //     }).then(() => {
  //       commit('decrement',payload)
  //     })
  //     // console.log(context)
  //     // context.commit('decrement')
  //   },
  //   SOME_MUTATION (context) {
  //     console.log(context)
  //     context.commit('SOME_MUTATION')
  //   }
  // },
  // getters: {
  //   doneTodos: (state,getters) => {
  //     return state.todos.filter((todo) => {
  //       return todo.done
  //     })
  //   }
  // }
})

console.log(store);

const app = new Vue({
  el: '#app',
  store,
  components: {
    'app': App
  },
  render: (createElement) => {
    return createElement('app');
  }
})