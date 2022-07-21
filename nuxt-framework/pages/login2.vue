<template>
  <h4>This is custom layout</h4>
  <Login />
</template>
<script setup lang="ts">
    import Login from '~~/components/_login.vue';
    definePageMeta({
      layout: 'custom',
      middleware: ["auth"]
    });
    </script>
