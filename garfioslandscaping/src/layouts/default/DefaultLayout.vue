<template>
  <v-app>
    <app-bar />
    <router-view name="default" />
  </v-app>
</template>

<script setup>
  import AppBar from './AppBar.vue'
  import { RouterView } from 'vue-router';
</script>
