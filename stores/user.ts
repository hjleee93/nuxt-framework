
import { defineStore } from 'pinia'
import { IUser } from '~~/types';

export const useUserStore = defineStore({

  id: 'user-store',
  state: () => {
    return {
      user: {} as IUser,
      isLogin: false
      
    }
  },
  actions: {
    async setUserInfo() {         
      try {      
         const {data, pending, refresh, error} = await useFetchData('get', 'https://randomuser.me/api')
         const [info] = data.value.results;
          
         const userInfo = {
          nickname: info.name.first,
          email:info.email,
          point:100,
          uid:info.login.uuid,
          profile_img:info.picture.thumbnail
         }  
         
        this.$state.user = userInfo;
        this.$state.isLogin = true

      } catch (err: any) {
        console.error(err)
      }

    },
    resetUserInfo(){
      this.$state.user = {} as IUser
      this.$state.isLogin = false
    }

  },

})
