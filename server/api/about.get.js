export default defineEventHandler(() => {
  console.log('接收到 API 請求 /api/about')

  return {
    name: 'Ryan',
    gender: '男',
    email: 'ryanchien8125@gmail.com'
  }
})
