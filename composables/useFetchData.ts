import { FetchOptions } from "ohmyfetch"
import EX from '~/plugins/example'
import shared from "~~/scripts/shared"

const delay = (ms:number) => new Promise((_) => setTimeout(_, ms))


export const useFetchData = async(method: string, url: string, data = null,  error = false) => {
  if (EX[url]) {
    console.log('[testAPI]', method, url, data, error)
    await delay(1000)
    if (error) {
      if (!EX[url][method].err) EX[url][method].err = { error: true }
      return Promise.reject(EX[url][method].err)
    }
    return Promise.resolve(EX[url][method].res)
  }

  if (method === 'get') {    
    url = url + '?_=' + Date.now()
    if(data) {
      for (let d in data) {
          if (data[d]) url += `&${d}=${data[d]}`
      }
    }    
  }
  
  return await useFetch(url, {
    method:method,  
    body:data
  })


  // return result
  
}


// $fetch interceptor
export const useCustomFetch = async <T>(url: string, options?: FetchOptions, retryCount: number = 0) => {
  return await $fetch<T>(url, {
    ...options,
    async onResponse({ request, response, options }) {
      console.log('[fetch response]')

    },
    async onResponseError({ request, response, options }) {
      console.log('[fetch response error]', response)

      if (retryCount < 3) {
        await useCustomFetch(url, options, ++retryCount)
      } else {
        //3번이상 시도해도 안될시 로그아웃처리
        shared.logout()
        shared.deleteCookie()

      }
    },

    async onRequest({ request, options }) {
      console.log('[fetch request]')
    },
    async onRequestError({ request, options, error }) {
      console.log('[fetch request error]')
    }
  })

}