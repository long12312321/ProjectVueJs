<template>
  <div class="container">
    <h1>{{ $t("To List") }}</h1>
    <hr />
    <h2>{{ $t("Total of List") }}:{{ getTotal }}</h2>
    <table class="table table-bordered border-primary">
      <thead>
        <tr>
          <th scope="col">{{ $t("NumberID") }}</th>
          <th scope="col">{{ $t("Handle") }}</th>
        </tr>
      </thead>
      <tbody v-for="todo in getAll" :key="todo.id">
        <todo-item v-bind:todo="todo" v-on:editItems="editItem" v-on:deleteItems="deleteItem" />
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoItem from "./TodoItem.vue";
export default {
  name: "todoList",
  components: {
    TodoItem,
  },
  computed: mapGetters(["getAll", "getTotal"]),
  methods: {
    editItem(data) {
      // console.log('list',data);
      this.$emit("editList", data);
    },
    deleteItem() {
      // console.log('list',data);
      this.$emit("deleteList");
    },
    
  },
};
</script>

<style>
</style>