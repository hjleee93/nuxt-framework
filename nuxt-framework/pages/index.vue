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
    <div>
      <ul>
        <li>
          <NuxtLink to="/sample">sample page - no auth</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/userInfo">user info page - yes auth</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/user/2">query param page - user/2</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/user-list">user table Page</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import Login from '~/components/_login.vue'
import { useUserStore } from '~/stores/user'
import UserInfo from '~/components/_userInfo.vue'

const title = ref('My App')
const description = ref('My App Description')
const userStore = useUserStore()

useHead({
  title: title.value,
  meta: [{
    name: 'description',
    content: description.value
  }]
})

onMounted(() => {

})
</script>
<style lang="scss">
</style>