<template>
  <div>
    <h1>Framework - Nuxt3 </h1>
    <div style="background-color:#ededed;" v-if="!userStore.$state.isLogin">
      <h4>Login component</h4>
      <Login />
    </div>

    <template v-else>
      <UserInfo v-if="userStore.$state.user" :user="userStore.$state.user"></UserInfo>

    </template>
    <button @click="openModal">
      Open Modal
    </button>
    <div style="margin-top:100px">
      <ul>
        <li>
          <NuxtLink to="/sample">sample page - no auth</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/user-info">user info page - yes auth</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/user/2">query param page - user/2</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/user/list">user table Page - simple skeleton ui</NuxtLink>
        </li>
      </ul>
      <div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user'


const title = ref('My App')
const description = ref('My App Description')
const userStore = useUserStore()

const config = useRuntimeConfig();

useHead({
  title: title.value,
  meta: [{
    name: 'description',
    content: description.value
  }]
})

onMounted(() => {
  // console.log(config.public.API_BASE_URL)
})

function openModal() {
  const { openModal } = useModal();
  openModal()

}
</script>
<style lang="scss">
</style>