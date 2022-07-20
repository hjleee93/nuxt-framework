import EX from '~/plugins/example'

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