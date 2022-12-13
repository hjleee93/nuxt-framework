export default defineEventHandler(async(event) =>{
  const body = await readBody(event)

  let token = getCookie(event, 'token') || ''
  
  setCookie(event, 'token', body.token)
  
  return { token }
})