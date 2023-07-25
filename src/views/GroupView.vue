<template>

  <v-container>
    <v-row>
      <v-card-text class="text-h2 px-0">
        {{group.name}}
      </v-card-text>
    </v-row>

    <v-row>
      <v-carousel
        hide-delimiters
        :cycle="playing">
        <template v-slot:prev="{ props }">
          <v-icon
            icon="mdi-chevron-left"
            @click="props.onClick"
            size="32"
            color="black"
          />
        </template>
        <template v-slot:next="{ props }">
          <v-icon
            icon="mdi-chevron-right"
            @click="props.onClick"
            size="32"
            color="black"
          />
        </template>
        <v-carousel-item v-for="image in group.pictures" :key="image"
                         :src="image"
                         cover
        />
      </v-carousel>
    </v-row>

    <v-row justify="end" class="py-2">
      <v-icon :icon="getIcon()" @click="pausePlay()"/>
    </v-row>

  </v-container>
</template>

<script setup>
  import {defineProps, computed, ref} from 'vue'
  const props = defineProps(['slug'])

  import groups from "@/stores/photos";

  const group = computed( () => {
    let device = groups.groups.find(
      (d) => d.name === props.slug
    )
    if (!device) return false
    return device
  })

  const playing = ref(true)

  function getIcon() {
    if (playing.value != 0) return "mdi-pause"
    return "mdi-play"
  }

  function pausePlay() {
    playing.value = !playing.value
  }

  function isPlaying() {
    return playing
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
