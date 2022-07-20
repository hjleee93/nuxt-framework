export default defineNuxtRouteMiddleware((to, from) => {
  

  
  const access_token = typeof window.sessionStorage ? sessionStorage.getItem('access_token') : null
    if (to.meta.requiresAuth && !access_token) {
      return navigateTo('/login') 
    }

  // if (to.params.id === '1') {
  //   return abortNavigation()
  // }
  // 
})