<template>
  <v-app>
    <v-img
     src="@/assets/logo.png"/>
    <AppBar/>
      <v-btn v-if="showOnPhone()">
        Da button
      </v-btn>
    <router-view/>
  </v-app>

</template>

<script setup>
  import AppBar from "@/components/AppBar.vue";
  import {ref} from "vue";
  import PhotoAndDescGrid from "@/components/PhotoAndDescGrid.vue";

  let width = ref(window.innerWidth)
  function widthResizer(){
    width.value = window.innerWidth
    // console.log(width.value)
  }

  // Getting the width of the browser on load
  widthResizer()

  // Getting the width of the browser whenever the screen resolution changes.
  window.addEventListener('resize', widthResizer)

  function showOnPhone() {
    return width.value < 500
  }

</script>

<style scoped>


</style>
