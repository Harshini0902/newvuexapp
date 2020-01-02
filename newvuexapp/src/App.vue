<template>
  <div id="app" class="container">
    <ListOfCourses/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import ListOfCourses from './components/listofcourses.component.vue';
export default {
  name: 'app',
  components: {
    ListOfCourses
  }
}
</script>

<style>

</style>
