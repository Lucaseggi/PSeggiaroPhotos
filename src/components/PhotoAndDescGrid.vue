<template>
  <v-container class="v-container flex py-0">
    <v-row align="center" justify="center" class="my-0">
      <v-card v-for="group in groups.groups" :key="group" class="px-0 mx-2 elevation-0"
               :to="{
                     name: 'groups',
                     params: {slug: group.name}
                   }">
          <v-col class="pa-0">
            <v-hover v-slot="{ hover }">
              <v-img
                :width="imgWidth"
                :height="imgHeight"
                cover
                :src="group.main"
                class="elevation-2 mx-0 px-0"
              />
            </v-hover>
            <v-card-text class="px-1 py-3">
              {{ group.name }}
            </v-card-text>
          </v-col>
      </v-card>
    </v-row>
  </v-container>

</template>

<script setup>
  import PhotoAndDesc from "@/App.vue";
  import groups from "@/stores/photos";
  import {ref} from "vue";

  const imgHeight = ref(384)
  const imgWidth = ref(216)

  resizeImages()

  window.addEventListener('resize', resizeImages)

  function resizeImages() {
    if (window.innerWidth < 768) {
      imgWidth.value = window.innerWidth - 24
      imgHeight.value = imgWidth.value / 16 * 9
    } else {
      imgWidth.value = window.innerWidth * 0.3 - 8
      imgHeight.value = imgWidth.value / 16 * 9
    }
  }
</script>

<style scoped>

.v-container {
  width: 70%;
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

/* Your component's style block or custom CSS file */
.v-hover--active .elevation-2 {
  /* Apply the desired opacity when the image is being hovered */
  opacity: 0.7;
  /* You can add other transition effects if desired */
  transition: opacity 0.3s ease;
}

</style>
