<template>
  <NuxtLayout name="custom">
    <h4>This is custom layout</h4>
    <Login />
  </NuxtLayout>
</template>
<script setup lang="ts">
import Login from '~~/components/_login.vue';
definePageMeta({
  layout: false,
  middleware: ["auth"]
});
</script>
