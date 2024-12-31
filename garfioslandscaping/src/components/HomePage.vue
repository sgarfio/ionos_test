<template>
  <v-carousel continuous cycle>
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script setup>
const items = [
  { src: require("../assets/fountain.jpg") },
  { src: require("../assets/Gazebo1.jpg") },
  { src: require("../assets/grading.jpg") },
  { src: require("../assets/ret_wall.jpg") },
  { src: require("../assets/pavestone2.jpg") },
  { src: require("../assets/mulch.jpg") },
  { src: require("../assets/flagstone.jpg") },
  { src: require("../assets/Gazebo2.jpg") },
  { src: require("../assets/pavestone.jpg") },
  { src: require("../assets/ret_wall2.jpg") },
];
</script>