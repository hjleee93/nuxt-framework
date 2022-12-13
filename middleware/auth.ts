export default defineNuxtRouteMiddleware((to, from) => {
   
  const cookie = useCookie('token')

  console.log('cookie', cookie.value)
   

  if (to.meta.requiresAuth && !cookie.value) {
      alert('need login')
      return navigateTo('/login') 
    }
})