export default defineEventHandler(async(event) =>{
console.log('delte')

  deleteCookie(event,'token')
  
  return true
})