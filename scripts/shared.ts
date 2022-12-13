import { useUserStore } from "~~/stores/user"

export default {
  logout:function () {
    useUserStore().resetUserInfo()
    useUser().initUser()
  },
  deleteCookie: async function () {
    await $fetch('/api/cookie', {
      method:'delete'        
    })
  },
  
}