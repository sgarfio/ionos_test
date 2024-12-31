<template>
  <div>
    <v-app-bar :elevation="2" color="primary">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>Garfio's Landscaping</v-app-bar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item @click="go('home')">
          <template v-slot:prepend><v-icon>mdi-home</v-icon></template>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item @click="go('services')">
          <template v-slot:prepend><v-icon>mdi-mower-bag</v-icon></template>
          <v-list-item-title>Services</v-list-item-title>
        </v-list-item>
        <v-list-item @click="go('about')">
          <template v-slot:prepend><v-icon>mdi-information-variant</v-icon></template>
          <v-list-item-title>About Us</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const drawer = ref(false);
const router = useRouter();
const go = (location) => {
  drawer.value = false;
  router.push(`/${location}`);
};
</script>
