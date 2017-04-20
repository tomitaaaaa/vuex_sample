<template>
  <div>
    <p>count: {{ count }}</p>
    <p>{{ hoge }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="SOME_MUTATION">ほげ</button>
    </p>
    <p>{{ doneTodos }}</p>

    <p>{{ message }}</p>
    <input type="text" v-on:input="updateMessage">
  </div>
</template>

<script>
  import { mapState,mapGetters,mapMutations,mapActions } from 'vuex'

  export default {
    computed: {
      hoge() {
        return 'hogehoge'
      },
      ...mapState({
        count: (state) => {
          return state.counter.count
        },
        message: (state) => {
          return state.input.message
        }
      }),
      ...mapGetters({
        doneTodos: 'doneTodos'
      })
    },
    methods: {
      increment () {
        this.$store.dispatch({
          type: 'increment',
          amount: 10
        })
        // this.$store.commit({
        //   type: 'increment',
        //   amount: 10
        // })
      },
      updateMessage: function(e) {
        this.$store.dispatch({
          type: 'input',
          message: e.target.value
        })
      },
      // decrement () {
      //   this.$store.commit({
      //     type: 'decrement',
      //     amount: 10
      //   })
      // },
      // SOME_MUTATION () {
      //   this.$store.commit({
      //     type: 'SOME_MUTATION'
      //   })
      // },
      // ...mapMutations([
      //   'increment',
      //   'decrement',
      //   'SOME_MUTATION'
      // ]),
      ...mapActions([
        // 'increment',
        'decrement',
        'SOME_MUTATION'
      ])
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  button{
    width: 50px;
    height: 30px;
    border-radius: 15px;
    outline: none;
    border: none;
    background-color: tomato;
    color: #fff;
  }
</style>
