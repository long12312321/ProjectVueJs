<template>
<div class="row">
  <div v-if="!isEditing" >
    <input type="text" @change="todoTextchange" v-bind:value="todoText" />
      <button type="submit" @click="addInput" class="btn btn-primary"> {{$t('Add')}}</button>
  </div>
  <div v-else>
  <input type="text" @change="todoTextchange" v-bind:value="ListE.title" class="t" />
    
    <button type="submit" v-on:click="editOnClick(ListE)" class="btn btn-primary" >{{$t('Save')}}</button>
  </div>
   </div>
   
</template>

<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";
export default {
  name: "todoInput",
  props: {
    isEditing: Boolean,
    ListE:{
        type:Object
    }

  },
  data() {
    return {
      todoText: "",
     
     
    };
  },
  methods: {
    ...mapActions(["addTodo","editTodo"]),
    editOnClick(ListE){
      const updTodo={
        id:ListE.id,
        title:this.todoText
      }
      this.editTodo(updTodo);
      this.todoText = "";
      this.$emit('checkEdit');
    },
    todoTextchange(e) {
      this.todoText = e.target.value;
      
    },
   
    
    addInput() {
      if (this.isEditing === false) {
        this.addTodo({
          id: v1(),
          title: this.todoText,
        });
        this.todoText = "";
      }
    },
  },
};
</script>

<style>
</style>