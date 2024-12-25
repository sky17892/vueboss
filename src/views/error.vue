<template>
  <div class="error">
    <h1>404 or error page</h1>
    <h3><router-link to="/">page over and anothor page move</router-link></h3>
  </div>
</template>

<script>
import { defineComponent} from 'vue';

export default defineComponent({
  name: 'errorPage',
 
});
</script>

<style scoped>
a {
  color: black !important;
}
</style>