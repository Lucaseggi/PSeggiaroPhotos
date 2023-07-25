<template>
  <v-container class="v-container py-8">
    <v-row align="center" justify="center">
      <v-icon icon="mdi-menu" size="x-large"/>
      <v-card-title @click="$router.push('/')">Pablo Seggiaro - Fotografía</v-card-title>
      <v-spacer/>
      <v-icon icon="mdi-instagram" @click="openInstagram"/>
    </v-row>
  </v-container>
</template>

<script setup>

  function openInstagram() {
    window.open("https://www.instagram.com/pabloseggiaro/")
  }

</script>

<style scoped>

.v-container {
  width: 60%;
  padding: 16px;
  margin-right: auto;
  margin-left: auto;
}

@media (max-width: 767px) {
  .v-container {
    width: 90%;
    padding: 16px;
    margin-right: auto;
    margin-left: auto;
  }
}

</style>
