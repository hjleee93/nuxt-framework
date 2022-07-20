<template>
    <div>
        <Header />
        <slot />
        <Footer />
    </div>
</template>
<script setup lang="ts">
import Header from '~/components/_header.vue';
import Footer from '~/components/_footer.vue';
</script>