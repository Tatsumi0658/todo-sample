import Vuex from 'vuex';

const createStore = () =>{
  return new Vuex.Store({
    state: () => ({
      todos: [
        {content: 'hogehoge', created: '2020-03-31 15:30'},
        {content: 'ageage', created: '2020-04-30 09:00'}
      ]
    }),
    mutations:{
      insert: function(state, obj){
        var d = new Date();
        var fmt = d.getFullYear()
                + '-' + ('00' + (d.getMonth() + 1)).slice(-2)
                + '-' + ('00' + d.getDate()).slice(-2)
                + '-' + ('00' + d.getHours()).slice(-2)
                + '-' + ('00' + d.getMinutes()).slice(-2);
        state.todos.unshift({
          content: obj.content,
          created: fmt,
          stete: '作業前'
        })
      }
    }
  })
}

export default createStore
