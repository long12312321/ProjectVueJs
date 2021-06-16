import Vue  from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


const storeData = {
    state: {
        todos:[
            {id:1 ,title:'Name 1'},
            {id:2 ,title:'Name 2'},
            {id:3 ,title:'Name 3'},
        ]
    },
    getters:{
        getAll: state => state.todos,
        getTotal : state => state.todos.length
    },
    actions:{
        deleteTodo({commit} ,todoId){
            commit('DELETE_TODO',todoId);
        },
        addTodo({commit} ,newTodo){
            commit('ADD_TODO',newTodo);
        },
        editTodo({commit},todo){
            commit('EDIT_TODO',todo);
        }
    },
    mutations:{
        DELETE_TODO(state,todoId){
            state.todos = state.todos.filter(todo =>todo.id !== todoId);
            
        },
        ADD_TODO(state,newTodo){
            state.todos.push(newTodo);
        },
        EDIT_TODO(state,todo){
                const index = state.todos.findIndex((t) => t.id == todo.id);
                if (index != -1) {
                  state.todos.splice(index,1,todo);
                }
        }

    }
}
const store = new Vuex.Store(storeData)

export default store