<template>
  <NuxtLayout name="custom">
    <h4>This is custom layout</h4>
    <Login />
  </NuxtLayout>
</template>
<script setup lang="ts">
definePageMeta({
  layout: false,
  middleware: ["auth"]
});
</script>
