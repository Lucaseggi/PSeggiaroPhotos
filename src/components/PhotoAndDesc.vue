<template>

  <v-row>
    <v-col>
      <v-img
        :width="300"
        aspect-ratio="16/9"
        :src="group.main"
      />
      <v-card-text>
        {{ group.name }}
      </v-card-text>
    </v-col>
  </v-row>

</template>

<script setup>
  import {defineProps, ref} from 'vue'
  const props = defineProps(['group'])

  const group = ref(props.group)

</script>

<style scoped>

</style>
