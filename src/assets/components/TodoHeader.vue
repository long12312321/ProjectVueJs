<template>
  <nav class="container mb-4 mt-4">
    <div class="row">
      <div class="col-9"></div>
      <div class="col-2">
        <select class="form-select"  aria-label="Default select example" v-model="lang"  @change="handleChange($event)">
          <option value="en">English</option>
          <option value="vn">VietNamese</option>
        </select>
     
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    data: function(){
        const lang = localStorage.getItem('lang') || 'en';
        return{
            lang:lang
        }
    },
    methods:{
        handleChange(event){
            localStorage.setItem('lang',event.target.value);
            window.location.reload();
        }
    }
};
</script>

<style>
select {
  padding-right: 20px;
  float: right;
}
</style>