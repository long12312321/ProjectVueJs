<template>
  <tr>
    <td>{{ todo.title }}</td>
    <td >
      <button v-on:click="handleEdit" class="btn btn-success">Edit</button>
      <button v-on:click="handleDelete(todo.id)" class="btn btn-danger"> Delete</button>
    </td>
    
  </tr>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "todoItem",
  data(){
    return{
    }
  },
  props: {
    todo: {},
  },
  methods: {
    ...mapActions(["deleteTodo"]),
    handleEdit(e) {
      var data = {
        id: this.todo.id,
        title: this.todo.title,
      };
      //console.log("item.vue");
      this.$emit("editItems", data);
    },
   handleDelete(todoID){
       this.deleteTodo(todoID);
        this.$emit("deleteItems");
       
   },
  },
};
</script>

<style>
</style>