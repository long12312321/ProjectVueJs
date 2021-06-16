<template>
  <div id="app">
   
 <todo-header></todo-header>
    <todo-input v-bind:isEditing="isEditing"
     v-bind:ListE="ListE" 
     v-on:checkEdit="HanldeEdit"  />
    <todo-list 
     v-on:editList="handleList" 
     v-on:deleteList="handleDelete" />
  </div>
</template>

<script>
import TodoList from "./assets/components/TodoList.vue";
import TodoInput from "./assets/components/TodoInput.vue";
import TodoHeader from './assets/components/TodoHeader.vue';
import Header from './assets/components/TodoHeader.vue';
export default {
  name: "app",
  data(){
    return{
          isEditing : false,
          ListE:{
              id:0,
              title:''
          }
              
          
    }
  },
  components: {
    TodoInput,
    TodoList,TodoHeader,
    Header
  },
  methods: {
    handleList(data) {
       // console.log('App.vue',data);
        this.isEditing= true;
       // console.log('isEditing',this.isEditing);
         this.ListE.id=data.id;
        this.ListE.title=data.title;
    },
    HanldeEdit(){
        this.isEditing=false;
    },
    handleDelete(){
        this.isEditing=false;
    }
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
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
</style>
