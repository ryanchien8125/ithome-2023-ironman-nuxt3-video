export default defineEventHandler((event) => {
  setCookie(event, 'access_token', null)

  return 'ok'
})
