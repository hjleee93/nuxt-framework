<template>
  <div class="content" style="width:100vw;">
    about page
    <button @click="openModal">
      Open Modal
    </button>
  </div>
</template>
<script setup lang="ts">
const title = ref('My App | about page')
const description = ref('about page')


// This will be reactive even you change title/description above
useHead({
  title: title.value,
  meta: [{
    name: 'description',
    content: description.value
  }]
})


function openModal() {
  const { openModal } = useModal();
  openModal()

}



</script>
<style scoped lang="scss">
.content {
  height: calc(100vh - 100px);
}
</style>